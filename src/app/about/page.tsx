import Image from "next/image";

export const metadata = {
  title: "About | Portfolio",
  description: "Get to know the person behind the portfolio.",
};

const milestones = [
  {
    title: "Undergraduate CS Student",
    detail: "Built multiple projects while learning full-stack patterns hands-on.",
  },
  {
    title: "UI + API",
    detail: "Enjoy pairing crafted interfaces with reliable Node/Express APIs and MongoDB.",
  },
  {
    title: "Team-ready",
    detail: "Comfortable with Git, code reviews, docs, and communicating tradeoffs clearly.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 space-y-8 animate-fade-up">
      <header className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <div className="pill">About</div>
          <h1 className="text-4xl font-semibold tracking-tight text-white">A bit about me</h1>
          <p className="max-w-3xl text-slate-300">
            I&apos;m a fresher full-stack developer who learns fast by building. I care about
            clean UI, accessible patterns, and pairing them with dependable APIs. I&apos;m ready to
            join a team, take feedback, and deliver features together.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="card border-white/10 bg-slate-900/60 p-4">
            <Image
              src="/myphoto.jpeg"
              alt="Portrait"
              width={320}
              height={320}
              className="h-64 w-64 rounded-2xl object-cover shadow-xl shadow-emerald-500/20 ring-2 ring-emerald-400/40"
              priority
            />
          </div>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        {milestones.map((item) => (
          <div key={item.title} className="card border-white/10 bg-slate-900/60">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-slate-300">{item.detail}</p>
          </div>
        ))}
      </section>

      <section className="card border-white/10 bg-slate-900/60 space-y-4">
        <h2 className="text-xl font-semibold text-white">How I work</h2>
        <ul className="space-y-3 text-sm text-slate-300">
          <li>• Start with goals, constraints, and user stories before choosing the tools.</li>
          <li>• Build accessible-by-default: semantic HTML, keyboard support, and testing.</li>
          <li>• Prototype quickly, share early, and iterate with the team.</li>
          <li>• Keep PRs small, documented, and easy to review.</li>
        </ul>
      </section>
    </div>
  );
}
