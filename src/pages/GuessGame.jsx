import React, { useState } from 'react';
import './GuessGame.css'; // Import your CSS file for styling

function GuessGame() {
  const generateRandomNumber = () => Math.floor(Math.random() * 101);

  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 0 || num > 100) {
      setMessage('Please enter a valid number between 0 and 100');
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (num === randomNumber) {
      setMessage(`🎉 Correct! You guessed it in ${newAttempts} attempts.`);
      setGameOver(true);
    } else if (newAttempts >= 5) {
      setMessage(`❌ You've used all 5 attempts. The number was ${randomNumber}.`);
      setGameOver(true);
    } else {
      setMessage(num > randomNumber ? 'Too high! Try again.' : 'Too low! Try again.');
    }

    setGuess('');
  };

  const resetGame = () => {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setAttempts(0);
    setMessage('');
    setGameOver(false);
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', textAlign: 'center' }}>
      <h2>🎯 Guess the Number</h2>
      <p>Guess a number between 0 and 100</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={gameOver}
        placeholder="Enter your guess"
      />
      <br /><br />
      <button onClick={handleGuess} disabled={gameOver}>Guess</button>
      <button onClick={resetGame} style={{ marginLeft: '10px' }}>Reset</button>
      <p>Attempts left: {5 - attempts}</p>
      <p><strong>{message}</strong></p>
    </div>
  );
}

export default GuessGame;
