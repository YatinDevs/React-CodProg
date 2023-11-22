import React, { useState, useEffect } from "react";
import Counter from "./component/Counter";
import StateArray from "./component/StateArray";
import StateObject from "./component/StateObject";

function App() {
  console.log("component rendered");
  /*
  // ?In React We cannot use Normal Variables To Change UI.
  let firstName = "Yatin";

  const handleChange = (e) => {
    console.log("Clicked!", firstName);
    firstName = "siddesh";
  };
*/

  // State
  // state -- > data
  // !when state changes UI re - renders and state changes.

  // useState Hook
  // useState(defaultValue); -->
  // returns array of 2 things ->
  // [state value , function to update state value.]
  const returnedVal = useState("trailvalue");
  console.log(returnedVal);

  const [firstName, setFirstName] = useState("Siddesh");
  const handleChange = (e) => {
    if (firstName === "Siddesh") setFirstName("Yatin");
    else setFirstName("Siddesh");
  };

  // When state changes here our Component Re- renders and UI afterwards on handle Change.

  return (
    <div>
      <h1>{firstName}</h1>
      <button onClick={handleChange}>Change Name</button>
      <br></br>
      <br></br>
      <br></br>
      <Counter />
      <br></br>
      <br></br>
      <br></br>
      <StateArray />

      <br></br>
      <br></br>
      <br></br>
      <StateObject />

      <>
        <h1>State Examples </h1>
      </>
    </div>
  );
}
export default App;
