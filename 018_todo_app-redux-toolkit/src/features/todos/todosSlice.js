import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Learn Html fundamentals", completed: true },
  { id: "2", title: "Learn Web Dev fundamentals", completed: false },
  { id: "3", title: "Data Structure Algos", completed: true },
  { id: "4", title: "Learn Nodejs ", completed: false },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      // console.log(action);
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      // console.log(action);
      return state.filter((todo) => todo.id != action.payload.id);
    },
    toggleCompleted: (state, action) => {
      console.log(action);

      return state.map((todo) => {
        if (todo.id == action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, toggleCompleted } = todosSlice.actions;

export default todosSlice.reducer;
