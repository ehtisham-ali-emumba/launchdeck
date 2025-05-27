import type { RandomUser } from "../../hooks/useRandomUsers";

export type InfiniteUsersData = {
  pages: { users: RandomUser[] }[];
};
