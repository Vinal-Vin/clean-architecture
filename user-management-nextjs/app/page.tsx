import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <h1>Welcome to User Management</h1>
      <p>
        <Link href="/users">View Users</Link>
      </p>
    </main>
  );
}
