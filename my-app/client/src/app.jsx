import React from 'react';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

const Navbar = () => (
  <nav className="navbar">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
);

const Home = () => (
  <section id="home" className="section home">
    <h1>Bailey Wright</h1>
    <p>Digital Media Grad • Social Media Strategist • Designer</p>
  </section>
);

const About = () => (
  <section id="about" className="section">
    <h2>About Me</h2>
    <p>
      I'm a digital media graduate with a passion for branding, social media, and creative strategy. I’ve rebranded companies, built websites from scratch, and created entire social media strategies. I bring a bold, black-cat energy and love making brands feel alive.
    </p>
    <ul>
      <li>🎓 Degree: Digital Media Web Design, MUC</li>
      <li>📍 From Orlando → Moving to Chicago</li>
      <li>💼 4+ years in marketing & design</li>
    </ul>
  </section>
);

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>
    <div className="project">
      <h3>SororiTees Rebrand</h3>
      <p>
        Rebranded the sorority apparel company with new logos, colors, typography, and website. Relaunched with a custom magazine, product video, and campaign strategy.
      </p>
    </div>
    <div className="project">
      <h3>Flag-A-Mania App</h3>
      <p>
        Designed branding, social media, and UX for an interactive geography game. Includes AR cards and trivia learning mode.
      </p>
    </div>
    <div className="project">
      <h3>Oviedo Brewing Co.</h3>
      <p>
        Ran social media and events for a local brewery. Created content, promoted events, and built community engagement.
      </p>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section">
    <h2>Contact</h2>
    <p>📧 Email: baileymwright@gmail.com</p>
    <p>📱 Instagram: <a href="https://www.instagram.com/sororitees">@sororitees</a></p>
    <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/baileymwright">baileymwright</a></p>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2025 Bailey Wright</p>
  </footer>
);

export default App;
