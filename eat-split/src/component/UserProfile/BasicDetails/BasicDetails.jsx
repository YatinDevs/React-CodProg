import React from "react";
// import { AuthContext } from "../../../context/AuthProvider";
// import { useContext } from "react";

import { useAuth } from "../../../context/AuthProvider";
import Button from "../../Button/Button";

function BasicDetails() {
  const { auth, setAuth } = useAuth();

  function handleLogout() {
    setAuth({});
  }
  console.log(auth);
  return (
    <div>
      <p>Username : {auth.username}</p>
      <p>Email : {auth.email}</p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default BasicDetails;
