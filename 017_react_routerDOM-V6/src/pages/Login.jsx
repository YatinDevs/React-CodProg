import React from "react";
import "../index.css";
import useAuth from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, "loginpage");
  const previousPath = location.state?.previousPath || "/";

  function handleLogin() {
    setIsLoggedIn(true);
    navigate(previousPath, { replace: true }); // login and replace
  }
  return (
    <div>
      <h2>Login Page</h2>
      <input type="text" placeholder="Enter Password"></input>
      <button
        className="button"
        onClick={handleLogin}
        style={{
          marginLeft: "2rem",
          borderRadius: "15px",
          padding: "5px 30px",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
