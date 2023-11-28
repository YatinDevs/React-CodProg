import React, { useState } from "react";
import ShowCount from "./ShowCount";
// - Async State Update.
//  !What “batching” is and how React uses it to process multiple state updates?

// Snap Shot BY React :
// Case 1: curr count : 0 .
// objective : increase by 1.

// Case 2: curr count : 0 .
// objective : increase by 1.

// Case 3 : curr count : 0 .
// objective : increase by 1.

// !Props are Immutable .

function Counter() {
  console.log("Counter Rendered..");
  const [count, setCount] = useState(0);

  // IncreaseCount
  const handleIncrease = () => {
    console.log("increaseFunc called");
    // state is async
    setCount((prevState) => {
      console.log("setting state 1");
      return prevState + 1;
    }); // case 1
    // setCount((prevState) => {
    //   console.log("setting state 2");
    //   return prevState + 1;
    // }); // case 2
    // setCount((prevState) => {
    //   console.log("setting state 3");
    //   return prevState + 1;
    // }); // case 3
    console.log(count); // 0
  };
  return (
    <div>
      <h2>
        Count : <ShowCount count={count} />
      </h2>
      <br></br>
      <button onClick={handleIncrease}>Increase Count</button>
    </div>
  );
}

export default Counter;
