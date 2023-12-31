import React, { useState } from "react";
import FriendsList from "./component/FriendsList/FriendsList";
import "./index.css";
import AddFriend from "./component/AddFriend/AddFriend";
import Button from "./component/Button/Button";
import FormSplitBill from "./component/FormSplitBill/FormSplitBill";
import UserProfile from "./component/UserProfile/UserProfile";
import ExampleChildren from "./component/404/ExampleChildren";
import useTheme, { ThemeProvider } from "./context/themeProvider";

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
  const { theme, toggleTheme } = useTheme();
  // console.log(theme, toggleTheme, "theme");
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddNewFriend(newFriend) {
    setFriends((prev) => [...prev, newFriend]);
    setShowAddFriend(false);
  }

  const handleShowComp = () => {
    setShowAddFriend((prev) => !prev);
  };

  function handleSelector(friend) {
    setSelectedFriend((prev) => (prev?.id === friend?.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(balanceval, id, whoIsPaying) {
    setFriends((prev) => {
      console.log(prev, "prev");

      const updatedState = prev.map((friend) => {
        if (friend.id == id) {
          if (whoIsPaying == "user") {
            friend.balance = parseInt(friend.balance) + parseInt(balanceval);
          } else {
            friend.balance = parseInt(friend.balance) - parseInt(balanceval);
          }
          return friend;
        }

        return friend;
      });

      return updatedState;
    });
  }
  return (
    <div className="main-container">
      <nav>
        <button style={{ padding: "1rem" }} onClick={toggleTheme}>
          toggle theme
        </button>
      </nav>
      <div className={`app ${theme}`}>
        <div className={`sidebar sidebar-${theme}`}>
          <FriendsList
            friends={friends}
            onSelection={handleSelector}
            selectedFriend={selectedFriend}
          />
          {showAddFriend && (
            <AddFriend handleAddNewFriend={handleAddNewFriend} />
          )}

          <Button onClick={handleShowComp}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
        <UserProfile />
      </div>
    </div>
  );
};

export default App;
