// components/Navigation.jsx
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll for section highlighting and navbar background
  useEffect(() => {
    const handleScroll = () => {
      // Add background to nav when scrolled
      setScrolled(window.scrollY > 50);
      
      // Highlight active section
      const sections = ['home', 'about', 'education', 'skills', 'work', 'contact']; // Added 'education'
      const scrollPosition = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const topPosition = element.offsetTop - 100;
          const bottomPosition = topPosition + element.offsetHeight;
          
          if (scrollPosition >= topPosition && scrollPosition < bottomPosition) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo">
          Anatcha Pankean
          <span className="logo-dot"></span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Desktop menu */}
        <div className="desktop-menu">
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
          >
            <span>Home</span>
          </a>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
          >
            <span>About</span>
          </a>
          <a 
            href="#education" 
            className={activeSection === 'education' ? 'active' : ''}
          >
            <span>Education</span>
          </a>
          <a 
            href="#skills" 
            className={activeSection === 'skills' ? 'active' : ''}
          >
            <span>Skills</span>
          </a>
          <a 
            href="#work" 
            className={activeSection === 'work' ? 'active' : ''}
          >
            <span>Work</span>
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
          >
            <span>Contact</span>
          </a>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a 
          href="#home" 
          onClick={toggleMenu} 
          className={activeSection === 'home' ? 'active' : ''}
        >
          Home
        </a>
        <a 
          href="#about" 
          onClick={toggleMenu} 
          className={activeSection === 'about' ? 'active' : ''}
        >
          About
        </a>
        <a 
          href="#education" 
          onClick={toggleMenu} 
          className={activeSection === 'education' ? 'active' : ''}
        >
          Education
        </a>
        <a 
          href="#skills" 
          onClick={toggleMenu} 
          className={activeSection === 'skills' ? 'active' : ''}
        >
          Skills
        </a>
        <a 
          href="#work" 
          onClick={toggleMenu} 
          className={activeSection === 'work' ? 'active' : ''}
        >
          Work
        </a>
        <a 
          href="#contact" 
          onClick={toggleMenu} 
          className={activeSection === 'contact' ? 'active' : ''}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;