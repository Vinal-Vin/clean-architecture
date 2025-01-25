import UserCard from "./UserCard";

export default function UserList({
  users,
}: {
  users: Array<{ id: number; name: string }>;
}) {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
