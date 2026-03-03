// components/SearchBar.jsx
import { useApp } from "../context/AppContext";

export default function SearchBar() {
  const { search, setSearch } = useApp();

  return (
    <div className="relative">
      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--muted)] text-xl pointer-events-none select-none">
        ⌕
      </span>
      <input
        type="text"
        className="input-base w-full pl-14 pr-12 py-4 text-[15px]"
        placeholder="Search by name, type, or breed…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search pets"
      />
      {search && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[var(--border)] hover:bg-[var(--gold)] hover:text-black text-[var(--muted)] text-[13px] flex items-center justify-center transition-all"
          onClick={() => setSearch("")}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}
