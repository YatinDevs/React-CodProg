import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./style.css";
function RootLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/post">Posts</Link>
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
