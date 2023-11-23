import React from "react";
import Todo from "./Todo";

const TodosDisplay = ({ todos, toggleCompleted }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} toggleCompleted={toggleCompleted} />
      ))}
    </div>
  );
};

export default TodosDisplay;
