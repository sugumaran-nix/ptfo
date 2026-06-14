"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMoonLine, RiSunLine, RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useTheme } from "@/lib/ThemeProvider";
import { PROFILE } from "@/lib/data";

const links = [
  { label: "Home",      href: "#hero"      },
  { label: "About",     href: "#about"     },
  { label: "Skills",    href: "#skills"    },
  { label: "Projects",  href: "#projects"  },
  { label: "Education", href: "#education" },
  { label: "Contact",   href: "#contact"   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("hero");
  const { theme, toggle }       = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { threshold: 0.1, rootMargin: "-64px 0px -25% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar-inner">
        {/* Logo */}
        <a href="#hero" className="navbar-logo">
          sugumaran<span className="navbar-logo-dot">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="navbar-links">
          {links.map((l) => {
            const id = l.href.slice(1);
            const isActive = active === id;
            return (
              <li key={l.href} style={{ position: "relative" }}>
                <a href={l.href} className={`nav-link ${isActive ? "active" : ""}`}>
                  {l.label}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="nav-underline"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className="navbar-actions">
          <a href={PROFILE.resume} download className="btn btn-primary navbar-resume">
            Resume
          </a>
          <button onClick={toggle} aria-label="Toggle theme" className="icon-btn">
            {theme === "light" ? <RiMoonLine size={16} /> : <RiSunLine size={16} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
            className="icon-btn navbar-burger">
            {open ? <RiCloseLine size={18} /> : <RiMenuLine size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-drawer">
            <div className="mobile-drawer-inner">
              {links.map((l) => {
                const id = l.href.slice(1);
                const isActive = active === id;
                return (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                    className={`mobile-nav-link ${isActive ? "active" : ""}`}>
                    {l.label}
                  </a>
                );
              })}
              <div className="mobile-drawer-footer">
                <a href={PROFILE.resume} download className="btn btn-primary" style={{ width:"100%", justifyContent:"center" }}>
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          height: 64px;
          transition: background-color 0.2s ease, border-color 0.2s ease, backdrop-filter 0.2s ease;
          background-color: transparent;
          border-bottom: 1px solid transparent;
        }
        .navbar-scrolled {
          background-color: rgb(var(--bg) / 0.92);
          backdrop-filter: blur(12px);
          border-bottom-color: rgb(var(--border));
        }
        .navbar-inner {
          max-width: 1152px; margin: 0 auto;
          height: 100%; padding: 0 1.5rem;
          display: flex; align-items: center; justify-content: space-between;
        }
        .navbar-logo {
          font-family: var(--font-mono); font-size: 0.9375rem; font-weight: 600;
          color: rgb(var(--text-primary)); letter-spacing: 0.01em;
          text-decoration: none; transition: opacity 0.15s ease;
        }
        .navbar-logo:hover { opacity: 0.75; }
        .navbar-logo-dot { color: rgb(var(--accent)); }
        .navbar-links {
          display: flex; align-items: center; gap: 0.125rem;
          list-style: none; margin: 0; padding: 0;
        }
        @media (max-width: 767px) { .navbar-links { display: none; } }
        .nav-underline {
          position: absolute; bottom: 2px; left: 0.75rem; right: 0.75rem;
          height: 2px; border-radius: 2px;
          background-color: rgb(var(--accent));
        }
        .navbar-actions { display: flex; align-items: center; gap: 0.5rem; }
        .navbar-resume { font-size: 0.8125rem; padding: 0.5rem 1rem; }
        @media (max-width: 767px) { .navbar-resume { display: none; } }
        .navbar-burger { display: none; }
        @media (max-width: 767px) { .navbar-burger { display: flex; } }
        .mobile-drawer {
          overflow: hidden;
          background-color: rgb(var(--surface));
          border-bottom: 1px solid rgb(var(--border));
        }
        .mobile-drawer-inner {
          padding: 0.75rem 1.5rem 1rem;
          display: flex; flex-direction: column; gap: 0.125rem;
        }
        .mobile-nav-link {
          display: block; padding: 0.625rem 0.75rem;
          font-size: 0.9rem; font-weight: 500;
          border-radius: 0.375rem;
          color: rgb(var(--text-secondary));
          border-left: 2px solid transparent;
          text-decoration: none;
          transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease;
        }
        .mobile-nav-link:hover { color: rgb(var(--text-primary)); background-color: rgb(var(--bg-alt)); }
        .mobile-nav-link.active {
          color: rgb(var(--accent));
          background-color: rgb(var(--accent-subtle));
          border-left-color: rgb(var(--accent));
        }
        .mobile-drawer-footer {
          padding-top: 0.875rem;
          border-top: 1px solid rgb(var(--border));
          margin-top: 0.375rem;
        }
      `}</style>
    </header>
  );
}
