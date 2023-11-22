import React, { useState } from "react";
import Greeting from "./components/Greeting";
import Posts from "./components/PropsPassing/Posts";
import Form from "./components/Events/Form";

function App() {
  const firstName = "Yatin";
  const lastName = "Chaudhari";
  const users = ["user1", "user2", "user3"];

  const Followers = [
    { id: 1, name: "Andrew Thomas", username: "AndrewThomas1" },
    { id: 2, name: "Hulk Buster", username: "HulkBuster2" },
    { id: 3, name: "Thor", username: "ThunderMaster3" },
    { id: 4, name: "Natasha", username: "Natasha4" },
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

      <Form />
    </>
  );
}

export default App;
