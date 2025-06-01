import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";

import { FixedSizeGrid, FixedSizeGrid as Grid } from "react-window";

import { Loader } from "~/components";
import { BlankSlate } from "~/components/BlankSlate";
import ErrorContainer from "~/components/ErrorContainer";
import { uiStrings } from "~/constants";
import { useLandscapeQuery } from "~/hooks/queries";
import { useHandleResize } from "~/hooks/useHandleResize";
import { ContentWrapper } from "~/styles";

import { Box, Container, GridWrapper, ListContainer } from "./elements";
import { LandscapeCard } from "./LandscapeCard";
import { LandscapeHeaderBar } from "./LandscapeHeader";
import { COLUMN_WIDTH, gridStyles, ROW_HEIGHT } from "./utils";


export const LandscapePage = () => {
  const listRef = useRef<FixedSizeGrid>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const [numColumns, setNumColumns] = useState(1);
  const [gridHeight, setGridHeight] = useState(580);

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useLandscapeQuery({
    limit: 16,
  });

  // Derived state
  const landscapes = useMemo(() => {
    return data?.pages.flatMap(page => page.data) || [];
  }, [data]);

  const totalCount = data?.pages[0]?.total || 0;
  const rowCount = Math.ceil(landscapes.length / numColumns);

  const handleResize = () => {
    if (gridContainerRef.current) {
      const width = gridContainerRef.current.offsetWidth;
      setNumColumns(Math.max(1, Math.floor(width / COLUMN_WIDTH)));
      const height = gridContainerRef.current.offsetHeight;
      setGridHeight(height - 60);
    }
  };

  useHandleResize(handleResize);
  useEffect(handleResize, []);

  const handleItemsRendered = useCallback(
    ({ visibleRowStopIndex }: { visibleRowStopIndex: number }) => {
      // Load more data when reaching near the end and there's more data available
      const threshold = Math.max(1, rowCount - 1); // Load when 2 rows from bottom

      if (
        visibleRowStopIndex >= threshold &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    },
    [rowCount, hasNextPage, isFetchingNextPage, fetchNextPage]
  );

  const Cell = ({
    columnIndex,
    rowIndex,
    style,
  }: {
    columnIndex: number;
    rowIndex: number;
    style: React.CSSProperties;
  }) => {
    const landscapeIndex = rowIndex * numColumns + columnIndex;
    const landscape = landscapes[landscapeIndex];

    if (!landscape) return null;

    return (
      <div style={style}>
        <LandscapeCard landscape={landscape} />
      </div>
    );
  };

  const isInitialLoading = isLoading && !landscapes.length;
  const hasData = landscapes.length > 0;
  const isEmptyState = !isLoading && !isFetchingNextPage && !hasData;
  const showEndMessage = !hasNextPage && hasData;
  const showLoadingMore = isFetchingNextPage && hasData;

  return (
    <Container>
      <ContentWrapper>
        <Box>
          <LandscapeHeaderBar />
          <ListContainer ref={gridContainerRef}>
            {isInitialLoading ? (
              <Loader />
            ) : isError ? (
              <ErrorContainer message={`Error: ${(error as Error).message}`} />
            ) : hasData ? (
              <>
                <GridWrapper width={numColumns * COLUMN_WIDTH}>
                  <Grid
                    columnCount={numColumns}
                    columnWidth={COLUMN_WIDTH}
                    height={gridHeight}
                    rowCount={rowCount}
                    rowHeight={ROW_HEIGHT}
                    width={numColumns * COLUMN_WIDTH}
                    ref={listRef}
                    style={gridStyles}
                    onItemsRendered={handleItemsRendered}
                  >
                    {Cell}
                  </Grid>
                </GridWrapper>
              </>
            ) : (
              isEmptyState && <BlankSlate />
            )}

            {showEndMessage && (
              <div
                style={{
                  padding: "20px",
                  textAlign: "center",
                  color: "#8c8c8c",
                  fontSize: "14px",
                }}
              >
                {uiStrings.allLandscapesLoaded(totalCount)}
              </div>
            )}

            {showLoadingMore && <Loader paddingTop={"10px"} />}
          </ListContainer>
        </Box>
      </ContentWrapper>
    </Container>
  );
};
