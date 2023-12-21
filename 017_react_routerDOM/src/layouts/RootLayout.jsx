import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import "./style.css";
import styles from "./RootLayout.module.css";
function RootLayout() {
  return (
    <div>
      <nav>
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
        </ul>
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
