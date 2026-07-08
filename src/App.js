import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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
      <Sidebar isDark={isDark} setIsDark={setIsDark} />
      <main className="main-content">
        <Hero />
        <About
          handleViewResume={handleViewResume}
          handleDownloadResume={handleDownloadResume}
        />
        <Skills />
        <Projects />
        <Contact formStatus={formStatus} handleSubmit={handleSubmit} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
