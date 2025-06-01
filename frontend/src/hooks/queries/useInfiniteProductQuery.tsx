import { useInfiniteQuery } from "@tanstack/react-query";

import { getProducts } from "../../api/services";
import { QUERY_KEYS } from "../../constants/reactQueryKeys";
import type { GetProductsResponse } from "../../types";

interface QueryOptions {
  enabled?: boolean;
  onSuccess?: (data: GetProductsResponse[]) => void;
  onError?: (error: Error) => void;
  limit?: number;
  categoryId?: string;
}

const getNextPageParam = (lastPage: GetProductsResponse) => {
  if (lastPage.page < lastPage.totalPages) {
    return lastPage.page + 1;
  }
  return undefined;
};

export const useInfiniteProductQuery = (options: QueryOptions = {}) => {
  const { limit = 16, categoryId, enabled = true, ...restOptions } = options;

  return useInfiniteQuery<GetProductsResponse, Error>({
    queryKey: [QUERY_KEYS.PRODUCTS, limit, categoryId],
    queryFn: ({ pageParam = 1 }) =>
      getProducts({ page: pageParam as number, limit, categoryId }),
    getNextPageParam: getNextPageParam,
    initialPageParam: 1,
    enabled,
    ...restOptions,
  });
};
