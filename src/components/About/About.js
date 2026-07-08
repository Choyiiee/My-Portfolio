import React from "react";
import "./About.css";

function About({ handleViewResume, handleDownloadResume }) {
  return (
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
  );
}

export default About;
