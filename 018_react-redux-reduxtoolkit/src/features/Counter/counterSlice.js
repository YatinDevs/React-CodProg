import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, username: "Yatin Chaudhari" };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1; // other state are preserved internally
      // Redux uses internally immer js so here internally its not directly mutating state
      // it handles immutable data

      // we can return as well like this
      /*
       return {...state,count:state.count +1}
      */
      //   return { count: state.count + 1 };
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// const counterReducer = ;

// console.log(counterSlice.actions);
export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
