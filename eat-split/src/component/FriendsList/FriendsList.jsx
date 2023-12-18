import React from "react";
import "../../index.css";
import { Friend } from "./Friend";
export const FriendsList = ({ friends }) => {
  console.log(friends);
  return (
    <ul>
      {friends.map((friend) => {
        return <Friend key={friend.id} {...friend} />;
      })}
    </ul>
  );
};

export default FriendsList;
