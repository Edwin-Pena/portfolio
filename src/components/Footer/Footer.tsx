import "./Footer.css";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="social-links">
        <li className="social-link">
          <a
            href="https://www.linkedin.com/in/edwin-pe%C3%B1a-frontend-developer/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </li>

        <li className="social-link">
          <a href="https://github.com/Edwin-Pena" target="_blank">
            <GitHubIcon />
          </a>
        </li>

        <li className="social-link">
          <a href="mailto:edwinsp095@gmail.com" target="_blank">
            <MailIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
