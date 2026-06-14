"use client";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";
import { EDUCATION } from "@/lib/data";

export default function EducationSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section id="education" ref={ref} style={{ padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem" }}>
          <span className="section-label">Education</span>
          <h2 className="section-heading">Academic Background</h2>
        </motion.div>

        <div style={{ position: "relative", maxWidth: 680 }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute", left: 12, top: 0, bottom: 0,
            width: 1, backgroundColor: `rgb(var(--border))`,
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {EDUCATION.map((edu, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.08 + i * 0.09 }}
                style={{ position: "relative", paddingLeft: "2.5rem" }}>

                {/* Timeline dot */}
                <div style={{
                  position: "absolute", left: 7, top: 20,
                  width: 10, height: 10, borderRadius: "50%",
                  backgroundColor: edu.status === "Graduate"
                    ? `rgb(var(--accent))`
                    : `rgb(var(--border))`,
                  border: `2px solid rgb(var(--bg))`,
                  boxShadow: edu.status === "Graduate"
                    ? `0 0 0 3px rgb(var(--accent) / 0.15)`
                    : "none",
                }} />

                <div className="card" style={{ padding: "1.25rem" }}>
                  <div style={{
                    display: "flex", flexWrap: "wrap",
                    justifyContent: "space-between", alignItems: "flex-start",
                    gap: "0.5rem", marginBottom: "0.5rem",
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: "0.9375rem", fontWeight: 600,
                        color: `rgb(var(--text-primary))`, lineHeight: 1.3,
                        marginBottom: "0.2rem",
                      }}>
                        {edu.degree}
                      </h3>
                      {edu.field && (
                        <p style={{
                          fontSize: "0.8125rem", fontWeight: 500,
                          color: `rgb(var(--accent))`,
                        }}>
                          {edu.field}
                        </p>
                      )}
                    </div>
                    <span className="badge"
                      style={edu.status === "Graduate" ? {} : {
                        backgroundColor: `rgb(var(--bg-alt))`,
                        color: `rgb(var(--text-secondary))`,
                        borderColor: `rgb(var(--border))`,
                      }}>
                      {edu.status}
                    </span>
                  </div>

                  <p style={{ fontSize: "0.8375rem", color: `rgb(var(--text-secondary))` }}>
                    {edu.institution}
                  </p>
                  {edu.university && (
                    <p style={{ fontSize: "0.75rem", color: `rgb(var(--text-secondary) / 0.7)`, marginTop: "0.15rem" }}>
                      {edu.university}
                    </p>
                  )}

                  <div style={{
                    display: "flex", gap: "1.25rem", marginTop: "0.875rem",
                    fontFamily: "var(--font-mono)", fontSize: "0.75rem",
                  }}>
                    <span style={{ color: `rgb(var(--text-secondary))` }}>{edu.period}</span>
                    <span style={{ color: `rgb(var(--text-primary))`, fontWeight: 600 }}>
                      Score: {edu.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
