import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { removeTodo, toggleCompleted } from "./todosSlice";
function Todo({ id, title, completed }) {
  const dispatch = useDispatch();
  return (
    <div className="todo">
      <div className="todo-title">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            dispatch(toggleCompleted({ id: id }));
          }}
        />
        <p className={`${completed ? "completed" : ""}`}> {title}</p>
      </div>

      <div
        className="cross-btn"
        onClick={() => {
          dispatch(removeTodo({ id: id }));
        }}
      >
        <ImCross />
      </div>
    </div>
  );
}

export default Todo;
