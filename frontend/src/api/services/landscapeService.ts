import type { GetLandscapesResponse } from "~/types/landscape";

import { ApiClient } from "../client";
import { apiEndpoints } from "../endpoints";

const apiClient = ApiClient.getAxios();

export const getLandscapes = async ({
  page = 1,
  limit = 16,
}): Promise<GetLandscapesResponse> => {
  const response = await apiClient.get<GetLandscapesResponse>(
    apiEndpoints.landscapes,
    {
      params: { page, limit },
    }
  );
  return response.data;
};
