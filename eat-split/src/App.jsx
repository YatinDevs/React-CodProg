import React from "react";
import FriendsList from "./component/FriendsList/FriendsList";
import "./index.css";
import AddFriend from "./component/AddFriend/AddFriend";
import Button from "./component/Button/Button";
import FormSplitBill from "./component/FormSplitBill/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const friends = initialFriends;

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        <AddFriend />
        <Button>Add New Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

export default App;