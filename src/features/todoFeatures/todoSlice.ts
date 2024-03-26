import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../types/todo.type";

const initialState: InitialState = {
  todoItems: [],
  loading: false,
  error: null,
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.loading = false;
      state.todoItems = [...state.todoItems, action.payload];
      return state
    },
    fetchTodoStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTodoSuccess(state, action) {
      state.loading = false;
      state.todoItems = action.payload;
    },
    fetchTodoFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todoItems = state.todoItems.filter(
        (_, index) => index !== action.payload
      );
    },
  },
});

export const { fetchTodoStart, fetchTodoFailure, fetchTodoSuccess, addTodo, deleteTodo} =
  todoSlice.actions;
export default todoSlice.reducer;
