import { useInfiniteQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/reactQueryKeys";
import { getLandscapes } from "~/api/services/landscapeService";
import type { GetLandscapesResponse } from "~/types/landscape";

interface QueryOptions {
  enabled?: boolean;
  onSuccess?: (data: GetLandscapesResponse[]) => void;
  onError?: (error: Error) => void;
  limit?: number;
}

const getNextPageParam = (lastPage: GetLandscapesResponse) => {
  if (lastPage.page < lastPage.totalPages) {
    return lastPage.page + 1;
  }
  return undefined;
};
export const useLandscapeQuery = (options: QueryOptions = {}) => {
  const { limit = 16, enabled = true, ...restOptions } = options;

  return useInfiniteQuery<GetLandscapesResponse, Error>({
    queryKey: [QUERY_KEYS.LANDSCAPES, limit],
    queryFn: ({ pageParam = 1 }) =>
      getLandscapes({ page: pageParam as number, limit }),
    getNextPageParam: getNextPageParam,
    initialPageParam: 1,
    enabled,
    ...restOptions,
  });
};
