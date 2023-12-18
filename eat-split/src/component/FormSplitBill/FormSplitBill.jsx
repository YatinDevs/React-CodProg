import React from "react";
import Button from "../Button/Button";

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split bill with X</h2>
      <label>💰 Bill Value 💲 </label>
      <input type="text" />

      <label>📈 Your Expenses Value 💲</label>
      <input type="text" />

      <label>📈 X's Expenses Value 💲</label>
      <input type="text" />

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;