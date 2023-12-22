import React from "react";
import "../index.css";
import useAuth from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    setIsLoggedIn(true);
    navigate("/", { replace: true }); // login and replace
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
