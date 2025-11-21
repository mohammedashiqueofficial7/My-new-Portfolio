import { FaGithub, FaStar, FaEye, FaCheck, FaCode, FaRocket, FaLaptopCode, FaMobile } from "react-icons/fa";

const Projects = ({ projects }) => {
  const defaultProjects = [
    {
      title: "Blog Management Website [Frontend]",
      description: "Full-featured blog platform with user authentication, blog management, and AI-powered chat assistance",
      tech: "MERN Stack",
      github: "https://github.com/mohammedashiqueofficial7/BlogProject",
      features: [
        "User authentication with JWT tokens",
        "Rich text editor for blog creation", 
        "AI-powered chat assistance for content",
        "Responsive design with modern UI"
      ]
    },
    {
      title: "Blog Management Website [Backend]",
      description: "Robust backend API for blog management with advanced features and security",
      tech: "MERN Stack", 
      github: "https://github.com/mohammedashiqueofficial7/BlogBackend",
      features: [
        "RESTful API architecture",
        "JWT authentication & authorization",
        "MongoDB database with Mongoose ODM",
        "File upload handling for images"
      ]
    },
    {
      title: "E-Commerce Website",
      description: "Complete online shopping platform with user authentication and product management",
      tech: "MERN Stack",
      github: "https://github.com/mohammedashiqueofficial7",
      features: [
        "User registration and authentication",
        "Product catalog with categories", 
        "Shopping cart functionality",
        "Secure payment integration"
      ]
    },
    {
      title: "Simple Blog Website", 
      description: "Blog management system for posting and managing content with clean, minimal design",
      tech: "React.js",
      github: "https://github.com/mohammedashiqueofficial7/Blog-Website",
      features: [
        "Clean and minimal user interface",
        "Responsive design for all devices",
        "Dynamic content rendering", 
        "SEO-friendly structure"
      ]
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects, skills, and professional experience", 
      tech: "React.js",
      github: "https://github.com/mohammedashiqueofficial7/My-new-Portfolio",
      features: [
        "Modern responsive design",
        "Dark/Light mode toggle",
        "Smooth animations and transitions",
        "Contact form with email integration"
      ]
    }
  ];

  const projectList = projects || defaultProjects;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <FaCode className="section-icon" />
          Featured Projects
        </h2>
        <p className="projects-intro">
          Here are some of my recent projects that showcase my skills and passion for development
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {projectList.map((project, index) => (
            <div 
              key={index}
              style={{
                background: 'rgba(255,255,255,0.95)',
                border: '2px solid rgba(102, 126, 234, 0.1)',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 32px rgba(102, 126, 234, 0.15)',
                backdropFilter: 'blur(20px)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(102, 126, 234, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(102, 126, 234, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.1)';
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '2.5rem 2rem',
                position: 'relative',
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1.5rem',
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  color: 'rgba(255, 255, 255, 0.2)',
                  zIndex: 1
                }}>
                  0{index + 1}
                </div>
                
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  color: 'white'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginBottom: '1rem',
                    color: 'white'
                  }}>
                    {index % 3 === 0 ? <FaRocket /> : index % 3 === 1 ? <FaLaptopCode /> : <FaMobile />}
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    marginBottom: '0.75rem',
                    color: 'white',
                    lineHeight: '1.3'
                  }}>
                    {project.title}
                  </h3>
                  
                  <div style={{
                    display: 'flex',
                    gap: '0.75rem',
                    fontSize: '0.85rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '16px',
                      fontWeight: '600'
                    }}>
                      <FaStar />
                      <span>{Math.floor(Math.random() * 20) + 5}</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '16px',
                      fontWeight: '600'
                    }}>
                      <FaEye />
                      <span>{Math.floor(Math.random() * 100) + 50}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                padding: '2rem',
                color: '#334155',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem'
                }}>
                  {project.description}
                </p>

                <div style={{
                  marginBottom: '2rem'
                }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    color: 'white',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.2)'
                  }}>
                    {project.tech}
                  </span>
                </div>

                {project.features && (
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{
                      color: '#1e293b',
                      fontSize: '1rem',
                      fontWeight: '700',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      ✨ Key Features
                    </h4>
                    <div style={{
                      display: 'grid',
                      gap: '0.75rem'
                    }}>
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          padding: '0.75rem',
                          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))',
                          borderRadius: '12px',
                          border: '1px solid rgba(102, 126, 234, 0.1)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))';
                          e.currentTarget.style.transform = 'translateX(4px)';
                          e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))';
                          e.currentTarget.style.transform = 'translateX(0)';
                          e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.1)';
                        }}
                        >
                          <FaCheck style={{
                            color: '#667eea',
                            fontSize: '0.9rem',
                            marginTop: '0.1rem',
                            flexShrink: 0
                          }} />
                          <span style={{
                            color: '#475569',
                            fontSize: '0.9rem',
                            lineHeight: '1.4',
                            fontWeight: '500'
                          }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ marginTop: 'auto' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      background: 'linear-gradient(135deg, #1e293b, #334155)',
                      color: 'white',
                      padding: '0.9rem 1.8rem',
                      borderRadius: '20px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 12px rgba(30, 41, 59, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #1e293b, #334155)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 41, 59, 0.2)';
                    }}
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.95)',
          border: '2px solid rgba(102, 126, 234, 0.1)',
          borderRadius: '24px',
          padding: '3rem',
          textAlign: 'center',
          marginTop: '3rem',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(102, 126, 234, 0.15)'
        }}>
          <h3 style={{
            color: '#1e293b',
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Want to see more?
          </h3>
          <p style={{
            color: '#64748b',
            fontSize: '1.1rem',
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            Check out my GitHub for additional projects and contributions
          </p>
          <a
            href="https://github.com/mohammedashiqueofficial7"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '1.2rem 2.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
            }}
          >
            <FaGithub style={{ fontSize: '1.2rem' }} /> View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;