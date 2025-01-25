import { fetchUsers } from "@/services/userService";
import UserList from "@/components/UserList";

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <main>
      <h1>User List</h1>
      <UserList users={users} />
    </main>
  );
}
