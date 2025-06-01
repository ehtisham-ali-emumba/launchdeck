import { useQuery } from "@tanstack/react-query";

import { getTourById } from "../../api/services";
import { QUERY_KEYS } from "../../constants/reactQueryKeys";
import type { Tour } from "../../types";

interface UseToursQueryOptions {
  enabled?: boolean;
  onSuccess?: (data: Tour) => void;
  onError?: (error: Error) => void;
}

export const useTourQueryById = (
  id: string,
  options: UseToursQueryOptions = {}
) => {
  return useQuery<Tour, Error>({
    queryKey: [QUERY_KEYS.TOUR_BY_ID, id],
    queryFn: () => getTourById(id),
    enabled: !!id,
    ...options,
  });
};
