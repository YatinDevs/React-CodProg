import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export async function loader({ params }) {
  // console.log(args);

  const url = "https://jsonplaceholder.typicode.com/posts";

  const response = await fetch(`${url}/${params.id}`);
  if (!response.ok) {
    throw new Error("Something Went Wrong");
  }
  const data = await response.json();
  return data;
  // return null;
}

function PostDetails() {
  const post = useLoaderData();
  console.log(post);
  const { id } = useParams(); // value key  --> will be name given in path variables
  // console.log(id);
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
