// components/PetCard.jsx
import Link from "next/link";
import { useApp } from "../context/AppContext";

export default function PetCard({ pet, delay = 0 }) {
  const { isFavorite, isApplied, toggleFavorite, applyToAdopt } = useApp();
  const fav = isFavorite(pet.id);
  const applied = isApplied(pet.id);

  return (
    <article
      className="surface group relative overflow-hidden cursor-pointer
        hover:-translate-y-2 hover:border-[rgba(212,168,83,0.25)]
        hover:shadow-[0_24px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(212,168,83,0.08)]
        transition-all duration-400"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{ background: `linear-gradient(90deg, transparent, ${pet.color}, transparent)` }}
      />

      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A08]/80 via-transparent to-transparent pointer-events-none" />

        {/* Type badge */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold tracking-[1.5px] uppercase bg-[rgba(10,10,8,0.72)] backdrop-blur-md border border-white/10 text-[var(--cream)]">
          {pet.type}
        </span>

        {/* Favourite button */}
        <button
          className={`btn-icon absolute top-3 right-3 ${fav ? "loved" : ""}`}
          onClick={(e) => { e.preventDefault(); toggleFavorite(pet); }}
          aria-label={fav ? "Remove from favourites" : "Add to favourites"}
        >
          {fav ? "♥" : "♡"}
        </button>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div>
            <h2 className="font-display text-[26px] font-semibold text-white leading-none">
              {pet.name}
            </h2>
            <p className="text-[12px] text-[var(--muted)] mt-0.5 tracking-wide">
              {pet.gender}
            </p>
          </div>
          <span className="text-[11px] text-[var(--gold)] bg-[var(--gold-glow)] border border-[rgba(212,168,83,0.18)] px-2.5 py-1 rounded-full whitespace-nowrap mt-1">
            {pet.age}
          </span>
        </div>

        <p className="text-[13px] text-[var(--muted-hi)] mb-3 tracking-wide">{pet.breed}</p>

        <p className="text-[13px] text-[#7A7A6E] leading-[1.65] mb-5 line-clamp-2">
          {pet.description}
        </p>

        <div className="flex gap-2.5">
          <button
            className="btn-gold flex-1 text-[12px] py-2.5"
            onClick={(e) => { e.preventDefault(); if (!applied) applyToAdopt(pet); }}
            disabled={applied}
          >
            {applied ? "✓ Applied" : "Adopt"}
          </button>
          <Link
            href={`/pets/${pet.id}`}
            className="btn-ghost text-[12px] py-2.5 px-4"
          >
            View →
          </Link>
        </div>
      </div>
    </article>
  );
}
