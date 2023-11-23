import React from "react";
import Todo from "./Todo";

const TodosDisplay = ({ todos, toggleCompleted, removeTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodosDisplay;
