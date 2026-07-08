import React from "react";
import "./Projects.css";

function Projects() {
  return (
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
  );
}

export default Projects;
