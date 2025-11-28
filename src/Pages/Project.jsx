import React from "react";
import { projects } from "../Data/projects";
import ProjectCard from "../Components/ProjectCard";
import "../Styles/projects.css";

const Project = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Project;
