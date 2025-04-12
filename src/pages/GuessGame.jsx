import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeGuess, resetGame } from '../redux/slices/guessGameSlice';
import './GuessGame.css';

function GuessGame() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { attempts, message, gameOver } = useSelector((state) => state.guessGame);

  const handleGuess = () => {
    if (!input.trim()) return;
    dispatch(makeGuess(input));
    setInput('');
  };

  return (
    <div className="guessgame-container">
      <h2>🎯 Guess the Number</h2>
      <p>Guess a number between 0 and 100</p>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={gameOver}
      />
      <br /><br />
      <button onClick={handleGuess} disabled={gameOver}>Guess</button>
      <button onClick={() => dispatch(resetGame())}>Reset</button>
      <p>Attempts left: {5 - attempts}</p>
      <p><strong>{message}</strong></p>
    </div>
  );
}

export default GuessGame;
