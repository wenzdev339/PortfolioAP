// components/CustomCursor.jsx
import React, { useEffect } from 'react';
import '../styles/custom-cursor.scss';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const updateCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    
    // Handle hover states for interactive elements
    const handleMouseEnter = () => {
      cursor.classList.add('expanded');
    };
    
    const handleMouseLeave = () => {
      cursor.classList.remove('expanded');
    };
    
    // Add event listeners
    window.addEventListener('mousemove', updateCursor);
    
    // Add hover effect for all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-image');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.body.removeChild(cursor);
    };
  }, []);
  
  return null; // This component doesn't render anything directly
};

export default CustomCursor;