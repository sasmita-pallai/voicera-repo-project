import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

// Set your API base URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Create a pre-configured Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add Authorization token automatically
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem("authToken");

    if (token) {
      // Safe way to assign Authorization header
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle errors globally (optional)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Define your methods
const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.get(url, config);
  return response.data;
};

const post = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.post(url, data, config);
  return response.data;
};

const put = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.put(url, data, config);
  return response.data;
};

const del = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.delete(url, config);
  return response.data;
};

// Export all as an object
const useApi = {
  get,
  post,
  put,
  delete: del,
};

export default useApi;
