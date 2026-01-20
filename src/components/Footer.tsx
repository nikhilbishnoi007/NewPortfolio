export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-semibold text-slate-100">Built with Next.js & Tailwind</div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/nikhilbishnoi92568"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/nikhilbishnoi007"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
          <a href="mailto:hello@portfolio.dev" className="transition hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
