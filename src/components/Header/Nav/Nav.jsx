import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const location = useLocation(); // Hook to get the current location

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
          <Link to="/">Matt Colen</Link>
        </li>
        <li>
          <Link to="/" className={location.pathname === "/" ? "selected" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "selected" : ""}
          >
            About
          </Link>
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
          <Link to="/">Matt Colen</Link>
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
            <Link
              to="/"
              className={location.pathname === "/" ? "selected" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "selected" : ""}
            >
              About
            </Link>
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
      )}
    </nav>
  );
}
