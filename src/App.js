import React, { useState, useEffect, useRef } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import "./App.css";
import { lightTheme, darkTheme } from "./theme";
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
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  const handleSubmit = async (values) => {
    setFormStatus("SENDING...");
    try {
      const response = await fetch("https://formspree.io/f/mvzywgdb", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setFormStatus("MESSAGE SENT ✓");
        formRef.current?.resetFields();
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
    <ConfigProvider
      theme={{
        ...(isDark ? darkTheme : lightTheme),
        algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
      }}
    >
      <div className="portfolio-wrapper">
        <Sidebar isDark={isDark} setIsDark={setIsDark} expanded={sidebarExpanded} onExpandChange={setSidebarExpanded} />
        <main className={`main-content ${sidebarExpanded ? "shifted" : ""}`}>
          <Hero />
          <About
            handleViewResume={handleViewResume}
            handleDownloadResume={handleDownloadResume}
          />
          <Skills />
          <Projects />
          <Contact
            formStatus={formStatus}
            handleSubmit={handleSubmit}
            formRef={formRef}
          />
          <Footer />
        </main>
      </div>
    </ConfigProvider>
  );
}

export default App;
