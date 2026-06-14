# 📝 EditLearn.md — Portfolio Content Editing Guide

> **Who this is for:** You — the developer who built this portfolio but wants to update content without touching layout code.
> **Skill required:** None. Just find, edit, save, push.

---

## 🗂️ Project Folder Structure

```
portfolio/
├── public/                        ← Drop your photo and resume here
│   ├── photo.jpg                  ← Your profile photo
│   └── resume.pdf                 ← Your resume (download button links here)
│
├── src/
│   ├── app/
│   │   ├── globals.css            ← Colors and theme (blue/purple)
│   │   ├── layout.tsx             ← Browser tab title + SEO description
│   │   └── page.tsx               ← Page structure (section order)
│   │
│   ├── components/
│   │   ├── Navbar.tsx             ← Top navigation bar
│   │   ├── Footer.tsx             ← Bottom footer (last updated date)
│   │   └── sections/
│   │       ├── HeroSection.tsx    ← Home page (trust badges)
│   │       ├── AboutSection.tsx   ← About section layout
│   │       ├── SkillsSection.tsx  ← Skills section layout
│   │       ├── ProjectsSection.tsx← Projects layout + STARR cards
│   │       ├── EducationSection.tsx← Education + certifications
│   │       ├── ContactSection.tsx ← Contact form + links
│   │       └── GitHubStatsSection.tsx ← GitHub stats cards
│   │
│   └── lib/
│       ├── data.ts                ← ⭐ ALL YOUR CONTENT LIVES HERE
│       ├── ThemeProvider.tsx      ← Dark/light mode logic
│       ├── useInView.ts           ← Scroll animation logic
│       └── utils.ts               ← Helper utilities
│
├── package.json                   ← Project dependencies
├── tailwind.config.ts             ← Tailwind CSS config
├── next.config.js                 ← Next.js config
└── tsconfig.json                  ← TypeScript config
```

---

## ⭐ THE GOLDEN RULE

> **95% of all content changes happen in one single file:**
> ### `src/lib/data.ts`

Open it in VS Code, Notepad++, or even Windows Notepad.
Everything below explains exactly what to change and where to find it.

---

## 📁 FILE 1 — `src/lib/data.ts`

This is your content database. Every section of the portfolio reads from here.

---

### 1.1 — Your Personal Info (PROFILE)

**Where:** Top of the file, look for `export const PROFILE = {`

```ts
export const PROFILE = {
  name: "Sugumaran S",               // ← Your full name
  role: "Full Stack Developer",       // ← Job title shown on hero
  email: "sugumarankugan@gmail.com",  // ← Contact email
  github: "https://github.com/an0nl", // ← GitHub profile URL
  linkedin: "https://linkedin.com/in/sugumaran0333", // ← LinkedIn URL
  location: "Coimbatore, Tamil Nadu, India", // ← Your city
  resume: "/resume.pdf",              // ← Keep this as-is (file goes in public/)
};
```

**How to edit:**
- Change anything between the `" "` quotes
- Keep the commas at the end of each line
- Do NOT remove the `{` or `}` or any `:`

**Example — change your location:**
```ts
// BEFORE
location: "Coimbatore, Tamil Nadu, India",

// AFTER
location: "Chennai, Tamil Nadu, India",
```

---

### 1.2 — Hero Bio Paragraphs

**Where:** Look for `bio: [` inside `PROFILE`

```ts
bio: [
  "MCA graduate from Anna University (2024–2026)...",   // Paragraph 1
  "I work across the full stack with React...",          // Paragraph 2
  "Looking for full-stack developer roles...",           // Paragraph 3
],
```

**How to edit:**
- Each line in `[ ]` is one paragraph shown on the home page
- Edit the text between the `" "` on each line
- Keep the comma after each paragraph
- To add a 4th paragraph: add `"Your new paragraph.",` before the `],`
- To remove a paragraph: delete the whole line including its comma

---

### 1.3 — Skills Section

**Where:** Look for `export const SKILLS = [`

```ts
export const SKILLS = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript (ES6+)", "TypeScript", "Java", "C"],
  },
  {
    category: "Web & Full Stack",
    skills: ["React.js", "Next.js", "HTML5 & CSS3", "Tailwind CSS", "FastAPI"],
  },
  // ... more categories
];
```

**How to add a skill to an existing category:**
```ts
// BEFORE
skills: ["Python", "JavaScript (ES6+)", "TypeScript"],

// AFTER — added Rust
skills: ["Python", "JavaScript (ES6+)", "TypeScript", "Rust"],
```

**How to remove a skill:**
```ts
// BEFORE
skills: ["Python", "JavaScript (ES6+)", "TypeScript", "Java", "C"],

// AFTER — removed C
skills: ["Python", "JavaScript (ES6+)", "TypeScript", "Java"],
```

**How to add a completely new category:**
```ts
// Copy this block and paste it before the last ];
{
  category: "Your New Category",
  skills: ["Skill 1", "Skill 2", "Skill 3"],
},
```

**How to rename a category:**
```ts
// BEFORE
category: "Core CS",

// AFTER
category: "Computer Science Fundamentals",
```

---

### 1.4 — Projects

**Where:** Look for `export const PROJECTS = [`

Each project is a block that looks like this:

```ts
{
  id: 1,
  title: "AI Fake News Detection Platform",
  badge: "AI / NLP",
  highlight: "90%+ accuracy · <800ms API response",
  problem: "Misinformation spreads faster than corrections...",
  situation: "Built a full-stack platform to classify news articles...",
  task: "Design and ship an end-to-end system...",
  action: "Fine-tuned Hugging Face transformer models...",
  result: "Achieved 90%+ classification accuracy...",
  reflection: "Learned how to balance model size vs latency...",
  stack: ["React.js", "FastAPI", "Python", "Hugging Face"],
  github: "https://github.com/an0nl/aiFakenewsDetector",
  live: "https://yoursite.com",
},
```

**Field by field — what each one does:**

| Field | Where it shows | What to put |
|---|---|---|
| `title` | Card heading | Project name |
| `badge` | Small tag top-left of card | Category like "AI / NLP" or "MCA Thesis" |
| `highlight` | Blue metric line on card | Your best metric or achievement |
| `problem` | Italic quote on card | One sentence — the problem you solved |
| `situation` | STARR expanded view | Context — why the project existed |
| `task` | STARR expanded view | Your specific role and goal |
| `action` | STARR expanded view | What you built and how |
| `result` | STARR expanded view | Measurable outcome |
| `reflection` | STARR expanded view | One sentence on what you learned |
| `stack` | Tech tag pills | Technologies used |
| `github` | GitHub button | Direct link to the repo |
| `live` | Live Demo button | URL of deployed site |

**How to change the GitHub link for a project:**
```ts
// BEFORE
github: "https://github.com/an0nl/aiFakenewsDetector",

// AFTER
github: "https://github.com/an0nl/my-new-repo-name",
```

**How to add a live demo link:**
```ts
// If live is missing or set to placeholder, update it:
live: "https://my-project.vercel.app",
```

**How to change tech stack tags:**
```ts
// BEFORE
stack: ["React.js", "FastAPI", "Python"],

// AFTER
stack: ["React.js", "FastAPI", "Python", "Docker"],
```

**How to add a brand new project:**
Copy this template and paste it before the final `];`
Fill in every field with your project details:

```ts
{
  id: 5,
  title: "Your Project Name",
  badge: "Your Category",
  highlight: "Your best metric or result",
  problem: "One sentence — what problem does this solve?",
  situation: "Why did this project exist? What was the context?",
  task: "What were you specifically responsible for?",
  action: "What did you build? What technical decisions did you make?",
  result: "What was the measurable outcome?",
  reflection: "What is the key thing you learned?",
  stack: ["Tech1", "Tech2", "Tech3"],
  github: "https://github.com/an0nl/your-repo",
  live: "https://your-live-site.com",
},
```

**How to remove a project:**
Delete the entire block from `{` to `},` (including both curly braces and the comma).

---

### 1.5 — Education

**Where:** Look for `export const EDUCATION = [`

```ts
export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    specialization: "Full Stack Development",
    institution: "Sri Venkateshwara College of Computer Applications and Management",
    university: "Anna University",
    period: "2024 – 2026",
    score: "80%",
    status: "Graduate",
  },
  // more entries...
];
```

**How to update your score:**
```ts
score: "82%",   // just change the number
```

**How to change status (shown as badge):**
```ts
status: "Graduate",    // options: "Graduate" or "Completed"
```

**How to add a new education entry:**
Copy one block from `{` to `},` and paste it. Fill in the fields.

---

### 1.6 — Certifications

**Where:** Look for `export const CERTIFICATIONS = [`

```ts
export const CERTIFICATIONS = [
  "Web Development Fundamentals — IBM SkillsBuild",
  "Introduction to Generative AI — Google Cloud",
  "Foundation of LLMs — Hugging Face",
  "Prompt Engineering for Everyone — CognitiveClass.ai (IBM)",
  "SQL (Basic) — HackerRank",
  "Foundation Course on Generative AI — Edunet Foundation",
  "Foundation on Cloud — IBM SkillsBuild",
];
```

**Format rule:** Every entry must follow this pattern:
```
"Certification Title — Issuer Name",
```
The ` — ` (space dash dash space) separates the title from the issuer badge shown on screen.

**How to add a certification:**
```ts
"Your New Cert — Issuer Name",   // add this line before the ];
```

**How to remove a certification:**
Delete the entire line including its comma.

**How to fix a certification name:**
```ts
// BEFORE
"SQL (Basic) — HackerRank",

// AFTER
"SQL (Intermediate) — HackerRank",
```

---

## 📁 FILE 2 — `public/resume.pdf`

**What it does:** The "Download Resume" button links to this file.

**How to update your resume:**
1. Export your resume as a PDF
2. Rename the file to exactly `resume.pdf`
3. Copy it into the `public/` folder (replacing the old one)
4. Push to GitHub — done. No code change needed.

> ⚠️ The filename must be exactly `resume.pdf` — capital letters matter on Vercel.

---

## 📁 FILE 3 — `public/photo.jpg`

**What it does:** Shows as your circular profile photo in the About section.

**How to add/update your photo:**
1. Get a clear headshot photo
2. Rename it to exactly `photo.jpg`
3. Drop it into the `public/` folder
4. Push to GitHub

> If no photo exists, the site automatically shows "S" as a fallback — that's fine.
> Recommended size: 400×400 pixels, square crop.

---

## 📁 FILE 4 — `src/app/layout.tsx`

**What it does:** Controls the browser tab title and the description Google shows in search results.

**Where to edit:**
```ts
export const metadata = {
  title: "Sugumaran S — Full Stack Developer",
  description: "Full Stack Developer & AI/ML enthusiast building clean, scalable web applications...",
};
```

**How to change the browser tab title:**
```ts
// BEFORE
title: "Sugumaran S — Full Stack Developer",

// AFTER
title: "Sugumaran S — React Developer",
```

**How to change the SEO description:**
Edit the `description` line. Keep it under 160 characters for best Google results.

---

## 📁 FILE 5 — `src/components/sections/HeroSection.tsx`

**What it does:** Controls the three badge pills at the top of the home page.

**Where to find them:**
```tsx
🎓 MCA Graduate 2026
🚀 4+ Production Projects
```

**How to change badge text:**
Just edit the text directly. Example:
```tsx
// BEFORE
🎓 MCA Graduate 2026

// AFTER
🎓 MCA Graduate · Anna University
```

**How to change the emoji:**
Replace the emoji character with any other emoji. You can copy emojis from [emojipedia.org](https://emojipedia.org).

---

## 📁 FILE 6 — `src/components/Footer.tsx`

**What it does:** The small text at the very bottom of every page.

**Where to find it:**
```tsx
Last updated June 2026
```

**How to update the date:**
```tsx
// BEFORE
Last updated June 2026

// AFTER
Last updated September 2026
```

---

## 📁 FILE 7 — `src/components/sections/GitHubStatsSection.tsx`

**What it does:** Shows your GitHub stats cards pulled live from github-readme-stats.

**Where to find your username:**
Look for two lines containing `username=an0nl`:
```
username=an0nl&show_icons=true...
username=an0nl&layout=compact...
```

**How to change your GitHub username** (if you ever rename your account):
Replace `an0nl` with your new username in both lines.

**Where to find the caption:**
```tsx
Consistent contributions since June 2026
```
Edit this text as needed.

---

## 📁 FILE 8 — `src/app/globals.css`

**What it does:** Controls ALL colors across the entire site.
**When to edit:** Only if you want to change the color scheme.

**Light theme (blue):** Variables under `:root {`
**Dark theme (purple):** Variables under `.dark {`

The main accent color (buttons, underlines, badges):
```css
/* Light mode — change this to change blue accent */
--accent: 213 75% 45%;

/* Dark mode — change this to change purple accent */
--accent: 285 100% 50%;
```

> ⚠️ Colors here use HSL format: `hue saturation% lightness%`
> If you are unsure, don't edit this file.

---

## 🚀 Deploying Your Changes

After editing any file, run these 3 commands in your terminal from inside the `portfolio/` folder:

```bash
git add .
git commit -m "describe what you changed"
git push
```

Vercel detects the push and redeploys automatically in about 30 seconds.
Your live site updates — no other steps needed.

**Example commit messages:**
```bash
git commit -m "add new project: AI chatbot"
git commit -m "update resume and skills"
git commit -m "fix email address"
git commit -m "add React Native to skills"
```

---

## 🛠️ Common Tasks — Step by Step

### "I got a new certification"
1. Open `src/lib/data.ts`
2. Find `CERTIFICATIONS = [`
3. Add a new line: `"Cert Name — Issuer",`
4. Save → `git add . && git commit -m "add cert" && git push`

### "I finished a new project"
1. Open `src/lib/data.ts`
2. Find `PROJECTS = [`
3. Copy an existing project block, paste it at the end
4. Change `id` to the next number (e.g. `id: 5`)
5. Fill in all fields
6. Save → push

### "I want to update my resume"
1. Export PDF → rename to `resume.pdf`
2. Drop into `public/` folder (replace old file)
3. Push

### "I moved to a new city"
1. Open `src/lib/data.ts`
2. Find `location:`
3. Change the text
4. Push

### "I got a new job / changed my role"
1. Open `src/lib/data.ts`
2. Change `role:` inside `PROFILE`
3. Update the `bio` paragraphs
4. Update the hero badges in `HeroSection.tsx`
5. Push

### "I want to remove a project"
1. Open `src/lib/data.ts`
2. Find the project block starting with `{` and ending with `},`
3. Delete the entire block
4. Push

### "I want to add a new skill category"
1. Open `src/lib/data.ts`
2. Find `SKILLS = [`
3. Before the final `];`, paste:
```ts
{
  category: "New Category Name",
  skills: ["Skill A", "Skill B", "Skill C"],
},
```
4. Push

---

## ⚡ Quick Reference Cheat Sheet

| What to change | File | Search for |
|---|---|---|
| Your name | `data.ts` | `name:` |
| Your email | `data.ts` | `email:` |
| Your GitHub URL | `data.ts` | `github:` inside `PROFILE` |
| Your LinkedIn URL | `data.ts` | `linkedin:` |
| Your city/location | `data.ts` | `location:` |
| Hero bio paragraphs | `data.ts` | `bio: [` |
| Add/remove a skill | `data.ts` | `SKILLS = [` |
| Project title | `data.ts` | `title:` inside `PROJECTS` |
| Project GitHub link | `data.ts` | `github:` inside a project block |
| Project live demo link | `data.ts` | `live:` |
| Project tech stack | `data.ts` | `stack: [` |
| Project descriptions | `data.ts` | `situation:`, `task:`, `action:`, etc. |
| Education score | `data.ts` | `score:` |
| Add/remove certification | `data.ts` | `CERTIFICATIONS = [` |
| Resume PDF file | `public/` | rename to `resume.pdf` |
| Profile photo | `public/` | rename to `photo.jpg` |
| Browser tab title | `layout.tsx` | `title:` |
| SEO description | `layout.tsx` | `description:` |
| Hero trust badges | `HeroSection.tsx` | emoji text lines |
| Footer last-updated date | `Footer.tsx` | `Last updated` |
| GitHub stats username | `GitHubStatsSection.tsx` | `username=an0nl` |
| All colors | `globals.css` | `--accent:` |

---

## ❗ Things to Never Break

- Always keep commas after each line inside `{ }` and `[ ]`
- Always keep quotes around text values: `"like this"`
- Never delete a `:` between a field name and its value
- Never delete the opening `[` or closing `]` of an array
- Never delete the opening `{` or closing `}` of an object
- After editing, always check the site looks correct before sharing

If something breaks, use `git revert` or just re-download the zip and replace the file.

---

*This guide covers every file in the portfolio. When in doubt — edit `data.ts` only.*
