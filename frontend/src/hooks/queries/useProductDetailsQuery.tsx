import { useQuery } from "@tanstack/react-query";
import type { Product, ToursResponse } from "../../types";
import { QUERY_KEYS } from "../../constants/reactQueryKeys";
import { getProductById } from "../../api/services";

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
