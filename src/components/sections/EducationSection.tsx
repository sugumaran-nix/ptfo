"use client";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";
import { EDUCATION } from "@/lib/data";

export default function EducationSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });
  return (
    <section id="education" ref={ref} className="section">
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} style={{ marginBottom: "3rem" }}>
          <span className="section-label">Education</span>
          <h2 className="section-heading">Academic Background</h2>
        </motion.div>
        <div className="edu-timeline">
          <div className="edu-line" />
          <div className="edu-cards">
            {EDUCATION.map((edu, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.08 + i * 0.09 }}
                className="edu-item">
                <div className={`edu-dot ${edu.status === "Graduate" ? "edu-dot-active" : ""}`} />
                <div className="card edu-card">
                  <div className="edu-card-top">
                    <div>
                      <h3 className="edu-degree">{edu.degree}</h3>
                      {edu.field && <p className="edu-field">{edu.field}</p>}
                    </div>
                    <span className={`badge ${edu.status !== "Graduate" ? "badge-muted" : ""}`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="edu-institution">{edu.institution}</p>
                  {edu.university && <p className="edu-university">{edu.university}</p>}
                  <div className="edu-meta">
                    <span>{edu.period}</span>
                    <span className="edu-score">Score: {edu.score}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .edu-timeline { position: relative; max-width: 680px; }
        .edu-line {
          position: absolute; left: 12px; top: 0; bottom: 0;
          width: 1px; background-color: rgb(var(--border));
        }
        .edu-cards { display: flex; flex-direction: column; gap: 1.25rem; }
        .edu-item { position: relative; padding-left: 2.5rem; }
        .edu-dot {
          position: absolute; left: 7px; top: 20px;
          width: 10px; height: 10px; border-radius: 50%;
          background-color: rgb(var(--border));
          border: 2px solid rgb(var(--bg));
        }
        .edu-dot-active {
          background-color: rgb(var(--accent));
          box-shadow: 0 0 0 3px rgb(var(--accent) / 0.15);
        }
        .edu-card { padding: 1.25rem; }
        .edu-card-top {
          display: flex; flex-wrap: wrap;
          justify-content: space-between; align-items: flex-start;
          gap: 0.5rem; margin-bottom: 0.5rem;
        }
        .edu-degree { font-size: 0.9375rem; font-weight: 600; color: rgb(var(--text-primary)); line-height: 1.3; margin-bottom: 0.2rem; }
        .edu-field { font-size: 0.8125rem; font-weight: 500; color: rgb(var(--accent)); }
        .edu-institution { font-size: 0.8375rem; color: rgb(var(--text-secondary)); }
        .edu-university { font-size: 0.75rem; color: rgb(var(--text-secondary) / 0.7); margin-top: 0.15rem; }
        .edu-meta {
          display: flex; gap: 1.25rem; margin-top: 0.875rem;
          font-family: var(--font-mono); font-size: 0.75rem;
          color: rgb(var(--text-secondary));
        }
        .edu-score { font-weight: 600; color: rgb(var(--text-primary)); }
        .badge-muted {
          background-color: rgb(var(--bg-alt)) !important;
          color: rgb(var(--text-secondary)) !important;
          border-color: rgb(var(--border)) !important;
        }
      `}</style>
    </section>
  );
}
