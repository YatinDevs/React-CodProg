import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import Counter from "./components/Counter/Counter";
import RockBandList from "./components/RockBand/RockBandList";

function App() {
  console.log("App Rendered..");
  return (
    <>
      {/* <UserForm /> */}
      {/* <Counter /> */}
      <RockBandList />
    </>
  );
}

export default App;
