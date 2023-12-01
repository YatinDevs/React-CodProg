import React from "react";
// 2. Consume Context
import { useContext } from "react";
import { MyAppContext } from "../App";

function Grandchild() {
  const { someFunc, key1, key2 } = useContext(MyAppContext);

  console.log(someFunc, key1, key2);

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#FFD9B7",
      }}
    >
      <h1>Grandchild</h1>
      <p>{key1}</p>
      <p>{key2}</p>
      <button onClick={someFunc}>Call my Function</button>
    </div>
  );
}

export default Grandchild;
