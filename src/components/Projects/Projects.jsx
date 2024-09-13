import { nanoid } from "nanoid";
import Project from "../Project/Project.jsx";
import projectData from "../../data/projectData";
import "./Projects.css";

export default function Projects() {
  const projectElements = projectData.map((project) => (
    <Project key={nanoid()} {...project} />
  ));

  return (
    <section id="projects" className="projects grid">
      <h2 className="section-header grid">Projects</h2>
      <div className="projects-container grid">{projectElements}</div>
    </section>
  );
}
