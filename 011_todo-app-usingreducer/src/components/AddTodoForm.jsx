import React from "react";
import { toast } from "react-toastify";
import { useState } from "react";
function AddTodoForm({ dispatch }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form Submitted.");
    if (title.trim().length === 0) {
      toast.error("Please Fill Input", { autoClose: 2000 });
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    dispatch({
      type: "ADDTODO",
      payload: { newTodo: newTodo },
    });
    setTitle("");
  };
  return (
    <div>
      <form className="todoForm" onSubmit={handleSubmit}>
        <input
          className="todoForm_input"
          type="text"
          value={title}
          placeholder="Add Todo"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="todoForm_Btn">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
