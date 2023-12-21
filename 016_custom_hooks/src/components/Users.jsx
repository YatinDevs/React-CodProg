import React, { useEffect, useState } from "react";
import "../index.css";
import useFetch from "../hooks/useFetch";

function Users() {
  console.log(`App rendered`);
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(data, `data from Api`);

  if (isLoading) {
    return (
      <div>
        <h1>Imagine A Fancy Loader</h1>
      </div>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Custom Hooks
      </h1>
      {data &&
        data?.map((user) => {
          return (
            <div
              className="container"
              style={{
                border: "2px solid black",
                background: "gray",
                color: "white",
                margin: "10px",
                padding: "20px 50px",
              }}
              key={user.id}
            >
              <p>Title : {user.name}</p>
              <p>Description : {user.username}</p>
              <p>Price : {user.email}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Users;
