import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    todos: todoReducer, // Set the todos reducer
  },
});

// Export the configured store
export default store;
