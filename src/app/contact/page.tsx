import Link from "next/link";

export const metadata = {
  title: "Contact | Portfolio",
  description: "Reach out to start a project or discuss an idea.",
};

const methods = [
  {
    title: "Email",
    action: "bishnoinikhil35@gmail.com",
    href: "mailto:bishnoinikhil35@gmail.com",
    detail: "Fastest way to reach me—expect a reply within one business day.",
  },
  {
    title: "LinkedIn",
    action: "linkedin.com",
    href: "https://www.linkedin.com/in/nikhilbishnoi92568",
    detail: "Let’s connect, brainstorm opportunities, or share product ideas.",
  },
  {
    title: "GitHub",
    action: "github.com",
    href: "https://github.com/nikhilbishnoi007",
    detail: "Browse code, patterns, and experiments I’ve been exploring lately.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 space-y-8 animate-fade-up">
      <header className="space-y-3">
        <div className="pill">Contact</div>
        <h1 className="text-4xl font-semibold tracking-tight text-white">Let&apos;s talk</h1>
        <p className="max-w-3xl text-slate-300">
          Share what you&apos;re building, timelines, and what success looks like. I&apos;m open to
          internships, junior roles, or small freelance projects and will reply with next steps.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {methods.map((method) => (
          <div key={method.title} className="card border-white/10 bg-slate-900/60 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
              {method.title}
            </div>
            <Link
              href={method.href}
              className="text-lg font-semibold text-white transition hover:text-emerald-100"
            >
              {method.action}
            </Link>
            <p className="text-sm text-slate-300">{method.detail}</p>
          </div>
        ))}
      </section>

      <section className="card border-white/10 bg-gradient-to-r from-white/5 via-emerald-400/10 to-transparent space-y-4">
        <h2 className="text-xl font-semibold text-white">Ready to get started?</h2>
        <p className="text-sm text-slate-300">
          Send a short note with the problem you&apos;re solving, target audience, and any links
          to design files or references. I&apos;ll follow up with a simple plan or a quick call slot.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:hello@portfolio.dev?subject=Project%20idea"
            className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
          >
            Email me
          </a>
          <Link
            href="/skills"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-emerald-400/60 hover:text-emerald-100"
          >
            See capabilities
          </Link>
        </div>
      </section>
    </div>
  );
}
