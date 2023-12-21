import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState(null);
  async function fetchPosts() {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(posts);
    setPosts(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      {posts &&
        posts?.map((post) => {
          return <Post id={post.id} title={post.title} key={post.id} />;
        })}
    </div>
  );
}

export default Posts;
