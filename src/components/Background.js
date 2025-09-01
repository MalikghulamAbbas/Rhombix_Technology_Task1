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
              <h3>Master of Computer Science</h3>
              <p className="institution">Stanford University</p>
              <p className="date">2018 - 2020</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>AWS Certified Solutions Architect</h3>
              <p className="institution">Amazon Web Services</p>
              <p className="date">2020</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Google Professional Cloud Developer</h3>
              <p className="institution">Google Cloud</p>
              <p className="date">2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;