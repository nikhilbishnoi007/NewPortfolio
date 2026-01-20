import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold">
          <Image
            src="/dpPhoto.jpg"
            alt="Profile photo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-emerald-400/50 shadow-lg shadow-emerald-500/20"
            priority
          />
          <span className="tracking-tight text-slate-100">Portfolio</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
        >
          Let&apos;s talk
        </Link>
      </div>
    </header>
  );
}
