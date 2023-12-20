import React from "react";
// 2. Consume Context
// Step 1 : import useContext
import { useContext } from "react";
// Step 2: import Context to be used.
import MyAppContext from "../context/MyAppContext";

function Grandchild() {
  console.log("GrandChild Rendered");

  // Step 3: Destructure Values function need from use Context
  const { someFunc, key1, key2 } = useContext(MyAppContext);

  // console.log(someFunc, key1, key2);

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#FFD9B7",
        boxShadow: "1px 2px 9px #F4AAB9",
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
