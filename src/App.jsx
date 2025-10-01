import "./App.css";
import Particles from "./components/Particles";

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
      </div>
    </main>
  );
}

export default App;
