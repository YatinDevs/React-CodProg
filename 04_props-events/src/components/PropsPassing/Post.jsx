import React from "react";

const Post = (props) => {
  console.log(props);
  return (
    <div>
      {props.prop.name}
      {props.prop.username}
    </div>
  );
};

export default Post;
