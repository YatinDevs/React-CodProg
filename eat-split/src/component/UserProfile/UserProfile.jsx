import React from "react";
import BasicDetails from "./BasicDetails/BasicDetails";
import { useAuth } from "../../context/AuthProvider";
import Button from "../Button/Button";
function UserProfile() {
  const { auth, setAuth } = useAuth();
  const handleLogin = () => {
    setAuth({
      username: "Yatin Chaudhari",
      email: "Demo234@gmail.com",
    });
  };
  return (
    <div>
      <h3>{auth.username ? "User Profile" : "Login User"}</h3>
      {auth.username ? (
        <BasicDetails />
      ) : (
        <Button onClick={handleLogin}>Login</Button>
      )}
    </div>
  );
}

export default UserProfile;
