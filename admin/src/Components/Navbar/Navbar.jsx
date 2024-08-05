import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/Admin_Assets/nav-logo.svg';
import navProfile from '../../assets/Admin_Assets/nav-profile.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" aria-label="Homepage">
          <img src={navlogo} alt="Website Logo" className="nav-logo" />
        </a>
        <a href="/profile" aria-label="Profile">
          <img src={navProfile} alt="Profile Icon" className="nav-profile" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
