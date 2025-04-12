// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import notesReducer from './slices/notesSlice';
import weatherReducer from './slices/weatherSlice';
import guessGameReducer from './slices/guessGameSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    notes: notesReducer,
    weather: weatherReducer,
    guessGame: guessGameReducer,
  },
});
