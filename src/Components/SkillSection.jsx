import React, { useState, useEffect } from "react";
import { skills, categories } from "../Data/skills";

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    setAnimateKey((prev) => prev + 1);
  }, [activeCategory]);

  const getCategoryIcon = (category) => {
    const icons = {
      Frontend: "💻",
      "Frameworks & Libraries": "🧩",
      Tools: "🛠️",
    };
    return icons[category] || "📦";
  };

  return (
    <div className="skills-wrapper">
      <div className="skills-left">
        {categories.map((category) => (
          <div
            key={category}
            className={`category-card ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            <div className="category-icon">{getCategoryIcon(category)}</div>
            <h4>{category}</h4>
          </div>
        ))}
      </div>

      <div className="skills-right">
        <h3>
          <span className="category-icon">{getCategoryIcon(activeCategory)}</span>{" "}
          {activeCategory}
        </h3>

        <div className="skill-list">
          {skills[activeCategory].map((skill, index) => (
            <div
              key={`${animateKey}-${index}`}
              className="skill-item"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="skill-header">
                <span>{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
