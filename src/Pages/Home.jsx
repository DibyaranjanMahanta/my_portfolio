import React from "react";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../Styles/home.css";
import heroImg from "../assets/Profile/hero_img.png";
import { useNavigate } from "react-router-dom";
import Button from '../Components/Button'

const Home = () => {
  const navigate = useNavigate();

  const handleProjects = () => {
    navigate("/project"); 
  };

  const handleResume = () => {
    window.open("/assets/Dibya Ranjan Mahanta.pdf", "_blank");
  };

  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/dibya-ranjan-mahanta-dev/",
      label: "LinkedIn",
      color: "#0077b5"
    },
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/DibyaranjanMahanta",
      label: "GitHub",
      color: "#ffffff"
    },
    {
      icon: <FaEnvelope size={24} />,
      url: "mailto:dibyaranjanmahanta.dev@gmail.com",
      label: "Email",
      color: "#ff6b00"
    }
  ];

  return (
    <section className="home-container" id="home">
      <div className="home-content">
        <h1>
          Hello there, <br /> I'm <span className="highlight">Dibya Ranjan Mahanta.</span>
        </h1>
        <h2 className="typed-text">
          I'm{" "}
          <ReactTyped
            strings={[
              "&lt; / Frontend Developer 💻 &gt;",
            ]}
            typeSpeed={80}
            backSpeed={50}
            backDelay={1000}
            loop
          />
        </h2>
        <p className="tagline">
          I'm a passionate frontend developer eager to learn and grow.
          I love creating clean, responsive, and user-friendly websites.
        </p>

        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`social-icon social-${social.label.toLowerCase()}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="button-group">
          <Button text="View My Work" onClick={handleProjects} />
          <Button text="Resume" onClick={handleResume} />
        </div>
      </div>

      <div className="home-image">
        <img src={heroImg} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;