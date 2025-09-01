// App.js
import React from 'react';
import Introduction from './components/Introduction';
import Background from './components/Background';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Introduction />
      <Background />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Blog />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;