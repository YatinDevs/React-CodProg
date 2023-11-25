import React from "react";

function DisplayFullName({ fullName }) {
  console.log("DisplayFullName rendered!");

  return (
    <>
      <span>{fullName}</span>
    </>
  );
}

export default DisplayFullName;
