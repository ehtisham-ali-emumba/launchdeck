import axios, { type AxiosInstance } from "axios";

const headers = {
  "Content-Type": "application/json",
};

export class ApiClient {
  private static _singleton: ApiClient | null = null;
  private static _axiosInstance: AxiosInstance;

  constructor() {
    // Return the existing singleton if it exists
    if (ApiClient._singleton) return ApiClient._singleton;

    const DEFAULT_API_URL =
      import.meta.env.VITE_APP_API_BASE_URL || "http://localhost:3003/api";

    ApiClient._axiosInstance = axios.create({
      baseURL: DEFAULT_API_URL,
      headers,
    });

    // Store this instance as the singleton
    ApiClient._singleton = this;
  }

  public static getAxios(): AxiosInstance {
    if (!ApiClient._axiosInstance) new ApiClient();
    return ApiClient._axiosInstance;
  }
}
