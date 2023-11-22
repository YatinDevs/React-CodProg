import React from "react";
import { v4 as uuid } from "uuid";
import "./user.css";
import User from "./User";

const Users = ({ users }) => {
  return (
    <div>
      <ul>
        {users ? users.map((user) => <User {...user} key={uuid()} />) : ""}
      </ul>
    </div>
  );
};

export default Users;
