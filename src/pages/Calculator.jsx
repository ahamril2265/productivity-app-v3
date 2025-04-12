import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const isOperator = (char) => ['+', '-', '*', '/'].includes(char);

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        const safeResult = computeExpression(input);
        setResult(safeResult);
      } catch {
        setResult('Error');
      }
    } else {
      const lastChar = input[input.length - 1];
      if (isOperator(value) && isOperator(lastChar)) return; // Prevent chaining ops
      setInput(input + value);
    }
  };

  const computeExpression = (exp) => {
    const tokens = exp.split(/([+\-*/])/).filter(Boolean);
    let stack = [];
    let current = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const op = tokens[i];
      const next = parseFloat(tokens[i + 1]);
      if (isNaN(next)) throw Error('Invalid');
      switch (op) {
        case '+': current += next; break;
        case '-': current -= next; break;
        case '*': current *= next; break;
        case '/': current /= next; break;
        default: throw Error('Invalid operator');
      }
    }

    return current.toString();
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
      <input className="calculator-display" value={input || result} readOnly />
      <div className="calculator-buttons">
        {buttons.map((btn, index) => (
          <button key={index} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
