type Layer = {
  index: string;
  name: string;
  description: string;
  badges: string[];
  accent: "mint" | "amber";
};

const layers: Layer[] = [
  {
    index: "L1",
    name: "Client / UI",
    description: "What the user touches — responsive layouts, accessible by default",
    badges: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
    accent: "mint",
  },
  {
    index: "L2",
    name: "Frontend",
    description: "Component state, routing, and interaction logic",
    badges: ["React.js", "JavaScript", "TypeScript"],
    accent: "mint",
  },
  {
    index: "L3",
    name: "Backend & API",
    description: "REST endpoints, auth, and ML inference services",
    badges: ["Flask", "Node.js", "REST APIs", "Hugging Face"],
    accent: "amber",
  },
  {
    index: "L4",
    name: "Database",
    description: "Schema design, queries, and persistence",
    badges: ["MySQL", "MongoDB", "SQLite"],
    accent: "amber",
  },
];

export default function StackDiagram() {
  return (
    <div className="relative">
      <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-muted">
        The request / response loop —{" "}
        <span className="text-ash">every layer I own</span>
      </p>

      <div className="relative pl-9">
        {/* vertical connector line */}
        <div
          aria-hidden="true"
          className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-mint/70 via-line to-amber/70"
        />

        {/* request dot — travels down */}
        <div
          aria-hidden="true"
          className="travel-down absolute left-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-mint shadow-[0_0_12px_2px_rgba(94,234,212,0.65)]"
        />

        {/* response dot — travels up */}
        <div
          aria-hidden="true"
          className="travel-up absolute left-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-amber shadow-[0_0_12px_2px_rgba(242,182,109,0.65)]"
        />

        <ul className="flex flex-col gap-3">
          {layers.map((layer) => (
            <li
              key={layer.index}
              className="group rounded-xl border border-line bg-panel/70 p-4 transition-colors hover:border-mint/40 sm:p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-baseline gap-3">
                  <span
                    className={`font-mono text-xs ${
                      layer.accent === "mint" ? "text-mint" : "text-amber"
                    }`}
                  >
                    {layer.index}
                  </span>
                  <h3 className="font-display text-base font-semibold text-ash sm:text-lg">
                    {layer.name}
                  </h3>
                </div>
              </div>
              <p className="mt-1 text-sm text-muted">{layer.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {layer.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted transition-colors group-hover:border-line group-hover:text-ash"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
