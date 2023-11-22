import React, { useState } from "react";
import Users from "./component/users/Users";

function Example1() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Yatin", lastName: "Chaudhari", age: 25 },
    { id: 2, firstName: "Siddesh", lastName: "Tawade", age: 23 },
    { id: 3, firstName: "Siddhi", lastName: "xyz", age: 26 },
    { id: 4, firstName: "Pankaj", lastName: "zar", age: 24 },
  ]);
  return (
    <div>
      <h1>State Example</h1>
      <Users users={users} />
    </div>
  );
}

export default Example1;
