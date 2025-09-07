// components/Introduction.js
import React from 'react';

const Introduction = () => {
  return (
    <section id="introduction" className="section">
      <div className="container">
        <h1>Hello, I'm <span className="highlight">Malik Ghulam Abbas</span></h1>
        <h2>MERN Stack Developer</h2>
        <p>
          I'm a passionate developer with 5+ years of experience creating digital solutions 
          that bridge technology and user needs. My ambition is to lead innovative projects 
          that make a positive impact on people's lives through elegant code and thoughtful design.
        </p>
        <div className="btn-group">
          <a href="#projects" className="btn btn-primary">My Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;