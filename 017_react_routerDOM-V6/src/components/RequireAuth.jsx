import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../context/AuthProvider";
import { useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  // console.log(isLoggedIn, setIsLoggedIn);
  const location = useLocation(); // returns object
  // console.log(location, "uselocation");

  if (isLoggedIn) {
    return children;
  }
  return (
    <Navigate to="/login" replace state={{ previousPath: location.pathname }} />
  );
}

export default RequireAuth;
