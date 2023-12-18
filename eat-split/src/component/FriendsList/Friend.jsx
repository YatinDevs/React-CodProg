import React from "react";
import Button from "../Button/Button";

export const Friend = ({ name, id, image, balance }) => {
  return (
    <li>
      <img src={image} alt="friends-image" />
      <h3> {name}</h3>
      {balance > 0 && (
        <p className="green">
          {name} Owes You {balance} <span>&#8377;</span> amount.
        </p>
      )}
      {balance < 0 && (
        <p className="red">
          You owe {name} {balance} <span>&#8377;</span> amount.
        </p>
      )}
      {balance === 0 && <p>You and {name} are Even.</p>}

      <Button>Select</Button>
    </li>
  );
};
