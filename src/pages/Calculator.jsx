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
        const output = evaluateExpression(input);
        setResult(output);
      } catch {
        setResult('Error');
      }
    } else {
      const lastChar = input[input.length - 1];
      if (isOperator(value) && isOperator(lastChar)) return; // avoid duplicate ops
      setInput(input + value);
      setResult('');
    }
  };

  const evaluateExpression = (expr) => {
    const tokens = expr.split(/([+\-*/])/).filter(token => token.trim() !== '');
    if (tokens.length < 3) return expr;

    let result = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const nextValue = parseFloat(tokens[i + 1]);

      switch (operator) {
        case '+': result += nextValue; break;
        case '-': result -= nextValue; break;
        case '*': result *= nextValue; break;
        case '/': result /= nextValue; break;
        default: throw new Error("Invalid expression");
      }
    }

    return result.toString();
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
      <input
        className="calculator-display"
        value={result || input}
        readOnly
      />
      <div className="calculator-buttons">
        {buttons.map((btn, index) => (
          <button key={index} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
