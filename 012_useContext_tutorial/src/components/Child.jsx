import React from "react";
import Grandchild from "./Grandchild";

import { useContext } from "react";
import { MyAppContext } from "../App";

function Child() {
  const { key1, key2 } = useContext(MyAppContext);
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#7EAA92",
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
