import "./Project.css";
import { nanoid } from "nanoid";

export default function Project({
  name,
  description,
  tags,
  thumbnail,
  link,
  github,
}) {
  const tagElements = tags.map((tag) => (
    <span key={nanoid()} className="tag">
      {tag}
    </span>
  ));

  return (
    <div className="project-card">
      <div className="project-card-data">
        <h3 className="project-name">{name}</h3>
        <p>{description}</p>
        <p className="tags flex">{tagElements}</p>
        <a className="btn btn--primary" href={link} target="_blank">
          View Project
        </a>
        <a className="btn btn--secondary" href={github} target="_blank">
          View GitHub
        </a>
      </div>
      <img className="project-card-img" src={thumbnail} alt="" />
    </div>
  );
}
