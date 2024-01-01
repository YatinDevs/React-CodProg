import React, { useEffect } from "react";
import { fetchTodos } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const { data: todos, isLoading, error } = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  // we use to do this : before
  //   const fetchTodo = async () => {
  //     const res = await axios.get("http://localhost:8080/todos");
  //   };
  //   useEffect(() => {}, []);
  // lets create thunk now :

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (isLoading) {
    return <h1>Loading .....</h1>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}

export default TodoList;
