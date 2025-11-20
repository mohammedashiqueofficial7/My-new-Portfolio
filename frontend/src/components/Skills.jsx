import React from 'react';
import { FaCode, FaServer, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';

function Skills({ skills }) {
  const logoMap = {
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'Material-UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    'Framer Motion': 'https://img.icons8.com/color/48/framer.png',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'RESTful APIs': 'https://img.icons8.com/color/48/api-settings.png',
    'JWT Authentication': 'https://img.icons8.com/color/48/json-web-token.png',
    'Middleware': 'https://img.icons8.com/color/48/server.png',
    'Server-side Rendering': 'https://img.icons8.com/color/48/server.png',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Mongoose': 'https://img.icons8.com/color/48/mongoose.png',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Database Design': 'https://img.icons8.com/color/48/database.png',
    'Aggregation': 'https://img.icons8.com/color/48/database.png',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'Postman': 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    'npm': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
    'Webpack': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
    'Babel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg',
    'ESLint': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'MS Office': 'https://img.icons8.com/color/48/microsoft-office-2019.png'
  };

  const skillCategories = [
    {
      title: 'Frontend',
      skills: skills.frontend.map(skill => ({ name: skill, logo: logoMap[skill] || 'https://img.icons8.com/color/48/code.png' })),
      color: '#61dafb',
      bgColor: 'rgba(97, 218, 251, 0.1)',
      icon: <FaCode />
    },
    {
      title: 'Backend',
      skills: skills.backend.map(skill => ({ name: skill, logo: logoMap[skill] || 'https://img.icons8.com/color/48/server.png' })),
      color: '#68d391',
      bgColor: 'rgba(104, 211, 145, 0.1)',
      icon: <FaServer />
    },
    {
      title: 'Database',
      skills: skills.database.map(skill => ({ name: skill, logo: logoMap[skill] || 'https://img.icons8.com/color/48/database.png' })),
      color: '#f6ad55',
      bgColor: 'rgba(246, 173, 85, 0.1)',
      icon: <FaDatabase />
    },
    {
      title: 'Tools',
      skills: skills.tools.map(skill => ({ name: skill, logo: logoMap[skill] || 'https://img.icons8.com/color/48/toolbox.png' })),
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
}

export default Skills;