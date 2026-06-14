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
      className="card project-card">

      <div className="project-body">
        <div className="project-top-row">
          <span className="badge">{project.badge}</span>
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-problem">{project.problem}</p>

        <div className="project-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="skill-pill">{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="btn btn-secondary project-btn">
            <RiGithubLine size={14} /> GitHub
          </a>
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="btn btn-primary project-btn">
              <RiExternalLinkLine size={14} /> Live Demo
            </a>
          ) : (
            <span className="btn project-btn project-btn-soon">
              <RiExternalLinkLine size={14} /> Demo Soon
            </span>
          )}
        </div>

        <button onClick={() => setExpanded(!expanded)} className="expand-btn">
          {expanded ? "Hide details" : "How I built it →"}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <RiArrowDownSLine size={13} />
          </motion.span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}>
            <div className="project-detail">
              {[
                { label: "My Role",        value: project.role      },
                { label: "How I Built It", value: project.action    },
                { label: "Outcome",        value: project.outcome   },
                { label: "Hardest Part",   value: project.challenge },
                { label: "Key Learning",   value: project.learning  },
              ].map(({ label, value }) => (
                <div key={label} className="detail-row">
                  <p className="detail-label">{label}</p>
                  <p className="detail-value">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .project-card { display: flex; flex-direction: column; overflow: hidden; }
        .project-body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
        .project-top-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
        .project-index { font-family: var(--font-mono); font-size: 0.7rem; color: rgb(var(--text-secondary) / 0.4); }
        .project-title { font-size: 1.0625rem; font-weight: 600; color: rgb(var(--text-primary)); margin-bottom: 0.375rem; line-height: 1.3; }
        .project-tagline { font-size: 0.8125rem; font-weight: 500; color: rgb(var(--accent)); margin-bottom: 0.875rem; }
        .project-problem { font-size: 0.875rem; line-height: 1.65; color: rgb(var(--text-secondary)); margin-bottom: 1.25rem; flex: 1; }
        .project-stack { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1.25rem; }
        .project-actions { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
        .project-btn { flex: 1; font-size: 0.8125rem; padding: 0.5rem 0.75rem; }
        .project-btn-soon {
          border: 1px dashed rgb(var(--border)) !important;
          color: rgb(var(--text-secondary) / 0.35) !important;
          cursor: default; user-select: none;
          background: transparent !important;
        }
        .expand-btn {
          display: flex; align-items: center; gap: 0.35rem;
          font-family: var(--font-mono); font-size: 0.75rem;
          color: rgb(var(--text-secondary));
          background: none; border: none; cursor: pointer; padding: 0;
          transition: color 0.15s ease; width: fit-content;
        }
        .expand-btn:hover { color: rgb(var(--accent)); }
        .project-detail {
          padding: 1.25rem 1.5rem 1.5rem;
          border-top: 1px solid rgb(var(--border));
          background-color: rgb(var(--bg-alt));
          display: flex; flex-direction: column; gap: 1rem;
        }
        .detail-label {
          font-family: var(--font-mono); font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgb(var(--accent)); margin-bottom: 0.3rem;
        }
        .detail-value { font-size: 0.8375rem; line-height: 1.65; color: rgb(var(--text-secondary)); }
      `}</style>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section id="projects" ref={ref} className="section section-alt">
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} style={{ marginBottom: "0.75rem" }}>
          <span className="section-label">Projects</span>
          <h2 className="section-heading">Things I've Built</h2>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }} className="section-subtext">
          All projects link to GitHub. Expand any card to see my role, approach, and outcome.
        </motion.p>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }} className="projects-more">
          <a href="https://github.com/sugumaran-nix" target="_blank" rel="noopener noreferrer"
            className="more-link">
            <RiGithubLine size={15} /> View all repositories →
          </a>
        </motion.div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.25rem;
        }
        .projects-more { margin-top: 2.5rem; text-align: center; }
        .more-link {
          display: inline-flex; align-items: center; gap: 0.375rem;
          font-size: 0.875rem; font-family: var(--font-mono);
          color: rgb(var(--text-secondary));
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .more-link:hover { color: rgb(var(--text-primary)); }
      `}</style>
    </section>
  );
}
