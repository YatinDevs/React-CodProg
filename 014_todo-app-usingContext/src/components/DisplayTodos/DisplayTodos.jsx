import React from "react";
import { useTodoContext } from "../../context/TodosContextProvider";
import Todos from "../Todos/Todos";
import "../../index.css";

function DisplayTodos() {
  const { todos, dispatch } = useTodoContext();
  return (
    <div>{todos && todos.map((todo) => <Todos key={todo.id} {...todo} />)}</div>
  );
}

export default DisplayTodos;
