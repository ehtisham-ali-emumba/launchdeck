import { useQuery } from "@tanstack/react-query";
import type { ToursResponse } from "../../types";
import { QUERY_KEYS } from "../../constants/reactQueryKeys";
import { getTours } from "../../api/services";

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
