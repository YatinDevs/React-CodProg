import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  return (
    <div className="container">
      <h1 className="main-title">Todo App</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default TodoApp;
