import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
function RequireAuth({ children }) {
  const loggedIn = false;
  if (loggedIn) {
    return children;
  }
  return <Navigate to="/login" />;
}

export default RequireAuth;
