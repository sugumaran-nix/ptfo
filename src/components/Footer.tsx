import { RiGithubLine, RiLinkedinBoxLine, RiMailLine } from "react-icons/ri";
import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{
      padding: "1.75rem 1.5rem",
      borderTop: `1px solid rgb(var(--border))`,
      backgroundColor: `rgb(var(--surface))`,
    }}>
      <div style={{
        maxWidth: 1152, margin: "0 auto",
        display: "flex", flexWrap: "wrap",
        alignItems: "center", justifyContent: "space-between", gap: "1rem",
      }}>
        <p style={{
          fontSize: "0.8125rem", fontFamily: "var(--font-mono)",
          color: `rgb(var(--text-secondary))`,
          display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap",
        }}>
          <span>© {new Date().getFullYear()} Sugumaran S</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>Built with Next.js &amp; Tailwind</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>Updated June 2026</span>
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {[
            { href: PROFILE.github,             icon: RiGithubLine,      label: "GitHub"   },
            { href: PROFILE.linkedin,           icon: RiLinkedinBoxLine, label: "LinkedIn" },
            { href: `mailto:${PROFILE.email}`,  icon: RiMailLine,        label: "Email"    },
          ].map(({ href, icon: Icon, label }) => (
            <a key={label} href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                color: `rgb(var(--text-secondary))`,
                transition: "color 0.15s ease",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = `rgb(var(--accent))`}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = `rgb(var(--text-secondary))`}>
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
