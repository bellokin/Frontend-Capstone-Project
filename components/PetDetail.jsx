// components/PetDetail.jsx
import Link from "next/link";
import { useApp } from "../context/AppContext";

export default function PetDetail({ pet }) {
  const { isFavorite, isApplied, toggleFavorite, applyToAdopt } = useApp();
  const fav = isFavorite(pet.id);
  const applied = isApplied(pet.id);

  return (
    <div className="min-h-screen">
      {/* Hero image */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0A0A08]" />
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(90deg, transparent, ${pet.color}80, transparent)` }}
        />

        {/* Back button */}
        <Link
          href="/"
          className="absolute top-6 left-6 btn-icon text-[14px] font-semibold"
        >
          ←
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 pb-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
          {/* Name / meta */}
          <div>
            <h1 className="font-display text-[64px] md:text-[80px] font-semibold text-white leading-none mb-2">
              {pet.name}
            </h1>
            <p className="text-[16px] text-[var(--muted-hi)] tracking-wide">
              {pet.breed} · {pet.type}
            </p>
            {/* Keywords */}
            <div className="flex flex-wrap gap-2 mt-3">
              {pet.keywords.map((k) => (
                <span
                  key={k}
                  className="text-[11px] text-[var(--gold)] bg-[var(--gold-glow)] border border-[rgba(212,168,83,0.2)] px-3 py-1 rounded-full capitalize tracking-wide"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 items-center shrink-0 pt-2">
            <button
              className={`btn-icon w-14 h-14 rounded-2xl text-[22px] ${fav ? "loved" : ""}`}
              onClick={() => toggleFavorite(pet)}
              aria-label="Toggle favourite"
            >
              {fav ? "♥" : "♡"}
            </button>
            <button
              className="btn-gold px-8 py-4 text-[13px] rounded-2xl"
              onClick={() => { if (!applied) applyToAdopt(pet); }}
              disabled={applied}
            >
              {applied ? "✓ Application Submitted" : "🐾 Apply to Adopt"}
            </button>
          </div>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Type",   value: pet.type },
            { label: "Breed",  value: pet.breed },
            { label: "Age",    value: pet.age },
            { label: "Gender", value: pet.gender },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="surface p-5 text-center"
            >
              <span className="block text-[10px] tracking-[2.5px] uppercase text-[var(--muted)] mb-2">
                {label}
              </span>
              <span className="font-display text-[22px] font-semibold text-white">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="surface p-8 mb-8">
          <p className="section-eyebrow mb-6 text-[10px]">About {pet.name}</p>
          <p className="font-display text-[20px] md:text-[22px] font-light italic text-[#9A9A8E] leading-[1.8] border-l-2 border-[var(--gold)] pl-6">
            {pet.description}
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="btn-gold flex-1 py-5 text-[14px] rounded-2xl"
            onClick={() => { if (!applied) applyToAdopt(pet); }}
            disabled={applied}
          >
            {applied ? "✓ Application Already Submitted" : `Adopt ${pet.name}`}
          </button>
          <Link href="/applications" className="btn-ghost py-5 flex-1 justify-center rounded-2xl text-[14px]">
            View My Applications →
          </Link>
        </div>
      </div>
    </div>
  );
}
