import { useState, useReducer } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import DisplayTodos from "./components/DisplayTodos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function reducer(todos, action) {
  console.log("inside reducer function");
  switch (action.type) {
    case "ADDTODO":
      console.log("added", action, action.payload.id);

      return [...todos, action.payload.newTodo];
      break;

    case "DELETE":
      console.log("deleted", action, action.payload.id);

      return todos.filter((todo) => todo.id !== action.payload.id);
      break;

    case "TOGGLECOMPLETED":
      console.log("completed", action, action.payload.id);

      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });

      break;
  }
  return todos;
}

const initialTodos = [
  { id: "1", title: "Learn Html fundamentals", completed: true },
  { id: "2", title: "Learn Web Dev fundamentals", completed: false },
  { id: "3", title: "Data Structure Algos", completed: true },
  { id: "4", title: "Learn Nodejs ", completed: false },
];

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <div className="container">
      <ToastContainer />
      <h1 className="main-title">Todo List</h1>
      <AddTodoForm dispatch={dispatch} />
      <DisplayTodos todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
