export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  name: string; // Computed property from backend
}

export interface UpdateUserData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}