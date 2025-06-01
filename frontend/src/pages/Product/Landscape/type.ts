import type { RandomUser } from "~/types";

export type InfiniteUsersData = {
  pages: { users: RandomUser[] }[];
};
