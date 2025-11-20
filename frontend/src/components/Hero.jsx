import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = ({ personalInfo }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-greeting">
            <span className="wave">👋</span>
            <span>Hello, I'm</span>
          </div>
          <h1 className="gradient-text">{personalInfo.name}</h1>
          <h2 className="typing-effect">{personalInfo.title}</h2>
          <p className="location-badge">
            <span className="location-icon">📍</span>
            {personalInfo.location}
          </p>
          <div className="hero-links">
            <a href={`mailto:${personalInfo.email}`} className="hero-link email">
              <FaEnvelope />
            </a>
            <a href={`tel:${personalInfo.phone}`} className="hero-link phone">
              <FaPhone />
            </a>
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hero-link linkedin">
              <FaLinkedin />
            </a>
            <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hero-link github">
              <FaGithub />
            </a>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;