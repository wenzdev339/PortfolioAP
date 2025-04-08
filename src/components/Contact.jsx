// components/Contact.jsx
import React from 'react';
import '../styles/contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="animate-in" style={{ animationDelay: '0.2s' }}>Get In Touch</h2>
        
        <div className="contact-content">
          <form className="contact-form animate-in" style={{ animationDelay: '0.4s' }}>
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            
            <div className="form-group">
              <textarea 
                id="message" 
                rows="4" 
                required
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
          
          <div className="contact-info">
            <div className="info-item animate-in" style={{ animationDelay: '0.6s' }}>
              <h3>Email</h3>
              <a href="mailto:wenzdev339@gmail.com" className="underline-link">
                wenzdev339@gmail.com
              </a>
            </div>
            
            <div className="info-item animate-in" style={{ animationDelay: '0.8s' }}>
              <h3>Location</h3>
              <p>Thailand</p>
            </div>
            
            <div className="info-item animate-in" style={{ animationDelay: '1.0s' }}>
              <h3>Phone</h3>
              <a href="tel:+66961252518" className="underline-link">
                +66 096 125 2518
              </a>
            </div>
            
            <div className="info-item animate-in" style={{ animationDelay: '1.2s' }}>
              <h3>Line</h3>
              <p>ID: 0961252518</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;