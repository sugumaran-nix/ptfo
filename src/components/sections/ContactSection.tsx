"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { RiMailLine, RiGithubLine, RiLinkedinBoxLine, RiMapPinLine, RiSendPlaneLine, RiDownloadLine } from "react-icons/ri";
import { PROFILE } from "@/lib/data";
import { useInView } from "@/lib/useInView";

export default function ContactSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [form, setForm]   = useState({ name: "", email: "", message: "" });
  const [sent, setSent]   = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body    = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${PROFILE.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 6000);
  };

  const infoItems = [
    { icon: RiMapPinLine,      label: "Location", value: PROFILE.location, href: undefined },
    { icon: RiMailLine,        label: "Email",    value: PROFILE.email,    href: `mailto:${PROFILE.email}` },
    { icon: RiGithubLine,      label: "GitHub",   value: "sugumaran-nix",  href: PROFILE.github },
    { icon: RiLinkedinBoxLine, label: "LinkedIn", value: "sugumaran-nix",  href: PROFILE.linkedin },
  ];

  return (
    <section id="contact" ref={ref}
      style={{ padding: "6rem 1.5rem", backgroundColor: `rgb(var(--bg-alt))` }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem" }}>
          <span className="section-label">Contact</span>
          <h2 className="section-heading">Let's Talk</h2>
          <p style={{
            marginTop: "0.75rem", fontSize: "1rem",
            color: `rgb(var(--text-secondary))`, maxWidth: 440, lineHeight: 1.65,
          }}>
            Looking for full-stack developer roles. Have an opportunity? Reach out.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }} className="contact-grid">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>

            <h3 style={{
              fontSize: "1.0625rem", fontWeight: 600,
              color: `rgb(var(--text-primary))`, marginBottom: "0.5rem",
            }}>
              Get In Touch
            </h3>

            {infoItems.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div style={{
                  display: "flex", alignItems: "center", gap: "0.875rem",
                  padding: "0.875rem 1rem",
                  transition: "border-color 0.15s ease",
                }}>
                  <div style={{
                    padding: "0.5rem",
                    borderRadius: "0.375rem",
                    backgroundColor: `rgb(var(--accent-subtle))`,
                    color: `rgb(var(--accent))`,
                    flexShrink: 0,
                  }}>
                    <Icon size={16} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{
                      fontSize: "0.7rem", fontFamily: "var(--font-mono)",
                      color: `rgb(var(--text-secondary))`, marginBottom: "0.15rem",
                      letterSpacing: "0.05em",
                    }}>
                      {label}
                    </p>
                    <p style={{
                      fontSize: "0.875rem", fontWeight: 500,
                      color: `rgb(var(--text-primary))`,
                      overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    }}>
                      {value}
                    </p>
                  </div>
                </div>
              );

              return href ? (
                <a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card"
                  style={{ display: "block", textDecoration: "none" }}>
                  {inner}
                </a>
              ) : (
                <div key={label} className="card">{inner}</div>
              );
            })}

            <a href={PROFILE.resume} download
              className="btn btn-primary"
              style={{ marginTop: "0.5rem", justifyContent: "center" }}>
              <RiDownloadLine size={15} /> Download Resume
            </a>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}>
            <form onSubmit={handleSubmit} noValidate
              style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <input type="text" placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input" />
              <input type="email" placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input" />
              <textarea rows={5} placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input"
                style={{ resize: "none", fontFamily: "inherit" }} />

              {error && (
                <p style={{
                  fontSize: "0.8125rem", color: "#EF4444",
                  fontFamily: "var(--font-mono)",
                }}>
                  {error}
                </p>
              )}

              <button type="submit" className="btn btn-primary"
                style={{ justifyContent: "center", padding: "0.75rem" }}>
                <RiSendPlaneLine size={15} />
                {sent ? "✓ Opened in mail client" : "Send Message"}
              </button>

              <p style={{
                fontSize: "0.75rem", textAlign: "center",
                color: `rgb(var(--text-secondary))`,
                fontFamily: "var(--font-mono)",
              }}>
                Opens your mail client with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
