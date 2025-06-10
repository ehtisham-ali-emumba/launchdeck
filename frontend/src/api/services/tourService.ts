import type { Tour, ToursResponse } from "../../types";
import { ApiClient } from "../client";
import { apiEndpoints } from "../endpoints";

const apiClient = ApiClient.getAxios();

export const getTours = async (): Promise<ToursResponse> => {
  const response = await apiClient.get<ToursResponse>(apiEndpoints.tours);
  return response.data;
};

export const getTourById = async (id: string): Promise<Tour> => {
  const response = await apiClient.get<Tour>(`${apiEndpoints.tours}/${id}`);
  return response.data;
};
