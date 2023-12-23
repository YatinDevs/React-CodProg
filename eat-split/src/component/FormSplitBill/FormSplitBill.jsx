import React, { useState } from "react";
import Button from "../Button/Button";
import useTheme from "../../context/themeProvider";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const { theme, toggleTheme } = useTheme();

  const { name, id } = selectedFriend;

  const [bill, setBill] = useState("");
  const [paidbyUser, setPaidbyUser] = useState("");
  const paidByFriend = bill ? bill - paidbyUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSumbit = (e) => {
    e.preventDefault();

    if (!bill || !paidbyUser) return;
    console.log("submitted");
    let balanceval = 0;
    if (
      whoIsPaying == "user"
        ? (balanceval = bill - paidbyUser)
        : (balanceval = bill - paidByFriend)
    ) {
      onSplitBill(balanceval, id, whoIsPaying);
    }
  };

  return (
    <div className={`friendslist-container-${theme}`}>
      <form
        className={`form-split-bill form-${theme} `}
        onSubmit={handleSumbit}
      >
        <h2>Split bill with {name}</h2>
        <label>💰Bill Value 💲 </label>
        <input
          className={`input-${theme}`}
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <label>📈Your Expense Value 💲</label>
        <input
          className={`input-${theme}`}
          type="text"
          value={paidbyUser}
          onChange={(e) =>
            setPaidbyUser(
              Number(e.target.value) > bill
                ? paidbyUser
                : Number(e.target.value)
            )
          }
        />

        <label>📈{name}'s Expense Value 💲</label>
        <input
          type="text"
          disabled
          value={paidByFriend}
          className={`input-${theme}`}
        />

        <label>🤑Who will pay the bill?</label>
        <select
          className={`select-${theme}`}
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option>{name}</option>
        </select>

        <Button>Split Bill</Button>
      </form>
    </div>
  );
}

export default FormSplitBill;
