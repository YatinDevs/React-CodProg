import React from "react";
import { v4 as uuid } from "uuid";
import "./user.css";
import User from "./User";

const Users = ({ users, increaseAge }) => {
  console.log("Users rendered");

  return (
    <div>
      <ul>
        {users
          ? users.map((user) => (
              <User {...user} key={user.id} increaseAge={increaseAge} />
            ))
          : ""}
      </ul>
    </div>
  );
};

export default Users;
