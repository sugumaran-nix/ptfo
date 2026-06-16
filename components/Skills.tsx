type Group = {
  label: string;
  items: string[];
};

const groups: Group[] = [
  {
    label: "Languages & core",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C++", "Data Structures & Algorithms"],
  },
  {
    label: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
  },
  {
    label: "Backend & API",
    items: ["Flask", "Node.js", "RESTful API Design", "FastAPI"],
  },
  {
    label: "Databases",
    items: ["MySQL", "MongoDB", "SQLite"],
  },
  {
    label: "AI / ML",
    items: ["Hugging Face", "NLP", "scikit-learn"],
  },
  {
    label: "Tools & workflow",
    items: ["Git & GitHub", "VS Code", "Docker", "Agile / Scrum"],
  },
];

const certifications = [
  "Web Development Fundamentals — IBM SkillsBuild",
  "Introduction to Generative AI — Google Cloud",
  "Prompt Engineering for Everyone — CognitiveClass.ai (IBM)",
  "SQL (Basic) — HackerRank",
];

export default function Skills() {
  return (
    <section id="stack" className="border-b border-line">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-8 lg:py-28">
        <p className="section-eyebrow mb-4">Stack</p>
        <h2 className="font-display text-2xl font-semibold text-ash sm:text-3xl">
          Tools I reach for, by layer.
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.label} className="bg-panel/80 p-6 sm:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-mint">
                {group.label}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-sm text-ash"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-panel/60 p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            Certifications
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-start gap-2 text-sm text-muted sm:text-base">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
