import React from "react";

import { useAuth } from "../context/AuthProvider";

function BasicDetail() {
  const { username, email } = useAuth();

  console.log(username, email);
  return (
    <div>
      BasicDetail
      <p>username : {username}</p>
      <p>email : {email}</p>
    </div>
  );
}

export default BasicDetail;
