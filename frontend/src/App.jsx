import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [portfolioData, setPortfolioData] = useState({
    personalInfo: {
      name: "Mohammed Ashique S",
      title: "MERN Stack Developer",
      email: "ashiqueoffl7@gmail.com",
      phone: "+91 79028 57903",
      linkedin: "linkedin.com/in/mohammed-ashique-s-13613b339",
      github: "github.com/mohammedashiqueofficial7"
    },
    about: "Passionate MERN Stack Developer with experience in building modern web applications.",
    education: [],
    experience: [],
    projects: []
  });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      const apiUrl = import.meta.env.PROD ? '/api/portfolio' : 'http://localhost:5000/api/portfolio';
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPortfolioData(data);
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };



  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero personalInfo={portfolioData.personalInfo} />
      <About about={portfolioData.about} />
      <Education />
      <Skills />
      <Projects projects={portfolioData.projects} />
      <Experience experience={portfolioData.experience} />
      <Contact personalInfo={portfolioData.personalInfo} />
      <Footer />
    </div>
  );
}

export default App;