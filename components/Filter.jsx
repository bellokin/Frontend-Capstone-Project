// components/Filter.jsx
import { useApp } from "../context/AppContext";
import pets from "../data/pets";

export default function Filter() {
  const { activeType, setActiveType, activeBreed, setActiveBreed, clearFilters } = useApp();

  const types = [...new Set(pets.map((p) => p.type))];
  const breedsForType = activeType
    ? [...new Set(pets.filter((p) => p.type === activeType).map((p) => p.breed))]
    : [];

  const hasFilters = activeType || activeBreed;

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {/* Type label */}
      <span className="text-[11px] text-[var(--muted)] tracking-widest uppercase mr-1">
        Species
      </span>

      {/* All chip */}
      <button
        className={`chip ${!activeType ? "active" : ""}`}
        onClick={() => { setActiveType(""); setActiveBreed(""); }}
      >
        All
      </button>

      {types.map((t) => (
        <button
          key={t}
          className={`chip ${activeType === t ? "active" : ""}`}
          onClick={() => {
            setActiveType(activeType === t ? "" : t);
            setActiveBreed("");
          }}
        >
          {t}
        </button>
      ))}

      {/* Breed filters — only when a type is selected */}
      {breedsForType.length > 0 && (
        <>
          <span className="w-px h-4 bg-[var(--border)] mx-1" />
          <span className="text-[11px] text-[var(--muted)] tracking-widest uppercase mr-1">
            Breed
          </span>
          {breedsForType.map((b) => (
            <button
              key={b}
              className={`chip ${activeBreed === b ? "active" : ""}`}
              onClick={() => setActiveBreed(activeBreed === b ? "" : b)}
            >
              {b}
            </button>
          ))}
        </>
      )}

      {/* Clear all */}
      {hasFilters && (
        <button
          className="text-[11px] text-[var(--muted)] hover:text-[var(--red)] transition-colors ml-2 tracking-wide underline underline-offset-2"
          onClick={clearFilters}
        >
          Clear
        </button>
      )}
    </div>
  );
}
