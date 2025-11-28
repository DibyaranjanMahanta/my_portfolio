import React from "react";
import "../Styles/about.css";

const ExperienceCard = ({ role, company, duration, details }) => {
  return (
    <div className="experience-card-detail">
      <div className="exp-header">
        <h3>{role} <span>@ {company}</span></h3>
        <span className="exp-duration">{duration}</span>
      </div>
      <ul className="exp-details">
        {details.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
