import React from "react";
import Todo from "./Todo";

const TodosDisplay = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodosDisplay;
