import { useState } from "react";
import { useReducer } from "react";
import "./App.css";
import Counter from "./components/Counter";

// ! 1 .useReducer Hook:

// * return : useReducer --> returns array with 2 index [0,1]
// array [0:state,1:function(toupdateState)]
//   const [state, dispatch] = useReducer();

// * takes as  an argument
// 1. reducer Function.
// reducer takes args
// 1. state , 2. action
function reducer(state, action) {
  console.log("inside Reducer func", state, action);
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }
  if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  }
  return state;
  // throw new Error("invalid action type");
}
// 2. initialState.
const initialState = { count: 0, firstName: "Yatin" };
//   const [state, dispatch] = useReducer(reducer, initialState);

// dispatch function :
// we pass object (action) as an argument
// dispatch({})

function App() {
  console.log("App Rendered..");
  // const [state, setState] = useState({ count: 0 });

  const [state, dispatch] = useReducer(reducer, initialState);

  // function handler
  const handleIncrease = (e) => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const handleReset = (e) => {
    dispatch({ type: "RESET" });
  };
  const handleDecrease = (e) => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="App">
      {/* <h1>useReducer Tutorial</h1>
      <hr />
      <h2>Counter Application</h2>
      <p>Hello {state.firstName}</p>
      <h2>{state.count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrease}>Decrease</button> */}
      <Counter />
    </div>
  );
}

export default App;
