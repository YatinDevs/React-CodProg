import React, { createContext, useContext } from "react";
import UserProfile from "./components/UserProfile";
import Dummy from "./components/Dummy";

export default function App() {
  return (
    <>
      <h1>Context Example & Provider Component.</h1>
      <UserProfile />
      {/* <Dummy>
        <h1>Dummy heading</h1>
        <p>Paragraph</p>
      </Dummy> */}
    </>
  );
}
