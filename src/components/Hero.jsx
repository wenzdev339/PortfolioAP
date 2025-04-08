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
              <span className="tag">UI/UX</span>
            </div>
          </div>
          
          <a
            href="#work"
            className={`cta-button ${isVisible ? 'visible' : ''}`}
          >
            Explore My Projects
            <span className="arrow">→</span>
          </a>
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