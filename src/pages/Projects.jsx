import ProjectCard from "../components/ProjectCard"
import "./Projects.css"

// Import images
import expenseTrackerImg from "../assets/images/projects/expense-tracker.png"
import deepfakeImg from "../assets/images/projects/deepfake.webp"
import textSummarizationImg from "../assets/images/projects/text-summarization.jpg"
import documentManagementImg from "../assets/images/projects/document-management.jpg"

const Projects = () => {
  const projects = [
    {
      title: "Deepfake Image Detection",
      description: "AI-powered application that detects deepfake images using convolutional neural networks.",
      technologies: ["Python", "TensorFlow", "Flask"],
      image: deepfakeImg,
      github: "https://github.com/Sakshibhume/DEEP_FAKE_IMAGE_DETECTION_PROJECT",
    },
    {
      title: "Text Summarization",
      description: "NLP tool that generates concise summaries of long text documents using transformer models.",
      technologies: ["React", "Python", "FastAPI", "HuggingFace"],
      image: textSummarizationImg,
      github: "https://github.com/Sakshibhume/TEXT_SUMMARIZATION",
    },
    {
      title: "Inward-Outward Management System",
      description: "Enterprise document tracking system with workflow automation and role-based access.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      image: documentManagementImg,
      github: "https://github.com/Sakshibhume/Inward-outward-Management",
    },
    {
      title: "Expense Tracker & Budget Management",
      description: "Full-stack application for tracking expenses and managing budgets with data visualization.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: expenseTrackerImg,
      github: "https://github.com/Sakshibhume/EXpenses_budget-Manager",
    }
  ]

  return (
    <div className="projects-scroll-container">
      <div className="projects-page">
        <div className="projects-header">
          <h1>My Projects</h1>
          
        </div>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects