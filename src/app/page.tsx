import Link from "next/link";

const highlights = [
  {
    title: "Full-stack foundation",
    detail:
      "Comfortable across the stack: Next.js/React on the front and Node/Express with REST on the back.",
  },
  {
    title: "Clean, modern UI",
    detail: "Tailwind, accessibility-first patterns, and small, readable components.",
  },
  {
    title: "Learning velocity",
    detail: "Ship, measure, and iterate fast—always eager to explore new tools and patterns.",
  },
];

const projects = [
  {
    name: "TaskTrackr (MERN)",
    impact: "Built auth, CRUD tasks, and role-based API with JWT; deployed on Vercel + MongoDB Atlas.",
  },
  {
    name: "Portfolio CMS",
    impact: "Static-friendly blog with Next.js App Router, MDX content, and image optimization.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12">
      <section className="card relative overflow-hidden animate-fade-up">
        <div className="pill mb-4 w-fit">Full-Stack Developer</div>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
               full-stack dev who loves building fast, reliable web apps.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              I pair clean UI with solid APIs—comfortable shipping features end to end with
              Next.js, Node, MongoDB, and modern tooling.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/skills"
                className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                View my skills
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-emerald-400/60 hover:text-emerald-100"
              >
                Open to internships & junior roles
              </Link>
            </div>
          </div>
          <div className="card border-white/10 bg-slate-900/60 animate-float">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Snapshot
            </h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                Full-stack focus: Next.js (App Router), Node/Express, MongoDB.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                TypeScript, REST APIs, auth flows, and responsive UI with Tailwind.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                Constant learner: shipping projects, reading docs, refining craft.
              </li>
            </ul>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,0.09),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.08),transparent_25%)]" />
      </section>

      <section className="space-y-6 animate-fade-up">
        <div className="flex items-center justify-between gap-4">
          <h2 className="section-title">What I bring</h2>
          <span className="text-xs uppercase tracking-[0.2em] text-emerald-200">
            Craft & quality
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="card border-white/10 bg-slate-900/60">
              <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 animate-fade-up">
        <div className="flex items-center justify-between gap-4">
          <h2 className="section-title">Recent wins</h2>
          <Link
            href="/about"
            className="text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
          >
            More about me →
          </Link>
        </div>
        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="card flex items-start justify-between gap-3 border-white/10 bg-slate-900/60"
            >
              <div>
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <p className="text-sm text-slate-300">{project.impact}</p>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-emerald-200">
                Next.js · Tailwind
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="card border-white/10 bg-gradient-to-r from-emerald-500/15 via-emerald-400/10 to-transparent animate-fade-up">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Let&apos;s collaborate
            </p>
            <h3 className="text-2xl font-semibold text-white">
              Have a product idea or need a refresh?
            </h3>
            <p className="text-sm text-slate-300">
              I partner with teams to design, build, and launch thoughtful experiences.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Contact me
            </Link>
            <a
              href="mailto:hello@portfolio.dev"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-emerald-400/60 hover:text-emerald-100"
            >
              Email directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
