import React from "react";
import profileImg from "../../assets/me1.jpg";
import "./Hero.css";

function Hero() {
  return (
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
  );
}

export default Hero;
