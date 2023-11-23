import React, { useState } from "react";
import "./index.css";
import TodoForm from "./components/TodoForm";
import TodosDisplay from "./components/TodosDisplay";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Javascript", completed: true },
    { id: 2, title: "Learn Nextjs", completed: false },
    { id: 3, title: "Learn TypeScript", completed: false },
  ]);

  // ?React JS Ways

  const addTodo = (newTodo) => {
    const newTodos = [];
    for (let todo of todos) {
      newTodos.push(todo);
    }
    newTodos.push(newTodo);
    setTodos(newTodos);
  };

  const toggleCompleted = (id) => {
    console.log(id, "toggle Completed");
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const removeTodo = (id) => {
    console.log(id, "removed Todo");

    setTodos((prevState) => {
      return prevState.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        }
      });
    });
  };

  return (
    <div className="container">
      <ToastContainer />
      <h1 className="main-title">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodosDisplay
        todos={todos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
