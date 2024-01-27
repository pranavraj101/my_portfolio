import React from 'react';
import logo from '../images/Logo.png';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Labs</a>
      </div>
    </div>
  );
};

export default Navbar;
