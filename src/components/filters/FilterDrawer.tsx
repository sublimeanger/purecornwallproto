import { useEffect, useMemo, useRef, useState } from "react";
import { X, ChevronDown } from "lucide-react";
import {
  FilterState,
  PRICE_MIN,
  PRICE_MAX,
  PRICE_STEP,
  SLEEPS_OPTIONS,
  SLEEPS_MAX,
  BEDROOMS_OPTIONS,
  BEDROOMS_MAX,
  BATHROOMS_OPTIONS,
  BATHROOMS_MAX,
  REGION_KEYS,
  REGION_LABELS,
  RegionKey,
  SidebarFeatureKey,
  SIDEBAR_SECTIONS,
  SIDEBAR_FEATURE_LABELS,
  initialFilterState,
} from "./types";
import RangeSlider from "./RangeSlider";
import FeaturePill from "./FeaturePill";
import { destinationsHubData } from "@/data/destinationsHubData";

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  filters: FilterState;
  onChange: (next: FilterState) => void;
  filteredCount: number;
}

const formatPrice = (v: number, isMax: boolean): string => {
  if (isMax && v >= PRICE_MAX) return `£${PRICE_MAX.toLocaleString()}+`;
  return `£${v.toLocaleString()}`;
};

// Map between RegionKey ("west-cornwall") and HubTown.region ("west")
const REGION_TO_HUB: Record<RegionKey, "west" | "north" | "south"> = {
  "west-cornwall": "west",
  "north-cornwall": "north",
  "south-cornwall": "south",
};

// ----------------------------------------------------------------------------
// Numeric pill row (for sleeps / bedrooms / bathrooms)
// ----------------------------------------------------------------------------

const NumericPillRow = ({
  label,
  options,
  capValue,
  value,
  onChange,
}: {
  label: string;
  options: readonly number[];
  capValue: number; // displayed as "{cap}+"
  value: number | null;
  onChange: (v: number | null) => void;
}) => (
  <div style={{ marginBottom: 18 }}>
    <p
      style={{
        fontSize: 13,
        fontWeight: 500,
        color: "#3a3a3a",
        margin: 0,
        marginBottom: 10,
        fontFamily: "var(--font-body)",
      }}
    >
      {label}
    </p>
    <div className="flex flex-wrap" style={{ gap: 6 }}>
      <button
        type="button"
        onClick={() => onChange(null)}
        aria-pressed={value === null}
        style={pillStyle(value === null)}
      >
        Any
      </button>
      {options.map((n) => {
        const active = value === n;
        const display = n === capValue ? `${n}+` : String(n);
        return (
          <button
            key={n}
            type="button"
            onClick={() => onChange(active ? null : n)}
            aria-pressed={active}
            style={pillStyle(active)}
          >
            {display}
          </button>
        );
      })}
    </div>
  </div>
);

const pillStyle = (active: boolean): React.CSSProperties => ({
  minWidth: 44,
  height: 36,
  padding: "0 12px",
  background: active ? "#2f5550" : "#ffffff",
  color: active ? "#ffffff" : "#3a3a3a",
  border: `1px solid ${active ? "#2f5550" : "#e5e0da"}`,
  borderRadius: 0,
  fontFamily: "var(--font-body)",
  fontSize: 13,
  fontWeight: 500,
  cursor: "pointer",
  transition: "background 200ms, color 200ms, border-color 200ms",
});

// ----------------------------------------------------------------------------
// Collapsible section
// ----------------------------------------------------------------------------

const Section = ({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderTop: "1px solid #e5e0da" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between"
        style={{
          background: "none",
          border: "none",
          padding: "20px 0",
          cursor: "pointer",
          fontFamily: "var(--font-body)",
          fontSize: 12,
          fontWeight: 500,
          color: "#d3a36e",
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        <span>{title}</span>
        <ChevronDown
          size={18}
          style={{
            color: "#d3a36e",
            transform: open ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 200ms ease",
          }}
        />
      </button>
      {open && <div style={{ paddingBottom: 24 }}>{children}</div>}
    </div>
  );
};

const StaticSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 12,
        fontWeight: 500,
        color: "#d3a36e",
        letterSpacing: 3,
        textTransform: "uppercase",
        marginTop: 0,
        marginBottom: 18,
      }}
    >
      {title}
    </h3>
    {children}
  </div>
);

// ----------------------------------------------------------------------------
// Town autocomplete
// ----------------------------------------------------------------------------

const TownPicker = ({
  region,
  townSlug,
  onChange,
}: {
  region: RegionKey | null;
  townSlug: string | null;
  onChange: (slug: string | null) => void;
}) => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const allTowns = destinationsHubData.towns;
  const selectedTown = useMemo(
    () => allTowns.find((t) => t.slug === townSlug) || null,
    [allTowns, townSlug],
  );

  const suggestions = useMemo(() => {
    const hubRegion = region ? REGION_TO_HUB[region] : null;
    let pool = allTowns;
    if (hubRegion) pool = pool.filter((t) => t.region === hubRegion);
    const q = query.trim().toLowerCase();
    if (q) pool = pool.filter((t) => t.name.toLowerCase().includes(q));
    return pool.slice(0, 8);
  }, [allTowns, region, query]);

  return (
    <div style={{ position: "relative", marginTop: 16 }}>
      <p
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "#3a3a3a",
          margin: 0,
          marginBottom: 8,
          fontFamily: "var(--font-body)",
        }}
      >
        Town (optional)
      </p>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          value={selectedTown ? selectedTown.name : query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (selectedTown) onChange(null);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Type to search a town"
          style={{
            width: "100%",
            height: 44,
            padding: "0 36px 0 14px",
            border: "1px solid #e5e0da",
            borderRadius: 0,
            fontFamily: "var(--font-body)",
            fontSize: 14,
            color: "#3a3a3a",
            outline: "none",
            background: "#ffffff",
          }}
        />
        {selectedTown && (
          <button
            type="button"
            onClick={() => {
              onChange(null);
              setQuery("");
            }}
            aria-label="Clear town"
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#7a7a7a",
              padding: 4,
              display: "flex",
            }}
          >
            <X size={16} />
          </button>
        )}
      </div>
      {focused && !selectedTown && suggestions.length > 0 && (
        <ul
          role="listbox"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            marginTop: 2,
            background: "#ffffff",
            border: "1px solid #e5e0da",
            boxShadow: "0 8px 20px rgba(47,85,80,0.1)",
            listStyle: "none",
            padding: "4px 0",
            margin: 0,
            zIndex: 10,
            maxHeight: 240,
            overflowY: "auto",
          }}
        >
          {suggestions.map((t) => (
            <li key={t.slug}>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onChange(t.slug);
                  setQuery("");
                }}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "10px 14px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 14,
                  color: "#3a3a3a",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f7f5f2")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {t.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ----------------------------------------------------------------------------
// Main drawer
// ----------------------------------------------------------------------------

const FilterDrawer = ({ open, onClose, filters, onChange, filteredCount }: FilterDrawerProps) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
  }, [open]);

  const setField = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    onChange({ ...filters, [key]: value });
  };

  const toggleFeature = (f: SidebarFeatureKey) => {
    const exists = filters.features.includes(f);
    onChange({
      ...filters,
      features: exists ? filters.features.filter((x) => x !== f) : [...filters.features, f],
    });
  };

  const clearAll = () => onChange(initialFilterState);

  const showCountText = `${filteredCount.toLocaleString()} cottage${filteredCount === 1 ? "" : "s"} match · Show results`;
  const zero = filteredCount === 0;

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(47,85,80,0.4)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: open ? "opacity 300ms ease-out" : "opacity 250ms ease-in",
          zIndex: 90,
        }}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="filter-drawer-title"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          maxWidth: 480,
          background: "#ffffff",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: open ? "transform 300ms ease-out" : "transform 250ms ease-in",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-body)",
        }}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-6"
          style={{ height: 72, borderBottom: "1px solid #e5e0da", flexShrink: 0 }}
        >
          <h2
            id="filter-drawer-title"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: 24,
              color: "#2f5550",
              margin: 0,
            }}
          >
            Refine your search
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#3a3a3a",
              transition: "color 200ms ease",
              padding: 4,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d3a36e")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#3a3a3a")}
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto fd-scroll" style={{ padding: "0 24px" }}>
          {/* 1. Stay & Guests — always open, NOT collapsible */}
          <div style={{ paddingTop: 24, paddingBottom: 8 }}>
            <StaticSection title="Stay & Guests">
              <NumericPillRow
                label="Guests"
                options={SLEEPS_OPTIONS}
                capValue={SLEEPS_MAX}
                value={filters.sleeps}
                onChange={(v) => setField("sleeps", v)}
              />
              <NumericPillRow
                label="Bedrooms"
                options={BEDROOMS_OPTIONS}
                capValue={BEDROOMS_MAX}
                value={filters.bedrooms}
                onChange={(v) => setField("bedrooms", v)}
              />
              <NumericPillRow
                label="Bathrooms"
                options={BATHROOMS_OPTIONS}
                capValue={BATHROOMS_MAX}
                value={filters.bathrooms}
                onChange={(v) => setField("bathrooms", v)}
              />
            </StaticSection>
          </div>

          {/* 2. Region — collapsible, open by default */}
          <Section title="Region" defaultOpen>
            <div className="flex flex-wrap" style={{ gap: 6 }}>
              {REGION_KEYS.map((rk) => {
                const active = filters.region === rk;
                return (
                  <button
                    key={rk}
                    type="button"
                    onClick={() =>
                      onChange({
                        ...filters,
                        region: active ? null : rk,
                        // Clear townSlug if it no longer matches the new region filter
                        townSlug: active ? filters.townSlug : null,
                      })
                    }
                    aria-pressed={active}
                    style={{ ...pillStyle(active), padding: "0 16px" }}
                  >
                    {REGION_LABELS[rk]}
                  </button>
                );
              })}
            </div>
            <TownPicker
              region={filters.region}
              townSlug={filters.townSlug}
              onChange={(slug) => setField("townSlug", slug)}
            />
          </Section>

          {/* 3. Price */}
          <Section title="Price per week" defaultOpen>
            <RangeSlider
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={PRICE_STEP}
              valueMin={filters.priceMin}
              valueMax={filters.priceMax}
              onChange={(lo, hi) => onChange({ ...filters, priceMin: lo, priceMax: hi })}
              formatValue={formatPrice}
            />
          </Section>

          {/* 4-11. Sidebar feature sections, rendered dynamically */}
          {SIDEBAR_SECTIONS.map((sec) => (
            <Section key={sec.id} title={sec.title}>
              <div className="flex flex-wrap" style={{ gap: 8 }}>
                {sec.keys.map((key) => (
                  <div key={`${sec.id}-${key}`} style={{ minWidth: "calc(50% - 4px)", flex: "1 1 calc(50% - 4px)" }}>
                    <FeaturePill
                      label={SIDEBAR_FEATURE_LABELS[key]}
                      active={filters.features.includes(key)}
                      onToggle={() => toggleFeature(key)}
                    />
                  </div>
                ))}
              </div>
            </Section>
          ))}

          <div style={{ height: 24 }} />
        </div>

        {/* Footer */}
        <div
          className="flex items-center"
          style={{
            height: 88,
            borderTop: "1px solid #e5e0da",
            padding: "0 24px",
            gap: 12,
            flexShrink: 0,
          }}
        >
          <button
            type="button"
            onClick={clearAll}
            style={{
              background: "transparent",
              border: "none",
              borderRadius: 0,
              color: "#3a3a3a",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: 3,
              textTransform: "uppercase",
              fontFamily: "var(--font-body)",
              cursor: "pointer",
              padding: "0 8px",
              transition: "color 200ms ease",
              height: 44,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d3a36e")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#3a3a3a")}
          >
            Clear all
          </button>
          <button
            type="button"
            onClick={onClose}
            disabled={zero}
            style={{
              flex: 1,
              background: "#d3a36e",
              border: "none",
              borderRadius: 0,
              color: "#ffffff",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontFamily: "var(--font-body)",
              cursor: zero ? "not-allowed" : "pointer",
              opacity: zero ? 0.4 : 1,
              transition: "background-color 200ms ease",
              height: 44,
            }}
            onMouseEnter={(e) => {
              if (!zero) e.currentTarget.style.backgroundColor = "#c09360";
            }}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#d3a36e")}
          >
            {showCountText}
          </button>
        </div>
      </aside>

      <style>{`
        .fd-scroll::-webkit-scrollbar { width: 4px; }
        .fd-scroll::-webkit-scrollbar-track { background: transparent; }
        .fd-scroll::-webkit-scrollbar-thumb { background: #d3a36e; border-radius: 0; }
        .fd-scroll { scrollbar-width: thin; scrollbar-color: #d3a36e transparent; }
      `}</style>
    </>
  );
};

export default FilterDrawer;
