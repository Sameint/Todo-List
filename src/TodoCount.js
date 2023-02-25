import React from "react";

export default function TodoCount({ todos }) {
  return <h3>Total Todos: {todos.length}</h3>;
}
