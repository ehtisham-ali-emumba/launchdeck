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

export const createTour = async (tourData: Omit<Tour, "id">): Promise<Tour> => {
  const response = await apiClient.post<Tour>(apiEndpoints.tours, tourData);
  return response.data;
};

export const updateTour = async (tour: Tour): Promise<Tour> => {
  const response = await apiClient.put<Tour>(
    `${apiEndpoints.tours}/${tour._id}`,
    tour
  );
  return response.data;
};

export const deleteTour = async (id: string): Promise<void> => {
  await apiClient.delete(`${apiEndpoints.tours}/${id}`);
};
