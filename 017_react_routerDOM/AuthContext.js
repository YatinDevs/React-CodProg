// 1. Created Auth Provider

// import React from "react";
// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// function useAuth() {
//   return useContext(AuthContext);
// }

// export default useAuth;

// 2. useAuth Provider Wrapp whole application
// impirt use Auth  Destruct info

// ! login and Replace
/*
  import React from "react";
import "../index.css";
import useAuth from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    setIsLoggedIn((prev) => !prev);
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

*/

// ! useLocation and State

/*

  with help of useLocation hook we get object where we can get previouspath state
  pathname,search,state and key .
  
*/
