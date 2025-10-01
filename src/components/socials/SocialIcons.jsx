import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function SocialIcons() {
  return (
    <div style={{ display: "flex", gap: "10px", fontSize: "26px" }}>
      <a href="https://github.com/dkslinkyyy" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/dawid-kowalski-55343921a/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="mailto:dawid.sthlm@gmail..com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="tel:+46737481483">
        <FontAwesomeIcon icon={faPhone} />
      </a>
    </div>
  );
}

export default SocialIcons;
