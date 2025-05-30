import type { CategoryResponse } from "../../types";
import { ApiClient } from "../client";
import { apiEndpoints } from "../endpoints";

const apiClient = ApiClient.getAxios();

export const getCategories = async (): Promise<CategoryResponse> => {
  const response = await apiClient.get<CategoryResponse>(
    apiEndpoints.categories
  );
  return response.data;
};
