import { useState, useRef } from "react";

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

function ExampleuseRef() {
  console.log("Component Rendered useRef");
  // html Elements  can be stored.
  const h1Ref = useRef();
  const handleClick = () => {
    console.log(h1Ref.current);
    const h1Element = h1Ref.current;
    h1Ref.current.textContent = "h1 Yatin";
    h1Element.style.backgroundColor = "gray";
    h1Element.style.color = "white";
  };

  /*
//    Case :1
  const username = useRef("Yatin");
  console.log(username);
  const handleClick = () => {
    username.current = "Mohit";
    console.log(username);
  };


  */
  return (
    <div>
      <h1 ref={h1Ref}>Hello There</h1>
      <button onClick={handleClick}>Show Content</button>

      {/*    Case : 1 
      <h1>Hello ${username.current}</h1>
      <button onClick={handleClick}>Change Name</button> */}
    </div>
  );
}

/*

function ExampleuseRef() {
  console.log("component Rendered!");
  const [counter, setCounter] = useState(1);
  const [username, setUsername] = useState("Yatin");
  return (
    <div>
      <h1>Count : {counter} </h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase Counter
      </button>
      <h4>Username : {username} </h4>
      <button onClick={() => setUsername("Mohit")}>Change Name</button>
    </div>
  );
}
*/
export default ExampleuseRef;
