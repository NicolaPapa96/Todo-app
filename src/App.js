import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Quote from "./components/Quote";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todos.includes(todo)) {
      setTodo("");
      return;
    }
    if (todo !== null && todo.length > 0) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const removeTodo = (value) => {
    const newTodos = todos.filter((todo) => {
      return todo !== value;
    });
    setTodos(newTodos);
  };

  return (
    <div className="bg-image">
      <div className="todo-container">
        <TodoForm todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList list={todos} remove={removeTodo} />
      </div>
      <Quote />
    </div>
  );
}

export default App;
