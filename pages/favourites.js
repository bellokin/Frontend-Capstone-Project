// pages/favourites.js
import Head from "next/head";
import Link from "next/link";
import { useApp } from "../context/AppContext";
import PetCard from "../components/PetCard";

export default function FavouritesPage() {
  const { favorites, toggleFavorite } = useApp();

  return (
    <>
      <Head>
        <title>Saved Pets — Ọsin</title>
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="section-eyebrow text-[10px] mb-5">My Saved Pets</p>
          <h1 className="font-display text-[56px] md:text-[72px] font-semibold text-white leading-none mb-3">
            Favourites
          </h1>
          <p className="text-[15px] text-[var(--muted-hi)]">
            {favorites.length === 0
              ? "You haven't saved any pets yet."
              : `${favorites.length} animal${favorites.length !== 1 ? "s" : ""} saved.`}
          </p>
        </div>

        {/* Empty state */}
        {favorites.length === 0 ? (
          <div className="surface flex flex-col items-center justify-center py-24 text-center px-8">
            <span className="text-6xl mb-6">🤍</span>
            <h2 className="font-display text-4xl font-semibold text-white mb-3">
              Nothing saved yet
            </h2>
            <p className="text-[14px] text-[var(--muted)] max-w-sm leading-relaxed mb-8">
              Tap the heart on any animal card to save them here. Take your
              time — they'll wait.
            </p>
            <Link href="/" className="btn-gold px-8 py-3 rounded-full">
              Browse animals →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((pet, i) => (
              <div
                key={pet.id}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 55}ms` }}
              >
                <PetCard pet={pet} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
