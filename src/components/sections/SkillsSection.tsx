"use client";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { useInView } from "@/lib/useInView";

export default function SkillsSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section id="skills" ref={ref} style={{ padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem" }}>
          <span className="section-label">Skills</span>
          <h2 className="section-heading">What I Work With</h2>
          <p style={{
            marginTop: "0.75rem", fontSize: "0.9rem",
            color: `rgb(var(--text-secondary))`, maxWidth: 480,
            fontFamily: "var(--font-mono)",
          }}>
            Technologies I've used in shipped projects — I can discuss each confidently.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "1rem",
        }}>
          {SKILLS.map((cat, ci) => (
            <motion.div key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 + ci * 0.06 }}
              className="card"
              style={{ padding: "1.25rem" }}>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: `rgb(var(--accent))`,
                marginBottom: "0.875rem",
              }}>
                {cat.label}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
