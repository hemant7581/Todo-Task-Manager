import { createSlice } from '@reduxjs/toolkit';

// Define a slice for managing todos
const todoSlice = createSlice({
  name: 'todos', // Name of the slice
  initialState: [], // Initial state is an empty array
  reducers: {
    // Reducer for adding a new todo
    addTodo: (state, action) => {
      state.push(action.payload); // Add the new todo to the state
    },
    // Reducer for deleting a todo
    deleteTodo: (state, action) => {
      // Filter out the todo with the given id
      return state.filter(todo => todo.id !== action.payload);
    },
    // Reducer for editing a todo
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      // Find the todo with the given id
      const todoToEdit = state.find(todo => todo.id === id);
      if (todoToEdit) {
        // Update the text of the found todo
        todoToEdit.text = text;
      }
    }
  }
});

// Export actions and reducer
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;