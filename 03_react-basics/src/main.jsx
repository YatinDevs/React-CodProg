import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

// import Home from "./components/Home";
//* if we dont write default.

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
