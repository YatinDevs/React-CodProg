import React from "react";
import "../../index.css";
function Button({ children, onClick }) {
  return (
    <button
      className="button"
      onClick={onClick}
      style={{ marginBottom: "1rem" }}
    >
      {children}
    </button>
  );
}

export default Button;
