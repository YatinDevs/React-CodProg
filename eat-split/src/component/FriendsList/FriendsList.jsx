import React from "react";
import "../../index.css";
import { Friend } from "./Friend";
export const FriendsList = ({ friends, onSelection, selectedFriend }) => {
  // console.log(friends);
  return (
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
  );
};

export default FriendsList;
