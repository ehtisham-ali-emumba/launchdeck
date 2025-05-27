import React, { memo, useEffect, useRef, useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import { BlankSlate } from "../../../components/BlankSlate";
import { GridWrapper, ListContainer } from "./elements";
import { useHandleResize } from "../../../hooks/useHandleResize";
import { uiStrings } from "../../../constants";
import type { BrandGridProps } from "./type";
import { COLUMN_WIDTH, gridStyles, ROW_HEIGHT } from "./utils";
import { BrandCard } from "../common/BrandCard";

export const BrandsGrid = memo(
  ({ handleEditClick, handleDeleteClick, brands }: BrandGridProps) => {
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

    const rowCount = Math.ceil(brands.length / numColumns);

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
      const brand = brands[userIndex];
      if (!brand) return null;

      return (
        <div style={style}>
          <BrandCard
            id={brand.id}
            name={brand.name}
            imageSrc={brand.logoUrl}
            description={brand.description}
            onEditClick={(brandId) => handleEditClick(brandId)}
            onDeleteClick={(id) => handleDeleteClick(id)}
          />
        </div>
      );
    };

    return (
      <ListContainer ref={gridContainerRef}>
        {brands.length ? (
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
          <BlankSlate message={uiStrings.brandNotFound} />
        )}
      </ListContainer>
    );
  }
);
