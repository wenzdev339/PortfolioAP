// components/Footer.jsx
import React from 'react';
import '../styles/footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {currentYear} Anatcha Pankean. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;