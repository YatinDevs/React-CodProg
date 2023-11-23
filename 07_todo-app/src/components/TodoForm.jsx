import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import { toast } from "react-toastify";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    console.log("handled submit!", title);
    e.preventDefault();
    if (title.trim().length === 0) {
      toast.error("Please Fill Input", { autoClose: 2000 });
      return;
    }
    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };
    addTodo(newTodo);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todoForm">
        <input
          className="todoForm_input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="todoForm_Btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
