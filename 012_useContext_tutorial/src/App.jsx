import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import MyAppContext from "./context/MyAppContext";
// step 3 : wrap application context.Provider.
// we Provide Generally as a Object
/*  <MyAppContext.Provider
value={{ key1: "value1", key2: "value2", someFunc: myFunc }}
>
*/

// Overall Two Thing we Do :
// 1. Provider
// 2. Consume

function App() {
  console.log("App Rendered");

  function myFunc() {
    console.log("Hello from my Func");
  }

  return (
    <MyAppContext.Provider
      value={{ key1: "value1", key2: "value2", someFunc: myFunc }}
    >
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#C8E4B2",
          height: "100vh",
          boxShadow: "1px 2px 9px #F4AAB9",
        }}
      >
        <h1>App</h1>
        <MyComponent />
      </div>
    </MyAppContext.Provider>
  );
}

export default App;
