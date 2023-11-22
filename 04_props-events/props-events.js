// TODO : What are props (properties)?
/*
- React components use props to communicate with each other.
- Every parent component can pass some information to its child components by giving them props.
- Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

  ?Passing props to a component
     - Step 1: Pass props to the child component
     - Step 2: Read props inside the child component

*/

/*
   ! Props : Key features :
       - Props are used to pass data from parent components to Child Components (Down the Component tree).
       - Essential tool to configure and customize components (like function parameters).
       - with props ,parent components control how child components look and work.
       - Anything can be passed as props : Single Values , Arrays , Objects, functions, Even Other components.
       - ! Props are Read- Only!:

        * Important React Rule Why Props are Read Only ! Why They are immutable
          - Props is data coming from the outside , and can only be Updated by the Parent Component.
          - Hence Props are Read - Only ,they are immutable! This is one of React's Strict Rules.
          - If You need to mutate props,you actually need state.
          - So, Why ?
          - Mutating Props would affect Parent, creating side Effect(Not pure).
          - Components have to be pure functions in terms of props and state.
          - This allows React to Optimize apps, avoid bugs , Make apps predictable.
*/
/*

 !React Uses One Way Data Flow .
  - One Way Data Flow :
  - Makes applications More predictable and easier to understand.
  - makes applications easier to debug as we have more control over the data .
  - Is More Performant.
*/
// TODO : What are Events ?
