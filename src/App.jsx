import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Particles from "./components/Particles";
import SocialIcons from "./components/socials/SocialIcons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <main>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Particles
          particleColors={["#FFFCFB", "#FFFCFB"]}
          particleCount={1000}
          particleSpread={20}
          speed={0.1}
          cameraDistance={60}
          particleBaseSize={150}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="hero">
        <div className="portrait">
          <img src="https://dkslinkyyy.dev/assets/portrait-large.jpg" alt="" />
        </div>
        <div className="hero-description">
          <h1>Dawid Kowalski</h1>
          <p>Utvecklare och mycket mer..</p>
        </div>
        <div className="socials">
          <SocialIcons />
        </div>
      </div>

      <div className="projects">
        <div className="content">
          <h2>Projects</h2>
          <FontAwesomeIcon icon={faArrowDown} style={{ fontSize: "24px" }} />
          <p className="soon">Coming soon..</p>
        </div>
      </div>
    </main>
  );
}

export default App;
