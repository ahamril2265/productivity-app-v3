// src/pages/Home.jsx
import React from 'react';
import './Home.css'; // Import your CSS file for styling
function Home() {
  return (
    <div className="home-container">
      <h1>🚀 Welcome to My React Projects Hub</h1>
      <p>This website is a collection of mini projects built using <strong>JavaScript</strong>, <strong>React</strong>, <strong>HTML</strong>, and <strong>CSS</strong>.</p>

      <h3>🧩 What You’ll Find Here:</h3>
      <ul>
        <li><strong>Guess Game</strong> – A fun number guessing game with 5 chances and instant feedback.</li>
        <li><strong>Calculator</strong> – A clean calculator that performs basic arithmetic operations.</li>
        <li><strong>Notes</strong> – A simple notepad that saves text automatically using localStorage.</li>
        <li><strong>To-Do List</strong> – Manage your daily tasks with an easy checklist, stored locally.</li>
        <li><strong>Profile</strong> – A brief about me and my journey.</li>
      </ul>

      <p>✨ This site also features a custom <strong>Dark Mode Toggle</strong> and a stylish <strong>Sidebar Navigation</strong> for a smooth user experience.</p>

      <p>Thank you for visiting! 😊</p>
    </div>
  );
}
export default Home;
