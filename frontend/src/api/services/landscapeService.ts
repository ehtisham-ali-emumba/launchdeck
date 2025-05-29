import type { GetLandscapesResponse, Landscape } from "~/types/landscape";
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

export const getLandscapeById = async (id: string): Promise<Landscape> => {
  const response = await apiClient.get<Landscape>(
    `${apiEndpoints.landscapes}/${id}`
  );
  return response.data;
};

export const createLandscape = async (
  landscapeData: Omit<Landscape, "id">
): Promise<Landscape> => {
  const response = await apiClient.post<Landscape>(
    apiEndpoints.landscapes,
    landscapeData
  );
  return response.data;
};
