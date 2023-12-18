import React, { useState } from "react";
import Button from "../Button/Button";

function AddFriend({ setFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/42");

  const handleAddNew = (e) => {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    setFriends((prev) => [...prev, newFriend]);
    console.log(newFriend, "newFriend");
    setName("");
    setImage("https://i.pravatar.cc/42");
  };
  return (
    <form className="form-add-friend">
      <label>🤞Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button onClick={handleAddNew}>Add</Button>
    </form>
  );
}

export default AddFriend;
