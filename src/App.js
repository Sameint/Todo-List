import "./styles.css";
import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoCount from "./TodoCount";

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div id="main">
      <TodoCount todos={todos} />
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}
