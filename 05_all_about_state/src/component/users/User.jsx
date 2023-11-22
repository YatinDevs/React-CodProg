import React from "react";
import "./user.css";
import { v4 as uuid } from "uuid";

const User = ({ age, firstName, lastName, id }) => {
  return (
    <div className="user">
      <h3>User</h3>
      <p>firstName : {firstName}</p>
      <p>lastName : {lastName}</p>
      <p>age : {age}</p>
    </div>
  );
};

export default User;
