"use client";

import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    setMenuOpen(false); // Close the menu
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <div className="creative-logo">
            <span className="logo-circle"></span>
            <span className="logo-text">Sakshi</span>
          </div>
        </Link>
      </div>

      <div className={`nav-container ${menuOpen ? "open" : ""}`}>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/" onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={handleNavLinkClick}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleNavLinkClick}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/connect" onClick={handleNavLinkClick}>
                Connect
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>
    </header>
  );
};

export default Header;
