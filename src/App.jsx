import { useState } from 'react';
import './App.css';

import profile from './assets/profile.jpg.jpeg';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="navbar">
        <a href="#home" className="logo">SLK<span></span></a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-text">
            <p className="eyebrow">WELCOME TO MY PORTFOLIO 🦚</p>
            <h1>Hi, I'm <span>Swetha K.</span></h1>
            <h2>B.Sc Computer Science Student</h2>
            <p className="intro">
              Passionate about technology, creative ideas, and building
              meaningful digital experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">Explore My Work ↗</a>
              <a href="#contact" className="secondary-btn">Contact Me</a>
            </div>
          </div>

          <div className="hero-art">
  <div className="profile-circle">
    <img src={profile} alt="Swetha" className="profile-photo" />
    <span className="floating-dot dot-one">✦</span>
    <span className="floating-dot dot-two">✧</span>
  </div>
  <p>Ideas into Impact</p>
</div>
        </section>

        <section className="section about" id="about">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
          <p>
            I'm Swetha, a Computer Science student at KG College of Arts
            and Science. I enjoy learning new technologies, exploring
            creative solutions, and developing my technical skills.
            My goal is to grow as a technology professional and turn
            innovative ideas into useful projects.
          </p>
          <div className="about-card">
            <div><strong>2028</strong><span>Expected Graduation</span></div>
            <div><strong>B.Sc CS</strong><span>My Degree</span></div>
            <div><strong>Curious</strong><span>Always Learning</span></div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2>My <span>Skills</span></h2>
          <div className="skill-list">
            {['Python', 'Java', 'C', 'HTML', 'CSS', 'JavaScript', 'React', 'MongoDB'].map(skill => (
              <div className="skill-card" key={skill}>✦ {skill}</div>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <p className="eyebrow">SOME OF MY WORK</p>
          <h2>Featured <span>Projects</span></h2>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-icon">🌐</div>
              <h3>Personal Portfolio</h3>
              <p>A responsive website showcasing my skills, projects, and journey.</p>
              <span className="project-tag">Web Development</span>
            </article>

            <article className="project-card">
              <div className="project-icon">🏥</div>
              <h3>Smart Hospital Management</h3>
              <p>A project concept for organizing hospital information and services.</p>
              <span className="project-tag">Computer Science</span>
</article>
</div>
</section>
<section className="section contact" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Get In <span>Touch</span></h2>
          <p>Have a project idea or want to connect? I'd love to hear from you!</p>
          <div className="contact-links">
  <a
    href="https://github.com/Swetha2707-cs"
    target="_blank"
    rel="noreferrer"
    className="contact-icon"
    title="GitHub"
  >
    G
  </a>

  <a
    href="https://www.linkedin.com/in/swetha-undefined-99989b427"
    target="_blank"
    rel="noreferrer"
    className="contact-icon"
    title="LinkedIn"
  >
    in
  </a>

  <a
    href="mailto:swetha99387@gmail.com"
    className="contact-icon"
    title="Email"
  >
    ✉
  </a>
</div>
         

        </section>
      </main>

      <footer>
        
        <p>Ideas into Impact. © {new Date().getFullYear()} Swetha K.</p>
      </footer>
    </div>
  );
}

export default App;