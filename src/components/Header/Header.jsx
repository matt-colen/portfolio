import Nav from "./Nav/Nav.jsx";
import Hero from "./Hero/Hero.jsx";
import { nanoid } from "nanoid";

import "./Header.css";
import { animation } from "terminal-kit/lib/spChars.js";

export default function Header() {
  const boxNumbers = [];

  for (let i = 1; i < 73; i++) {
    boxNumbers.push(i);
  }

  const boxElements = boxNumbers.map((num) => {
    const style = {
      animation: `box-shadows 10s ${Math.floor(Math.random() * num)}s infinite`,
    };
    return <div key={nanoid()} style={style} className="box"></div>;
  });

  return (
    <header className="header">
      <div className="header-background">
        {boxElements}
      </div>
      <Nav />
      <Hero />
    </header>
  );
}
