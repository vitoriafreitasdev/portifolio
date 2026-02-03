
import "./AboutMe.css";
import useAboutMe from "../hooks/useAboutMe";



const AboutMe = () => {
  
  const {projects, certificates, activeProject, toggleProjectDetails} = useAboutMe()

  return (
    <div className="aboutme-container">
      <header className="aboutme-header">
        <h1 className="aboutme-title">Mais Sobre Mim</h1>
        <p className="aboutme-intro">
          Desenvolvedora Front-End apaixonada por criar soluções inovadoras. 
          Abaixo você encontra uma seleção dos meus projetos pessoais, onde aplico 
          e evoluo minhas habilidades constantemente.
        </p>
      </header>

      <section className="projects-section">
        <h2 className="section-title">Projetos Pessoais</h2>
        <p className="section-subtitle">
          Cada projeto representa um marco na minha jornada de aprendizado, 
          utilizando as tecnologias que dominava em cada fase.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => toggleProjectDetails(project.id)}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-toggle">
                  {activeProject === project.id ? '−' : '+'}
                </span>
              </div>
              
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              {activeProject === project.id && (
                <div className="project-details">
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    <h4>Destaques:</h4>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-links">
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Ver Código
                    </a>
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Ver Projeto Online
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="certificates-section">
        <h2 className="section-title">Certificados</h2>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.alt}
                  className="certificate-image"
                />
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p>Instrutor: {cert.instructor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">Habilidades Técnicas</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Front-end</h3>
            <div className="skills-list">
              <span>React</span>
              <span>Redux</span>
              <span>Vitest</span>
              <span>React Testing Library</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Redux</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Back-end</h3>
            <div className="skills-list">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>RESTful APIs</span>
              <span>JWT</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Ferramentas</h3>
            <div className="skills-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>Vercel</span>
              <span>Cloudinary</span>
              <span>VS Code</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;