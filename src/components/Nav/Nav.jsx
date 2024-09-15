import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const handleClick = () => {
    setNavDrawerOpen((prevNavDrawerOpen) => !prevNavDrawerOpen);
  };

  const navDrawerStyle = {
    display: navDrawerOpen ? "grid" : "none",
  };

  return (
    <nav className="nav">
      {/* Desktop nav */}
      <ul className="nav-list nav-list--desktop">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive && "selected"}>
            Matt Colen
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive && "selected"}
          >
            About
          </NavLink>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/matthew-colen-061650209/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/matt-colen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
      {/* Mobile Nav */}
      <ul className="nav-list nav-list--mobile">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive && "selected"}>
            Matt Colen
          </NavLink>
        </li>
        <button className="btn btn-ham" onClick={handleClick}>
          <i className="fa-solid fa-bars hamburger-icon"></i>
        </button>
      </ul>
      {/* Mobile Nav drawer */}
      {navDrawerOpen && (
        <ul className="nav-list nav-drawer" style={navDrawerStyle}>
          <li className="close-btn">
            <button className="btn btn-ham" onClick={handleClick}>
              <i className="fa-solid fa-xmark close-icon"></i>
            </button>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive && "selected"}
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/matthew-colen-061650209/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/matt-colen"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
