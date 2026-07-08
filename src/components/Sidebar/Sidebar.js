import React, { useRef, useCallback } from "react";
import { Button } from "antd";
import {
  SunOutlined,
  MoonOutlined,
  HomeOutlined,
  UserOutlined,
  CodeOutlined,
  AppstoreOutlined,
  SendOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";

const navItems = [
  { href: "#hero", icon: <HomeOutlined />, label: "TOP", num: "01" },
  { href: "#about", icon: <UserOutlined />, label: "PROFILE", num: "02" },
  { href: "#skills", icon: <CodeOutlined />, label: "STACK", num: "03" },
  { href: "#projects", icon: <AppstoreOutlined />, label: "CREATIONS", num: "04" },
  { href: "#contact", icon: <SendOutlined />, label: "CONNECT", num: "05" },
];

function Sidebar({ isDark, setIsDark, expanded, onExpandChange }) {
  const timerRef = useRef(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startCollapseTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      onExpandChange(false);
      timerRef.current = null;
    }, 3000);
  }, [clearTimer, onExpandChange]);

  const handleMouseEnter = useCallback(() => {
    clearTimer();
    onExpandChange(true);
  }, [clearTimer, onExpandChange]);

  const handleMouseLeave = useCallback(() => {
    startCollapseTimer();
  }, [startCollapseTimer]);

  const handleToggle = useCallback(() => {
    clearTimer();
    if (expanded) {
      onExpandChange(false);
    } else {
      onExpandChange(true);
      startCollapseTimer();
    }
  }, [clearTimer, expanded, onExpandChange, startCollapseTimer]);

  const handleNavClick = useCallback(() => {
    onExpandChange(false);
  }, [onExpandChange]);

  return (
    <aside
      className={`side-panel ${expanded ? "expanded" : "collapsed"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Desktop sidebar ── */}
      <div className="desktop-sidebar">
        <div className="sidebar-top">
          <div className="brand-logo">
            <span className="brand-full">John<span>.</span></span>
            <span className="brand-mini">J.</span>
          </div>
          <Button
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            icon={isDark ? <SunOutlined /> : <MoonOutlined />}
            size="small"
          >
            <span className="toggle-text">{isDark ? "LIGHT MODE" : "DARK MODE"}</span>
          </Button>
          <div className="side-badge">
            <span className="pulse-dot"></span>
            <span className="badge-text">OPEN FOR WORK</span>
          </div>
        </div>
        <nav className="side-nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={handleNavClick}>
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="side-footer-tag">©2026 // AVILA</div>
      </div>

      {/* ── Mobile header bar ── */}
      <div className="mobile-header">
        <span className="mobile-logo">J.</span>
        <button className="menu-btn" onClick={handleToggle} aria-label="Toggle navigation">
          {expanded ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* ── Mobile full-screen overlay menu ── */}
      <div className={`mobile-overlay ${expanded ? "open" : ""}`}>
        <div className="mobile-overlay-scrim" onClick={handleToggle} />
        <div className="mobile-overlay-content">
          <div className="mobile-overlay-header">
            <span className="mobile-logo">J.</span>
            <button className="menu-btn" onClick={handleToggle} aria-label="Close navigation">
              <CloseOutlined />
            </button>
          </div>
          <nav className="mobile-overlay-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="mobile-nav-item" onClick={handleNavClick}>
                <span className="mobile-nav-num">{item.num}</span>
                <span className="mobile-nav-icon">{item.icon}</span>
                <span className="mobile-nav-label">{item.label}</span>
              </a>
            ))}
          </nav>
          <div className="mobile-overlay-bottom">
            <Button
              className="mobile-theme-btn"
              onClick={() => setIsDark(!isDark)}
              icon={isDark ? <SunOutlined /> : <MoonOutlined />}
              block
            >
              {isDark ? "LIGHT MODE" : "DARK MODE"}
            </Button>
            <div className="mobile-badge">
              <span className="pulse-dot"></span>
              OPEN FOR WORK
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
