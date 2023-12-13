import React from "react";
import "../index.css";
import { ImCross } from "react-icons/im";

function Todos({ id, title, completed, dispatch }) {
  const handleDelete = (e) => {
    console.log("delete Function call");
    dispatch({
      type: "DELETE",
      payload: { id: id },
    });
  };

  const toggleCompleted = (e) => {
    console.log("togglecomplete Function call");

    dispatch({
      type: "TOGGLECOMPLETED",
      payload: { id: id },
    });
  };
  return (
    <div className="todo">
      <div className="todo-title">
        <input type="checkbox" checked={completed} onChange={toggleCompleted} />
        <p className={`${completed ? "completed" : ""}`}> {title}</p>
      </div>

      <div className="cross-btn" onClick={handleDelete}>
        <ImCross />
      </div>
    </div>
  );
}

export default Todos;
