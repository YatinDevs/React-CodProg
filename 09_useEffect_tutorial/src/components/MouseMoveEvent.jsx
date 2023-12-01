import React, { useEffect, useState } from "react";

function MouseMoveEvent() {
  console.log("MouseMove Component Rendered..");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    console.log({ x: e.clientX, y: e.clientY });
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    console.log("inside useEffect..");

    document.addEventListener("mousemove", handleMouseMove);
    return function () {
      console.log("cleanUp Function called...");
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <h1> MouseMoveEvent</h1>
      <h2> x : {mousePosition.x}</h2>
      <h2> y : {mousePosition.y}</h2>
    </div>
  );
}

export default MouseMoveEvent;
