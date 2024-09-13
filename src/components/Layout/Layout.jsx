import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import HeroAnimation from "../HeroAnimation/HeroAnimation";
import Hero from "../Hero/Hero";
import Main from "../Main/Main";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Header>
        <Nav />
        {location.pathname === "/" && <HeroAnimation />}
        {location.pathname === "/" && <Hero />}
      </Header>
      <Main>
        <Outlet />
        <Projects />
        <Contact />
      </Main>
      <Footer />
    </>
  );
}
