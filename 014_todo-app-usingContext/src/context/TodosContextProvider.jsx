import { createContext } from "react";
import React from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function reducer(todos, action) {
  console.log("inside reducer function");
  switch (action.type) {
    case "ADDTODO":
      console.log("added", action, action.payload.id);
      toast.success("🦄 Added New Task!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return [...todos, action.payload.newTodo];

    case "DELETE":
      console.log("deleted", action, action.payload.id);
      toast.success("Task Removed ❌!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return todos.filter((todo) => todo.id !== action.payload.id);

    case "TOGGLECOMPLETED":
      console.log("completed", action, action.payload.id);

      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
  }
  return todos;
}

const initialTodos = [
  { id: "1", title: "Learn Html fundamentals", completed: true },
  { id: "2", title: "Learn Web Dev fundamentals", completed: false },
  { id: "3", title: "Data Structure Algos", completed: true },
  { id: "4", title: "Learn Nodejs ", completed: false },
];

export const TodosContext = createContext();

function TodosContextProvider({ value, children }) {
  // console.log(initialTodos);
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  // console.log(todos);
  // console.log(children, `children`);
  // console.log(value, `values`);

  const addNewTodo = (newTodo) => {
    dispatch({
      type: "ADDTODO",
      payload: { newTodo: newTodo },
    });
  };
  const handleDelete = (id) => {
    console.log("delete Function call");
    dispatch({
      type: "DELETE",
      payload: { id: id },
    });
  };

  const toggleCompleted = (id, completed) => {
    console.log("togglecomplete Function call");

    toast.success(`${completed ? "Task Remaining" : "Task Done"}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch({
      type: "TOGGLECOMPLETED",
      payload: { id: id },
    });
  };

  return (
    <TodosContext.Provider
      value={{
        todos: todos,
        handleDelete,
        toggleCompleted,
        addNewTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export default TodosContextProvider;

export function useTodoContext() {
  return useContext(TodosContext);
}
