import { useQuery } from "@tanstack/react-query";
import type { CategoryResponse } from "~/types";
import { QUERY_KEYS } from "~/constants/reactQueryKeys";
import { getCategories } from "~/api/services/categoryService";

interface UseCategoriesQueryOptions {
  enabled?: boolean;
  onSuccess?: (data: CategoryResponse) => void;
  onError?: (error: Error) => void;
}

export const useCategoryQuery = (options: UseCategoriesQueryOptions = {}) => {
  return useQuery<CategoryResponse, Error>({
    queryKey: [QUERY_KEYS.CATEGORY],
    queryFn: getCategories,
    ...options,
  });
};
