import React from "react";

const Todo = ({ title, completed, id, toggleCompleted }) => {
  return (
    <div
      style={{
        border: "2px solid #242424",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <p> Id : {id}</p>
      <p> Title : {title}</p>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          toggleCompleted(id);
        }}
      />
    </div>
  );
};

export default Todo;
