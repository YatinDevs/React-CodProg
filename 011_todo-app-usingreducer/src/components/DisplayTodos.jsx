import React from "react";
import Todos from "./Todos";
function DisplayTodos({ todos, dispatch }) {
  console.log(todos);
  return (
    <ul>
      {/* {todos.map((todo) => (
        <Todos {...todo} key={todo.id} dispatch={dispatch} />
      ))} */}
    </ul>
  );
}

export default DisplayTodos;
