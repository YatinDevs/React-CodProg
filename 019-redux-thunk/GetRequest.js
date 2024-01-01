import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// can consider this action dispatcher
export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  const res = await axios.get("http://localhost:8001/todos2");
  console.log(res.data);
  return res.data;
}); // should be string action type

// above fetchTodos may have 3 stages :
// 1. fullfilled
// 2. rejected
// 3. pending

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  // incase of redux async thunk
  extraReducers: (builders) => {
    builders.addCase(fetchTodos.pending, (state, action) => {
      console.log("pending state..");
    });
    builders.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log("fullfilled state..");
      console.log(action.payload);
    });
    builders.addCase(fetchTodos.rejected, (state, action) => {
      console.log("rejected state..");
      console.log(action.error);
    });
  },
});

export const todoReducer = todoSlice.reducer;

// TodoList

useEffect(() => {
  dispatch(fetchTodos());
}, []);
