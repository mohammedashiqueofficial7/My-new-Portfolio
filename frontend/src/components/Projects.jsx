import React from "react";
import {
  FaGithub,
  FaStar,
  FaEye,
  FaCheck,
  FaCode,
} from "react-icons/fa";

const Projects = ({ projects }) => {
  const projectColors = [
    "#667eea",
    "#764ba2",
    "#f093fb",
    "#f5576c",
    "#4facfe",
    "#00f2fe",
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <FaCode className="section-icon" />
          Featured Projects
        </h2>
        <p className="projects-intro">
          Here are some of my recent projects that showcase my skills and
          passion for development
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card card-animated"
              style={{
                "--project-color": projectColors[index % projectColors.length],
              }}
            >
              <div className="project-header">
                <div className="project-number">0{index + 1}</div>
                <div className="project-stats">
                  <div className="stat">
                    <FaStar />
                    <span>{Math.floor(Math.random() * 20) + 5}</span>
                  </div>
                  <div className="stat">
                    <FaEye />
                    <span>{Math.floor(Math.random() * 100) + 50}</span>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech-stack">
                  <span
                    className="tech-badge"
                    style={{
                      background: `linear-gradient(135deg, ${
                        projectColors[index % projectColors.length]
                      }, ${projectColors[(index + 1) % projectColors.length]})`,
                    }}
                  >
                    {project.tech}
                  </span>
                </div>

                {project.features && (
                  <div className="project-features">
                    <h4 className="features-title">Key Features:</h4>
                    <ul className="features-list">
                      {project.features
                        .slice(0, 4)
                        .map((feature, featureIndex) => (
                          <li key={featureIndex} className="feature-item">
                            <FaCheck className="feature-check" />
                            <span>{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <h3>Want to see more?</h3>
          <p>Check out my GitHub for additional projects and contributions</p>
          <a
            href="https://github.com/mohammedashiqueofficial7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            <FaGithub /> View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
