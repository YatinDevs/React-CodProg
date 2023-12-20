import React from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import { useTodoContext } from "../../context/TodosContextProvider";
import "../../index.css";

function AddTodoForm() {
  const [title, setTitle] = useState("");
  const { todos, addNewTodo } = useTodoContext();

  //   console.log(todos, dispatch, `todoForm Comp`);

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
    addNewTodo(newTodo);
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
