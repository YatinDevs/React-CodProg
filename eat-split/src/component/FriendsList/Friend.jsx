import React from "react";
import Button from "../Button/Button";

export const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = friend.id === selectedFriend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt="friends-image" />
      <h3> {friend.name}</h3>
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} Owes You {friend.balance} <span>&#8377;</span> amount.
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {friend.balance} <span>&#8377;</span> amount.
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are Even.</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Selected" : "Select"}
      </Button>
    </li>
  );
};
