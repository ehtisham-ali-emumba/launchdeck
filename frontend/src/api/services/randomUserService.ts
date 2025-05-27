import { randomUserClient } from "../randomUserClient";

export const getRandomUsers = async ({ page }: { page: number }) => {
  const res = await randomUserClient.get("/", {
    params: {
      page,
      results: 50,
    },
  });
  const users = res.data.results;
  const pageParam = res.data.info.page;
  return { users, nextPage: pageParam + 1 };
};
