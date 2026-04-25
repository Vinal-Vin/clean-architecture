import api from "./api";

export const fetchUsers = async () => {
  const response = await api.get("/api/Users");
  return response.data;
};

export const fetchUserById = async (id: number) => {
  const response = await api.get(`/api/Users/${id}`);
  return response.data;
};
