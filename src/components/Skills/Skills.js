import React from "react";
import { Tag } from "antd";
import useScrollReveal from "../../utils/useScrollReveal";
import "./Skills.css";

const skillCategories = [
  {
    num: "01",
    title: "FRONTEND / INTERFACE",
    items: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
  {
    num: "02",
    title: "BACKEND / LOGIC",
    items: ["Laravel", "PHP", "AdonisJS", "Firebase", "Node.js"],
  },
  {
    num: "03",
    title: "DATA MANAGEMENT",
    items: ["MySQL", "Firestore", "Redis"],
  },
  {
    num: "04",
    title: "MOBILE ARCHITECTURE",
    items: ["Flutter", "Dart", "Firebase Auth"],
  },
];

function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="stack-section reveal" ref={ref}>
      <div className="section-header-row">
        <span className="section-index">03 / STACK</span>
        <h2 className="section-main-title">Technical Infrastructure</h2>
      </div>
      <p className="stack-intro-text">
        Every tool here has earned its place through practical projects,
        late nights, and problems worth solving.
      </p>

      <div className="horizontal-stack-layout">
        {skillCategories.map((cat) => (
          <div className="stack-row-item" key={cat.num}>
            <div className="stack-label-block">
              <span className="stack-num">{cat.num}</span>
              <h4>{cat.title}</h4>
            </div>
            <div className="stack-pills-container">
              {cat.items.map((item) => (
                <Tag key={item} className="skill-tag">
                  {item}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
