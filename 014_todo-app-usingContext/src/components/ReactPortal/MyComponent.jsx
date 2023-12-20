import React from "react";
import { createPortal } from "react-dom";
function MyComponent() {
  return createPortal(
    <>
      <h1>My Component Heading</h1>
      <p>My Component Para</p>
      <div>MyComponent</div>
    </>,
    document.getElementById("newRoot")
  );
}

export default MyComponent;
