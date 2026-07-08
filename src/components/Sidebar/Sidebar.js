import React from "react";
import "./Sidebar.css";

function Sidebar({ isDark, setIsDark }) {
  return (
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
  );
}

export default Sidebar;
