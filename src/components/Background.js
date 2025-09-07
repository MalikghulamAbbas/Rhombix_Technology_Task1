// components/Background.js
import React from 'react';

const Background = () => {
  return (
    <section id="background" className="section">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Bachelor of Computer Science</h3>
              <p className="institution">Riphah International University</p>
              <p className="date">2019 - 2024</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Mobile Application Developer</h3>
              <p className="institution">Facebook Meta by coursera</p>
              <p className="date">2024</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>IBM MERN Stack Developer</h3>
              <p className="institution">IBM</p>
              <p className="date">2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;