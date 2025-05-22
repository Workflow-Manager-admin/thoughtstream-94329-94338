// PUBLIC_INTERFACE
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer component for ThoughtStream blog with copyright information,
 * social links, and additional navigation links.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">ThoughtStream</h3>
            <p className="footer-description">
              A personal blog platform for sharing thoughts, experiences, and insights across various topics.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a href="https://twitter.com" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">Twitter</span>
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">Instagram</span>
              </a>
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} ThoughtStream. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
