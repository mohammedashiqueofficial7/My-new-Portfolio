import React from 'react';
import { FaCode, FaServer, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';

const Skills = ({ skills }) => {
  const skillCategories = [
    { 
      title: 'Frontend', 
      skills: [
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
      ], 
      color: '#61dafb', 
      bgColor: 'rgba(97, 218, 251, 0.1)',
      icon: <FaCode />
    },
    { 
      title: 'Backend', 
      skills: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'RESTful APIs', logo: 'https://img.icons8.com/color/48/api-settings.png' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
      ], 
      color: '#68d391', 
      bgColor: 'rgba(104, 211, 145, 0.1)',
      icon: <FaServer />
    },
    { 
      title: 'Database', 
      skills: [
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Mongoose', logo: 'https://img.icons8.com/color/48/mongoose.png' }
      ], 
      color: '#f6ad55', 
      bgColor: 'rgba(246, 173, 85, 0.1)',
      icon: <FaDatabase />
    },
    { 
      title: 'Tools', 
      skills: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'MS Office', logo: 'https://img.icons8.com/color/48/microsoft-office-2019.png' }
      ], 
      color: '#fc8181', 
      bgColor: 'rgba(252, 129, 129, 0.1)',
      icon: <FaTools />
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <FaBrain className="section-icon" />
          Skills & Technologies
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category" style={{ backgroundColor: category.bgColor }}>
              <div className="skill-header">
                <div className="skill-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3 style={{ color: category.color }}>{category.title}</h3>
              </div>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item-card">
                    <div className="skill-logo">
                      <img src={skill.logo} alt={skill.name} />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;