import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./features/Counter/counterSlice";
function App() {
  // state change dispatch function --> (action ) ---> calls reducer in main Store.
  // slice for each feature to manipulate State
  const { count, username } = useSelector((state) => {
    console.log(state);
    return state.counter;
  });

  const dispatch = useDispatch();
  return (
    <>
      <h1>Hello!, {username} </h1>
      <h2>count : {count}</h2>
      <button
        onClick={() => {
          console.log(
            "we call dispatch function /  we dispatch action(redux term)"
          );
          dispatch(increment());
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          console.log(
            "we call dispatch function /  we dispatch action(redux term)"
          );
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          console.log(
            "we call dispatch function /  we dispatch action(redux term)"
          );
          dispatch(decrement());
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default App;

// Dispatch function (action) -- > reducer call--> state change ---> UI update
