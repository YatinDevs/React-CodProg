import React, { useEffect } from "react";
import "../index.css";
import useAuth from "../context/AuthProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location, "loginpage");
  // const previousPath = location.state?.previousPath || "/";
  // ## fetching Search Parameteres from posts
  // console.log(location);
  // const url = location.search;
  // fetching Search Parameteres from posts
  // const searchParams = new URLSearchParams(url);
  // console.log(searchParams);
  // console.log(searchParams.get("a"));
  // console.log(searchParams.get("b"));

  // ## other Easy Way to fetch search params
  // search Params hook
  const [searchParams] = useSearchParams();
  // console.log(searchParams);
  // console.log(searchParams.get("a"));
  // console.log(searchParams.get("redirectTo"));
  const previousPath = searchParams.get("redirectTo") || "/";
  console.log(previousPath);

  function handleLogin() {
    setIsLoggedIn(true);
    // navigate(previousPath, { replace: true }); // login and replace
  }
  useEffect(() => {
    if (isLoggedIn) {
      console.log(previousPath, "previouspath");
      navigate(previousPath, { replace: true }); // login and replace
    }
  }, [isLoggedIn]);

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
