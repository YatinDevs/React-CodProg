// Deeper Dive into React State and Rendering.
/*
    !CodProg
  - 1 .Remove Redundant State.
  - 2 .setState is Async.
  - 3 .Warning about Props.
  - 4 . DOnt Create keys on the fly.
*/

//  ?Remove Redundant State.
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

//  ?   - setState is Async.
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
