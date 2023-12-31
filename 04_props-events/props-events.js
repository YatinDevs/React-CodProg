// TODO : React Fragments ?
/*
   ?React Fragements

  - What are the benefits of React fragment? 
     - With React Fragment, you can render multiple elements of a 
     component without adding extra div tags. We can write cleaner, 
     more readable code with React Fragments.
     - It takes up less memory and renders components faster.
     Each component is rendered as expected.

  - When should I use React fragments?
     - When should you use React Fragment.
     - You should use the React Fragment when you want to add 
     a parent element to fulfill the JSX syntax, but without 
     introducing an extra node to the DOM.
     - After compilation, the fragment component does not make it 
     to the DOM—only the children element do.

*/
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

//  !Default Props .
/* 
    - The defaultProps is a React component property that allows you to set default values for the props argument.
    - If the prop property is passed, it will be changed.
    - The defaultProps can be defined as a property on the component class itself,
        to set the default props for the class.
export default function Greeting({
  firstName,
  lastName,
  users,
 * fullName = "Yatin Chaudhari", --- > Default Props
}) 
  */

// !Children Props.
/*
   - Children is a prop (this.props.children) that allow you to pass components as data to other components, 
   just like any other prop you use. 
   - Component tree put between component's opening and closing tag will be passed to that component as children prop.
  
   - There are a number of methods available in the React API to work with this prop. 
   - These include React.Children.map, React.Children.forEach, React.Children.count,
    React.Children.only, React.Children.toArray


 
*/
// <Greeting>
//   <h1>Hello There</h1>
//   <p>Any thing inside this is children prop</p>{" "}
// </Greeting>;

// ! Key Props :

/*
  The key prop is a unique identifier that React uses to efficiently manage and update elements 
  within a list. When rendering a list of elements, it is crucial to assign a unique key 
  to each element to help React differentiate between the items and perform updates more 
  efficiently.

*/

/* for static cases we can pass index as key not for dynamic data 
        
 issue is that if data is dynamic and we manipulate 
 lets say delete the key there can be issue as index will not be in sequence can create bugs
*/

/* 
  TODO : CODPROG
  React Fragments.
  Props :
  1. React Props .
  2. Default Props.
  3. Children Props. 
  4. Render List.
  5. Key Prop.
  6. Events.-> Passing Events as Props


*/

// TODO : What are Events ?
// Events - Click Event, event Object
// Wrapper Function
// Passing Events as Props

/*
  What is the use of event in React?
  ReactJS Handling Events
  In essence, event handling in React enables a user to interact with a webpage 
  and take specified action whenever an event, like a click or a hover, takes place.
  Events in React are fired when a user interacts with an application,
  such as mouseovers, key presses, change events, and so on.

*/
