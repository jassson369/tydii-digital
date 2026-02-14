import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img 
            src="/tydii-logo.jpeg" 
            alt="Tydii Digital Logo" 
            className="logo-image"
            onError={(e) => {
              console.error('Logo image failed to load. Check if file exists at:', e.target.src);
            }}
          />
          <div className="logo-text-container">
            <span className="logo-text-main">TYDII</span>
            <span className="logo-text-sub">DIGITAL</span>
          </div>
        </Link>
        <div className="navbar-right">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link 
                to="/" 
                className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link 
                to="/products" 
                className={`navbar-link ${location.pathname === '/products' ? 'active' : ''}`}
              >
                Products
              </Link>
            </li>
            <li className="navbar-item">
              <Link 
                to="/about" 
                className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link 
                to="/privacy" 
                className={`navbar-link ${location.pathname === '/privacy' ? 'active' : ''}`}
              >
                Privacy
              </Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
