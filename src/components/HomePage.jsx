import TodoList from "./TodoList";

export default function HomePage() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#191b1f",
      }}
    >
      <TodoList />
    </div>
  );
}
