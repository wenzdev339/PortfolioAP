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
              I'm a Full Stack Developer with a versatile skill set spanning both frontend and backend development. I specialize in crafting applications and websites with seamless user experiences and robust functionality.
            </p>
            <p className="animate-in" style={{ animationDelay: '0.6s' }}>
              While I enjoy working on various web and application projects, my greatest passion lies in game development—an area where I excel and find the most fulfillment. I have a proven track record of creating engaging game experiences and bringing creative concepts to life.
            </p>
            <p className="animate-in" style={{ animationDelay: '0.8s' }}>
              Beyond development, I actively participate in management and business initiatives, where I contribute strategic insights and technical expertise. I also have a keen eye for UI/UX design, and I take pride in creating interfaces that are not only aesthetically pleasing but also intuitive and user-friendly.
            </p>
          </div>
          
          <div className="about-skills">
            <div className="skill-card animate-in" style={{ animationDelay: '1.0s' }}>
              <h3>Full Stack Development</h3>
              <p>Building complete applications from frontend to backend with modern frameworks and technologies.</p>
            </div>
            
            <div className="skill-card animate-in" style={{ animationDelay: '1.2s' }}>
              <h3>Game Development</h3>
              <p>Creating engaging games with Unity Engine, focusing on innovative gameplay and immersive experiences.</p>
            </div>
            
            <div className="skill-card animate-in" style={{ animationDelay: '1.4s' }}>
              <h3>UI/UX Design</h3>
              <p>Designing intuitive and beautiful interfaces that enhance user experience and visual appeal.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;