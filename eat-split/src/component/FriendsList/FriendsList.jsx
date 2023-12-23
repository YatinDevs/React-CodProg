import React from "react";
import "../../index.css";
import { Friend } from "./Friend";
import useTheme from "../../context/themeProvider";
export const FriendsList = ({ friends, onSelection, selectedFriend }) => {
  // console.log(friends);
  const { theme } = useTheme();
  return (
    <div className={`friendslist-container-${theme}`}>
      <ul>
        {friends.map((friend) => {
          return (
            <Friend
              key={friend.id}
              friend={friend}
              selectedFriend={selectedFriend}
              onSelection={onSelection}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
