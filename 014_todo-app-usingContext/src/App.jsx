import { useState, useReducer } from "react";
import "./App.css";
import AddTodoForm from "../src/components/AddTodoForm/AddTodoForm";
import DisplayTodos from "../src/components/DisplayTodos/DisplayTodos";
import TodosContextProvider from "./context/TodosContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyComponent from "./components/ReactPortal/MyComponent";

function App() {
  return (
    <TodosContextProvider>
      <div className="container">
        <ToastContainer />
        <h1 className="main-title">Todo List</h1>
        <AddTodoForm />
        <DisplayTodos />
      </div>
      <MyComponent />
    </TodosContextProvider>
  );
}

export default App;
