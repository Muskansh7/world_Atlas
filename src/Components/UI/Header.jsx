import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="main-header">
      <div className="header-inner">

        {/* Left: Logo */}
        <div className="logo">
          <NavLink to="/">
            <h1>WorldAtlas</h1>
          </NavLink>
        </div>

        {/* Right: Desktop Menu */}
        <nav className="menu-web">
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/country"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Country
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="ham-menu" onClick={toggleMenu}>
          &#9776;
        </button>
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
  <span id="theme-icon">🌙</span>
</button>

      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="menu-mobile">
          <ul>
            <li>
              <NavLink 
                to="/" 
                className="mobile-link"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/about"
                className="mobile-link"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/country"
                className="mobile-link"
                onClick={toggleMenu}
              >
                Country
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/contact"
                className="mobile-link"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

    </header>
  );
};

export default Header;
