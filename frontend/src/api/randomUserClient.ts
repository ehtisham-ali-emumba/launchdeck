import axios from "axios";

export const randomUserClient = axios.create({
  baseURL: import.meta.env.VITE_APP_USER_RANDOM_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
