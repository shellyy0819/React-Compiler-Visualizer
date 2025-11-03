'use memo';
import { useRenderCount } from "../utils/compiler";

 // Compiler analyzes dependencies

export default function UserCard({ user }) {
  console.log("🧍 UserCard re-rendered");
  useRenderCount("UserCard");
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>User: {user.name}</h3>
    </div>
  );
}
