import { useState, useEffect } from "react";
import "./Nav.css";

export default function Nav() {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const handleClick = () => {
    setNavDrawerOpen((prevNavDrawerOpen) => !prevNavDrawerOpen);
  };

  // Locks vertical scrolling when the nav-drawer is open
  useEffect(() => {
    document.body.style.overflow = navDrawerOpen ? "hidden" : "";
  }, [navDrawerOpen]);

  const navDrawerStyle = {
    display: navDrawerOpen ? "grid" : "none",
  };

  return (
    <nav className="nav">
      {/* Desktop nav  */}
      <ul className="nav-list nav-list--desktop">
        <li>
          <a href="index.html">Matt Colen</a>
        </li>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/matthew-colen-061650209/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/matt-colen" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
      {/* Mobile Nav  */}
      <ul className="nav-list nav-list--mobile">
        <li>
          <a href="index.html">Matt Colen</a>
        </li>
        <button className="btn" onClick={handleClick}>
          <i className="fa-solid fa-bars hamburger-icon"></i>
        </button>
      </ul>
      {/* Mobile Nav drawer  */}
      {navDrawerOpen && (
        <ul className="nav-list nav-drawer" style={navDrawerStyle}>
          <li className="close-btn">
            <button className="btn" onClick={handleClick}>
              <i className="fa-solid fa-xmark close-icon"></i>
            </button>
          </li>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/matthew-colen-061650209/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/matt-colen" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
