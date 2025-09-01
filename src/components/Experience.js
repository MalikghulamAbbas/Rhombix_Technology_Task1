// components/Experience.js
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechInnovate Inc.",
      period: "2020 - Present",
      responsibilities: [
        "Led a team of 5 developers in building responsive web applications",
        "Implemented CI/CD pipelines reducing deployment time by 40%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "2018 - 2020",
      responsibilities: [
        "Developed full-stack applications using React and Node.js",
        "Collaborated with UX designers to implement user-friendly interfaces",
        "Optimized application performance, improving load times by 60%"
      ]
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "WebCraft Studios",
      period: "2016 - 2018",
      responsibilities: [
        "Built and maintained client websites using modern web technologies",
        "Implemented responsive designs for cross-device compatibility",
        "Assisted in debugging and troubleshooting existing projects"
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <p className="company">{exp.company} | {exp.period}</p>
              </div>
              <ul className="responsibilities">
                {exp.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;