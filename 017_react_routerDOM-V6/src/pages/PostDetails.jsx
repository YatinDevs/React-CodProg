import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";

const url = "https://jsonplaceholder.typicode.com/posts";
function PostDetails() {
  const { id } = useParams(); // value key  --> will be name given in path variables
  console.log(id);

  const [post, setPost] = useState(null);
  async function fetchPosts() {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    console.log(data);
    setPost(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        border: "2px solid black",
      }}
    >
      PostDetails
      <p>Post id : {id}</p>
      <p>Title : {post?.title}</p>
      <p>Description : {post?.body}</p>
    </div>
  );
}

export default PostDetails;
