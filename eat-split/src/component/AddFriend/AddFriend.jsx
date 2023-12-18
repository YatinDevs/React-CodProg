import React from "react";
import Button from "../Button/Button";

function AddFriend() {
  return (
    <form className="form-add-friend">
      <label>🤞Friend Name</label>
      <input type="text" />
      <label>🖼 Image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}

export default AddFriend;
