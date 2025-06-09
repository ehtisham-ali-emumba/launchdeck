import type { AnalyticsData } from "~/types";

import { ApiClient } from "../client";
import { apiEndpoints } from "../endpoints";

const apiClient = ApiClient.getAxios();

export const getAnalyticsData = async (
  query?: string
): Promise<AnalyticsData> => {
  const response = await apiClient.get<AnalyticsData>(
    apiEndpoints.analytics,
    query ? { params: { query } } : {}
  );
  return response.data;
};
