import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../context/AuthProvider";

function RequireAuth({ children }) {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  // console.log(isLoggedIn, setIsLoggedIn);

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" replace />;
}

export default RequireAuth;
