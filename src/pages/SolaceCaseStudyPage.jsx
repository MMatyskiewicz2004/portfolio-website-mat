import { useState } from 'react'
import '../App.css'

function SolaceCaseStudyPage() {
  const [wireTab, setWireTab] = useState('lofi')

  return (
    <div className="app solace-case-page">
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

      <main className="solace-case-main">
        <h1 className="solace-case-title">Solace</h1>

        <section className="solace-hero-card">
          <div className="solace-hero-glow solace-hero-glow-left" />
          <div className="solace-hero-glow solace-hero-glow-right" />
          <img
            src="/solace_assets/solace_thumbnail_main.png"
            alt="Solace Thumbnail main"
            className="solace-hero-image"
          />
        </section>

        <section className="solace-details-grid">
          <article>
            <h2 className="solace-section-heading">What is SOLACE?</h2>
            <p className="solace-body-text">
              Solace is a <span className="solace-highlight">wellness app</span> created to address the{' '}
              <span className="solace-highlight">physical strain</span>,{' '}
              <span className="solace-highlight">unpredictable schedules</span>, and{' '}
              <span className="solace-highlight">cultural stigma around self-care in iron work</span>.
              Many iron workers experience <span className="solace-highlight">chronic pain, fatigue, and stress</span>, yet
              existing wellness tools are often generic, time-intensive, or disconnected from trade culture.
            </p>
            <p className="solace-body-text">
              Solace re-frames recovery as something practical and motivating through gamification,
              personalization, and a responsive mascot system that visually reflects user progress.
            </p>
          </article>

          <aside className="solace-meta">
            <h3>Timeline</h3>
            <p>Sept - Dec 2025</p>
            <h3>Team Size</h3>
            <p>7 Members</p>
            <h3>Disciplines</h3>
            <p>User Research</p>
            <p>Product Design</p>
            <p>Prototyping</p>
            <p>Branding</p>
            <p>Lead Designer</p>
            <p>Design Systems</p>
          </aside>
        </section>

        <section className="solace-steps">
          {/* 01 • My Role */}
          <article className="solace-step-card solace-role-card">
            <div className="solace-role-left">
              <div className="solace-step-title">
                <span className="solace-step-index">01 •</span> My Role
              </div>

              <h3>Designed Product Flows</h3>
              <ul>
                <li>Designed the Onboarding &amp; Homepage Flows</li>
                <li>Designed the game logic (xp values, progression system)</li>
              </ul>

              <h3>Led Branding &amp; Design</h3>
              <ul>
                <li>Created the logo and Visual System</li>
                <li>Led overall branding direction</li>
              </ul>

              <h3>Iterated Assets &amp; Wireframes</h3>
              <ul>
                <li>Designed the Onboarding &amp; Homepage Flows</li>
                <li>Designed the game logic (xp values, progression system)</li>
              </ul>
            </div>

            <div className="solace-role-right">
              <img
                className="solace-role-phones"
                src="/solace_assets/solace_card.png"
                alt="Solace role preview"
              />
            </div>
          </article>

          {/* 02 • The Problem */}
          <article className="solace-step-card solace-problem-card">
            <div className="solace-problem-left">
              <div className="solace-step-title">
                <span className="solace-step-index">02 •</span> The Problem
              </div>

              <h2 className="solace-problem-headline">
                Iron workers have no
                <br />
                wellness tools built for
                <br />
                their reality.
              </h2>

              <p className="solace-problem-body">
                Their work involves long and unpredictable hours, constant physical strain, and a
                culture where admitting you need help can feel like weakness. As a result, coping
                often defaults to alcohol, nicotine, or painkillers.
              </p>
            </div>

            <div className="solace-problem-face" aria-hidden="true">
              <span className="solace-eye solace-eye-left" />
              <span className="solace-eye solace-eye-right" />
              <span className="solace-mouth" />
            </div>
          </article>
        </section>

        {/* 03 • The Research */}
        <section className="solace-research">
          <div className="solace-research-left">
            <div className="solace-research-title">
              <span className="solace-research-title-index">03 •</span> The Research
            </div>

            <p className="solace-research-intro">
              Through surveys (18 participants), interviews (2 trades workers), and secondary research,
              I uncovered consistent patterns in the physical and mental health challenges faced by
              tradespeople.
            </p>

            <div className="solace-research-headings">
              <div className="solace-research-h">Stress Often Leads to Substance-Based Coping</div>
              <div className="solace-research-h">Mental Health Is Present But Rarely Discussed</div>
              <div className="solace-research-h">Physical and Mental Health Must Be Addressed Together</div>
              <div className="solace-research-h">Micro-Interventions Are More Realistic Than Large Programs</div>
              <div className="solace-research-h">Gamification Can Increase Engagement</div>
              <div className="solace-research-h">Micro-Interventions Are More Realistic Than Large Programs</div>
            </div>
          </div>

          <aside className="solace-research-right" aria-label="Survey findings">
            <div className="solace-stat">
              <div className="solace-stat-label">
                Trades work is physically demanding.
                <br />
                Survey findings revealed:
              </div>
              <div className="solace-stat-value">66.7%</div>
              <div className="solace-stat-subvalue">Reported back pain</div>
            </div>

            <div className="solace-stat">
              <div className="solace-stat-value">61.1%</div>
              <div className="solace-stat-subvalue">Experienced cuts and bruises</div>
            </div>

            <div className="solace-stat">
              <div className="solace-stat-value">55.6%</div>
              <div className="solace-stat-subvalue">Reported hand &amp; wrist pain</div>
            </div>

            <div className="solace-stat">
              <div className="solace-stat-value">50%</div>
              <div className="solace-stat-subvalue">Muscle fatigue</div>
            </div>
          </aside>
        </section>

        <section className="solace-takeaways">
          <h2 className="solace-takeaways-title">Personal Takeaways From The Research</h2>

          <div className="solace-takeaways-grid">
            <article className="solace-takeaway-item">
              <img
                src="/solace_assets/visual-clarity.svg"
                alt="Visual clarity"
                className="solace-takeaway-icon"
              />
              <h3>Visual Clarity</h3>
              <p>People trust what they immediately understand.</p>
              <p>
                On a busy job site, exercises and tools must feel familiar, fast, and accessible
                not instructional or overwhelming.
              </p>
            </article>

            <article className="solace-takeaway-item">
              <img
                src="/solace_assets/privacy.svg"
                alt="Privacy"
                className="solace-takeaway-icon"
              />
              <h3>Privacy Builds Trust</h3>
              <p>Wellness only works if it feels safe.</p>
              <p>
                Trades workers are unlikely to engage if personal stress or health data feels
                exposed, so the experience must prioritize confidentiality and user control.
              </p>
            </article>

            <article className="solace-takeaway-item">
              <img
                src="/solace_assets/respect.svg"
                alt="Respect"
                className="solace-takeaway-icon"
              />
              <h3>Respect over Lecturing</h3>
              <p>Support should empower, not correct.</p>
              <p>
                Iron workers do not want to be told what they are doing wrong. The app must feel
                like a tool they choose to use, not a system judging them.
              </p>
            </article>
          </div>
        </section>

        <section className="solace-personas">
          <h2 className="solace-personas-title">Who is SOLACE For?</h2>

          <div className="solace-personas-grid">
            <article className="solace-persona">
              <h3>Frank Kennedy</h3>
              <img
                src="/solace_assets/frank-kennedy.webp"
                alt="Frank Kennedy persona"
                className="solace-persona-image"
              />
            </article>

            <article className="solace-persona">
              <h3>John Smith</h3>
              <img
                src="/solace_assets/john-smith.webp"
                alt="John Smith persona"
                className="solace-persona-image"
              />
            </article>
          </div>

          <h3 className="solace-personas-needs-title">What are their Needs?</h3>

          <div className="solace-needs-grid">
            <div className="solace-needs-col">
              <span className="solace-need-pill">Prevent injuries &amp; stay physically strong</span>
              <span className="solace-need-pill">Manage pain &amp; stress</span>
              <span className="solace-need-pill">Build quick, simple wellness habits</span>
              <span className="solace-need-pill">Improve sleep &amp; recovery</span>
              <span className="solace-need-pill">Use easy, low-effort health tools</span>
            </div>

            <div className="solace-needs-col">
              <span className="solace-need-pill">Stay healthy while balancing work &amp; family</span>
              <span className="solace-need-pill">Reduce stress, fatigue, and pain</span>
              <span className="solace-need-pill">Use simple, practical wellness tools</span>
              <span className="solace-need-pill">Build sustainable long-term habits</span>
              <span className="solace-need-pill">Track progress and stay motivated</span>
            </div>
          </div>
        </section>

        <section className="solace-wireframes">
          <h2 className="solace-wireframes-title">04 • Wire frames</h2>

          <div className={`solace-wireframes-card solace-wireframes-card--${wireTab}`}>
            <div className="solace-wireframes-tabs" role="tablist" aria-label="Wireframe version tabs">
              <button
                type="button"
                className={`solace-wire-tab solace-wire-tab-lofi ${wireTab === 'lofi' ? 'is-active' : ''}`}
                onClick={() => setWireTab('lofi')}
              >
                LO-FI
              </button>
              <button
                type="button"
                className={`solace-wire-tab solace-wire-tab-midfi ${wireTab === 'midfi' ? 'is-active' : ''}`}
                onClick={() => setWireTab('midfi')}
              >
                MID-FI
              </button>
              <button
                type="button"
                className={`solace-wire-tab solace-wire-tab-hifi ${wireTab === 'hifi' ? 'is-active' : ''}`}
                onClick={() => setWireTab('hifi')}
              >
                HIGH-FI
              </button>
            </div>

          <div className="solace-wireframes-content">
            <div className={`solace-wireframes-imageWrap solace-wireframes-imageWrap--${wireTab}`}>
              <img
                className="solace-wireframes-image"
                src={`/solace_assets/${wireTab}.svg`}
                alt={`${wireTab} wireframes`}
              />
            </div>

            <aside
              className={`solace-wireframes-panel solace-wireframes-panel--${wireTab}`}
              aria-label="Wireframe key things"
            >
              <h3 className="solace-wireframes-panel-title">Key Things I Kept in Mind</h3>
              <div className="solace-wireframes-panel-list">
                <div>Keep it Simple</div>
                <div>Keep it Intuitive</div>
                <div>Keep it Familiar</div>
                <div>Easy to Learn</div>
                <div className="solace-wireframes-panel-last">Make it Fun with Solly</div>
              </div>
            </aside>
          </div>
          </div>
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

export default SolaceCaseStudyPage
