import { fetchUsers } from "@/services/userService";
import UserList from "@/components/UserList";

export default async function UsersPage() {
  try {
    const users = await fetchUsers();
    return (
      <main className="container">
        <h1>User List</h1>
        <UserList users={users} />
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return (
      <main className="container">
        <h1>User List</h1>
        <p>Unable to load users. Please ensure the backend API is running.</p>
      </main>
    );
  }
}
