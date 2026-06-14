"use client";
import { RiGithubLine, RiLinkedinBoxLine, RiMailLine } from "react-icons/ri";
import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copy">
          <span>© {new Date().getFullYear()} Sugumaran S</span>
          <span className="footer-dot">·</span>
          <span>Built with Next.js &amp; Tailwind</span>
          <span className="footer-dot">·</span>
          <span>Updated June 2026</span>
        </p>
        <div className="footer-icons">
          {[
            { href: PROFILE.github,            label: "GitHub",   icon: RiGithubLine      },
            { href: PROFILE.linkedin,          label: "LinkedIn", icon: RiLinkedinBoxLine },
            { href: `mailto:${PROFILE.email}`, label: "Email",    icon: RiMailLine        },
          ].map(({ href, label, icon: Icon }) => (
            <a key={label} href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="footer-icon-link">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .site-footer {
          padding: 1.75rem 1.5rem;
          border-top: 1px solid rgb(var(--border));
          background-color: rgb(var(--surface));
        }
        .footer-inner {
          max-width: 1152px; margin: 0 auto;
          display: flex; flex-wrap: wrap;
          align-items: center; justify-content: space-between; gap: 1rem;
        }
        .footer-copy {
          font-size: 0.8125rem;
          font-family: var(--font-mono);
          color: rgb(var(--text-secondary));
          display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;
        }
        .footer-dot { opacity: 0.3; }
        .footer-icons { display: flex; align-items: center; gap: 0.875rem; }
        .footer-icon-link {
          color: rgb(var(--text-secondary));
          transition: color 0.15s ease;
          display: flex;
          text-decoration: none;
        }
        .footer-icon-link:hover { color: rgb(var(--accent)); }
      `}</style>
    </footer>
  );
}
