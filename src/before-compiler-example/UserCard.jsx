export default function UserCard({ user }) {
  console.log("🧍 UserCard re-rendered");
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>User: {user.name}</h3>
    </div>
  );
}
