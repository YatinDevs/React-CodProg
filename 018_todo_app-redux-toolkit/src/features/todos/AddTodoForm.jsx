import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo } from "./todosSlice";

function AddTodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title: title,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
  };
  return (
    <div>
      <form className="todoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="todoForm_Btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
