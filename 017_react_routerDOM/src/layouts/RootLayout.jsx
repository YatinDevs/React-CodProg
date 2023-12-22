import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import "./style.css";
import styles from "./RootLayout.module.css";
import useAuth from "../context/AuthProvider";
import "../index.css";
function RootLayout() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <div>
      <nav
        style={{
          display: "flex",
          margin: "2rem",
        }}
      >
        <ul>
          <li>
            <NavLink
              to="/"
              className={(obj) => {
                return obj.isActive ? styles.activeNav : null;
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={(obj) => {
                return obj.isActive ? "activeNav" : null;
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={(obj) => {
                return obj.isActive ? "activeNav" : null;
              }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) => {
                return isActive ? "activeNav" : null;
              }}
            >
              Posts
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink
                to="/posts"
                className={({ isActive }) => {
                  return isActive ? "activeNav" : null;
                }}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
        {isLoggedIn && (
          <button
            onClick={() => setIsLoggedIn(false)}
            style={{
              marginLeft: "2rem",
              borderRadius: "15px",
              padding: "5px 30px",
            }}
          >
            Logout
          </button>
        )}
      </nav>
      <hr />
      <main>
        <h1>Main Content</h1>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
