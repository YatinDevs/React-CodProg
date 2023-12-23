import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { redirect, useLoaderData } from "react-router-dom";

export async function loader(args, { isLoggedIn }) {
  console.log(args, isLoggedIn);
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  // if user is not logged in then redirect to login
  if (!isLoggedIn) {
    return redirect("/login");
  }
  const response = await fetch(endpoint);
  const data = await response.json();
  // console.log(data, "postdata");
  // setPosts(data);
  return data;
}

function Posts() {
  const posts = useLoaderData();
  console.log(posts);
  // const [posts, setPosts] = useState(null);

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  // getting data from loader

  return (
    <div className="">
      {posts &&
        posts?.map((post) => {
          return <Post id={post.id} title={post.title} key={post.id} />;
        })}
    </div>
  );
}

export default Posts;
