import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { FixedSizeGrid, FixedSizeGrid as Grid } from "react-window";
import { useInfiniteUsers, type RandomUser } from "~/hooks/useRandomUsers";
import { Loader } from "~/components";
import ErrorContainer from "~/components/ErrorContainer";
import { BlankSlate } from "~/components/BlankSlate";
import { useHandleResize } from "~/hooks/useHandleResize";
import { ContentWrapper } from "~/styles";
import { COLUMN_WIDTH, flattenUsers, gridStyles, ROW_HEIGHT } from "./utils";
import { LandscapeCard } from "./LandscapeCard";
import { LandscapeHeaderBar } from "./LandscapeHeader";
import { Box, Container, GridWrapper, ListContainer } from "./elements";

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
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteUsers();

  const users: RandomUser[] = useMemo(() => flattenUsers(data), [data]);

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

  const rowCount = Math.ceil(users.length / numColumns);
  const handleItemsRendered = useCallback(
    ({ visibleRowStopIndex }: { visibleRowStopIndex: number }) => {
      if (!isFetchingNextPage && visibleRowStopIndex >= rowCount - 1)
        fetchNextPage();
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage, rowCount]
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
    const userIndex = rowIndex * numColumns + columnIndex;
    const user = users[userIndex];
    if (!user) return null;
    return (
      <div style={style}>
        <LandscapeCard
          key={user.login.uuid}
          imageSrc={user.picture.large}
          fullName={`${user.name.first} ${user.name.last}`}
          userName={user.login.username}
          email={user.email}
          phone={user.phone}
          country={user.location.country}
          city={user.location.city}
        />
      </div>
    );
  };

  return (
    <Container>
      <ContentWrapper>
        <Box>
          <LandscapeHeaderBar />
          <ListContainer ref={gridContainerRef}>
            {isLoading && !users.length ? (
              <Loader />
            ) : isError ? (
              <ErrorContainer message={`Error: ${(error as Error).message}`} />
            ) : users.length ? (
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
                {isFetchingNextPage && <Loader paddingTop={"0px"} />}
              </>
            ) : (
              !isLoading && !users.length && <BlankSlate />
            )}
          </ListContainer>
        </Box>
      </ContentWrapper>
    </Container>
  );
};
