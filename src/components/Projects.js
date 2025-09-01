
// components/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration and inventory management.",
      role: "Lead Full Stack Developer",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      outcome: "Increased client revenue by 35% in the first quarter post-launch."
    },
    {
      id: 2,
      title: "Health & Wellness App",
      description: "Mobile application for tracking fitness activities and nutrition with AI recommendations.",
      role: "Frontend Developer & UI Designer",
      tech: ["React Native", "Firebase", "TensorFlow.js"],
      outcome: "Featured in App Store's 'Health & Fitness' category with 50k+ downloads."
    },
    {
      id: 3,
      title: "Enterprise Resource Planning System",
      description: "Custom ERP solution for manufacturing company integrating all business operations.",
      role: "Backend Developer",
      tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      outcome: "Reduced operational costs by 22% and improved reporting efficiency by 65%."
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-details">
                <p><strong>Role:</strong> {project.role}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <p><strong>Outcome:</strong> {project.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;