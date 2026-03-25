import '../App.css'

function ProjectsPage() {
  return (
    <div className="app projects-page">
      <header className="header">
        <div className="header-left">
          <img src="/folioassets/mateuszlogo.svg" alt="Logo" className="header-logo" />
          <span className="header-name">mateusz matyskiewicz</span>
        </div>
        <nav className="header-nav">
          <a href="#/" className="nav-link">HOME</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#/projects" className="nav-link">PROJECTS</a>
        </nav>
      </header>

      <main className="projects-main">
        <h1 className="projects-page-title">PROJECTS</h1>

        <section className="projects-layout">
          <a href="#/projects/solace" className="project-card project-card-solace project-card-large">
            <div className="project-card-media">
              <img
                src="/solace_assets/solace_card.png"
                alt="Solace project preview"
                className="project-card-image"
              />
            </div>
            <h3 className="project-card-title">Solace</h3>
            <p className="project-card-subtitle">Case Study + UX Design + Figma</p>
          </a>

          <article className="project-card project-card-template project-card-small">
            <div className="project-card-media project-card-media-template" />
            <h3 className="project-card-title">Smaller Prj</h3>
            <p className="project-card-subtitle">Case Study + UX Design + Figma</p>
          </article>

          <article className="project-card project-card-template project-card-large">
            <div className="project-card-media project-card-media-template" />
            <h3 className="project-card-title">Big Case Study</h3>
            <p className="project-card-subtitle">Case Study + UX Design + Figma</p>
          </article>

          <article className="project-card project-card-template project-card-small">
            <div className="project-card-media project-card-media-template" />
            <h3 className="project-card-title">Smaller Prj</h3>
            <p className="project-card-subtitle">Case Study + UX Design + Figma</p>
          </article>

          <article className="project-card project-card-template project-card-large">
            <div className="project-card-media project-card-media-template" />
            <h3 className="project-card-title">Big Case Study</h3>
            <p className="project-card-subtitle">Case Study + UX Design + Figma</p>
          </article>

          <article className="project-card project-card-template project-card-small">
            <div className="project-card-media project-card-media-template" />
            <h3 className="project-card-title">Smaller Prj</h3>
            <p className="project-card-subtitle">Case Study + UX Design + Figma</p>
          </article>
        </section>
      </main>

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
            <a href="#/" className="footer-nav-link">HOME</a>
            <a href="#about" className="footer-nav-link">ABOUT</a>
            <a href="#/projects" className="footer-nav-link">PROJECTS</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default ProjectsPage
