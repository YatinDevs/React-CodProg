import React, { useEffect, useState } from "react";

//! 4. CleanUp function (without Strict Mode)
// 1. Before Component Unmounts cleanup function runs.
// 2. when there is some value inside depedancy array
// when value changes :
/*
        - Component re-renders.
        - clean up Function runs.
        - useEffect Runs.
*/

// ! 5. Add EventListener.
// Events -> SideEffects. (document.addEventListener).

function CleanupFunctionDemo() {
  console.log("cleanup Component rendered..");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("inside useEffect..");
    return function () {
      console.log("cleanUp Function called...");
    };
  }, [counter]);
  // case1 : initial render only.
  // case2 : with dependancies array.

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter((n) => n + 1);
          console.log("State Changed..");
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default CleanupFunctionDemo;
