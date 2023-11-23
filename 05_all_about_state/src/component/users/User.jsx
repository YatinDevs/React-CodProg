import React from "react";
import "./user.css";
import { v4 as uuid } from "uuid";

const User = ({ age, firstName, lastName, id, increaseAge }) => {
  console.log("User rendered");

  return (
    <div className="user">
      <h3>User</h3>
      <p>User id : {id}</p>
      <p>firstName : {firstName}</p>
      <p>lastName : {lastName}</p>
      <p>age : {age}</p>
      <button
        onClick={() => {
          increaseAge(id);
        }}
      >
        Increase Age
      </button>
    </div>
  );
};

export default User;
