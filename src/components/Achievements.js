// components/Achievements.js
import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Best UX Design Award",
      organization: "Web Design Association",
      year: "2022",
      description: "Awarded for exceptional user experience in the E-Commerce Platform project"
    },
    {
      id: 2,
      title: "Google Developer Scholarship",
      organization: "Google",
      year: "2021",
      description: "Selected among top 5% of applicants for advanced web development training"
    },
    {
      id: 3,
      title: "Hackathon Winner",
      organization: "TechCrunch Disrupt",
      year: "2020",
      description: "First place in health tech category for innovative wellness application"
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Awards & Achievements</h2>
        <div className="achievements-grid">
          {achievements.map(achievement => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-header">
                <h3>{achievement.title}</h3>
                <span className="year">{achievement.year}</span>
              </div>
              <p className="organization">{achievement.organization}</p>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;