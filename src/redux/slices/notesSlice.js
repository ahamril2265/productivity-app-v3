// src/redux/slices/notesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: ''
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNoteText(state, action) {
      state.text = action.payload;
    }
  }
});

export const { setNoteText } = notesSlice.actions;
export default notesSlice.reducer;
