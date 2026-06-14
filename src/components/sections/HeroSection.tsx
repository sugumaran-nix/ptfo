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
    <section id="hero" className="hero-section">
      <div className="hero-glow" />
      <div className="dot-pattern" style={{ position:"absolute", inset:0, opacity:0.4, pointerEvents:"none" }} />
      <div className="hero-fade-bottom" />

      <div className="hero-content">
        {/* Status */}
        <motion.div {...fade(0.05)} style={{ marginBottom:"1.5rem" }}>
          <span className="status-chip">
            <span className="status-dot" />
            Open to full-stack developer roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 {...fade(0.12)} className="hero-name">
          Sugumaran S
        </motion.h1>

        {/* Role */}
        <motion.p {...fade(0.2)} className="hero-role">
          Full Stack Developer — React · FastAPI · Python
        </motion.p>

        {/* Bio */}
        <motion.div {...fade(0.28)} style={{ marginBottom:"2rem" }}>
          {HERO_BIO.map((para, i) => (
            <p key={i} className="hero-bio"
              style={{ marginBottom: i < HERO_BIO.length - 1 ? "0.75rem" : 0 }}>
              {para}
            </p>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div {...fade(0.36)} className="hero-ctas">
          <a href="#projects" className="btn btn-primary">
            View Projects <RiArrowRightLine size={15} />
          </a>
          <a href={PROFILE.resume} download className="btn btn-secondary">
            <RiDownloadLine size={15} /> Resume
          </a>
          <a href="#contact" className="btn btn-secondary">Contact</a>
        </motion.div>

        {/* Social */}
        <motion.div {...fade(0.44)} className="hero-social">
          {[
            { href: PROFILE.github,   icon: RiGithubLine,      label: "GitHub"   },
            { href: PROFILE.linkedin, icon: RiLinkedinBoxLine, label: "LinkedIn" },
          ].map(({ href, icon: Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={label} className="social-link">
              <Icon size={15} /> {label}
            </a>
          ))}
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 6rem 1.5rem 4rem;
          overflow: hidden;
        }
        .hero-fade-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 160px;
          background: linear-gradient(to top, rgb(var(--bg)), transparent);
          pointer-events: none;
        }
        .hero-content {
          position: relative;
          max-width: 720px;
          margin: 0 auto;
          width: 100%;
        }
        .status-chip {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-family: var(--font-mono); font-size: 0.75rem;
          color: rgb(var(--text-secondary));
          border: 1px solid rgb(var(--border));
          border-radius: 2rem;
          padding: 0.35rem 0.85rem;
          background-color: rgb(var(--surface));
        }
        .status-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background-color: #22C55E;
          box-shadow: 0 0 0 2px rgb(34 197 94 / 0.2);
          animation: blink 2s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }
        .hero-name {
          font-size: clamp(2.5rem, 7vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1.05;
          color: rgb(var(--text-primary));
          margin-bottom: 0.75rem;
        }
        .hero-role {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: rgb(var(--accent));
          font-weight: 500;
          margin-bottom: 1.75rem;
          letter-spacing: -0.01em;
        }
        .hero-bio {
          font-size: 1rem;
          line-height: 1.75;
          color: rgb(var(--text-secondary));
        }
        .hero-ctas {
          display: flex; flex-wrap: wrap; gap: 0.625rem;
          margin-bottom: 1.75rem;
        }
        .hero-social {
          display: flex; align-items: center; gap: 0.5rem;
        }
        .social-link {
          display: inline-flex; align-items: center; gap: 0.375rem;
          padding: 0.4rem 0.75rem;
          border-radius: 0.375rem;
          border: 1px solid rgb(var(--border));
          font-size: 0.8125rem; font-weight: 500;
          color: rgb(var(--text-secondary));
          background-color: rgb(var(--surface));
          transition: color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease;
          text-decoration: none;
        }
        .social-link:hover {
          color: rgb(var(--accent));
          border-color: rgb(var(--accent) / 0.4);
          background-color: rgb(var(--accent-subtle));
        }
      `}</style>
    </section>
  );
}
