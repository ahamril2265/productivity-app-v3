import React, { useState } from 'react';
import './Calculator.css'; // Import your CSS file for styling

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="calculator-container">
      <h2>🧮 Calculator</h2>
      <input className="calculator-display" value={input} readOnly />
      <div className="calculator-buttons">
        {buttons.map((btn, index) => (
          <button key={index} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
