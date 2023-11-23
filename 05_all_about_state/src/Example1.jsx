import React, { useState } from "react";
import Users from "./component/users/Users";

function Example1() {
  console.log("App rendered");
  const [users, setUsers] = useState([
    { id: 1, firstName: "Yatin", lastName: "Chaudhari", age: 25 },
    { id: 2, firstName: "Siddesh", lastName: "Tawade", age: 23 },
    { id: 3, firstName: "Siddhi", lastName: "xyz", age: 26 },
    { id: 4, firstName: "Pankaj", lastName: "zar", age: 24 },
  ]);
  // const increaseAge = (id) => {
  //   console.log("increased Age", id);

  //   const newState = [];
  //   for (let user of users) {
  //     if (user.id === id) {
  //       newState.push({ ...user, age: user.age + 1 });
  //     } else {
  //       newState.push(user);
  //     }
  //   }

  //   setUsers(newState);
  // };

  const increaseAge = (id) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  };

  // const deleteUser = (id) => {
  //   setUsers((prevState) => {
  //     return prevState.filter((user) => {
  //       if (user.id !== id) {
  //         return user;
  //       }
  //     });
  //   });
  // };

  const deleteUser = (id) => {
    setUsers((prevState) => {
      return prevState.filter((user) => user.id !== id);
    });
  };
  return (
    <div>
      <h1>State Example</h1>
      <Users users={users} increaseAge={increaseAge} deleteUser={deleteUser} />
    </div>
  );
}

export default Example1;
