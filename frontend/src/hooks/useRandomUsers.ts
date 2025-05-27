import { useInfiniteQuery } from "@tanstack/react-query";
import { getRandomUsers } from "../api/services/randomUserService";
import { QUERY_KEYS } from "../constants/reactQueryKeys";

export const useInfiniteUsers = () =>
  useInfiniteQuery<{ users: RandomUser[]; nextPage: number }, Error>({
    queryKey: [QUERY_KEYS.RANDOM_USERS],
    queryFn: ({ pageParam = 1 }) =>
      getRandomUsers({ page: pageParam as number }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  });

export type RandomUser = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string | number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};
