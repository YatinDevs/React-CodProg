import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";

// Created Store -> will Consist whole application State.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
