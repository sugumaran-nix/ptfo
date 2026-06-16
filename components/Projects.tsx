type Project = {
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl: string;
  gradient: string;
};

const projects: Project[] = [
  {
    name: "VeritAI",
    description:
      "AI-powered fake news verification platform: a Next.js frontend talks to a decoupled FastAPI backend that runs a fine-tuned Hugging Face Transformer, hitting a 94% verification accuracy rate with a live confidence score for every claim.",
    tags: ["Next.js", "FastAPI", "Hugging Face Transformers"],
    liveUrl: "https://github.com/sugumaran-nix/fake-news-detector",
    sourceUrl: "https://github.com/sugumaran-nix/fake-news-detector",
    gradient: "from-violet/30 to-blue/20",
  },
  {
    name: "Job Posting Detector",
    description:
      "Explainable ML pipeline that scores job listings across four Scikit-learn classifiers, containerized with Docker and backed by a CI test suite for every model and API change.",
    tags: ["Flask", "Scikit-learn", "Docker", "CI Testing"],
    liveUrl: "https://github.com/sugumaran-nix/fake-job-posting-ml",
    sourceUrl: "https://github.com/sugumaran-nix/fake-job-posting-ml",
    gradient: "from-blue/25 to-mint/15",
  },
  {
    name: "AI Study Planner",
    description:
      "Adaptive study planner that turns a learning goal into a day-by-day schedule using the Claude API, served through a FastAPI backend to a Next.js frontend.",
    tags: ["Next.js", "FastAPI", "TypeScript"],
    liveUrl: "https://github.com/sugumaran-nix",
    sourceUrl: "https://github.com/sugumaran-nix",
    gradient: "from-mint/20 to-violet/25",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-b border-border-light dark:border-border">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-violet">My Projects</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink-light dark:text-ink sm:text-3xl">
              Featured Projects
            </h2>
          </div>
          <a
            href="https://github.com/sugumaran-nix"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border-light px-5 py-2.5 text-sm font-semibold text-ink-light transition-colors hover:border-violet hover:text-violet dark:border-border dark:text-ink"
          >
            View All Projects
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border-light bg-surface-light transition-all duration-300 hover:-translate-y-1.5 hover:border-violet hover:shadow-[0_10px_30px_rgba(99,102,241,0.12)] dark:border-border dark:bg-surface"
            >
              <div
                className={`flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <span className="font-display text-2xl font-bold text-ink-light/70 dark:text-ink/70">
                  {project.name}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink-light dark:text-ink">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-light dark:text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border-light px-2.5 py-1 text-xs text-muted-light dark:border-border dark:text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3 pt-1">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-4 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
                    >
                      Live Demo
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border-light px-4 py-2 text-xs font-semibold text-ink-light transition-colors hover:border-violet hover:text-violet dark:border-border dark:text-ink"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
