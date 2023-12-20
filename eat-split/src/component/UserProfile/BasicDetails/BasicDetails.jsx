import React from "react";
// import { AuthContext } from "../../../context/AuthProvider";
// import { useContext } from "react";

import { useAuth } from "../../../context/AuthProvider";

function BasicDetails() {
  const { auth, setAuth } = useAuth();

  console.log(auth);
  return (
    <div>
      <p>Username : {auth.username}</p>
      <p>Email : {auth.email}</p>
    </div>
  );
}

export default BasicDetails;
