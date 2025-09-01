// components/Skills.js
import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "UI/UX Design", level: 70 }
  ];

  const softSkills = [
    "Project Management", "Team Leadership", "Problem Solving", 
    "Agile Methodology", "Client Communication"
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-container">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="soft-skills">
            <h3>Professional Skills</h3>
            <div className="soft-skills-list">
              {softSkills.map((skill, index) => (
                <span key={index} className="soft-skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;