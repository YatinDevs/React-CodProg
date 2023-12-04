/*
   ! CodProg
   - 1. useReducer Hook:                     // 010 reducer-contextapi
   - 2. Todo List App using useReducer Hook.  // - todo-app-usingreducer
   - 3. createContext and useContext Syntax.   // 012 useContext_tutorial
   - 4. Context Example and Provider Component. 
   - 5. Add Context to Todo-List App.
   - 6. React Portals.
   - 7. ShoppingCart Project Overview .
   - 8. Basic Setup of Shopping Cart Application.
   - 9. Create Cart Context.
   - 10. Create a Modal for Displaying the Cart
   - 11. Display Cart Items.
   - 12. Header Styling
   - 13. Products Styling.
   - 14. Cart Styling and Media Queries.

*/

// ? 1 .useReducer Hook:

// * return : useReducer --> returns array with 2 index [0,1]
// array [0:state,1:function(toupdateState)]
//   const [state, dispatch] = useReducer();

// * takes as  an argument
// 1. reducer Function.
function reducer() {}
// 2. initialState.
const initialState = { count: 0 };
//   const [state, dispatch] = useReducer(reducer, initialState);

// dispatch function :
// we pass object (action) as an argument
// dispatch({})

// ? - 3. createContext and useContext Syntax.  // - 012 useContext_tutorial
// prop drilling
// toavoid prop drilling we use context

// How to use useContext ?
// step 1 : Import createContext from React.
// step 2 : create a context outside the component.
