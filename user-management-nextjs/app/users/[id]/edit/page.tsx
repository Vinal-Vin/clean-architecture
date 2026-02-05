import { fetchUserById } from "@/services/userService";
import UserEditForm from "@/components/UserEditForm";
import Link from "next/link";

export default async function EditUser({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userId = parseInt(id, 10);
  
  if (isNaN(userId)) {
    return (
      <main className="container">
        <h1>Edit User</h1>
        <p>Invalid user ID</p>
      </main>
    );
  }

  try {
    const user = await fetchUserById(userId);
    if (!user) {
      return (
        <main className="container">
          <h1>Edit User</h1>
          <p>User not found</p>
        </main>
      );
    }

    return (
      <main>
        <UserEditForm user={user} />
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return (
      <main className="container">
        <h1>Edit User</h1>
        <p>Unable to load user details. Please ensure the backend API is running.</p>
        <Link href="/users">Back to Users</Link>
      </main>
    );
  }
}