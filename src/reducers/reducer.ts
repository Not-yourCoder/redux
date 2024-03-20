import { combineReducers } from "redux";
import todosReducer from "../features/todoFeatures/todoSlice";
import filtersReducer from "../features/todoFeatures/filterSlice";


const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
