export default function TodoForm({ todo, setTodo, addTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form todo-div">
      <h2>What's on your mind today?</h2>
      <input
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add task</button>
    </form>
  );
}
