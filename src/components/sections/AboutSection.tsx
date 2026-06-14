"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";
import { PROFILE, ABOUT_BIO } from "@/lib/data";

function Avatar() {
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const img = new window.Image();
    img.src = "/photo.jpg";
    img.onerror = () => setFailed(true);
  }, []);

  const base: React.CSSProperties = {
    width: 120, height: 120, borderRadius: "50%",
    border: `2px solid rgb(var(--border))`,
    overflow: "hidden",
    backgroundColor: `rgb(var(--bg-alt))`,
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  };

  if (failed) return (
    <div style={base}>
      <span style={{
        fontWeight: 700, fontSize: "2rem",
        color: `rgb(var(--accent))`,
        fontFamily: "var(--font-sans)",
      }}>S</span>
    </div>
  );
  return (
    <div style={base}>
      <img src="/photo.jpg" alt="Sugumaran S"
        style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}

const QUICK_TAGS = ["React", "Next.js", "FastAPI", "Python", "MongoDB", "TypeScript", "Node.js", "REST APIs"];

export default function AboutSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="about" ref={ref}
      style={{
        padding: "6rem 1.5rem",
        backgroundColor: `rgb(var(--bg-alt))`,
      }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem" }}>
          <span className="section-label">About</span>
          <h2 className="section-heading">Who I Am</h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
          className="about-grid">

          {/* Avatar + name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.08 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
            <Avatar />
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 600, color: `rgb(var(--text-primary))` }}>
                {PROFILE.name}
              </p>
              <p style={{ fontSize: "0.75rem", color: `rgb(var(--text-secondary))`,
                fontFamily: "var(--font-mono)", marginTop: "0.2rem" }}>
                {PROFILE.location}
              </p>
              <span className="badge" style={{ display: "inline-block", marginTop: "0.5rem" }}>
                MCA Graduate
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            {ABOUT_BIO.map((p, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: `rgb(var(--text-secondary))`,
                  marginBottom: i < ABOUT_BIO.length - 1 ? "1rem" : "1.5rem",
                }}>
                {p}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.35 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {QUICK_TAGS.map((tag) => (
                <span key={tag} className="skill-pill">{tag}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
