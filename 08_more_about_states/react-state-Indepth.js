// Deeper Dive into React State and Rendering.
/*
    !CodProg
  - 1 .Remove Redundant State.
  - 2 .setState is Async.
  - 3 .Warning about Props.
  - 4 . DOnt Create keys on the fly.
  - 5 . Dont Change 'Controlled' to 'Uncontrolled' or vice-versa.
  - 6. Lifting State Up.
  - 7. White Space in JSX. {" "}
  - 8. Set Initial State with Function.
  - 9. How React Works?

*/

//  ?- 1Remove Redundant State.
/*
   Redundant data .
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  No need to create new State for fullName 
  we can do :
  const fullName = firstName + " " + lastName;
 
*/

/* When Parent is re-Rendered or rendered its
   all child re-render But Parents of it doesnt re-render.
*/

//  ?   - 2 setState is Async.
//  ?   (Adding Interactivity : State as a Snapshot : React.dev)
//
/* 
  !How setting state triggers re-renders
  !When and how state updates
  !Why state does not update immediately after you set it
  !How event handlers access a “snapshot” of the state

   * Setting state requests a new render.
   * React stores state outside of your component, as if on a shelf.
   * When you call useState, React gives you a snapshot of the state for that render.
   * Variables and event handlers don’t “survive” re-renders. Every render has its own event handlers.
   * Every render (and functions inside it) will always “see” the snapshot of the state that React gave to that render.
   * You can mentally substitute state in event handlers, similarly to how you think about the rendered JSX.
   * Event handlers created in the past have the state values from the render in which they were created.

 */

// ? Queueing a Series of State Updates
/*
  !What “batching” is and how React uses it to process multiple state updates
  !How to apply several updates to the same state variable in a row
  *Setting state does not change the variable in the existing render, but it requests a new render.
  *React processes state updates after event handlers have finished running. This is called batching.
  *To update some state multiple times in one event, you can use setNumber(n => n + 1) updater function.
*/

/*
  !What “batching” is and how React uses it to process multiple state updates?

 React processes state updates after event handlers have finished running. 
 This is called batching. To update some state multiple times in one event, 
 you can use setNumber(n => n + 1) updater function.

*/
// ? - 3 .Warning about Props.
/*
 function ShowCount(props) {
  console.log(props); // props object
  * props are immutable
  * we cannot assign to read only property

  * we can destructure props
  let { count } = props;
  * creating variable
  *   count = count + 1; 
  *   --> variable can be mutated 
  *   --> but not to do this.
  *
  return <span>{count}</span>;
}

 
*/
// ? -4. DOnt Create keys on the fly.
/*
  A “key” is a special string attribute you need to include when 
  creating lists of elements in React. Keys are used in React to 
  identify which items in the list are changed, updated, or deleted.
   Keys are used to give an identity to the elements in the lists

*/
// ? - 5 . Dont Change 'Controlled' to 'Uncontrolled' or vice-versa.

// removing value={firstname} --> uncontrolled
//  value={firstname}  --> controlled

// ?- 6. Lifting state Up in React?

/*
  Sometimes, you want the state of two components to always change 
  together. To do it, remove state from both of them, move it to their
   closest common parent, and then pass it down to them via props. 
   This is known as lifting state up, and it's one of the most common
    things you will do writing React code.


*/
// ?- 7. White Space in JSX. {" "}

// ? - 8. Set Initial State with Function.

// ?  - 9. How React Works?
