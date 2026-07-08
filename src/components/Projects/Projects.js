import React from "react";
import { Tag } from "antd";
import useScrollReveal from "../../utils/useScrollReveal";
import "./Projects.css";

const projects = [
  {
    num: "01",
    title: "Primero Coffee Shop",
    pills: ["React"],
    desc: "A Coffee Shop UI that provides a seamless experience for customers to schedule pickups, track orders, and manage their laundry needs efficiently.",
    href: "https://react-primero-ui.vercel.app",
  },
  {
    num: "02",
    title: "Mapiles DTR",
    pills: ["React", "Laravel", "PostgreSQL"],
    desc: "Cross-platform DTR Application built with a Laravel backend and React UI structures that helps a company to have a systematic Date, Time, and Record System.",
    href: "https://dtr-mapiles.onrender.com",
  },
];

function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="creations-section reveal" ref={ref}>
      <div className="section-header-row">
        <span className="section-index">04 / CREATIONS</span>
        <h2 className="section-main-title">Selected Projects</h2>
      </div>

      {projects.map((proj) => (
        <a
          key={proj.num}
          href={proj.href}
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
              <span className="proj-number-tag">PROJ // {proj.num}</span>
              <h3>{proj.title}</h3>
              <div className="proj-pills-row">
                {proj.pills.map((pill) => (
                  <Tag key={pill} className="proj-pill-tag">{pill}</Tag>
                ))}
              </div>
            </div>
            <div className="proj-right-desc">
              <p>{proj.desc}</p>
            </div>
          </div>
        </a>
      ))}

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
