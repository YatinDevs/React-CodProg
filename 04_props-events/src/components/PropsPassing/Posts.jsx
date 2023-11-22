import React from "react";
import Post from "./Post";
const Posts = (props) => {
  console.log(props);

  return (
    <>
      <h2>Posts</h2>
      <div>
        {props.Followers
          ? props.Followers.map((prop) => <Post {...prop} key={prop.id} />)
          : ""}

        {/* for static cases we can pass index as key not for dynamic data 
        
           issue is that if data is dynamic and we manipulate 
           lets say delete the key there can be issue as index will not be in sequence can create bugs
          */}
        {/* {props.Followers
          ? props.Followers.map((prop, index) => <Post {...prop} key={index} />)
          : ""} */}
      </div>
    </>
  );
};

export default Posts;
