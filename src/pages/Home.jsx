import "./Home.css";
import React from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Prevent zooming and scrolling
  React.useEffect(() => {
    const disableZoom = (e) => {
      if (e.touches.length > 1) e.preventDefault();
    };
    document.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
    document.addEventListener("gesturestart", disableZoom);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("touchmove", (e) => e.preventDefault());
      document.removeEventListener("gesturestart", disableZoom);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section className="home">
      {/* Technology-themed animations */}
      <div className="tech-animations">
        {/* React logo particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`react-${i}`}
            className="react-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <svg viewBox="0 0 128 128" width="20" height="20">
              <path fill="#61DAFB" d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16"></path>
            </svg>
          </div>
        ))}

        {/* Node.js waves - made bolder */}
        <div className="node-wave"></div>

        {/* Background particles from reference design */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      <div className="hero">
        <div className="hero-content">
          <div className="text-content">
            <h1 className="name-title">
              <div className="greeting-line">
                <img
                  className="msg-img"
                  src="https://assets-global.website-files.com/64a24a477b774d01d169b819/64a2c8e6bfcebde9108de16e_13.svg"
                  alt="Chat bubble"
                />
                <span className="greeting-text">Hi, I'm</span>
              </div>
              <span className="highlight">Sakshi Bhume</span>
            </h1>

            <h2 className="tech-float">
              <span className="mern-highlight">MERN Stack developer</span> &{" "}
              <span className="ai-highlight">AI Enthusiast</span>
            </h2>
            <p className="subtitle">
              Building intelligent web solutions at the intersection of development and artificial intelligence.
            </p>
            <div className="cta-buttons">
              <button onClick={() => navigate('/projects')} className="btn primary-btn">
                View Projects
              </button>
              <button onClick={() => navigate('/skills')} className="btn secondary-btn">
                About Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
