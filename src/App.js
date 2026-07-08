import React, { useState, useEffect } from "react";
import "./App.css";
import profileImg from "./assets/me1.jpg";

function App() {
  const [formStatus, setFormStatus] = useState("SEND MESSAGE →");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("SENDING...");
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/mvzywgdb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setFormStatus("MESSAGE SENT ✓");
        form.reset();
      } else {
        setFormStatus("ERROR // TRY AGAIN");
      }
    } catch (error) {
      setFormStatus("ERROR // TRY AGAIN");
    }
  };

  // Helper functions for Resume actions
  const handleViewResume = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "John_Avila_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="portfolio-wrapper">
      {/* Fixed Sidebar */}
      <aside className="side-panel">
        <div className="brand-logo">
          John<span>.</span>
        </div>

        <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
          {isDark ? "LIGHT MODE" : "DARK MODE"}
        </button>

        <div className="side-badge">
          <span className="pulse-dot"></span> OPEN FOR WORK
        </div>
        <nav className="side-nav-links">
          <a href="#hero">01 // TOP</a>
          <a href="#about">02 // PROFILE</a>
          <a href="#skills">03 // STACK</a>
          <a href="#projects">04 // CREATIONS</a>
          <a href="#contact">05 // CONNECT</a>
        </nav>
        <div className="side-footer-tag">©2026 // AVILA</div>
      </aside>

      {/* Main Container */}
      <main className="main-content">
        {/* Split Hero Section */}
        <header id="hero" className="editorial-hero">
          <div className="hero-text-side">
            <div className="hero-badge-row">
              FULL STACK DEVELOPER // UI DESIGNER
            </div>
            <h1 className="massive-title">
              JOHN
              <br />
              <span className="stroke-text">BOTCHOY</span>
              <br />
              B. AVILA
            </h1>
            <div className="hero-accent-line"></div>
            <div className="hero-editorial-footer">
              <p className="hero-lead-text">
                Crafting clean, purposeful digital experiences — where
                thoughtful code meets refined design. I build things that are as
                beautiful as they are functional.
              </p>
              <div className="hero-cta-group">
                <a href="#projects" className="action-btn-primary">
                  EXPLORE WORK ↓
                </a>
                <a href="#contact" className="action-btn-secondary">
                  SAY HELLO
                </a>
              </div>
            </div>
          </div>

          <div className="hero-image-side">
            <div className="reactive-photo-frame">
              <img
                src={profileImg}
                alt="John Botchoy B. Avila"
                className="hero-profile-img"
              />
            </div>
          </div>
        </header>

        {/* Profile / About Section */}
        <section id="about" className="profile-section">
          <div className="section-header-row">
            <span className="section-index">02 / PROFILE</span>
            <h2 className="section-main-title">
              Designing with purpose, building with precision.
            </h2>
          </div>

          <div className="profile-layout-grid">
            <div className="profile-text-column">
              <div className="editorial-paragraph">
                <h5>WHO I AM</h5>
                <p>
                  I am a dedicated and committed{" "}
                  <strong>Full Stack Developer</strong> currently pursuing a
                  Bachelor of Science in Computer Science at{" "}
                  <strong>St. Nicholas College</strong>. I am passionate about
                  building scalable, efficient, and user-focused digital
                  solutions while continuously expanding my expertise in modern
                  web technologies. I strive to develop clean, intuitive, and
                  high-performing applications that deliver meaningful user
                  experiences and real-world impact.
                </p>
              </div>
              <div className="editorial-paragraph">
                <h5>WHAT I DO</h5>
                <p>
                  I develop complete digital experiences — from{" "}
                  <strong>thoughtfully designed user interfaces</strong> to
                  reliable back-end systems. My work includes{" "}
                  <strong>responsive web applications</strong>, Flutter mobile
                  apps, and scalable database solutions, all built with clean,
                  efficient, and maintainable code.
                </p>
              </div>
            </div>

            <div className="profile-interactive-column">
              <div className="floating-cv-card">
                <span className="card-decor-tag">CREDENTIALS</span>
                <h3>Curriculum Vitae</h3>
                <p>
                  Access full structural details regarding academic timeline,
                  technical benchmarks, and training histories.
                </p>
                <div className="cv-actions-stack">
                  <button className="btn-solid-dark" onClick={handleViewResume}>
                    VIEW DIGITAL CV
                  </button>
                  <button
                    className="btn-outline-dark"
                    onClick={handleDownloadResume}
                  >
                    ↓ DOWNLOAD AS PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stack / Skills Section */}
        <section id="skills" className="stack-section">
          <div className="section-header-row">
            <span className="section-index">03 / STACK</span>
            <h2 className="section-main-title">Technical Infrastructure</h2>
          </div>
          <p className="stack-intro-text">
            Every tool here has earned its place through practical projects,
            late nights, and problems worth solving.
          </p>

          <div className="horizontal-stack-layout">
            <div className="stack-row-item">
              <div className="stack-label-block">
                <span className="stack-num">01</span>
                <h4>FRONTEND / INTERFACE</h4>
              </div>
              <div className="stack-pills-container">
                <span>React</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>Tailwind CSS</span>
              </div>
            </div>

            <div className="stack-row-item">
              <div className="stack-label-block">
                <span className="stack-num">02</span>
                <h4>BACKEND / LOGIC</h4>
              </div>
              <div className="stack-pills-container">
                <span>Laravel</span>
                <span>PHP</span>
                <span>AdonisJS</span>
                <span>Firebase</span>
                <span>Node.js</span>
              </div>
            </div>

            <div className="stack-row-item">
              <div className="stack-label-block">
                <span className="stack-num">03</span>
                <h4>DATA MANAGEMENT</h4>
              </div>
              <div className="stack-pills-container">
                <span>MySQL</span>
                <span>Firestore</span>
                <span>Redis</span>
              </div>
            </div>

            <div className="stack-row-item">
              <div className="stack-label-block">
                <span className="stack-num">04</span>
                <h4>MOBILE ARCHITECTURE</h4>
              </div>
              <div className="stack-pills-container">
                <span>Flutter</span>
                <span>Dart</span>
                <span>Firebase Auth</span>
              </div>
            </div>
          </div>
        </section>

        {/* Work / Projects Section */}
        <section id="projects" className="creations-section">
          <div className="section-header-row">
            <span className="section-index">04 / CREATIONS</span>
            <h2 className="section-main-title">Selected Projects</h2>
          </div>

          <div className="editorial-projects-block">
            <a
              href="https://react-primero-ui.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="wide-project-card-link"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div className="wide-project-card">
                <div className="proj-left-frame">
                  <span className="proj-number-tag">PROJ // 01</span>
                  <h3>Primero Coffee Shop</h3>
                  <div className="proj-pills-row">
                    <span>React</span>
                  </div>
                </div>
                <div className="proj-right-desc">
                  <p>
                    A Coffee Shop UI that provides a seamless experience for
                    customers to schedule pickups, track orders, and manage
                    their laundry needs efficiently.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="editorial-projects-block"></div>
          <a
            href="https://dtr-mapiles.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="wide-project-card-link"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "block",
            }}
          >
            <div className="wide-project-card">
              <div className="proj-left-frame">
                <span className="proj-number-tag">PROJ // 02</span>
                <h3>Mapiles DTR</h3>
                <div className="proj-pills-row">
                  <span>React</span>
                  <span>Laravel</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
              <div className="proj-right-desc">
                <p>Cross-platform DTR Application built with a Laravel backend and React UI structures that helps a company to have a systematic Date, Time, and Record System.</p>
              </div>
            </div>
          </a>
          <br />
          <br />
          <div className="editorial-github-footer">
            <div className="git-left">
              <span>EXPLORE SOURCE ARCHIVES</span>
              <a
                href="https://github.com/Choyiiee"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB.COM/CHOYIIEE ↗
              </a>
            </div>
            <a
              href="https://github.com/Choyiiee"
              target="_blank"
              rel="noreferrer"
              className="git-circle-btn"
            >
              VIEW ALL
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="connect-section">
          <div className="section-header-row">
            <span className="section-index">05 / CONNECT</span>
            <h2 className="section-main-title">
              Let's build something{" "}
              <span className="italicized-serif">together.</span>
            </h2>
          </div>

          <div className="connect-split-layout">
            <div className="connect-form-panel">
              <form onSubmit={handleSubmit} className="minimal-form">
                <div className="input-group-row">
                  <div className="input-block">
                    <label>NAME</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Juan Dela Cruz"
                      required
                    />
                  </div>
                  <div className="input-block">
                    <label>EMAIL ADDRESS</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="juan@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="input-block">
                  <label>SUBJECT MATTER</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Collaboration"
                    required
                  />
                </div>
                <div className="input-block">
                  <label>MESSAGE TEXT</label>
                  <textarea
                    name="message"
                    placeholder="Describe your concept or structural goals..."
                    required
                  ></textarea>
                </div>
                <div className="form-action-footer">
                  <button type="submit" className="form-submit-btn">
                    {formStatus}
                  </button>
                  <span className="form-notice">
                    TYPICAL RESPONSE TIME // 24 HOURS
                  </span>
                </div>
              </form>
            </div>

            <div className="connect-cards-panel">
              <div className="editorial-contact-links">
                <a
                  href="mailto:johnavilawork@gmail.com"
                  className="row-link-item"
                >
                  <span className="link-tag">EMAIL</span>
                  <span className="link-text">johnavilawork@gmail.com</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="row-link-item"
                >
                  <span className="link-tag">LINKEDIN</span>
                  <span className="link-text">John Botchoy B. Avila</span>
                </a>
                <a
                  href="https://github.com/Choyiiee"
                  target="_blank"
                  rel="noreferrer"
                  className="row-link-item"
                >
                  <span className="link-tag">GITHUB</span>
                  <span className="link-text">github.com/Choyiiee</span>
                </a>
              </div>
              <div className="location-stamp">
                <h5>OPERATIONAL BASE</h5>
                <p>San Fernando, Pampanga, Philippines</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="editorial-footer">
          <p>© 2026 JOHN BOTCHOY B. AVILA. ALL RIGHTS RESERVED.</p>
          <p>MANUAL FULL STACK BUILD // STYLED WITH DIGITAL ACCENTS</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
