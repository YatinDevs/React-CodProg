import React, { useState } from "react";
import Greeting from "./components/Greeting";
import Posts from "./components/PropsPassing/Posts";
function App() {
  const firstName = "Yatin";
  const lastName = "Chaudhari";
  const users = ["user1", "user2", "user3"];

  const Followers = [
    { name: "Andrew Thomas", username: "AndrewThomas" },
    { name: "Hulk Buster", username: "HulkBuster" },
    { name: "Thor", username: "ThunderMaster" },
    { name: "Natasha", username: "Natasha" },
  ];
  return (
    <>
      <Greeting firstName={firstName} lastName={lastName} />
      <Greeting firstName={firstName} lastName="Sharma" />
      <Greeting firstName="Rohit" lastName="Sharma" users={users} />
      <Greeting>
        <h1>Hello There</h1>
        <p>Any thing inside this is children prop</p>{" "}
      </Greeting>
      <Posts Followers={Followers} />
    </>
  );
}

export default App;
