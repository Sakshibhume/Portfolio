import "./ProjectCard.css"

const ProjectCard = ({ project, index }) => {
  return (
    <div className="project-leaf-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="leaf-image-container">
        <img 
          src={project.image} 
          alt={project.title} 
          className="leaf-image"
          loading="lazy"
        />
        <div className="image-overlay"></div>
      </div>
      
      <div className="leaf-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        
        <div className="tech-tags">
          {project.technologies.map((tech, idx) => (
            <span key={idx}>{tech}</span>
          ))}
        </div>
        
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-btn"
        >
          View Project
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard