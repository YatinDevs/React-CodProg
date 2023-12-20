import React from "react";
import Grandchild from "./Grandchild";

import { useContext } from "react";
import MyAppContext from "../context/MyAppContext";

function Child() {
  console.log("child Rendered");

  const { key1, key2 } = useContext(MyAppContext);
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#7EAA92",
        boxShadow: "1px 2px 9px #F4AAB9",
      }}
    >
      <h1>Child</h1>
      <p>
        {key1}
        {key2}
      </p>
      <Grandchild />
    </div>
  );
}

export default Child;
