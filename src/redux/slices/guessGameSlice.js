// src/redux/slices/guessGameSlice.js
import { createSlice } from '@reduxjs/toolkit';

const generateNumber = () => Math.floor(Math.random() * 101);

const initialState = {
  target: generateNumber(),
  attempts: 0,
  message: '',
  gameOver: false,
};

const guessGameSlice = createSlice({
  name: 'guessGame',
  initialState,
  reducers: {
    makeGuess(state, action) {
      if (state.gameOver) return;

      const guess = parseInt(action.payload);
      state.attempts += 1;

      if (guess === state.target) {
        state.message = `🎉 Correct! You guessed it in ${state.attempts} tries.`;
        state.gameOver = true;
      } else if (state.attempts >= 5) {
        state.message = `❌ You lost. The number was ${state.target}.`;
        state.gameOver = true;
      } else {
        state.message = guess > state.target ? 'Too high!' : 'Too low!';
      }
    },
    resetGame(state) {
      state.target = generateNumber();
      state.attempts = 0;
      state.message = '';
      state.gameOver = false;
    }
  }
});

export const { makeGuess, resetGame } = guessGameSlice.actions;
export default guessGameSlice.reducer;
