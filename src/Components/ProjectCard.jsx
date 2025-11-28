import React from "react";
import "../Styles/projects.css";


const ProjectCard = ({ title, description, image, tech, live, code }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="overlay">
          <a href={live} target="_blank" rel="noopener noreferrer" className="btn">
            Live Demo
          </a>
          <a href={code} target="_blank" rel="noopener noreferrer" className="btn">
            GitHub
          </a>
        </div>
      </div>

      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
