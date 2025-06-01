import { useQuery } from "@tanstack/react-query";

import { getTours } from "../../api/services";
import { QUERY_KEYS } from "../../constants/reactQueryKeys";
import type { ToursResponse } from "../../types";

interface UseToursQueryOptions {
  enabled?: boolean;
  onSuccess?: (data: ToursResponse) => void;
  onError?: (error: Error) => void;
}

export const useTourQuery = (options: UseToursQueryOptions = {}) => {
  return useQuery<ToursResponse, Error>({
    queryKey: [QUERY_KEYS.TOURS],
    queryFn: getTours,
    ...options,
  });
};
