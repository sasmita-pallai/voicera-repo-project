// src/api/auth.ts
import useApi from "../hooks/useApi";

// Define the expected response structure
export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    access_token: string;
    user: {
      id: string;
      username: string;
      email: string;
      role: string;
      is_active: boolean;
      isVerified: boolean;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export const loginUser = (email: string, password: string) => {
  return useApi.post<LoginResponse>("/auth/login", {
    email,
    password,
  });
};

export const forgotPassword = (email: string) => {
  return useApi.post<{ message: string }>("/auth/forgot-password", {
    email,
  });
};

export const resetUserPassword = (email: string, otp: string, newPassword: string) => {
  return useApi.post<{ message: string; success: boolean }>("/auth/reset-password", {
    email,
    otp,
    newPassword,
  });
};
