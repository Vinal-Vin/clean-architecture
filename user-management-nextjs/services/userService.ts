import api from "./api";
import { User, UpdateUserData } from "@/types/user";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get("/users");
  return response.data;
};

export const fetchUserById = async (id: number): Promise<User> => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const updateUser = async (id: number, userData: UpdateUserData): Promise<User> => {
  const response = await api.put(`/users/${id}`, userData);
  return response.data;
};
