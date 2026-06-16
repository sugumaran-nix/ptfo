# Sugumaran S — Full-Stack Developer Portfolio

A production-ready personal portfolio built with Next.js 14 (App Router) and Tailwind CSS, designed around a single idea: **own every layer, from database to UI.**

## Role classification

**Primary role:** Software Engineer (Full-Stack), early-career / junior-to-mid track.

**Reasoning:** Both source documents emphasize end-to-end ownership — Python/Flask/Node APIs, React frontends, and MySQL/MongoDB persistence — rather than research-style ML work or pure data analysis. The two flagship projects (fake news detection, fake job posting detection) use ML as a *feature* inside a full-stack app (API + dashboard + database), not as standalone modeling work. Seniority is early-career: final-year MCA student, no listed work experience, but a stronger-than-average project portfolio with quantified results (90% accuracy, sub-800ms latency, Docker deployment, unit tests). Key strengths: shipping complete systems, REST API design, and translating ML output into usable interfaces.

## Design direction

Structured, GitHub-inspired dark UI — chosen because the subject's own differentiator is "I work across every layer of the stack." The signature element is a **request/response stack diagram** in the hero: four layers (Client → Frontend → Backend/API → Database) connected by a vertical line with two traveling pulse-dots — one descending (request, mint) and one ascending (response, amber) — visually encoding the literal client-server round trip rather than a decorative animation.

- **Palette:** `#0A0D12` ink background, `#12161D`/`#171C25` panels, `#5EEAD4` mint (request/frontend accent), `#F2B66D` amber (response/backend accent), `#E7ECF2` primary text, `#8B96A5` muted text.
- **Type:** Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (labels, eyebrows, metrics) — a technical pairing distinct from default sans stacks.
- **Layout:** Single-column narrative with a two-column hero (copy + live stack diagram), a featured-project hero card, and a layered skills grid grouped by architecture tier rather than a flat tag cloud.

## Tech stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (custom design tokens, no default theme)
- Zero runtime dependencies beyond React/Next — no env vars, no external API keys required

## Project structure

```
.
├── app/
│   ├── globals.css       # Design tokens, animations, focus states
│   ├── layout.tsx         # Fonts, metadata
│   └── page.tsx           # Section composition
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── StackDiagram.tsx   # Signature animated diagram
│   ├── Projects.tsx       # Featured work + project grid
│   ├── About.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. No environment variables or API keys are required — the entire site is static content rendered client-side.

To produce a production build:

```bash
npm run build
npm start
```

## Content notes

All copy was rewritten from the source resume/LinkedIn — no text was copied verbatim. Metrics (90% accuracy, sub-800ms response time, etc.) are carried over from the original resume's stated figures, not invented. The "AI Study Planner" project is marked **In active development** to reflect its current status accurately.
