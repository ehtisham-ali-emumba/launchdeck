import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../../api/services";
import { QUERY_KEYS } from "../../constants/reactQueryKeys";
import type { GetProductsResponse, ToursResponse } from "../../types";

interface QueryOptions {
  enabled?: boolean;
  onSuccess?: (data: ToursResponse) => void;
  onError?: (error: Error) => void;
  page?: number;
  limit?: number;
}

export const useProductQuery = (options: QueryOptions = {}) => {
  const { page, limit } = options;
  return useQuery<GetProductsResponse, Error>({
    queryKey: [QUERY_KEYS.PRODUCTS, page, limit],
    queryFn: () => getProducts({ page, limit }),
    ...options,
  });
};
