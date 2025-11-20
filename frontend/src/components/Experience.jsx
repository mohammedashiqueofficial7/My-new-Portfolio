import { FaBriefcase, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          <FaBriefcase className="section-icon" />
          Professional Experience
        </h2>
        <div className="experience-single-column">
          <div className="section-header">
            <div className="header-icon">
              <FaBriefcase />
            </div>
            <h3>Professional Experience</h3>
          </div>
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-timeline">
                <div className="timeline-dot"></div>
                {index < experience.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="experience-card">
                <div className="experience-header">
                  <h4>{exp.title}</h4>
                  <div className="experience-meta">
                    <span className="company">
                      <FaBuilding /> {exp.company}
                    </span>
                    <span className="period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;