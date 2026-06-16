type Metric = { value: string; label: string };
type Project = {
  name: string;
  tagline: string;
  description: string;
  metrics: Metric[];
  stack: string[];
  link: string;
  status?: string;
};

const featured: Project = {
  name: "VeritAI",
  tagline: "AI Fake News Detection Platform",
  description:
    "A full-stack tool that scores news articles for credibility in real time. A fine-tuned transformer classifies text on the backend, while a React dashboard renders confidence scores and rationale as the request resolves.",
  metrics: [
    { value: "90%", label: "classification accuracy" },
    { value: "<800ms", label: "avg. API response time" },
    { value: "Live", label: "confidence-score dashboard" },
  ],
  stack: ["React.js", "Flask", "Hugging Face Transformers", "REST API"],
  link: "https://github.com/sugumaran-nix/fake-news-detector",
};

const projects: Project[] = [
  {
    name: "Fake Job Posting Detector",
    tagline: "Explainable ML for hiring fraud",
    description:
      "Compares four classifiers — Logistic Regression, Random Forest, SVM, and Naive Bayes — over TF-IDF text features to flag fraudulent listings, paired with URL-based heuristics and a transparent reasoning trail for each prediction.",
    metrics: [
      { value: "4", label: "models, switchable at runtime" },
      { value: "<800ms", label: "avg. API response time" },
      { value: "Docker", label: "containerized + unit tested" },
    ],
    stack: ["Flask", "scikit-learn", "TF-IDF", "SQLite", "Docker"],
    link: "https://github.com/sugumaran-nix/fake-job-posting-ml",
  },
  {
    name: "AI Study Planner",
    tagline: "Smart learning assistant",
    description:
      "An adaptive study planner that turns a learning goal into a day-by-day schedule, using the Claude API to reason about pacing and a FastAPI backend to serve plans to a motion-rich Next.js interface.",
    metrics: [
      { value: "Claude API", label: "adaptive plan generation" },
      { value: "FastAPI", label: "Python backend" },
      { value: "GSAP", label: "animated UI layer" },
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "FastAPI"],
    link: "https://github.com/sugumaran-nix",
    status: "In active development",
  },
];

export default function Projects() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-8 lg:py-28">
        <p className="section-eyebrow mb-4">Featured work</p>
        <h2 className="font-display text-2xl font-semibold text-ash sm:text-3xl">
          Shipped, measured, and documented.
        </h2>

        {/* Featured project */}
        <div className="mt-10 rounded-2xl border border-mint/30 bg-gradient-to-br from-panel to-panel-soft p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-mint">
                {featured.tagline}
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold text-ash sm:text-4xl">
                {featured.name}
              </h3>
            </div>
            <a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ash transition-colors hover:border-mint hover:text-mint"
            >
              View repository
            </a>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {featured.description}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {featured.metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-line bg-ink/40 p-4">
                <p className="font-display text-2xl font-semibold text-mint">{m.value}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {featured.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Secondary projects */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col rounded-2xl border border-line bg-panel/60 p-6 transition-colors hover:border-mint/30 sm:p-8"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
                    {project.tagline}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ash sm:text-2xl">
                    {project.name}
                  </h3>
                </div>
                {project.status && (
                  <span className="shrink-0 rounded-full border border-amber/40 px-2.5 py-1 font-mono text-[11px] text-amber">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {project.description}
              </p>

              <dl className="mt-6 grid grid-cols-3 gap-3">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <dd className="font-display text-lg font-semibold text-ash">{m.value}</dd>
                    <dt className="mt-1 font-mono text-[11px] uppercase leading-tight tracking-wide text-muted">
                      {m.label}
                    </dt>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ash transition-colors hover:text-mint"
              >
                View repository <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
