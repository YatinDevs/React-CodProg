import React from "react";
import { Link } from "react-router-dom";

function Post({ id, title }) {
  // Link here relative path is given
  //       <Link to={id.toString()}>

  // We can Even give absolute path

  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        border: "2px solid black",
      }}
    >
      {/* <Link to={id.toString()}>
        <h2>{title}</h2>
      </Link> */}
      <Link to={`/posts/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{id}</p>
    </div>
  );
}

export default Post;
