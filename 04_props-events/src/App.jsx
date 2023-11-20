import React, { useState } from "react";
import Greeting from "./components/Greeting";

function App() {
  const firstName = "Yatin";
  const lastName = "Chaudhari";
  return (
    <>
      <Greeting firstName={firstName} lastName={lastName} />
      <Greeting firstName={firstName} lastName="Sharma" />
      <Greeting firstName="Rohit" lastName="Sharma" />
    </>
  );
}

export default App;
