import React, { useEffect, useState } from "react";
import { fetchTodos } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { data: todos } = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();
  // we use to do this : before
  //   const fetchTodo = async () => {
  //     const res = await axios.get("http://localhost:8080/todos");
  //   };
  //   useEffect(() => {}, []);
  // lets create thunk now :

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchTodos())
      .unwrap()
      .then(() => {
        // setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
