import { nanoid } from "nanoid";
import mattColen from "../../assets/images/matt-colen.png";
import techSkills from "../../data/techSkills.js";
import "./About.css";

export default function About() {
  const skillListItems = techSkills.map((skill) => {
    const skillId = nanoid();
    return (
      <li key={skillId} className="tag">
        {skill}
      </li>
    );
  });

  return (
    <section className="about-container grid">
      <section className="about-section grid">
        <div className="about-img-container">
          <img
            className="about-img"
            src={mattColen}
            alt="Matt Colen profile pic"
          />
        </div>
        <h1 className="title">Hi, I'm Matt</h1>
      </section>
      <section className="about-section grid">
        <h2>About me</h2>
        <p>
          Salesforce Certified Platform Administrator and Platform App Builder
          with a strong track record of improving processes, managing project
          timelines, leading cross-functional teams, analyzing and visualizing
          complex data, and acting as a lead for anything tech related.
          Passionate about using technology to simplify processes and improve
          user experiences.
        </p>
        <p>
          Check out some of my web development projects below (including
          building this site from scratch).
        </p>
      </section>
      <section className="about-section grid">
        <h2>Skills</h2>
        <ul className="tech-skills flex">{skillListItems}</ul>
      </section>
    </section>
  );
}
