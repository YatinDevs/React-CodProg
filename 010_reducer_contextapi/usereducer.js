// useReducer Hook :

/*

 - We use use Reducer hook to manage complex state.
 - Redux and useReducer are same Design format almost.
 - We can learn Redux State Management Library Easily after useReducer.
*/

// We have learned useState So far to Manage State.
// We can do Many function and state management with useState.
// But For Complex State - useReducers comes in Picture.

// useState :
// returns array [state,function to handle State]

//  as an argument takes :
// 1. initialState.

// About useReducer :
// returns an array of length 2.
// [state,function to update state]
const [data, dispatch] = useReducer(reducer, initialState);

//  as an argument takes :
// 1. reducer function. 2.initialState.

// dispatch function :
// we pass object as an argument -- > (action object).

// reducer function:
// Accept two things as parameter:
// 1 State,
// 2 action
