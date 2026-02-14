import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Tydii Digital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
