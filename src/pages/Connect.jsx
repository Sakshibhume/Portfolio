import profileImage from '../assets/images/profile.jpg';
import TechAnimation from '../components/TechAnimation';
import './Connect.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';

const Connect = () => {
  return (
    <section className="connect-scroll-container">
      <div className="connect-page">
        <TechAnimation />
        <div className="connect-container">
          <div className="profile-section">
            <div className="profile-image-container">
              <img 
                src={profileImage} 
                alt="Sakshi Bhume" 
                className="profile-image"
              />
            </div>
            <div className="text-section">
              <h2>Have some ideas <FaLightbulb className="lightbulb-icon" /></h2>
              <h3 className="build-text">
                Let's build something amazing together!
                <img className="arrow-img" src="https://assets-global.website-files.com/64a24a477b774d01d169b819/64a2c39c985e1e3d89801174_71.svg" alt="" />

              </h3>
              
              <img className="conn-img" src="https://assets-global.website-files.com/64a24a477b774d01d169b819/64a2c39d92e236b2edfb00a2_email.svg" alt="" style={{ verticalAlign: 'middle', width: '1em', height: '1em', marginRight: '5px' }} />
<span>sakshibhume@gmail.com</span>


            </div>
          </div>

          <div className="social-cards">
            <a href="https://github.com/Sakshibhume" className="social-card">
              <FaGithub className="social-icon" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/sakshi-bhume-152016255/" className="social-card">
              <FaLinkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>
            <a href="https://x.com/sakshi_Bhume" className="social-card">
              <FaTwitter className="social-icon" />
              <span>Twitter</span>
            </a>
            <a href="mailto:sakshibhume@gmail.com" className="social-card">
              <FaEnvelope className="social-icon" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
