import projectData from "../../projectData";
import { nanoid } from "nanoid";
import Project from "./Project/Project.jsx";
import Contact from "./Contact/Contact.jsx";
import About from "./About/About.jsx";
import "./Main.css";

export default function Main({ showAbout = false }) {
  const projectElements = projectData.map((project) => (
    <Project key={nanoid()} {...project} />
  ));

  return (
    <main className="main grid outer-container">
      {showAbout && <About />}
      <section id="projects" className="projects grid">
        <h2 className="section-header grid">Projects</h2>
        <div className="projects-container grid">{projectElements}</div>
      </section>
      <Contact />
    </main>
  );
}
