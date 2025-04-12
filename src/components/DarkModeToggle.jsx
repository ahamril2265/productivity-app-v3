import React from 'react';

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button onClick={() => setDarkMode(!darkMode)} style={{ marginRight: '10px' }}>
      {darkMode ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

export default DarkModeToggle;
