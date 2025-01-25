export default function UserCard({
  user,
}: {
  user: { id: number; name: string };
}) {
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
      <a href={`/users/${user.id}`}>View Details</a>
    </div>
  );
}
