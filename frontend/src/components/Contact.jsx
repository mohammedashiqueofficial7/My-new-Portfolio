import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';

const Contact = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again.');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          <FaEnvelope className="section-icon" />
          Get In Touch
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Let's Connect</h3>
              <p>I'm always open to discussing new opportunities and interesting projects.</p>
              <div className="contact-details">
                <div className="contact-item email-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">{personalInfo.email}</span>
                  </div>
                </div>
                <div className="contact-item phone-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">{personalInfo.phone}</span>
                  </div>
                </div>
                <div className="contact-item location-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-card">
              <h3>Send Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
                </button>
                {submitMessage && <p className="submit-message">{submitMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;