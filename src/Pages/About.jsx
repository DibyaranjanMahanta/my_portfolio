import React, { useState } from "react";
import "../Styles/about.css";
import { aboutData } from "../Data/aboutData";
import profileImg from "../assets/Profile/Avataar.png";
import InfoCard from "../Components/InfoCard";
import ExperienceCard from "../Components/ExperienceCard";

const { summary, experience, certifications } = aboutData;

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-top">
          <div className="about-text-section">
            <h2 className="section-title">ABOUT ME</h2>
            <p className="about-text">
              Hi! I’m <span className="highlights">Dibya Ranjan Mahanta</span>, a passionate
              <span className="highlights"> Frontend Developer</span> who loves building
              modern, responsive, and interactive web apps. I focus on creating clean UIs
              and seamless user experiences using React and modern JavaScript tools.
            </p>
            <div className="summary-section">
              {summary.map((item, i) => (
                <InfoCard key={i} label={item.label} value={item.value} />
              ))}
            </div>
          </div>

          <div className="about-image">
            <div className="profile-wrapper">
              <img src={profileImg} alt="Profile" className="profile-img" />
              <div className="profile-ring"></div>
            </div>
          </div>
        </div>
        <div className="about-bottom">
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              EXPERIENCE
            </button>
            {/* <button
              className={`tab-btn ${activeTab === "certifications" ? "active" : ""}`}
              onClick={() => setActiveTab("certifications")}
            >
              CERTIFICATIONS
            </button> */}
          </div>

          <div className="tab-content">
            {activeTab === "experience" ? (
              <div className="experience-flex">
                {experience.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} />
                ))}
              </div>
            ) : (
              <div className="cert-flex">
                {certifications.map((cert, i) => (
                  <div className="cert-card" key={i}>
                    <div className="cert-icon">🎓</div>
                    <h3>{cert.title}</h3>
                    <p>{cert.provider}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
