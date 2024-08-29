import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav/Nav.jsx";
import Hero from "./Hero/Hero.jsx";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [boxes, setBoxes] = useState(0);
  const [boxNumbers, setBoxNumbers] = useState([]);
  const location = useLocation(); // Hook to get the current location

  // Sets state of Window width
  useEffect(() => {
    const setWindowSize = () => {
      window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };

    setWindowSize();

    return () => window.removeEventListener("resize", setWindowSize);
  }, []);

  useEffect(() => {
    setBoxes(() => {
      let boxes;
      if (width > 1000) {
        boxes = 72;
      } else {
        boxes = 54;
      }
      return boxes;
    });
  }, [width]);

  useEffect(() => {
    const boxNumbers = [];
    for (let i = 1; i < boxes; i++) {
      boxNumbers.push(i);
    }
    setBoxNumbers(boxNumbers);
  }, [boxes]);

  const boxElements = boxNumbers.map((num) => {
    const style = {
      animation: `box-shadows 10s ${Math.floor(Math.random() * num)}s infinite`,
    };
    return <div key={nanoid()} style={style} className="box"></div>;
  });

  return (
    <header className="header outer-container">
      {location.pathname === "/" && (
        <div className="header-background">{boxElements}</div>
      )}
      <Nav />
      {location.pathname === "/" && <Hero />} {/* Conditionally render Hero */}
    </header>
  );
}
