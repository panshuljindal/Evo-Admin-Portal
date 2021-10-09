import "./style.css";
import { ReactComponent as Instagram } from "./assets/instagram.svg";
import { ReactComponent as Twitter } from "./assets/twitter.svg";
import { ReactComponent as Linkedin } from "./assets/linkedin.svg";
import { ReactComponent as Facebook } from "./assets/facebook.svg";
import { ReactComponent as Mail } from "./assets/mail.svg";
function Connect() {
  return (
    <div className="connect">
      <h3>Connect With Us</h3>
      <div className="box">
        <ul>
          <a
            href="https://instagram.com/evoappin"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <Instagram /> &ensp; Instagram
            </li>
          </a>
          <a
            href="https://twitter.com/EvoAppIn"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <Twitter /> &ensp; Twitter
            </li>
          </a>
          <a
            href="https://www.facebook.com/EvoAppIn/"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <Facebook /> &ensp; Facebook
            </li>
          </a>
          <a
            href="https://www.linkedin.com/company/evoappin"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <Linkedin />&ensp; Linkedin
            </li>
          </a>
          <a href="mailto: evoappin@gmail.com" target="_blank" rel="noreferrer">
            <li>
              <Mail /> &ensp; E-Mail
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Connect;
