import React from "react";
import Post from "./Post";
const Posts = (props) => {
  console.log(props);
  return props.Followers.map((prop) => <Post prop={prop} />);
};

export default Posts;
