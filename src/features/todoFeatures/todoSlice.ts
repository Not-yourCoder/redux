import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../types/todo.type";

const initialState: InitialState = {
  todoItems: [],
  error: null,
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todoItems.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todoItems = state.todoItems.filter(
        (_, index) => index !== action.payload
      );
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { addTodo, deleteTodo, setError, clearError } = todoSlice.actions;
export default todoSlice.reducer;
