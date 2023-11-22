import React from "react";
import "./style.css";
const ElementClick = ({ onClick }) => {
  return (
    <h1 className="elementclick" onClick={onClick}>
      heading Click
    </h1>
  );
};

export default ElementClick;
