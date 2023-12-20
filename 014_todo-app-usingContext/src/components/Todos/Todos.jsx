import React from "react";
import "../../index.css";
import { ImCross } from "react-icons/im";
import { useTodoContext } from "../../context/TodosContextProvider";
import { toast } from "react-toastify";

function Todos({ id, title, completed }) {
  const { dispatch, handleDelete, toggleCompleted } = useTodoContext();

  return (
    <div className="todo">
      <div className="todo-title">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            toggleCompleted(id, completed);
          }}
        />
        <p className={`${completed ? "completed" : ""}`}> {title}</p>
      </div>

      <div
        className="cross-btn"
        onClick={() => {
          handleDelete(id);
        }}
      >
        <ImCross />
      </div>
    </div>
  );
}

export default Todos;
