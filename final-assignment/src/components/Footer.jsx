import React from 'react';
import '../style/Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faBeer } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import logo from '../assets/logo_rev.png';

library.add(faBeer, faCheckSquare, faFacebook, faInstagram, faTwitter);

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-logo"></div>
    <div>
    <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" width={150} />
        </Link>
         <p>&copy; 2025 Roll 20 Brewery. All rights reserved.</p>
         </div> 
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
        </a> 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
        </a>
     </div>
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
      </div>
    </footer>
  );
}
