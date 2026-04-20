import { useEffect, useMemo, useRef, useState } from "react";
import { Bed, Bath, Users, Sparkles } from "lucide-react";
import PropertyImageCarousel from "@/components/PropertyImageCarousel";
import PropertyToolbar, { SortKey } from "@/components/filters/PropertyToolbar";
import FilterDrawer from "@/components/filters/FilterDrawer";
import {
  FilterState,
  initialFilterState,
  isFilterActive,
  MockCottage,
  PRICE_MAX,
} from "@/components/filters/types";

interface DestinationGridProps {
  name: string;
  cottages: MockCottage[];
  totalCount: number;
}

const applyFilters = (data: MockCottage[], f: FilterState): MockCottage[] =>
  data.filter((c) => {
    if (f.sleeps !== null && c.sleeps < f.sleeps) return false;
    if (f.bedrooms !== null && c.bedrooms < f.bedrooms) return false;
    if (f.bathrooms !== null && c.bathrooms < f.bathrooms) return false;
    if (c.pricePerWeek < f.priceMin) return false;
    if (f.priceMax < PRICE_MAX && c.pricePerWeek > f.priceMax) return false;
    for (const feat of f.features) if (!c.features.includes(feat)) return false;
    return true;
  });

const applySort = (data: MockCottage[], sort: SortKey): MockCottage[] => {
  const arr = [...data];
  switch (sort) {
    case "price-asc": arr.sort((a, b) => a.pricePerWeek - b.pricePerWeek); break;
    case "price-desc": arr.sort((a, b) => b.pricePerWeek - a.pricePerWeek); break;
    case "bedrooms": arr.sort((a, b) => b.bedrooms - a.bedrooms); break;
    case "name": arr.sort((a, b) => a.name.localeCompare(b.name)); break;
    default: break;
  }
  return arr;
};

const AnimatedRow = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 500ms ease-out ${delay}ms, transform 500ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const PropertyRow = ({ c, index }: { c: MockCottage; index: number }) => {
  const imgLeft = index % 2 === 0;
  const pairIndex = Math.floor(index / 2);
  const bgColor = pairIndex % 2 === 0 ? "#ffffff" : "#f7f5f2";

  return (
    <div
      className={`flex flex-col ${imgLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
      style={{ backgroundColor: bgColor, paddingTop: index === 0 ? 0 : 40, paddingBottom: 40 }}
    >
      <div className="w-full md:w-[60%] overflow-hidden">
        <AnimatedRow>
          <PropertyImageCarousel images={[c.image, c.image, c.image]} alt={c.name} aspectRatio="5/4" />
        </AnimatedRow>
      </div>
      <div className="w-full md:w-[40%] flex items-center" style={{ padding: 48 }}>
        <AnimatedRow delay={200}>
          <div className="flex flex-col w-full" style={{ gap: 20 }}>
            <div className="flex items-baseline justify-between">
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, fontWeight: 500, color: "#2f5550" }}>
                {c.location}
              </p>
              <div className="text-right flex items-baseline gap-1">
                <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 2, color: "#7a7a7a" }}>From</span>
                <span style={{ fontSize: "clamp(22px, 1.8vw, 28px)", fontWeight: 400, color: "#d3a36e" }}>£{c.pricePerWeek.toLocaleString()}</span>
                <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 2, color: "#7a7a7a" }}>per week</span>
              </div>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(28px, 2.5vw, 36px)",
                fontWeight: 300,
                lineHeight: 1.2,
                color: "#d3a36e",
              }}
            >
              {c.name}
            </h3>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Users size={18} style={{ color: "#d3a36e" }} />
                <span style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 2, color: "#3a3a3a" }}>Sleeps {c.sleeps}</span>
              </div>
              <div className="flex items-center gap-2">
                <Bed size={18} style={{ color: "#d3a36e" }} />
                <span style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 2, color: "#3a3a3a" }}>{c.bedrooms} Bed</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath size={18} style={{ color: "#d3a36e" }} />
                <span style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 2, color: "#3a3a3a" }}>{c.bathrooms} Bath</span>
              </div>
            </div>
            {c.features.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {c.features.slice(0, 4).map((f) => (
                  <span
                    key={f}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: 2,
                      color: "#2f5550",
                      border: "1px solid #e5e0da",
                      padding: "4px 12px",
                    }}
                  >
                    <Sparkles size={12} style={{ color: "#d3a36e" }} />
                    {f}
                  </span>
                ))}
              </div>
            )}
            <div className="text-right">
              <button className="btn-flat text-xs">View Property</button>
            </div>
          </div>
        </AnimatedRow>
      </div>
    </div>
  );
};

const INITIAL_VISIBLE = 6;

const DestinationGrid = ({ name, cottages, totalCount }: DestinationGridProps) => {
  const [filters, setFilters] = useState<FilterState>(initialFilterState);
  const [sort, setSort] = useState<SortKey>("featured");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => applyFilters(cottages, filters), [cottages, filters]);
  const sorted = useMemo(() => applySort(filtered, sort), [filtered, sort]);
  const activeCount = isFilterActive(filters);

  const visibleCount = showAll ? sorted.length : Math.min(INITIAL_VISIBLE, sorted.length);
  const shown = sorted.slice(0, visibleCount);
  const canShowMore = !showAll && sorted.length > INITIAL_VISIBLE;

  return (
    <section style={{ background: "#f7f5f2", padding: "6vw 0" }}>
      <div className="pc-container">
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            fontWeight: 400,
            color: "#7a7a7a",
            marginBottom: 24,
          }}
        >
          All {totalCount} cottages in {name}, filterable below.
        </p>
      </div>

      <PropertyToolbar
        totalCount={totalCount}
        filteredCount={filtered.length}
        activeFilterCount={activeCount}
        sort={sort}
        onSortChange={setSort}
        onOpenFilter={() => setDrawerOpen(true)}
      />

      <div className="pc-container" style={{ marginTop: 32 }}>
        {shown.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#7a7a7a", fontSize: 16 }}>
            No cottages match your filters. Try clearing some.
          </div>
        ) : (
          <div className="flex flex-col">
            {shown.map((c, i) => (
              <PropertyRow key={c.id} c={c} index={i} />
            ))}
          </div>
        )}

        {canShowMore && (
          <div className="flex justify-center" style={{ marginTop: 48 }}>
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="btn-flat"
            >
              Show all {sorted.length} cottages
            </button>
          </div>
        )}
      </div>

      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        filters={filters}
        onChange={setFilters}
        filteredCount={filtered.length}
      />
    </section>
  );
};

export default DestinationGrid;
