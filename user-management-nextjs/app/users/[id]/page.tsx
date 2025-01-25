import { fetchUserById } from "@/services/userService";

export default async function UserDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userId = parseInt(id, 10);
  if (isNaN(userId)) {
    return (
      <main>
        <h1>User Details</h1>
        <p>Invalid user ID</p>
      </main>
    );
  }

  const user = await fetchUserById(userId);
  if (!user) {
    return (
      <main>
        <h1>User Details</h1>
        <p>User not found</p>
      </main>
    );
  }

  return (
    <main>
      <h1>User Details</h1>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </main>
  );
}
