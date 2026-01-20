export const metadata = {
  title: "Skills | Portfolio",
  description: "The tools and practices I rely on to ship quality work.",
};

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "Next.js / React (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Accessibility & semantics",
      "Responsive design",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js & Express",
      "REST APIs & JWT auth",
      "MongoDB / Mongoose",
      "Basic SQL & Prisma",
      "API validation",
    ],
  },
  {
    title: "Workflow",
    skills: [
      "Git & code review",
      "Testing mindset",
      "Postman / Thunder Client",
      "CI curiosity (lint/format)",
      "Agile collaboration",
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 space-y-8 animate-fade-up">
      <header className="space-y-3">
        <div className="pill">Skills</div>
        <h1 className="text-4xl font-semibold tracking-tight text-white">Toolkit & approach</h1>
        <p className="max-w-3xl text-slate-300">
          I combine a modern React/Node stack with a product mindset—shipping fast without
          trading away polish, accessibility, or maintainability.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="card border-white/10 bg-slate-900/60 space-y-3">
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
