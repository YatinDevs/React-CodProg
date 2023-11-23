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

  const addTodo = (newTodo) => {
    console.log("newTodo added!");
    console.log(newTodo);
    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
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
  // const toggleCompleted = (id) => {
  //   console.log(id, "toggle Completed");

  //   const newTodos = [];
  //   for (let todo of todos) {
  //     if (todo.id === id) {
  //       newTodos.push({ ...todo, completed: !todo.completed });
  //     } else {
  //       newTodos.push(todo);
  //     }
  //   }
  //   setTodos(newTodos);
  // };
  return (
    <div>
      <h1 className="main-title">Todo List</h1>
      {/* todoForm */} <TodoForm addTodo={addTodo} />
      {/* todosDisplays */}{" "}
      <TodosDisplay todos={todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;
