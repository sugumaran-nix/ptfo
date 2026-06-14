"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiGithubLine, RiExternalLinkLine, RiArrowDownSLine } from "react-icons/ri";
import { PROJECTS, type Project } from "@/lib/data";
import { useInView } from "@/lib/useInView";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.08 });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      className="card"
      style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>

      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
          <span className="badge">{project.badge}</span>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: "0.7rem",
            color: `rgb(var(--text-secondary) / 0.5)`,
          }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: "1.0625rem", fontWeight: 600,
          color: `rgb(var(--text-primary))`,
          marginBottom: "0.4rem", lineHeight: 1.3,
        }}>
          {project.title}
        </h3>

        {/* Tagline */}
        <p style={{
          fontSize: "0.8125rem", fontWeight: 500,
          color: `rgb(var(--accent))`,
          marginBottom: "0.875rem",
        }}>
          {project.tagline}
        </p>

        {/* Problem */}
        <p style={{
          fontSize: "0.875rem", lineHeight: 1.65,
          color: `rgb(var(--text-secondary))`,
          marginBottom: "1.25rem", flex: 1,
        }}>
          {project.problem}
        </p>

        {/* Stack pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.25rem" }}>
          {project.stack.map((tech) => (
            <span key={tech} className="skill-pill">{tech}</span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ flex: 1, fontSize: "0.8125rem", padding: "0.5rem 0.75rem" }}>
            <RiGithubLine size={14} /> GitHub
          </a>
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flex: 1, fontSize: "0.8125rem", padding: "0.5rem 0.75rem" }}>
              <RiExternalLinkLine size={14} /> Live Demo
            </a>
          ) : (
            <span className="btn"
              style={{
                flex: 1, fontSize: "0.8125rem", padding: "0.5rem 0.75rem",
                border: `1px dashed rgb(var(--border))`,
                color: `rgb(var(--text-secondary) / 0.4)`,
                cursor: "default", userSelect: "none",
              }}>
              <RiExternalLinkLine size={14} /> Demo Soon
            </span>
          )}
        </div>

        {/* Expand */}
        <button onClick={() => setExpanded(!expanded)}
          style={{
            display: "flex", alignItems: "center", gap: "0.35rem",
            fontFamily: "var(--font-mono)", fontSize: "0.75rem",
            color: `rgb(var(--text-secondary))`,
            background: "none", border: "none", cursor: "pointer",
            padding: 0, width: "fit-content",
            transition: "color 0.15s ease",
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = `rgb(var(--accent))`}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = `rgb(var(--text-secondary))`}>
          {expanded ? "Hide details" : "How I built it →"}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <RiArrowDownSLine size={13} />
          </motion.span>
        </button>
      </div>

      {/* Expandable detail */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}>
            <div style={{
              padding: "1.25rem 1.5rem 1.5rem",
              borderTop: `1px solid rgb(var(--border))`,
              backgroundColor: `rgb(var(--bg-alt))`,
              display: "flex", flexDirection: "column", gap: "1rem",
            }}>
              {[
                { label: "My Role",        value: project.role     },
                { label: "How I Built It", value: project.action   },
                { label: "Outcome",        value: project.outcome  },
                { label: "Hardest Part",   value: project.challenge },
                { label: "Key Learning",   value: project.learning  },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.68rem", fontWeight: 600,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: `rgb(var(--accent))`, marginBottom: "0.35rem",
                  }}>
                    {label}
                  </p>
                  <p style={{ fontSize: "0.8375rem", lineHeight: 1.65, color: `rgb(var(--text-secondary))` }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section id="projects" ref={ref}
      style={{ padding: "6rem 1.5rem", backgroundColor: `rgb(var(--bg-alt))` }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "0.75rem" }}>
          <span className="section-label">Projects</span>
          <h2 className="section-heading">Things I've Built</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          style={{
            fontSize: "0.875rem", color: `rgb(var(--text-secondary))`,
            marginBottom: "2.5rem", fontFamily: "var(--font-mono)",
          }}>
          All projects link to GitHub. Expand any card to see my role, approach, and outcome.
        </motion.p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.25rem",
        }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <a href="https://github.com/sugumaran-nix" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.375rem",
              fontSize: "0.875rem", color: `rgb(var(--text-secondary))`,
              fontFamily: "var(--font-mono)",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = `rgb(var(--text-primary))`}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = `rgb(var(--text-secondary))`}>
            <RiGithubLine size={15} /> View all repositories →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
