import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoFeatures/todoSlice";
import counterReducer from "../features/counterFeatures/counterSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    counter: counterReducer,
  },
});
