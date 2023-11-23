import React from "react";

const TodoForm = () => {
  const handleSubmit = (e) => {
    console.log("handled submit!");
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
