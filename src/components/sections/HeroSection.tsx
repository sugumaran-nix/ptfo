"use client";
import { motion } from "framer-motion";
import { RiGithubLine, RiLinkedinBoxLine, RiArrowRightLine, RiDownloadLine } from "react-icons/ri";
import { PROFILE, HERO_BIO } from "@/lib/data";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
});

export default function HeroSection() {
  return (
    <section id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6rem 1.5rem 4rem",
        overflow: "hidden",
      }}>

      {/* Subtle hero glow — not distracting */}
      <div className="hero-glow" />
      {/* Dot pattern — very subtle */}
      <div className="dot-pattern"
        style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />
      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 160,
        background: `linear-gradient(to top, rgb(var(--bg)), transparent)`,
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", maxWidth: 720, margin: "0 auto", width: "100%" }}>

        {/* Status indicator */}
        <motion.div {...fade(0.05)} style={{ marginBottom: "1.5rem" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            fontFamily: "var(--font-mono)", fontSize: "0.75rem",
            color: `rgb(var(--text-secondary))`,
            border: `1px solid rgb(var(--border))`,
            borderRadius: "2rem",
            padding: "0.35rem 0.85rem",
            backgroundColor: `rgb(var(--surface))`,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              backgroundColor: "#22C55E",
              boxShadow: "0 0 0 2px rgb(34 197 94 / 0.2)",
              animation: "pulse 2s infinite",
            }} />
            Open to full-stack developer roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 {...fade(0.12)}
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.05,
            color: `rgb(var(--text-primary))`,
            marginBottom: "0.75rem",
          }}>
          Sugumaran S
        </motion.h1>

        {/* Role */}
        <motion.p {...fade(0.2)}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: `rgb(var(--accent))`,
            fontWeight: 500,
            marginBottom: "1.75rem",
            letterSpacing: "-0.01em",
          }}>
          Full Stack Developer — React · FastAPI · Python
        </motion.p>

        {/* Bio */}
        <motion.div {...fade(0.28)} style={{ marginBottom: "2rem" }}>
          {HERO_BIO.map((para, i) => (
            <p key={i} style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: `rgb(var(--text-secondary))`,
              marginBottom: i < HERO_BIO.length - 1 ? "0.75rem" : 0,
            }}>
              {para}
            </p>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div {...fade(0.36)}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", marginBottom: "2rem" }}>
          <a href="#projects" className="btn btn-primary">
            View Projects <RiArrowRightLine size={15} />
          </a>
          <a href={PROFILE.resume} download className="btn btn-secondary">
            <RiDownloadLine size={15} /> Resume
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...fade(0.44)}
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {[
            { href: PROFILE.github,   icon: RiGithubLine,      label: "GitHub"   },
            { href: PROFILE.linkedin, icon: RiLinkedinBoxLine, label: "LinkedIn" },
          ].map(({ href, icon: Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={label}
              style={{
                display: "flex", alignItems: "center", gap: "0.375rem",
                padding: "0.4rem 0.75rem",
                borderRadius: "0.375rem",
                border: `1px solid rgb(var(--border))`,
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: `rgb(var(--text-secondary))`,
                backgroundColor: `rgb(var(--surface))`,
                transition: "color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = `rgb(var(--accent))`;
                el.style.borderColor = `rgb(var(--accent) / 0.4)`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = `rgb(var(--text-secondary))`;
                el.style.borderColor = `rgb(var(--border))`;
              }}>
              <Icon size={15} /> {label}
            </a>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
