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
          Salesforce Business Systems Analyst at FCS Financial with 5x certifications and a background in state government operations, process improvement, and data governance. Experienced serving as a primary platform contact, guiding agile delivery teams, and translating complex business needs into scalable Salesforce solutions. MBA with a strong foundation in UX and system configuration.
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
