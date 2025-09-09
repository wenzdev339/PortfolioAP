// components/About.jsx
import React from 'react';
import '../styles/about.scss';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="animate-in" style={{ animationDelay: '0.2s' }}>About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="animate-in" style={{ animationDelay: '0.4s' }}>
              My name is Anatcha Pankean (Owen), a Computer Engineering graduate from Naresuan University. I'm a Full Stack Developer with strong interests in Business Analysis, Business Intelligence, and Data-driven solutions. Alongside web and application development, I have over 8 years of experience in Game Development and Game Design using Unity and C#, creating engaging and innovative gameplay experiences. I combine technical expertise with business insight to build solutions that deliver both functionality and strategic value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;