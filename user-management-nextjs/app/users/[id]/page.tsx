import { fetchUserById } from "@/services/userService";
import Link from "next/link";

export default async function UserDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userId = parseInt(id, 10);
  if (isNaN(userId)) {
    return (
      <main className="container">
        <h1>User Details</h1>
        <p>Invalid user ID</p>
      </main>
    );
  }

  try {
    const user = await fetchUserById(userId);
    if (!user) {
      return (
        <main className="container">
          <h1>User Details</h1>
          <p>User not found</p>
        </main>
      );
    }

    return (
      <main className="container">
        <h1>User Details</h1>
        
        <div style={{ marginBottom: "2rem" }}>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>First Name:</strong> {user.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Address:</strong> {user.address || "Not provided"}
          </p>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <Link
            href={`/users/${user.id}/edit`}
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#1976d2",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
              display: "inline-block",
            }}
          >
            Edit User
          </Link>
          
          <Link
            href="/users"
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#757575",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
              display: "inline-block",
            }}
          >
            Back to Users
          </Link>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return (
      <main className="container">
        <h1>User Details</h1>
        <p>Unable to load user details. Please ensure the backend API is running.</p>
        <Link href="/users">Back to Users</Link>
      </main>
    );
  }
}
