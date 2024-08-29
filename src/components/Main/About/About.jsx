import "./About.css";
import mattColen from "../../../assets/images/matt-colen.png";

export default function About() {
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
          I'm a problem solver, corgi and beagle lover, dedicated husband,
          guitar collector, classic rock nerd, and world traveler.
        </p>
      </section>
      <section className="about-section grid">
        <h2>Technical Skills</h2>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>UX/UI Design</li>
          <li>Figma</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Command Line</li>
          <li>Asana</li>
          <li>Tableau</li>
          <li>M365 suite</li>
        </ul>
      </section>
      <section className="about-section grid">
        <h2>Experience and Education</h2>
        <ul>
          <li>
            Current job - Operational Excellence manager with the State of
            Missouri
          </li>
          <li>Master of Business Administration (MBA)</li>
          <li>Bachelor of Arts (BA) in Psychology</li>
        </ul>
      </section>
    </section>
  );
}
