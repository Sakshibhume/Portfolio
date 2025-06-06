import "./Skills.css"
import { FaReact, FaNodeJs, FaCode, FaRobot, FaPython, FaGitAlt, FaDownload } from "react-icons/fa"
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiGooglecloud, SiMysql } from "react-icons/si"

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact />, color: "#61DAFB", level: 5 },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", level: 5 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", level: 4 },
    { name: "Node.js", icon: <FaNodeJs />, color: "#68A063", level: 4 },
    { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF", level: 4 },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: 4 },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1", level: 4 },
    { name: "Python", icon: <FaPython />, color: "#3776AB", level: 4 },
    { name: "AI/ML", icon: <FaRobot />, color: "#FF6B6B", level: 3 },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032", level: 4 },
    { name: "VS Code", icon: <FaCode />, color: "#007ACC", level: 5 },
    { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4", level: 3 },
  ]

  const renderSkillLevel = (level) => {
    return (
      <div className="skill-level">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`level-dot ${i < level ? "active" : ""}`} />
        ))}
      </div>
    )
  }

  return (
    <div className="skills-page">
      <div className="skills-section">
        <div className="skills-header-container">
          <div className="skills-header">
            <h2>Technical Skills</h2>
          </div>
          <a href="/assets/Sakshi-Bhume-Resume.pdf" download className="resume-download-btn">
            <div className="btn-content">
              <div className="icon-wrapper">
                <FaDownload className="download-icon" />
              </div>
              <div className="btn-text">
                <span className="main-text">Download</span>
                <span className="sub-text">Resume</span>
              </div>
            </div>
            <div className="btn-glow"></div>
          </a>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <div className="skill-info">
                <h4 className="skill-name">{skill.name}</h4>
                {renderSkillLevel(skill.level)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills