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

      <div className="background">
        <section className="hero">
          <div className="hero-portrait">
            <div className="portrait">
              <img
                src="https://dkslinkyyy.dev/assets/portrait-large.jpg"
                alt=""
              />
            </div>

            <SocialIcons />
          </div>

          <div className="hero-description">
            <h1>Hello, I am Dawid!</h1>
            <p>I am a self-taught developer pursuing my dreams!</p>
            <p>Been coding on & off since 2015</p>
            <p>I like the gym, exercising and just being active.</p>
          </div>
        </section>

        <section className="tech-stack">
          <h2>Tech Stack</h2>
          <p>This is some tools i use to do my work</p>

          <div className="section">
            <div className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" />
            </div>
            <div className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
            </div>
            <div className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" />
            </div>
            <div className="icon">
              <div className="icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              </div>
            </div>
          </div>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <div className="project">
            <a
              href="https://lagomkul.se"
              target="_blank"
              rel="noopener noreferrer"
              className="project"
            >
              <div className="overlay">
                <p>Lagomkul.se</p>
              </div>
              <div className="project-img">
                <img src="/lagomkul.png" alt="Lagomkul project" />
              </div>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
