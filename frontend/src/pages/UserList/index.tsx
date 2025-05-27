import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { FixedSizeGrid, FixedSizeGrid as Grid } from "react-window";
import { useInfiniteUsers, type RandomUser } from "../../hooks/useRandomUsers";
import { Input, Loader, Spacer } from "../../components";
import ErrorContainer from "../../components/ErrorContainer";
import { BlankSlate } from "../../components/BlankSlate";
import { uiStrings } from "../../constants/uiStrings";
import {
  Box,
  Container,
  InputContainer,
  GridWrapper,
  ListContainer,
} from "./elements";
import { useHandleResize } from "../../hooks/useHandleResize";
import { debounce } from "../../utils/appUtils";
import { UserDetailsModal } from "./UserDetailsModal";
import {
  COLUMN_WIDTH,
  filterUsers,
  flattenUsers,
  gridStyles,
  inputStyles,
  ROW_HEIGHT,
} from "./utils";
import { UserCard } from "./UserCard";

export const UserList = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<RandomUser | null>(null);
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
  const filteredUsers = useMemo(
    () => filterUsers(users, debouncedSearch),
    [users, debouncedSearch]
  );

  const debouncedCallback = useMemo(() => {
    return debounce<(value: string) => void>((value: string) => {
      setDebouncedSearch(value);
    }, 300);
  }, []);
  useEffect(() => {
    debouncedCallback(search);
  }, [search]);

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

  const rowCount = Math.ceil(filteredUsers.length / numColumns);
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
    const user = filteredUsers[userIndex];
    if (!user) return null;
    return (
      <div style={style}>
        <UserCard
          key={user.login.uuid}
          imageSrc={user.picture.large}
          fullName={`${user.name.first} ${user.name.last}`}
          userName={user.login.username}
          email={user.email}
          phone={user.phone}
          country={user.location.country}
          city={user.location.city}
          onClick={() => setSelectedUser(user)}
        />
      </div>
    );
  };

  return (
    <Container>
      <Box>
        <Spacer marginTop="90px" />
        <InputContainer>
          <Input
            inputProps={{
              placeholder: uiStrings.searchPlaceholder,
              style: inputStyles,
              value: search,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value),
            }}
          />
        </InputContainer>
        <ListContainer ref={gridContainerRef}>
          {isLoading && !filteredUsers.length ? (
            <Loader />
          ) : isError ? (
            <ErrorContainer message={`Error: ${(error as Error).message}`} />
          ) : filteredUsers.length ? (
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
            !isLoading && !filteredUsers.length && <BlankSlate />
          )}
        </ListContainer>
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      </Box>
    </Container>
  );
};
