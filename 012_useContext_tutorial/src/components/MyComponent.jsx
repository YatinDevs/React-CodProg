import React from "react";
import Child from "./Child";

function MyComponent() {
  console.log("mycomp Rendered");

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#9ED2BE",
        boxShadow: "1px 2px 9px #F4AAB9",
      }}
    >
      <h1>My Component</h1>
      <Child />
    </div>
  );
}

export default MyComponent;
