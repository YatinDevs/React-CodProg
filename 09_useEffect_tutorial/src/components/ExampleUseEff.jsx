import React, { useEffect, useState } from "react";

// ! 1. useEffect Hook :
// - firstArg : It Takes callback function .
// - Second Arg : it takes Dependancy Array.

// Case 1 : with 1 Arg without Depenedancy Array.
// with Only Callback
// UseEffect hook will be called Every time Component is Re-render.

// Case 2: With 2 Args.
// With Callback and Empty Dependancy array:
// [] --> useEffect will be called only once on initial Render.

// Case 3 : With 2 Args.
// With Callback and  Dependancy array with dependencies:
// [counter] --> useEffect will render on initial Render.
// After it it will Render only  if there is change in any of the
// Dependencies mentioned in an array.

function ExampleUseEff() {
  console.log("Component ExampleUseEff Rendered..");

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("Inside UseEffect....");
  }, [counter]);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((n) => n + 1)}>Increase</button>
      <h2>{counter2}</h2>
      <button onClick={() => setCounter2((n) => n + 1)}>Increase</button>
    </div>
  );
}

export default ExampleUseEff;
