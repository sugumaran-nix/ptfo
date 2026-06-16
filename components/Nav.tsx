const links = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#path", label: "Path" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ash"
        >
          sugumaran<span className="text-mint">.</span>dev
        </a>
        <ul className="hidden items-center gap-8 font-mono text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-mint"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:sugumarankugan@gmail.com"
          className="rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-ash transition-colors hover:border-mint hover:text-mint"
        >
          Say hello
        </a>
      </nav>
    </header>
  );
}
