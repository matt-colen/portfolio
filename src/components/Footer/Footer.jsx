import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list flex">
        <li>
          <a
            href="https://www.linkedin.com/in/matthew-colen-061650209/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.salesforce.com/trailblazer/matthewcolen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Matt Colen's Salesforce Trailblazer profile"
          >
            <i className="fa-brands fa-salesforce"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/matt-colen" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
      <p className="copyright">
        <span>© {`${new Date().getFullYear()} `} Matt Colen.</span>
        <span> All Rights Reserved</span>
      </p>
    </footer>
  );
}
