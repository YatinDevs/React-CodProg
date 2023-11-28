import React from "react";

function ShowCount(props) {
  console.log(props); // props object
  // props are immutable
  // we cannot assign to read only property

  // we can destructure props
  let { count } = props;
  // creating variable
  //   count = count + 1; --> variable can be mutated --> but not to do this.
  //
  return <span>{count}</span>;
}

export default ShowCount;
