import React, { useState, useRef } from "react";

// useRef
/*
 *  Learnings :
 *  const username = useRef("Yatin");
 *  useRef @returns Object {current: 'Yatin'}
 *  mutation with useRef -- Component doesnt Re-render
 *  In useRef --> string,number,[],{} can be stored.
 *  also html Elements  can be stored.
 */

// example of useRef
// diff between useRef and useState .
// handle form inputs using useRef.

// [state,setState] = useState('');

// Previously we made all Controlled Components.

// we can make uncontrolled Event or components using useRef.
function ExampleUseRef2() {
  console.log("Component Rendered useRef2");
  // html Elements  can be stored.
  const usernameRef = useRef();
  const passwordRef = useRef();
  const handleClick = () => {
    console.log(usernameRef.current);
    const usernameInput = usernameRef.current;
    const passwordInput = passwordRef.current;
    console.log(usernameInput.value);
    console.log(passwordInput.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // State vs useRef

  // State -> Controlled
  // useRef -> UnControlled ->
  //  - we used to do in Js.
  //  - In useRef --> string,number,[],{} can be stored.
  //    also html Elements  can be stored.
  //  - Doesnt Re-render
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <br />
      <input type="text" id="username" ref={usernameRef} />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" id="password" ref={passwordRef} />
      <br />
      <br />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}

export default ExampleUseRef2;
