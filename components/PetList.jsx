// components/PetList.jsx
import PetCard from "./PetCard";

export default function PetList({ pets }) {
  if (pets.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
        <span className="text-6xl mb-6 block">🔍</span>
        <h3 className="font-display text-4xl font-semibold text-white mb-3">
          No matches found
        </h3>
        <p className="text-[14px] text-[var(--muted)] max-w-sm leading-relaxed">
          Try adjusting your search or clearing your filters — your perfect
          companion is somewhere in here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {pets.map((pet, i) => (
        <div key={pet.id} className="animate-fade-up" style={{ animationDelay: `${i * 55}ms` }}>
          <PetCard pet={pet} />
        </div>
      ))}
    </div>
  );
}
