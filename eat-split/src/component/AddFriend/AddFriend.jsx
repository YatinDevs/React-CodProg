import React, { useState } from "react";
import Button from "../Button/Button";
import useTheme from "../../context/themeProvider";

function AddFriend({ handleAddNewFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/42");
  const { theme, toggleTheme } = useTheme();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    console.log(newFriend, "newFriend");
    handleAddNewFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/42");
  }
  return (
    <div className={`friendslist-container-${theme}`}>
      <form className={`form-add-friend `} onSubmit={handleSubmit}>
        <label>🤞Friend Name</label>
        <input
          className={`input-${theme}`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>🖼 Image URL</label>
        <input
          className={`input-${theme}`}
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </div>
  );
}

export default AddFriend;
