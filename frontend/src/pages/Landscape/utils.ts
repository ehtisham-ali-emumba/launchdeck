import type { RandomUser } from "../../hooks/useRandomUsers";
import type { InfiniteUsersData } from "./type";

export const COLUMN_WIDTH = 300;
export const ROW_HEIGHT = 370;
export const gridStyles = {
  overflowX: "hidden",
  padding: "0 5px",
} as const;
export const inputStyles = { maxWidth: "320px" } as const;
export function filterUsers(users: RandomUser[], search: string): RandomUser[] {
  if (!search) return users;
  const lowerSearch = search.toLowerCase();
  return users.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    return (
      fullName.includes(lowerSearch) ||
      user.login.username.includes(lowerSearch) ||
      user.email.toLowerCase().includes(lowerSearch)
    );
  });
}

export function flattenUsers(data?: InfiniteUsersData): RandomUser[] {
  return data ? data.pages.flatMap((page) => page.users) : [];
}
