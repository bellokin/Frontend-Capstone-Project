// components/Header.jsx
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";

export default function Header() {
  const router = useRouter();
  const { favorites, applications } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  const isActive = (href) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#0A0A08]/90 backdrop-blur-xl border-b border-[rgba(212,168,83,0.15)]"
          : "py-5 bg-[#0A0A08]/70 backdrop-blur-md border-b border-[#252522]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0.5 group select-none">
          <span className="font-display text-[28px] font-semibold text-white tracking-tight">
            Ọsin
          </span>
          <span className="w-[7px] h-[7px] rounded-full bg-[var(--gold)] mb-2 ml-0.5 group-hover:scale-125 transition-transform" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: "Browse", href: "/" },
            { label: "Applications", href: "/applications" },
            { label: "Favourites", href: "/favourites" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`relative px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 ${
                isActive(href)
                  ? "text-[var(--gold)]"
                  : "text-[var(--muted-hi)] hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
              {label === "Favourites" && favorites.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] rounded-full bg-[var(--gold)] text-black text-[9px] font-black flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
              {label === "Applications" && applications.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] rounded-full bg-[var(--green)] text-black text-[9px] font-black flex items-center justify-center">
                  {applications.length}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden btn-ghost px-3 py-2 text-[13px]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#111110] border-b border-[#252522] py-4 px-6 flex flex-col gap-1 animate-fade-in">
          {[
            { label: "Browse Pets", href: "/" },
            { label: "My Applications", href: "/applications" },
            { label: "Saved Pets", href: "/favourites" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
                isActive(href)
                  ? "text-[var(--gold)] bg-[var(--gold-glow)]"
                  : "text-[var(--muted-hi)] hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
