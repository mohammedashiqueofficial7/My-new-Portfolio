import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCheckCircle } from 'react-icons/fa';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          <FaBriefcase className="section-icon" />
          Professional Experience
        </h2>
        <div className="experience-grid">
          {experience && experience.length > 0 ? (
            experience.map((exp, index) => (
              <div 
                key={index} 
                className="experience-card-modern"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  border: '2px solid rgba(102, 126, 234, 0.1)',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.15)',
                  backdropFilter: 'blur(20px)',
                  overflow: 'hidden'
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
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}></div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
                  }}>
                    <FaBriefcase />
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      color: '#1e293b',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      marginBottom: '0.5rem',
                      lineHeight: '1.3'
                    }}>
                      {exp.title}
                    </h3>
                    
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#667eea',
                        fontWeight: '600'
                      }}>
                        <FaBuilding style={{ fontSize: '0.9rem' }} />
                        <span>{exp.company}</span>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#64748b',
                        fontSize: '0.9rem'
                      }}>
                        <FaCalendarAlt style={{ fontSize: '0.8rem' }} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 style={{
                    color: '#1e293b',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    🎯 Key Responsibilities
                  </h4>
                  
                  <div style={{
                    display: 'grid',
                    gap: '0.75rem'
                  }}>
                    {exp.responsibilities && exp.responsibilities.map((resp, respIndex) => (
                      <div key={respIndex} style={{
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
                        <FaCheckCircle style={{
                          color: '#667eea',
                          fontSize: '0.9rem',
                          marginTop: '0.1rem',
                          flexShrink: 0
                        }} />
                        <span style={{
                          color: '#475569',
                          fontSize: '0.95rem',
                          lineHeight: '1.5',
                          fontWeight: '500'
                        }}>
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{
              background: 'rgba(255,255,255,0.95)',
              border: '2px solid rgba(102, 126, 234, 0.1)',
              borderRadius: '24px',
              padding: '3rem',
              textAlign: 'center',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(102, 126, 234, 0.15)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                margin: '0 auto 2rem',
                boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
              }}>
                <FaBriefcase />
              </div>
              <h3 style={{
                color: '#1e293b',
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '1rem'
              }}>
                MERN Stack Developer Intern
              </h3>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                marginBottom: '2rem',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#667eea',
                  fontWeight: '600'
                }}>
                  <FaBuilding />
                  <span>Srishti Innovative, Trivandrum</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#64748b'
                }}>
                  <FaCalendarAlt />
                  <span>2024-2025</span>
                </div>
              </div>
              <div style={{
                display: 'grid',
                gap: '1rem',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                {[
                  'Built and deployed full-stack web applications using React.js, Node.js, and MongoDB',
                  'Collaborated with developers to improve application performance and maintainability',
                  'Gained hands-on experience with modern web development technologies and best practices'
                ].map((resp, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))',
                    borderRadius: '12px',
                    border: '1px solid rgba(102, 126, 234, 0.1)',
                    textAlign: 'left'
                  }}>
                    <FaCheckCircle style={{
                      color: '#667eea',
                      fontSize: '1rem',
                      marginTop: '0.1rem',
                      flexShrink: 0
                    }} />
                    <span style={{
                      color: '#475569',
                      fontSize: '1rem',
                      lineHeight: '1.5',
                      fontWeight: '500'
                    }}>
                      {resp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;