const contacts = [
  { label: "Email", value: "sugumarankugan@gmail.com", href: "mailto:sugumarankugan@gmail.com" },
  { label: "Phone", value: "+91 63810 74457", href: "tel:+916381074457" },
  { label: "LinkedIn", value: "linkedin.com/in/sugumaran-nix", href: "https://linkedin.com/in/sugumaran-nix" },
  { label: "GitHub", value: "github.com/sugumaran-nix", href: "https://github.com/sugumaran-nix" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-8 lg:py-28">
        <p className="section-eyebrow mb-4">Contact</p>
        <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-ash sm:text-4xl lg:text-5xl">
          Looking for a full-stack engineer who ships, not just demos?
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          I&apos;m finishing my MCA in 2026 and actively interviewing for internship
          and entry-level Full-Stack Developer roles. Reach out — I reply fast.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between rounded-xl border border-line bg-panel/60 px-5 py-4 transition-colors hover:border-mint/40"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  {c.label}
                </p>
                <p className="mt-1 text-sm text-ash sm:text-base">{c.value}</p>
              </div>
              <span
                aria-hidden="true"
                className="font-mono text-muted transition-colors group-hover:text-mint"
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Sugumaran S. Built with Next.js & Tailwind CSS.</p>
          <p className="font-mono">Coimbatore, Tamil Nadu, India</p>
        </div>
      </footer>
    </section>
  );
}
