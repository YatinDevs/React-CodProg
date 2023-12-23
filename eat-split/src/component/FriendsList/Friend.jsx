import React from "react";
import Button from "../Button/Button";
import useTheme from "../../context/themeProvider";
export const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = friend.id === selectedFriend?.id;
  const { theme, toggleTheme } = useTheme();

  return (
    <li className={`${isSelected ? `selected-${theme}` : ""}  `}>
      <img src={friend.image} alt="friends-image" />
      <h3> {friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}₹
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}₹
        </p>
      )}

      {friend.balance === 0 && <p> You and {friend.name} are even.</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Selected" : "Select"}
      </Button>
    </li>
  );
};
