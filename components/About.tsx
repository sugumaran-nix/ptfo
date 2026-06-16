const facts = [
  { label: "Based in", value: "Coimbatore, Tamil Nadu, India" },
  { label: "Status", value: "Final-year MCA, graduating 2026" },
  { label: "Looking for", value: "Full-Stack Developer Internship / SWE roles" },
  { label: "Open to", value: "Remote & relocation" },
];

export default function About() {
  return (
    <section id="path" className="border-b border-line">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-28">
        <div>
          <p className="section-eyebrow mb-4">About</p>
          <h2 className="font-display text-2xl font-semibold text-ash sm:text-3xl">
            Curiosity first, framework second.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I got into software the long way — by taking things apart to see how
              they worked. A BCA at Bharathiar University gave me the fundamentals;
              an MCA at Anna University is where I started connecting them — Python,
              SQL, MongoDB, and front-end engineering, treated as one continuous
              system rather than separate subjects.
            </p>
            <p>
              I learn fastest by shipping. That&apos;s why my project list isn&apos;t a stack
              of tutorials — it&apos;s working applications with real APIs, real
              datasets, and real performance numbers, from a fraud-detection
              dashboard to an ML-driven job-posting screener.
            </p>
            <p>
              I&apos;m now looking for an internship or entry-level engineering role
              where I can keep building things that work end to end — and learn
              from people who care about the craft as much as the ship date.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-panel/70 p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-mint">
            Quick facts
          </p>
          <dl className="mt-5 space-y-5">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-line/70 pb-4 last:border-none last:pb-0">
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm text-ash sm:text-base">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
