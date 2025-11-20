import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/portfolio');
      const data = await response.json();
      setPortfolioData(data);
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!portfolioData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero personalInfo={portfolioData.personalInfo} />
      <About about={portfolioData.about} education={portfolioData.education} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Experience experience={portfolioData.experience} />
      <Contact personalInfo={portfolioData.personalInfo} />
      <Footer />
    </div>
  );
}

export default App;