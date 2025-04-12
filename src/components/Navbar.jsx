import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="sidebar">
      <h2 className="logo">MySite</h2>
      <nav>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/guess" className="nav-link">Guess Game</NavLink>
        <NavLink to="/calculator" className="nav-link">Calculator</NavLink>
        <NavLink to="/notes" className="nav-link">Notes</NavLink>
        <NavLink to="/todo" className="nav-link">To-Do List</NavLink>
        <NavLink to="/weather" className="nav-link">Weather</NavLink>
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
