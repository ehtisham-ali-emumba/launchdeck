import type { GetProductsResponse, Product } from "../../types";
import { ApiClient } from "../client";
import { apiEndpoints } from "../endpoints";

const apiClient = ApiClient.getAxios();

type GetProductDataType = {
  page?: number;
  limit?: number;
  categoryId?: string;
};

export const getProducts = async ({
  page = 1,
  limit = 16,
  categoryId,
}: GetProductDataType): Promise<GetProductsResponse> => {
  const response = await apiClient.get<GetProductsResponse>(
    apiEndpoints.products,
    {
      params: { page, limit, categoryId },
    }
  );
  return response.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await apiClient.get<Product>(
    `${apiEndpoints.products}/${id}`
  );
  return response.data;
};

export const createProduct = async (
  productData: Omit<Product, "id">
): Promise<Product> => {
  const response = await apiClient.post<Product>(
    apiEndpoints.products,
    productData
  );
  return response.data;
};
