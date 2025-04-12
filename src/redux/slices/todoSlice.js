// src/redux/slices/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({ text: action.payload, completed: false });
    },
    toggleComplete(state, action) {
      state.tasks[action.payload].completed = !state.tasks[action.payload].completed;
    },
    deleteTask(state, action) {
      state.tasks.splice(action.payload, 1);
    },
    setTasks(state, action) {
      state.tasks = action.payload;
    }
  }
});

export const { addTask, toggleComplete, deleteTask, setTasks } = todoSlice.actions;
export default todoSlice.reducer;
