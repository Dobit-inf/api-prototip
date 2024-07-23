import React from 'react';
import './Header.css'; // Uvozimo CSS datoteku

const Header = () => {
  return (
    <header className="header">
      <div className="logo">EcoBit API
      <img src=".\src\assets\gear.png" alt="Gear Icon" className="gear-icon" />
      </div>
    {/*   <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#services">Services</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
