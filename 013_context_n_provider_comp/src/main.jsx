import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";
// import { createContext } from "react";

// export const AuthContext = createContext();

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);

// root.render(
//   <AuthContext.Provider
//     value={{ username: "yatin727", email: "c.yatin279@gmail.com" }}
//   >
//     <App />
//   </AuthContext.Provider>
// );
