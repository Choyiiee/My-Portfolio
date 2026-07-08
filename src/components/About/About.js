import React from "react";
import { Card, Button } from "antd";
import { EyeOutlined, DownloadOutlined } from "@ant-design/icons";
import useScrollReveal from "../../utils/useScrollReveal";
import "./About.css";

function About({ handleViewResume, handleDownloadResume }) {
  const ref = useScrollReveal();

  return (
    <section id="about" className="profile-section reveal" ref={ref}>
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
          <Card
            className="floating-cv-card"
            bordered={false}
          >
            <span className="card-decor-tag">CREDENTIALS</span>
            <h3 className="cv-card-title">Curriculum Vitae</h3>
            <p className="cv-card-text">
              Access full structural details regarding academic timeline,
              technical benchmarks, and training histories.
            </p>
            <div className="cv-actions-stack">
              <Button
                type="primary"
                icon={<EyeOutlined />}
                onClick={handleViewResume}
                block
              >
                VIEW DIGITAL CV
              </Button>
              <Button
                icon={<DownloadOutlined />}
                onClick={handleDownloadResume}
                block
              >
                ↓ DOWNLOAD AS PDF
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default About;
