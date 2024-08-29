import { useState } from "react";
import "./Nav.css";

export default function Nav({ homePage }) {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const handleClick = () => {
    setNavDrawerOpen((prevNavDrawerOpen) => !prevNavDrawerOpen);
  };

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
          <a href="index.html" className={homePage ? "selected" : undefined}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={!homePage ? "selected" : undefined}>
            About
          </a>
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
        <button className="btn btn-ham" onClick={handleClick}>
          <i className="fa-solid fa-bars hamburger-icon"></i>
        </button>
      </ul>
      {/* Mobile Nav drawer  */}
      {navDrawerOpen && (
        <ul className="nav-list nav-drawer" style={navDrawerStyle}>
          <li className="close-btn">
            <button className="btn btn-ham" onClick={handleClick}>
              <i className="fa-solid fa-xmark close-icon"></i>
            </button>
          </li>
          <li>
            <a href="index.html" className={homePage ? "selected" : undefined}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={!homePage ? "selected" : undefined}>
              About
            </a>
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
