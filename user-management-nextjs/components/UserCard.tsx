import Link from "next/link";
import { User } from "@/types/user";

export default function UserCard({ user }: { user: User }) {
  return (
    <div
      style={{
        marginBottom: "1rem",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      {user.address && <p><strong>Address:</strong> {user.address}</p>}
      <Link href={`/users/${user.id}`}>View Details</Link>
    </div>
  );
}
