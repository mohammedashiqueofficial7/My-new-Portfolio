import React from 'react';
import { FaGraduationCap, FaUser } from 'react-icons/fa';

const About = ({ about, education }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          <FaUser className="section-icon" />
          About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>My Story</h3>
              <p>I'm a passionate <strong>Computer Science graduate</strong> from 2023, eager to make my mark in the software development industry. Based in <strong>Trivandrum, India</strong>, I recently completed an intensive MERN Stack internship at Srishti Innovative (2024-2025).</p>
              <p>My journey in programming started during my B.Tech studies, and I've been dedicated to mastering modern web technologies. I believe in learning by doing, which is why I've built multiple projects using the MERN stack.</p>
              <p>I'm excited about the opportunity to contribute to innovative projects and grow as a developer in a collaborative, growth-focused environment.</p>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Learning</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
              <div className="cv-buttons">
                <a href="/cv/Mohammed_Ashique_CV.pdf" download className="btn btn-primary">Download CV</a>
                <a href="/cv/Mohammed_Ashique_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Preview CV</a>
              </div>
            </div>
          </div>
          <div className="education">
            <div className="education-header">
              <FaGraduationCap className="education-icon" />
              <h3>Education</h3>
            </div>
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-timeline">
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                </div>
                <div className="education-content">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <div className="education-meta">
                    <span className="period">{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;