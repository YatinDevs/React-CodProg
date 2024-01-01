import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// can consider this action dispatcher
export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  const res = await axios.get("http://localhost:8001/todos");
  // console.log(res.data);
  // await pause(1400);
  return res.data;
}); // should be string action type

// above fetchTodos may have 3 stages :
// 1. fullfilled
// 2. rejected
// 3. pending

//addTodo
export const addTodo = createAsyncThunk("todos/add", async (title) => {
  const res = await axios.post("http://localhost:8001/todos", {
    title: title,
    completed: false,
  });
  console.log("posting", res.data);
  // await pause(1400);

  // console.log(res.data);
  return res.data;
});

const pause = (duration) => {
  return new Promise((res) => {
    setTimeout(res, duration);
  });
};
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    error: null,
    data: [],
  },
  // incase of redux async thunk
  extraReducers: (builders) => {
    // Fetch Todo
    builders.addCase(fetchTodos.pending, (state, action) => {
      console.log("fetchTodos,pending state..");
      state.isLoading = true;
    });
    builders.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log("fetchTodos,fullfilled state..");
      state.isLoading = false;
      state.data = action.payload;
      console.log(action.payload);
    });
    builders.addCase(fetchTodos.rejected, (state, action) => {
      console.log("fetchTodos,rejected state..");
      state.isLoading = false;
      console.log(action.error);
      state.error = action.error;
    });
    // AddTodo
    builders.addCase(addTodo.pending, (state, action) => {
      console.log("addTodo,pending state..");
      state.isLoading = true;
    });
    builders.addCase(addTodo.fulfilled, (state, action) => {
      console.log("addTodo,fullfilled state..");
      state.isLoading = false;
      state.data.push(action.payload);
      console.log(action.payload);
    });
    builders.addCase(addTodo.rejected, (state, action) => {
      console.log("addTodo,rejected state..");
      state.isLoading = false;
      console.log(action.error);
      state.error = action.error;
    });
  },
});

export const todoReducer = todoSlice.reducer;
