// pages/index.js
import { useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import { useApp } from "../context/AppContext";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import PetList from "../components/PetList";
import allPets from "../data/pets";

export default function HomePage() {
  const { search, activeType, activeBreed } = useApp();

  const filteredPets = useMemo(() => {
    const q = search.toLowerCase().trim();
    return allPets.filter((p) => {
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.breed.toLowerCase().includes(q) ||
        p.keywords.some((k) => k.toLowerCase().includes(q));
      const matchType = !activeType || p.type === activeType;
      const matchBreed = !activeBreed || p.breed === activeBreed;
      return matchSearch && matchType && matchBreed;
    });
  }, [search, activeType, activeBreed]);

  return (
    <>
      <Head>
        <title>Ọsin — Find Your Forever Companion</title>
        <meta name="description" content="Adopt a pet in Nigeria. Browse dogs, cats, rabbits and more." />
      </Head>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_38%,rgba(212,168,83,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[rgba(212,168,83,0.035)] blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-[rgba(160,100,200,0.025)] blur-[90px] pointer-events-none" />

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
          <div className="h-px w-10 bg-[var(--gold)]" />
          <span className="text-[10px] tracking-[3.5px] uppercase text-[var(--gold)] font-semibold">
            Lagos · Abuja · Port Harcourt
          </span>
          <div className="h-px w-10 bg-[var(--gold)]" />
        </div>

        {/* Headline */}
        <h1
          className="font-display text-center font-light leading-[0.88] mb-4 animate-fade-up"
          style={{
            fontSize: "clamp(60px,10vw,118px)",
            animationDelay: "180ms",
          }}
        >
          Find your
          <br />
          <em className="text-[var(--gold)] not-italic font-semibold">
            forever
          </em>{" "}
          companion
        </h1>

        <p
          className="font-display text-center italic text-[var(--muted-hi)] mb-12 animate-fade-up"
          style={{ fontSize: "clamp(16px,2.5vw,22px)", animationDelay: "250ms" }}
        >
          Every soul here deserves a home. Every home deserves a soul.
        </p>

        {/* Stats */}
        <div
          className="flex items-center gap-12 mb-14 animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          {[
            { num: `${allPets.length}+`, label: "Animals" },
            { num: "3", label: "Species" },
            { num: "100%", label: "Verified" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <span className="font-display text-[38px] font-semibold text-[var(--gold)] block leading-none">
                {num}
              </span>
              <span className="text-[10px] tracking-[2.5px] uppercase text-[var(--muted)] mt-1 block">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex gap-4 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="#browse"
            className="btn-gold px-9 py-4 text-[14px] rounded-full"
          >
            Meet the animals
          </a>
          <Link
            href="/about"
            className="btn-ghost px-9 py-4 text-[14px] rounded-full"
          >
            How it works
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: "800ms" }}>
          <div className="w-px h-10 bg-gradient-to-b from-[var(--gold)] to-transparent animate-[pulse_2s_ease_infinite]" />
          <span className="text-[9px] tracking-[3px] uppercase text-[var(--muted)]">Scroll</span>
        </div>
      </section>

      {/* ── Browse Section ────────────────────────────────── */}
      <section id="browse" className="max-w-7xl mx-auto px-6 pb-24">
        {/* Search + Filter */}
        <div className="mb-10 space-y-5">
          <p className="section-eyebrow text-[10px]">Find your companion</p>
          <SearchBar />
          <Filter />
          <p className="text-[13px] text-[var(--muted)]">
            <span className="text-[var(--gold)] font-semibold">{filteredPets.length}</span>{" "}
            animal{filteredPets.length !== 1 ? "s" : ""} available
          </p>
        </div>

        {/* Grid */}
        <PetList pets={filteredPets} />
      </section>
    </>
  );
}
