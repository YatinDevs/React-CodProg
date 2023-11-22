import React from "react";

const Post = ({ name, username }) => {
  //   console.log();
  return (
    <div>
      <ul>
        <li> Post:</li>
        <li>{name}</li>
        <li>{username}</li>
      </ul>
    </div>
  );
};

export default Post;
