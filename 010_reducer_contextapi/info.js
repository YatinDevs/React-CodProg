/*
   ! CodProg
   - 1. useReducer Hook:
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
