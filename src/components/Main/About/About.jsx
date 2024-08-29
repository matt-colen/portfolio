import { nanoid } from "nanoid";
import "./About.css";
import mattColen from "../../../assets/images/matt-colen.png";
import techSkills from "../../../techSkills.js";

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
          I'm a problem solver, animal lover, dedicated husband, guitar
          collector, classic rock nerd, and world traveler. In general, I love
          learning and trying to understand how things work. I currently work as
          an Operational Excellence Specialist and have an MBA and a BA in
          Psychology.
        </p>
      </section>
      <section className="about-section grid">
        <h2>Tech Skills</h2>
        <ul className="tech-skills flex">{skillListItems}</ul>
      </section>
    </section>
  );
}
