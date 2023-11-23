import React, { useState } from "react";
import "./index.css";
import TodoForm from "./components/TodoForm";
import TodosDisplay from "./components/TodosDisplay";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Javascript", completed: true },
    { id: 2, title: "Learn Nextjs", completed: false },
    { id: 3, title: "Learn TypeScript", completed: false },
  ]);
  return (
    <div>
      <h1 className="main-title">Todo List</h1>
      {/* todoForm */} <TodoForm />
      {/* todosDisplays */} <TodosDisplay todos={todos} />
    </div>
  );
}

export default App;
