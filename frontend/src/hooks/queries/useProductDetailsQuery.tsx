import { useQuery } from "@tanstack/react-query";

import { getProductById } from "../../api/services";
import { QUERY_KEYS } from "../../constants/reactQueryKeys";
import type { Product, ToursResponse } from "../../types";

interface QueryOptions {
  enabled?: boolean;
  onSuccess?: (data: ToursResponse) => void;
  onError?: (error: Error) => void;
  productId: string;
}

export const useProductDetailsQuery = (options: QueryOptions) => {
  const { productId } = options;
  return useQuery<Product, Error>({
    queryKey: [QUERY_KEYS.PRODUCTS, productId],
    queryFn: () => getProductById(productId),
    enabled: true,
    ...options,
  });
};
