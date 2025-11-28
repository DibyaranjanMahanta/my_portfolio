import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';
import Button from './Button';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const contactPage = () => {
    navigate('/contact');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      {menuOpen && <div className="blur-overlay" onClick={closeMenu}></div>}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => navigate('/')}>
          DibyaRanjan<span className="dot">.</span>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <IoMdClose /> : <CiMenuFries />}
        </button>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="menu-link">
            <li className="menu-item">
              <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/project" onClick={closeMenu}>Project</NavLink>
            </li>
            <li className="menu-item mobile-contact">
              <Button text="Contact Me" onClick={contactPage} />
            </li>
          </ul>
        </div>

        <div className="desktop-contact">
          <Button text="Contact Me" onClick={contactPage} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
