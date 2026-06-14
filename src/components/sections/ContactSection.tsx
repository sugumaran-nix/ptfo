"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { RiMailLine, RiGithubLine, RiLinkedinBoxLine, RiMapPinLine, RiSendPlaneLine, RiDownloadLine } from "react-icons/ri";
import { PROFILE } from "@/lib/data";
import { useInView } from "@/lib/useInView";

export default function ContactSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${PROFILE.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 6000);
  };

  const infoItems = [
    { icon: RiMapPinLine,      label: "Location", value: PROFILE.location,   href: undefined         },
    { icon: RiMailLine,        label: "Email",    value: PROFILE.email,       href: `mailto:${PROFILE.email}` },
    { icon: RiGithubLine,      label: "GitHub",   value: "sugumaran-nix",     href: PROFILE.github    },
    { icon: RiLinkedinBoxLine, label: "LinkedIn", value: "sugumaran-nix",     href: PROFILE.linkedin  },
  ];

  return (
    <section id="contact" ref={ref} className="section-alt">
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} style={{ marginBottom: "3rem" }}>
          <span className="section-label">Contact</span>
          <h2 className="section-heading">Let's Talk</h2>
          <p className="contact-subtitle">
            Looking for full-stack developer roles. Have an opportunity? Reach out.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* LEFT */}
          <motion.div initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="contact-info">
            <h3 className="contact-info-heading">Get In Touch</h3>
            {infoItems.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <div className="contact-icon-wrap"><Icon size={16} /></div>
                  <div className="contact-item-text">
                    <p className="contact-item-label">{label}</p>
                    <p className="contact-item-value">{value}</p>
                  </div>
                </>
              );
              return href ? (
                <a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card contact-card contact-card-link">
                  {inner}
                </a>
              ) : (
                <div key={label} className="card contact-card">{inner}</div>
              );
            })}
            <a href={PROFILE.resume} download className="btn btn-primary" style={{ justifyContent:"center", marginTop:"0.25rem" }}>
              <RiDownloadLine size={15} /> Download Resume
            </a>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}>
            <form onSubmit={handleSubmit} noValidate className="contact-form">
              <input type="text" placeholder="Your Name" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input" />
              <input type="email" placeholder="Your Email" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input" />
              <textarea rows={5} placeholder="Your Message" value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input" style={{ resize:"none", fontFamily:"inherit" }} />
              {error && <p className="form-error">{error}</p>}
              <button type="submit" className="btn btn-primary" style={{ justifyContent:"center", padding:"0.75rem" }}>
                <RiSendPlaneLine size={15} />
                {sent ? "✓ Opened in mail client" : "Send Message"}
              </button>
              <p className="form-hint">Opens your mail client with the message pre-filled.</p>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-subtitle { margin-top: 0.75rem; font-size: 1rem; color: rgb(var(--text-secondary)); max-width: 440px; line-height: 1.65; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } }
        .contact-info { display: flex; flex-direction: column; gap: 0.75rem; }
        .contact-info-heading { font-size: 1.0625rem; font-weight: 600; color: rgb(var(--text-primary)); margin-bottom: 0.25rem; }
        .contact-card { display: flex; align-items: center; gap: 0.875rem; padding: 0.875rem 1rem; }
        .contact-card-link { text-decoration: none; }
        .contact-card-link:hover .contact-item-value { color: rgb(var(--accent)); }
        .contact-icon-wrap {
          padding: 0.5rem; border-radius: 0.375rem; flex-shrink: 0;
          background-color: rgb(var(--accent-subtle)); color: rgb(var(--accent));
        }
        .contact-item-label { font-size: 0.7rem; font-family: var(--font-mono); color: rgb(var(--text-secondary)); margin-bottom: 0.15rem; letter-spacing: 0.05em; }
        .contact-item-value { font-size: 0.875rem; font-weight: 500; color: rgb(var(--text-primary)); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; transition: color 0.15s ease; }
        .contact-item-text { min-width: 0; }
        .contact-form { display: flex; flex-direction: column; gap: 0.875rem; }
        .form-error { font-size: 0.8125rem; color: #EF4444; font-family: var(--font-mono); }
        .form-hint { font-size: 0.75rem; text-align: center; color: rgb(var(--text-secondary)); font-family: var(--font-mono); }
      `}</style>
    </section>
  );
}
