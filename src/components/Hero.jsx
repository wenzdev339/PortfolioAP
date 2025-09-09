// components/Hero.jsx
import React, { useEffect, useState } from 'react';
import Profile from '../assets/profile-photo.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-heading">
            <h1 className={`hello ${isVisible ? 'visible' : ''}`}>
              Hello,
            </h1>
            <h1 className={`name ${isVisible ? 'visible' : ''}`}>
              I'm <span>Anatcha Pankean</span>
            </h1>
          </div>
          
          <div className={`hero-subtitle ${isVisible ? 'visible' : ''}`}>
            <div className="text-wrapper">
              <span className="profession">Full Stack</span>
              <span className="ampersand">&</span>
              <span className="profession">Game Developer</span>
            </div>
            <div className="hero-tags">
              <span className="tag">Frontend</span>
              <span className="tag">Backend</span>
              <span className="tag">Unity</span>
              <span className="tag">Business Intelligence</span>
            </div>
          </div>
          
          <div className={`hero-actions ${isVisible ? 'visible' : ''}`}>
            <a
              href="#work"
              className="cta-button"
            >
              Explore My Projects
              <span className="arrow">→</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/anatcha-pankean-494a1b257"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-button"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className={`hero-visual ${isVisible ? 'visible' : ''}`}>
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          
          {/* Photo wrapper */}
          <div className="photo-container">
            <img src={Profile} alt="Anatcha Pankean" className="profile-photo" />
          </div>
          
          <div className="circle"></div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="decorative-element element-1"></div>
      <div className="decorative-element element-2"></div>
    </section>
  );
};

export default Hero;