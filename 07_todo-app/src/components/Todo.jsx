import React from "react";

const Todo = ({ title, completed, id }) => {
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
      <p> Status : {completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
};

export default Todo;
