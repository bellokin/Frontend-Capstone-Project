// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#252522] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link href="/" className="flex items-baseline gap-0.5">
            <span className="font-display text-[22px] font-semibold text-[var(--muted)]">
              Ọsin
            </span>
            <span className="w-[5px] h-[5px] rounded-full bg-[var(--gold)] mb-1.5 ml-0.5" />
          </Link>
          <p className="text-[12px] text-[var(--muted)] tracking-wide">
            Every soul deserves a home.
          </p>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-6 text-[12px] text-[var(--muted)]">
          <Link href="/" className="hover:text-[var(--gold)] transition-colors">Browse</Link>
          <Link href="/favourites" className="hover:text-[var(--gold)] transition-colors">Saved</Link>
          <Link href="/applications" className="hover:text-[var(--gold)] transition-colors">Applications</Link>
        </nav>

        {/* Credit */}
        <p className="text-[11px] text-[var(--muted)] tracking-wider text-center md:text-right">
          Built with{" "}
          <span className="text-[var(--gold)]">♥</span>
          {" "}· Next.js + TailwindCSS · Lagos 🇳🇬
        </p>
      </div>
    </footer>
  );
}
