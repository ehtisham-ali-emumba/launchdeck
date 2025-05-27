import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import { BlankSlate } from "../../../components/BlankSlate";
import { GridWrapper, ListContainer } from "./elements";
import { useHandleResize } from "../../../hooks/useHandleResize";
import { useParams } from "react-router-dom";
import {
  COLUMN_WIDTH,
  filterAutosByBrandId,
  gridStyles,
  ROW_HEIGHT,
} from "./utils";
import { uiStrings } from "../../../constants";
import type { CarGridProps } from "./type";
import { AutoCard } from "../common/AutoCard";

export const CarGrid = memo(
  ({ handleEditClick, handleDeleteClick, autos }: CarGridProps) => {
    const { brandId } = useParams<{ brandId: string }>();

    const filteredAutos = useMemo(
      () => filterAutosByBrandId(autos, Number(brandId)),
      [autos, brandId]
    );

    const [numColumns, setNumColumns] = useState(1);
    const [gridHeight, setGridHeight] = useState(580);

    const gridContainerRef = useRef<HTMLDivElement>(null);

    const handleResize = () => {
      if (gridContainerRef.current) {
        const width = gridContainerRef.current.offsetWidth;
        setNumColumns(Math.max(1, Math.floor(width / COLUMN_WIDTH)));
        const height = gridContainerRef.current.offsetHeight;
        setGridHeight(height - 8);
      }
    };

    useHandleResize(handleResize);
    useEffect(handleResize, []);

    const rowCount = Math.ceil(filteredAutos.length / numColumns);

    const Cell = ({
      columnIndex,
      rowIndex,
      style,
    }: {
      columnIndex: number;
      rowIndex: number;
      style: React.CSSProperties;
    }) => {
      const userIndex = rowIndex * numColumns + columnIndex;
      const auto = filteredAutos[userIndex];
      if (!auto) return null;

      return (
        <div style={style}>
          <AutoCard
            id={auto.id}
            brandId={auto.brandId}
            name={auto.name}
            modelYear={auto.modelYear}
            price={auto.price}
            engine={auto.engine}
            fuelType={auto.fuelType}
            color={auto.color}
            imageSrc={auto.imageSrc}
            description={auto.description}
            chipText={auto?.chipText}
            onEditClick={(carId) => handleEditClick(carId)}
            onDeleteClick={(id) => handleDeleteClick(id)}
          />
        </div>
      );
    };

    return (
      <ListContainer ref={gridContainerRef}>
        {filteredAutos.length ? (
          <GridWrapper width={numColumns * COLUMN_WIDTH}>
            <Grid
              columnCount={numColumns}
              columnWidth={COLUMN_WIDTH}
              height={gridHeight}
              rowCount={rowCount}
              rowHeight={ROW_HEIGHT}
              width={numColumns * COLUMN_WIDTH}
              style={gridStyles}
            >
              {Cell}
            </Grid>
          </GridWrapper>
        ) : (
          <BlankSlate message={uiStrings.noCarsMessage} />
        )}
      </ListContainer>
    );
  }
);
