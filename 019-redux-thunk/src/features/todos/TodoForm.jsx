import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

function TodoForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ message: "error Occurred" });
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    dispatch(addTodo(title))
      .unwrap()
      .then(() => {
        // setIsLoading(false);
        setTitle("");
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "adding..." : "Add Todo"}
        </button>
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </form>
    </div>
  );
}

export default TodoForm;
