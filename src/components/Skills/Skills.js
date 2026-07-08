import React from "react";
import "./Skills.css";

function Skills() {
  return (
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
  );
}

export default Skills;
