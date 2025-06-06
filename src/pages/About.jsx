import Skills from "./Skills"
import { FaDownload } from "react-icons/fa"
import "./About.css"

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>About Me</h1>
          <div className="header-line"></div>
        </div>

        <div className="about-main-content">
          <div className="about-cards">
            <div className="about-card left-card">
              <div className="card-content">
                <h3>Who I Am</h3>
                <p>
                  I'm a passionate full-stack developer with expertise in the MERN stack and a strong interest in
                  artificial intelligence. My journey in tech combines creativity with problem-solving to build
                  impactful solutions.
                </p>
              </div>
            </div>

            <div className="about-card right-card">
              <div className="card-content">
                <h3>What I Do</h3>
                <p>
                  When I'm not coding, you can find me exploring new AI research papers, contributing to open-source
                  projects, or mentoring aspiring developers.
                </p>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <a href="/assets/SakshiBhume_Resume.pdf" download className="download-btn">
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="skills-wrapper">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
