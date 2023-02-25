import React from "react";

export default function AddTodo({ setTodos }) {
  function handleSubmit(event) {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    setTodos((prev) => [...prev, todo]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
}
