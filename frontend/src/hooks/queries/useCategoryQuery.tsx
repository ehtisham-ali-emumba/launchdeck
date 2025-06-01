import { useQuery } from "@tanstack/react-query";

import { getCategories } from "~/api/services/categoryService";
import { QUERY_KEYS } from "~/constants/reactQueryKeys";
import type { CategoryResponse } from "~/types";

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
