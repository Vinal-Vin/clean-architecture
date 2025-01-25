import api from "./api";

export const fetchUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const fetchUserById = async (id: number) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};
