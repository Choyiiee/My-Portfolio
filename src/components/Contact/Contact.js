import React from "react";
import "./Contact.css";

function Contact({ formStatus, handleSubmit }) {
  return (
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
  );
}

export default Contact;
