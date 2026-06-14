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
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        height: 64,
        backgroundColor: scrolled
          ? `rgb(var(--bg) / 0.92)`
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgb(var(--border))"
          : "1px solid transparent",
        transition: "background-color 0.2s ease, border-color 0.2s ease, backdrop-filter 0.2s ease",
      }}>
      <nav
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          height: "100%",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>

        {/* Logo */}
        <a href="#hero"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "1rem",
            fontWeight: 600,
            color: `rgb(var(--text-primary))`,
            letterSpacing: "0.02em",
          }}>
          sugumaran<span style={{ color: `rgb(var(--accent))` }}>.</span>dev
        </a>

        {/* Desktop nav */}
        <ul style={{ display: "flex", alignItems: "center", gap: "0.25rem", listStyle: "none", margin: 0, padding: 0 }}
          className="hidden md:flex">
          {links.map((l) => {
            const id = l.href.slice(1);
            const isActive = active === id;
            return (
              <li key={l.href} style={{ position: "relative" }}>
                <a href={l.href}
                  style={{
                    display: "block",
                    padding: "0.375rem 0.75rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    borderRadius: "0.375rem",
                    color: isActive
                      ? `rgb(var(--text-primary))`
                      : `rgb(var(--text-secondary))`,
                    transition: "color 0.15s ease, background-color 0.15s ease",
                  }}
                  onMouseEnter={e => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = `rgb(var(--bg-alt))`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }}>
                  {l.label}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: "absolute",
                      bottom: 2,
                      left: "0.75rem",
                      right: "0.75rem",
                      height: 2,
                      borderRadius: 2,
                      backgroundColor: `rgb(var(--accent))`,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {/* Desktop: Resume + toggle */}
          <a href={PROFILE.resume} download
            className="hidden md:inline-flex btn btn-primary"
            style={{ fontSize: "0.8125rem", padding: "0.5rem 1rem" }}>
            Resume
          </a>
          <button onClick={toggle} aria-label="Toggle theme"
            style={{
              padding: "0.4rem",
              borderRadius: "0.375rem",
              border: `1px solid rgb(var(--border))`,
              background: "transparent",
              color: `rgb(var(--text-secondary))`,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              transition: "border-color 0.15s, color 0.15s, background-color 0.15s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = `rgb(var(--bg-alt))`;
              (e.currentTarget as HTMLElement).style.color = `rgb(var(--text-primary))`;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = `rgb(var(--text-secondary))`;
            }}>
            {theme === "light" ? <RiMoonLine size={16} /> : <RiSunLine size={16} />}
          </button>

          {/* Mobile: burger */}
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
            className="md:hidden"
            style={{
              padding: "0.4rem",
              borderRadius: "0.375rem",
              border: `1px solid rgb(var(--border))`,
              background: "transparent",
              color: `rgb(var(--text-primary))`,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}>
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
            style={{
              overflow: "hidden",
              backgroundColor: `rgb(var(--surface))`,
              borderBottom: `1px solid rgb(var(--border))`,
            }}>
            <div style={{ padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {links.map((l) => {
                const id = l.href.slice(1);
                const isActive = active === id;
                return (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      padding: "0.625rem 0.75rem",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      borderRadius: "0.375rem",
                      color: isActive ? `rgb(var(--accent))` : `rgb(var(--text-secondary))`,
                      backgroundColor: isActive ? `rgb(var(--accent-subtle))` : "transparent",
                      borderLeft: `2px solid ${isActive ? `rgb(var(--accent))` : "transparent"}`,
                    }}>
                    {l.label}
                  </a>
                );
              })}
              <div style={{ paddingTop: "0.75rem", borderTop: `1px solid rgb(var(--border))`, marginTop: "0.25rem" }}>
                <a href={PROFILE.resume} download className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
