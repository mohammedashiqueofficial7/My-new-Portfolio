import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h2>Mohammed Ashique S</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
};

export default Header;