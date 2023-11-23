import React from "react";

const Todo = ({ title, completed, id }) => {
  return (
    <div>
      <p> Title : {title}</p>
      <p> Status : {completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
};

export default Todo;
