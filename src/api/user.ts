// src/api/user.ts

import useApi from "../hooks/useApi";

export interface User {
  id: string;
  username: string;
  email: string;
  // Add other fields if needed
}

export const getAllUsers = async (): Promise<User[]> => {
  const response = await useApi.get<{ success: boolean; data: User[] }>("/users");
  return response.data;
};
