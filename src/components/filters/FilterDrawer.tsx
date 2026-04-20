import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import {
  FilterState,
  FEATURE_KEYS,
  PRICE_MIN,
  PRICE_MAX,
  PRICE_STEP,
  SLEEPS_RANGE,
  BEDROOMS_RANGE,
  BATHROOMS_RANGE,
  initialFilterState,
} from "./types";
import FilterSection from "./FilterSection";
import NumberStepper from "./NumberStepper";
import RangeSlider from "./RangeSlider";
import FeaturePill from "./FeaturePill";

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

const FilterDrawer = ({ open, onClose, filters, onChange, filteredCount }: FilterDrawerProps) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Focus close button on open
  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
  }, [open]);

  const setField = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    onChange({ ...filters, [key]: value });
  };

  const toggleFeature = (f: (typeof FEATURE_KEYS)[number]) => {
    const exists = filters.features.includes(f);
    onChange({
      ...filters,
      features: exists ? filters.features.filter((x) => x !== f) : [...filters.features, f],
    });
  };

  const clearAll = () => onChange(initialFilterState);

  const showCountText = `Show ${filteredCount.toLocaleString()} cottage${filteredCount === 1 ? "" : "s"}`;
  const zero = filteredCount === 0;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(47,85,80,0.4)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: open
            ? "opacity 300ms ease-out"
            : "opacity 250ms ease-in",
          zIndex: 90,
        }}
      />

      {/* Drawer */}
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
          transition: open
            ? "transform 300ms ease-out"
            : "transform 250ms ease-in",
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
              fontStyle: "italic",
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
        <div
          className="flex-1 overflow-y-auto fd-scroll"
          style={{ padding: "0 32px" }}
        >
          <div style={{ paddingTop: 32 }}>
            <FilterSection title="Party size" defaultOpenMobile>
              <div className="flex flex-col gap-2">
                <NumberStepper
                  label="Sleeps (guests)"
                  value={filters.sleeps}
                  min={SLEEPS_RANGE[0]}
                  max={SLEEPS_RANGE[1]}
                  onChange={(v) => setField("sleeps", v)}
                />
                <NumberStepper
                  label="Bedrooms"
                  value={filters.bedrooms}
                  min={BEDROOMS_RANGE[0]}
                  max={BEDROOMS_RANGE[1]}
                  onChange={(v) => setField("bedrooms", v)}
                />
                <NumberStepper
                  label="Bathrooms"
                  value={filters.bathrooms}
                  min={BATHROOMS_RANGE[0]}
                  max={BATHROOMS_RANGE[1]}
                  onChange={(v) => setField("bathrooms", v)}
                />
              </div>
            </FilterSection>
          </div>

          <div
            style={{
              borderTop: "1px solid #e5e0da",
              marginTop: 32,
              paddingTop: 32,
            }}
          >
            <FilterSection title="Price per week">
              <RangeSlider
                min={PRICE_MIN}
                max={PRICE_MAX}
                step={PRICE_STEP}
                valueMin={filters.priceMin}
                valueMax={filters.priceMax}
                onChange={(lo, hi) => onChange({ ...filters, priceMin: lo, priceMax: hi })}
                formatValue={formatPrice}
              />
            </FilterSection>
          </div>

          <div
            style={{
              borderTop: "1px solid #e5e0da",
              marginTop: 32,
              paddingTop: 32,
              paddingBottom: 32,
            }}
          >
            <FilterSection title="Features">
              <div
                className="grid grid-cols-1 sm:grid-cols-2"
                style={{ gap: 12 }}
              >
                {FEATURE_KEYS.map((f) => (
                  <FeaturePill
                    key={f}
                    label={f}
                    active={filters.features.includes(f)}
                    onToggle={() => toggleFeature(f)}
                  />
                ))}
              </div>
            </FilterSection>
          </div>
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
            className="md:!h-auto"
            style={{
              background: "transparent",
              border: "none",
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
              color: "#ffffff",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: 3,
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

      {/* Custom scrollbar */}
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
