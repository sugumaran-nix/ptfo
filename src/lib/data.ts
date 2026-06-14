// ─── ALL CONTENT — edit here, nowhere else ─────────────────────────────────

export const PROFILE = {
  name: "Sugumaran S",
  role: "Full Stack Developer",
  email: "sugumarankugan@gmail.com",
  github: "https://github.com/sugumaran-nix",
  linkedin: "https://www.linkedin.com/in/sugumaran-nix/",
  location: "Coimbatore, Tamil Nadu, India",
  resume: "/resume.pdf",
};

export const HERO_BIO = [
  "MCA graduate from Anna University with hands-on experience shipping AI-powered web applications — including a deployed fake news detector achieving 90%+ classification accuracy with sub-800ms API response times.",
  "I work across the full stack: React and Next.js on the frontend, FastAPI and Flask on the backend, Python for ML pipelines. My MCA thesis built a 4-classifier ensemble fraud detector with URL heuristics, explainability, and Docker deployment.",
  "Looking for a full-stack developer role where I can contribute from day one.",
];

export const ABOUT_BIO = [
  "I'm a recent MCA graduate from Anna University (2024–2026) who builds things that actually work — deployed applications with real use cases, not just demo projects.",
  "My strongest area is full-stack development: I'm comfortable owning a feature from database schema to React UI. I've shipped REST APIs, ML model integrations, and cloud deployments across all my projects.",
  "Currently looking for a junior or entry-level full-stack role where I can contribute meaningfully and keep growing.",
];

export type SkillGroup = { label: string; skills: string[] };

export const SKILLS: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5 & CSS3", "GSAP", "Framer Motion"],
  },
  {
    label: "Backend",
    skills: ["FastAPI", "Flask", "Node.js", "Express.js", "REST API Design"],
  },
  {
    label: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    label: "AI & ML",
    skills: ["Scikit-learn", "Hugging Face", "NLP / TF-IDF", "SMOTE", "SHAP", "PyTorch"],
  },
  {
    label: "Cloud & Tools",
    skills: ["AWS Fundamentals", "Azure Fundamentals", "Docker", "Git", "GitHub", "Vercel"],
  },
];

export type Project = {
  id: number;
  title: string;
  badge: string;
  tagline: string;
  problem: string;
  role: string;
  action: string;
  outcome: string;
  challenge: string;
  learning: string;
  stack: string[];
  github: string;
  live?: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "VeritAI — Fake News Detector",
    badge: "AI / NLP",
    tagline: "Full-stack SaaS platform that classifies news as Real, Fake, or Uncertain in real time.",
    problem: "Misinformation spreads faster than fact-checkers can respond. Most detection tools are black boxes — they give a verdict but no explanation.",
    role: "Sole developer. Designed and shipped the entire system: ML pipeline, FastAPI backend, Next.js frontend, and deployment pipeline.",
    action: "Fine-tuned a BERT/RoBERTa model via Hugging Face Transformers for semantic classification. Added a linguistic heuristics layer (sensational language, caps, credibility signals) blended 70/30 with model output for calibrated confidence. Built a Next.js 14 SaaS dashboard with GSAP animations, dark/light mode, and a 50-item analysis history. Deployed frontend on Vercel, backend on Render.",
    outcome: "Live at ai-fakenews-detector-psi.vercel.app. Achieves 90%+ classification accuracy with average API response under 800ms. Confidence meter and per-prediction explanation shown on every result.",
    challenge: "Larger transformer models were more accurate but too slow for real-time use. Solved by distilling a smaller domain-specific fine-tune that maintained accuracy while cutting inference time by 60%.",
    learning: "Production ML is an optimisation problem — not just for accuracy but for latency, cold-start time, and cost. A 90% accurate model at 800ms beats a 92% model at 4 seconds in real use.",
    stack: ["Next.js 14", "FastAPI", "Python", "Hugging Face", "BERT", "GSAP", "TypeScript", "Render"],
    github: "https://github.com/sugumaran-nix/aiFakenewsDetector",
    live: "https://ai-fakenews-detector-psi.vercel.app",
  },
  {
    id: 2,
    title: "StudyPlanner — AI Learning Assistant",
    badge: "AI / Productivity",
    tagline: "Smart study scheduler that surfaces weak topics and cuts note-review time by ~40%.",
    problem: "Students waste hours re-reading all notes when only specific weak topics need attention. Generic timetables don't adapt to what you actually don't know.",
    role: "Sole developer. Built the full application including AI integrations, scheduling logic, and all UI components.",
    action: "Integrated OpenAI and Gemini APIs with few-shot prompting to generate structured JSON study timetables and surface weak topics from uploaded notes. Built drag-and-drop file uploads, real-time progress analytics, and a responsive multi-component React UI. Deployed on Vercel.",
    outcome: "Live at study-planner-gamma-two.vercel.app. Reduced note-review time by approximately 40% in user testing through AI-targeted weak-topic surfacing.",
    challenge: "Getting LLMs to return consistent structured JSON without hallucinating invalid time slots. Solved with few-shot prompting and strict output validation with retries.",
    learning: "Prompt engineering for structured outputs matters more than model choice. A well-designed few-shot prompt on a smaller model often outperforms a vague prompt on a larger one.",
    stack: ["React", "Node.js", "OpenAI API", "Gemini API", "TypeScript", "Vercel"],
    github: "https://github.com/sugumaran-nix/StudyPlanner",
    live: "https://study-planner-gamma-two.vercel.app",
  },
  {
    id: 3,
    title: "Fake Job Posting Detector",
    badge: "MCA Thesis",
    tagline: "4-classifier ML web app with URL fraud heuristics, explainability, and Docker deployment.",
    problem: "Fraudulent job listings harm job seekers and are hard to catch with keyword rules alone. The dataset has severe class imbalance (~4.8% fraud) that inflates apparent accuracy.",
    role: "Sole developer and researcher. Framed the problem, built the ML pipeline, URL analyser, explainability module, Flask web app, and Docker container.",
    action: "Built a 4-classifier ensemble (Logistic Regression + Random Forest + LinearSVM + Naive Bayes) with TF-IDF (10k features, bigrams). Added a 10-signal URL heuristic scorer covering HTTPS, TLD risk, entropy, typosquatting, and brand impersonation. SHAP-based explainability surfaces top fraud/legit words per prediction. Runtime model switching without restart. SQLite prediction history. Full Docker + docker-compose setup with 23 commits and unit tests.",
    outcome: "Best model selected by fraud-class F1 (not accuracy) — correct metric for imbalanced data. SHAP explainability makes every prediction auditable. Deployed with Docker, REST API at /api/predict.",
    challenge: "SMOTE must be applied after train-test split — applying it before causes data leakage and inflated metrics. Caught this during evaluation; fixing it dropped apparent accuracy but made results trustworthy.",
    learning: "Choosing the right evaluation metric matters as much as the model. Optimising for overall accuracy on an imbalanced dataset hides the model's actual fraud-detection performance.",
    stack: ["Python", "Flask", "Scikit-learn", "TF-IDF", "SHAP", "SQLite", "Docker", "Jupyter"],
    github: "https://github.com/sugumaran-nix/fake-job-posting-ml",
  },
  {
    id: 4,
    title: "Developer Portfolio",
    badge: "Open Source",
    tagline: "This site — Next.js 14, Tailwind CSS, TypeScript, glassmorphism dark theme.",
    problem: "Most developer portfolios are template clones with no personality or visually cluttered sites that bury the actual work.",
    role: "Sole designer and developer. Designed the full visual system, built all components, configured deployment.",
    action: "Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Implemented dark/light theme with localStorage persistence and an inline anti-flash script. Scroll-based active nav tracking via Intersection Observer. Purple glassmorphism dark theme with aurora background. Static export deployed on Vercel.",
    outcome: "Lighthouse 95+ on Performance, Accessibility, and SEO. Fully responsive from 375px to 1440px. Sub-1s load on fast 3G.",
    challenge: "Theme switching caused a flash of wrong theme on initial load. Fixed with an inline script in the HTML head that reads localStorage before React hydrates — runs synchronously before paint.",
    learning: "Static site performance is mostly about what you remove. Eliminating unused CSS, avoiding layout shifts, and lazy-loading images had more impact than any optimisation library.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/sugumaran-nix/portfolio",
    live: "https://portfoliov5-nine.vercel.app",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    field: "Full Stack Development",
    institution: "Sri Venkateshwara College of Computer Applications and Management",
    university: "Anna University",
    period: "2024 – 2026",
    score: "80%",
    status: "Graduate",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    field: "",
    institution: "Government Arts & Science College, Gudalur",
    university: "Bharathiar University",
    period: "2021 – 2024",
    score: "83.71%",
    status: "Completed",
  },
];
