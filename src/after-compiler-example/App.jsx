'use memo'; // 🚀 enables React Compiler

import { useState } from "react";
import UserCard from "./UserCard";
import Counter from "./Counter";

export default function AfterCompilerExample() {
  const [user, setUser] = useState({ name: "Riya" });
  const [count, setCount] = useState(0);

  console.log("App rendered 🚀");

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      <h2>⚡ After React Compiler</h2>

      <UserCard user={user} />
      <Counter count={count} setCount={setCount} />

      <button
        onClick={() => setUser({ name: "Riya " + Math.floor(Math.random() * 100) })}
      >
        Change User
      </button>
    </div>
  );
}
