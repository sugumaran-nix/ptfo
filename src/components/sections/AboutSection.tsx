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
  return (
    <div className="avatar-ring">
      {failed
        ? <span className="avatar-fallback">S</span>
        : <img src="/photo.jpg" alt="Sugumaran S" className="avatar-img" />
      }
    </div>
  );
}

const QUICK_TAGS = ["React", "Next.js", "FastAPI", "Python", "MongoDB", "TypeScript", "Node.js", "REST APIs"];

export default function AboutSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="section-alt">
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} style={{ marginBottom: "3rem" }}>
          <span className="section-label">About</span>
          <h2 className="section-heading">Who I Am</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="about-avatar-col">
            <Avatar />
            <div className="about-name-block">
              <p className="about-name">{PROFILE.name}</p>
              <p className="about-location">{PROFILE.location}</p>
              <span className="badge" style={{ display:"inline-block", marginTop:"0.5rem" }}>MCA Graduate</span>
            </div>
          </motion.div>

          <div>
            {ABOUT_BIO.map((p, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                className="about-para"
                style={{ marginBottom: i < ABOUT_BIO.length - 1 ? "1rem" : "1.5rem" }}>
                {p}
              </motion.p>
            ))}
            <motion.div initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.35 }}
              className="about-tags">
              {QUICK_TAGS.map((tag) => <span key={tag} className="skill-pill">{tag}</span>)}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 3rem; align-items: start;
        }
        @media (max-width: 640px) { .about-grid { grid-template-columns: 1fr; } }
        .about-avatar-col { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; }
        .avatar-ring {
          width: 120px; height: 120px; border-radius: 50%;
          border: 2px solid rgb(var(--border));
          overflow: hidden; background-color: rgb(var(--bg-alt));
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .avatar-fallback { font-weight: 700; font-size: 2rem; color: rgb(var(--accent)); }
        .avatar-img { width: 100%; height: 100%; object-fit: cover; }
        .about-name-block { text-align: center; }
        .about-name { font-size: 0.875rem; font-weight: 600; color: rgb(var(--text-primary)); }
        .about-location { font-size: 0.75rem; font-family: var(--font-mono); color: rgb(var(--text-secondary)); margin-top: 0.2rem; }
        .about-para { font-size: 1rem; line-height: 1.75; color: rgb(var(--text-secondary)); }
        .about-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
      `}</style>
    </section>
  );
}
