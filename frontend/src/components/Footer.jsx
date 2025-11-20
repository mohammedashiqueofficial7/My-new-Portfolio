import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>Made with <FaHeart className="heart" /> by Mohammed Ashique S</p>
            <p>&copy; 2025 All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/mohammedashiqueofficial7" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/mohammed-ashique-s-13613b339" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:ashiqueoffl7@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;