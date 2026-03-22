import { useRef } from 'react'
import './App.css'
import Logo from './components/Logo'

function App() {
  const skillsRef = useRef(null)

  return (
    <div className="app" id="home">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <img src="/folioassets/mateuszlogo.svg" alt="Logo" className="header-logo" />
          <span className="header-name">mateusz matyskiewicz</span>
        </div>
        <nav className="header-nav">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#/projects" className="nav-link">PROJECTS</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-section">
          <Logo />
          <h1 className="main-heading">
            <span className="heading-text">Hey, I'm </span>
            <span className="heading-name">Mateusz</span>
          </h1>
          <div className="hero-dots" aria-hidden="true">
            <span className="hero-dot" />
            <span className="hero-dot" />
            <span className="hero-dot" />
          </div>
          <p className="subheading">UI/UX Designer | Graphic Designer</p>
          
          {/* Skills Strip */}
          <div className="skills-strip" ref={skillsRef}>
            <div className="skills-fade-left"></div>
            <div className="skills-wrapper">
              <div className="skills-content">
                Figma • Photoshop • Illustrator • InDesign • Agile Methodology • Adobe XD • Wireframing &amp; Prototyping •{' '}
                Figma • Photoshop • Illustrator • InDesign • Agile Methodology • Adobe XD • Wireframing &amp; Prototyping •{' '}
                Figma • Photoshop • Illustrator • InDesign • Agile Methodology • Adobe XD • Wireframing &amp; Prototyping •
              </div>
            </div>
            <div className="skills-fade-right"></div>
          </div>
        </div>
      </main>

      <section className="featured-projects">
        <h2 className="projects-title">Featured Projects</h2>

        <div className="projects-grid">
          <a href="#/projects" className="project-card project-card-solace">
            <div className="project-card-media">
              <img
                src="/solace_assets/solace_card.png"
                alt="Solace project preview"
                className="project-card-image"
              />
            </div>
            <h3 className="project-card-title">Solace</h3>
            <p className="project-card-subtitle">Case Study + UX Design + Figma</p>
            <p className="project-card-description">
              Solace is a wellness app built for workers, tackling physical strain, irregular schedules,
              and stigma around self-care with practical, industry-relevant support.
            </p>
          </a>

          <a href="#/projects" className="project-card project-card-template">
            <div className="project-card-media project-card-media-template" />
            <h3 className="project-card-title">Big Case Study</h3>
            <p className="project-card-subtitle">Case Study + UX Design + Figma</p>
            <p className="project-card-description">
              Template card for your next case study. This will be duplicated and replaced with your new
              project details when you send the next design.
            </p>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <h2 className="footer-title">
            Let&apos;s
            <br />
            Connect!
          </h2>

          <div className="footer-contact-row">
            <a className="footer-contact-pill" href="mailto:mateuszma12004@gmail.com">
              <img src="/folioassets/mail-logo.svg" alt="Mail" className="footer-contact-icon" />
              <span>mateuszma12004@gmail.com</span>
            </a>
            <a
              className="footer-contact-pill"
              href="https://www.linkedin.com/in/mateusz-motyskiewicz"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/folioassets/linkdin-logo.svg" alt="LinkedIn" className="footer-contact-icon" />
              <span>in/mateusz-motyskiewicz</span>
            </a>
          </div>

          <div className="footer-divider" />

          <nav className="footer-nav">
            <a href="#home" className="footer-nav-link">HOME</a>
            <a href="#about" className="footer-nav-link">ABOUT</a>
            <a href="#/projects" className="footer-nav-link">PROJECTS</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
