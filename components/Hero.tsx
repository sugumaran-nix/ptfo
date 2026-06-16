import StackDiagram from "./StackDiagram";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
        <div className="animate-fade-up">
          <p className="section-eyebrow mb-6">Full-Stack Developer · Coimbatore, India</p>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] text-ash sm:text-5xl lg:text-6xl">
            I build the whole stack —{" "}
            <span className="text-mint">database to UI</span>, and everything in between.
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            Final-year MCA student shipping production-style web apps with Python,
            Flask, React and MongoDB — including two AI-powered platforms with
            measured accuracy and response-time targets, not just demos.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-mint px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(94,234,212,0.35)]"
            >
              View featured work
            </a>
            <a
              href="mailto:sugumarankugan@gmail.com"
              className="rounded-full border border-line px-6 py-3 font-mono text-sm text-ash transition-colors hover:border-mint hover:text-mint"
            >
              sugumarankugan@gmail.com
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
            <div>
              <dd className="font-display text-2xl font-semibold text-ash">90%</dd>
              <dt className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                Classifier accuracy
              </dt>
            </div>
            <div>
              <dd className="font-display text-2xl font-semibold text-ash">&lt;800ms</dd>
              <dt className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                Avg API response
              </dt>
            </div>
            <div>
              <dd className="font-display text-2xl font-semibold text-ash">2026</dd>
              <dt className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                MCA graduation
              </dt>
            </div>
          </dl>
        </div>

        <div className="lg:pl-6">
          <StackDiagram />
        </div>
      </div>
    </section>
  );
}
