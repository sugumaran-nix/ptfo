"use client";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { useInView } from "@/lib/useInView";

export default function SkillsSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });
  return (
    <section id="skills" ref={ref} className="section">
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} style={{ marginBottom: "3rem" }}>
          <span className="section-label">Skills</span>
          <h2 className="section-heading">What I Work With</h2>
          <p className="section-subtext">
            Technologies I've used in shipped projects — I can discuss each confidently.
          </p>
        </motion.div>
        <div className="skills-grid">
          {SKILLS.map((cat, ci) => (
            <motion.div key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 + ci * 0.06 }}
              className="card skills-card">
              <p className="skills-cat-label">{cat.label}</p>
              <div className="skills-pills">
                {cat.skills.map((s) => <span key={s} className="skill-pill">{s}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }
        .skills-card { padding: 1.25rem; }
        .skills-cat-label {
          font-family: var(--font-mono); font-size: 0.7rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgb(var(--accent)); margin-bottom: 0.875rem;
        }
        .skills-pills { display: flex; flex-wrap: wrap; gap: 0.4rem; }
      `}</style>
    </section>
  );
}
