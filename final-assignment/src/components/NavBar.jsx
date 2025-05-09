import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.css';
import logo from '../assets/logo.png'; // Assuming you have a logo image

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" width={250} />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}