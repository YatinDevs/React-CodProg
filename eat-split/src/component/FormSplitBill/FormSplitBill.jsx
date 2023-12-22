import React from "react";
import Button from "../Button/Button";

function FormSplitBill({ selectedFriend }) {
  const { name } = selectedFriend;
  return (
    <form className="form-split-bill">
      <h2>Split bill with {name}</h2>
      <label>💰Bill Value 💲 </label>
      <input type="text" />

      <label>📈Your Expense Value 💲</label>
      <input type="text" />

      <label>📈{name}'s Expense Value 💲</label>
      <input type="text" />

      <label>🤑Who will pay the bill?</label>
      <select>
        <option>You</option>
        <option>{name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
