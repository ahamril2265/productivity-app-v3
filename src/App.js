import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import DarkModeToggle from './components/DarkModeToggle';
import ProfileButton from './components/ProfileButton';

import Home from './pages/Home';
import GuessGame from './pages/GuessGame';
import Calculator from './pages/Calculator';
import Notes from './pages/Notes';
import TodoList from './pages/TodoList';
import Profile from './pages/Profile';
import Weather from './pages/Weather';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark' : ''}`}>
        <Navbar />
        <div className="main-content">
          <div className="top-bar">
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <ProfileButton />
          </div>
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/guess" element={<GuessGame />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/todo" element={<TodoList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/weather" element={<Weather />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
