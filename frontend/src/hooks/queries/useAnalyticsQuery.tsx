import { useQuery } from "@tanstack/react-query";

import type { AnalyticsData } from "~/types";

import { getAnalyticsData } from "../../api/services";
import { QUERY_KEYS } from "../../constants/reactQueryKeys";

interface AnalyticsQueryOptions {
  enabled?: boolean;
  query?: string;
  onSuccess?: (data: AnalyticsData) => void;
  onError?: (error: Error) => void;
}

export const useAnalyticsQuery = (options: AnalyticsQueryOptions = {}) => {
  const { query, ...restOptions } = options;

  return useQuery<AnalyticsData, Error>({
    queryKey: [QUERY_KEYS.ANALYTICS, query],
    queryFn: () => getAnalyticsData(query),
    enabled: true,
    ...restOptions,
  });
};
