import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyToolbar, { SortKey } from "@/components/filters/PropertyToolbar";
import FilterDrawer from "@/components/filters/FilterDrawer";
import {
  FilterState,
  FEATURE_KEYS,
  FeatureKey,
  initialFilterState,
  isFilterActive,
  MockCottage,
  PRICE_MIN,
  PRICE_MAX,
} from "@/components/filters/types";

// ---- Mock data ------------------------------------------------------------

const COTTAGE_NAMES = [
  "Treleigh", "Polkerris", "Trevose", "Pendower", "Carbis", "Lanherne",
  "Trewithen", "Pencarrow", "Bedruthan", "Trelissick", "Caerhays", "Tremenheere",
  "Penwith", "Trerice", "Mawgan", "Porthcurno", "Marazion", "Mousehole",
  "Lamorna", "Sennen", "Zennor", "Lanivet", "Tregrehan", "Restormel",
];

const LOCATIONS = [
  "St Ives", "Padstow", "Falmouth", "Fowey", "Newquay", "Rock", "St Mawes",
  "Mevagissey", "Mawgan Porth", "Polzeath", "Mousehole", "Sennen",
];

const COVER_IMAGES = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=70",
];

// Deterministic pseudo-random so list is stable across renders
const rng = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

const generateCottages = (count: number): MockCottage[] => {
  const r = rng(42);
  return Array.from({ length: count }).map((_, i) => {
    const sleeps = 2 + Math.floor(r() * 14);
    const bedrooms = Math.max(1, Math.min(8, Math.round(sleeps / 2 + (r() - 0.5) * 2)));
    const bathrooms = Math.max(1, Math.min(6, Math.round(bedrooms / 2 + (r() < 0.4 ? 1 : 0))));
    const price = (Math.floor((400 + r() * 5400) / 50)) * 50;
    const featureCount = Math.floor(r() * 6);
    const shuffled = [...FEATURE_KEYS].sort(() => r() - 0.5);
    const features = shuffled.slice(0, featureCount) as FeatureKey[];
    const name = COTTAGE_NAMES[Math.floor(r() * COTTAGE_NAMES.length)];
    return {
      id: `c-${i + 1}`,
      name: `${name}${i > 23 ? ` ${Math.floor(i / 24) + 1}` : ""}`,
      location: LOCATIONS[Math.floor(r() * LOCATIONS.length)],
      pricePerWeek: Math.min(price, 6500),
      sleeps,
      bedrooms,
      bathrooms,
      features,
      image: COVER_IMAGES[i % COVER_IMAGES.length],
    };
  });
};

// ---- Filter logic ---------------------------------------------------------

const applyFilters = (data: MockCottage[], f: FilterState): MockCottage[] => {
  return data.filter((c) => {
    if (f.sleeps !== null && c.sleeps < f.sleeps) return false;
    if (f.bedrooms !== null && c.bedrooms < f.bedrooms) return false;
    if (f.bathrooms !== null && c.bathrooms < f.bathrooms) return false;
    if (c.pricePerWeek < f.priceMin) return false;
    // priceMax of PRICE_MAX is "+" cap, so anything above counts as in-range
    if (f.priceMax < PRICE_MAX && c.pricePerWeek > f.priceMax) return false;
    for (const feat of f.features) {
      if (!c.features.includes(feat)) return false;
    }
    return true;
  });
};

const applySort = (data: MockCottage[], sort: SortKey): MockCottage[] => {
  const arr = [...data];
  switch (sort) {
    case "price-asc":
      arr.sort((a, b) => a.pricePerWeek - b.pricePerWeek);
      break;
    case "price-desc":
      arr.sort((a, b) => b.pricePerWeek - a.pricePerWeek);
      break;
    case "bedrooms":
      arr.sort((a, b) => b.bedrooms - a.bedrooms);
      break;
    case "name":
      arr.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      break;
  }
  return arr;
};

// ---- Property card --------------------------------------------------------

const PropertyCard = ({ c }: { c: MockCottage }) => (
  <article className="property-card bg-white">
    <div className="property-card__img" style={{ aspectRatio: "5/4" }}>
      <img
        src={c.image}
        alt={c.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div style={{ padding: "16px 4px" }}>
      <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#6fb6ae", marginBottom: 6, fontWeight: 500 }}>
        {c.location}
      </p>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 22,
          color: "#2f5550",
          marginBottom: 8,
        }}
      >
        {c.name}
      </h3>
      <p style={{ fontSize: 14, color: "#7a7a7a", marginBottom: 12 }}>
        Sleeps {c.sleeps} · {c.bedrooms} bed · {c.bathrooms} bath
      </p>
      <p style={{ fontSize: 15, color: "#3a3a3a" }}>
        From <span style={{ color: "#d3a36e", fontWeight: 500 }}>£{c.pricePerWeek.toLocaleString()}</span> / week
      </p>
    </div>
  </article>
);

// ---- Page -----------------------------------------------------------------

const PAGE_SIZE = 12;

const FilterDrawerDemo = () => {
  const allCottages = useMemo(() => generateCottages(120), []);
  const [filters, setFilters] = useState<FilterState>(initialFilterState);
  const [sort, setSort] = useState<SortKey>("featured");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => applyFilters(allCottages, filters), [allCottages, filters]);
  const sorted = useMemo(() => applySort(filtered, sort), [filtered, sort]);
  const activeCount = isFilterActive(filters);

  const shown = sorted.slice(0, visible);
  const canLoadMore = visible < sorted.length;

  return (
    <div className="bg-background min-h-screen">
      <Header />

      {/* Placeholder hero */}
      <section
        style={{
          height: 320,
          background: "#f7f5f2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#6fb6ae",
              marginBottom: 12,
            }}
          >
            Filter drawer playground
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 48,
              fontWeight: 400,
              color: "#2f5550",
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            All cottages across Cornwall
          </h1>
        </div>
      </section>

      <PropertyToolbar
        totalCount={allCottages.length}
        filteredCount={filtered.length}
        activeFilterCount={activeCount}
        sort={sort}
        onSortChange={setSort}
        onOpenFilter={() => setDrawerOpen(true)}
      />

      {/* Grid */}
      <section className="pc-section">
        <div className="pc-container">
          {shown.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                color: "#7a7a7a",
                fontSize: 16,
              }}
            >
              No cottages match your filters. Try clearing some.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 32 }}>
              {shown.map((c) => (
                <PropertyCard key={c.id} c={c} />
              ))}
            </div>
          )}

          {canLoadMore && (
            <div className="flex justify-center" style={{ marginTop: 48 }}>
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="btn-flat"
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        filters={filters}
        onChange={(next) => {
          setFilters(next);
          setVisible(PAGE_SIZE);
        }}
        filteredCount={filtered.length}
      />
    </div>
  );
};

export default FilterDrawerDemo;
