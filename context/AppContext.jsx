import { createContext, useContext, useState, useCallback, useEffect } from "react";

const AppContext = createContext(null);

function loadFromStorage(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState(() => loadFromStorage("pet_favorites", []));
  const [applications, setApplications] = useState(() => loadFromStorage("pet_applications", []));
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("");
  const [activeBreed, setActiveBreed] = useState("");
  const [toast, setToast] = useState(null);

  useEffect(() => saveToStorage("pet_favorites", favorites), [favorites]);
  useEffect(() => saveToStorage("pet_applications", applications), [applications]);

  const showToast = useCallback((message, icon = "✓") => {
    setToast({ message, icon });
    setTimeout(() => setToast(null), 2800);
  }, []);

  const isFavorite = useCallback(
    (id) => favorites.some((f) => f.id === id),
    [favorites]
  );
  const isApplied = useCallback(
    (id) => applications.some((a) => a.id === id),
    [applications]
  );
  const toggleFavorite = useCallback(
    (pet) => {
      setFavorites((prev) => {
        const exists = prev.some((f) => f.id === pet.id);
        if (exists) {
          showToast(`${pet.name} removed from saved`, "🤍");
          return prev.filter((f) => f.id !== pet.id);
        }
        showToast(`${pet.name} saved!`, "♥");
        return [...prev, pet];
      });
    },
    [showToast]
  );
  const applyToAdopt = useCallback(
    (pet) => {
      setApplications((prev) => {
        if (prev.some((a) => a.id === pet.id)) return prev;
        showToast(`Application submitted for ${pet.name}!`, "🐾");
        return [...prev, pet];
      });
    },
    [showToast]
  );
  const withdrawApplication = useCallback(
    (pet) => {
      setApplications((prev) => prev.filter((a) => a.id !== pet.id));
      showToast(`Application for ${pet.name} withdrawn`, "↩");
    },
    [showToast]
  );
  const clearFilters = useCallback(() => {
    setSearch("");
    setActiveType("");
    setActiveBreed("");
  }, []);

  return (
    <AppContext.Provider
      value={{
        favorites,
        applications,
        search,
        setSearch,
        activeType,
        setActiveType,
        activeBreed,
        setActiveBreed,
        toast,
        isFavorite,
        isApplied,
        toggleFavorite,
        applyToAdopt,
        withdrawApplication,
        clearFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
