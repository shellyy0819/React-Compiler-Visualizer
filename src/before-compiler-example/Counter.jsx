export default function Counter({ count, setCount }) {
  console.log("🔢 Counter re-rendered");
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
