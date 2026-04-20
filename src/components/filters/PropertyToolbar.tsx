import { useState, useRef, useEffect } from "react";
import { LayoutGrid, Map, ChevronDown } from "lucide-react";

export type SortKey = "featured" | "price-asc" | "price-desc" | "bedrooms" | "name";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price (low to high)" },
  { key: "price-desc", label: "Price (high to low)" },
  { key: "bedrooms", label: "Bedrooms" },
  { key: "name", label: "Name A–Z" },
];

interface PropertyToolbarProps {
  totalCount: number;
  filteredCount: number;
  activeFilterCount: number;
  sort: SortKey;
  onSortChange: (s: SortKey) => void;
  onOpenFilter: () => void;
}

const PropertyToolbar = ({
  totalCount,
  filteredCount,
  activeFilterCount,
  sort,
  onSortChange,
  onOpenFilter,
}: PropertyToolbarProps) => {
  const [sortOpen, setSortOpen] = useState(false);
  const [mapTooltip, setMapTooltip] = useState(false);
  const [view] = useState<"grid">("grid");
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };
    if (sortOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [sortOpen]);

  const filterActive = activeFilterCount > 0;
  const countText = filterActive
    ? `${filteredCount.toLocaleString()} of ${totalCount.toLocaleString()} cottages`
    : `${totalCount.toLocaleString()} cottages`;

  const sortLabel = SORT_OPTIONS.find((o) => o.key === sort)?.label ?? "Featured";

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 500,
    color: "#d3a36e",
    letterSpacing: 3,
    textTransform: "uppercase",
    fontFamily: "var(--font-body)",
  };

  const valueStyle: React.CSSProperties = {
    fontSize: 15,
    fontWeight: 400,
    color: "#3a3a3a",
    fontFamily: "var(--font-body)",
  };

  return (
    <div
      style={{
        background: "#f7f5f2",
        borderBottom: "1px solid #e5e0da",
        fontFamily: "var(--font-body)",
      }}
    >
      <div className="pc-container">
        {/* Desktop */}
        <div
          className="hidden md:flex items-center justify-between"
          style={{ height: 80 }}
        >
          <div style={valueStyle}>{countText}</div>

          <div className="flex items-stretch" style={{ height: 48 }}>
            {/* VIEW toggle */}
            <div className="flex items-center" style={{ paddingRight: 24, gap: 16 }}>
              <span style={labelStyle}>View</span>
              <button
                type="button"
                aria-label="Grid view"
                aria-pressed={view === "grid"}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#d3a36e",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LayoutGrid size={20} fill="#d3a36e" strokeWidth={1.5} />
              </button>
              <div
                style={{ position: "relative" }}
                onMouseEnter={() => setMapTooltip(true)}
                onMouseLeave={() => setMapTooltip(false)}
              >
                <button
                  type="button"
                  aria-label="Map view (coming soon)"
                  disabled
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "not-allowed",
                    color: "#7a7a7a",
                    opacity: 0.5,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Map size={20} strokeWidth={1.5} />
                </button>
                {mapTooltip && (
                  <div
                    role="tooltip"
                    style={{
                      position: "absolute",
                      top: "100%",
                      right: 0,
                      marginTop: 6,
                      background: "#2f5550",
                      color: "#ffffff",
                      padding: "6px 10px",
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      zIndex: 30,
                    }}
                  >
                    Map view coming soon
                  </div>
                )}
              </div>
            </div>

            <div style={{ width: 1, background: "#e5e0da" }} />

            {/* SORT BY */}
            <div ref={sortRef} className="relative flex items-center" style={{ padding: "0 24px" }}>
              <button
                type="button"
                onClick={() => setSortOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={sortOpen}
                className="flex items-center"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  gap: 12,
                  padding: 0,
                }}
              >
                <div className="flex flex-col items-start">
                  <span style={labelStyle}>Sort by</span>
                  <span style={valueStyle}>{sortLabel}</span>
                </div>
                <ChevronDown
                  size={16}
                  style={{
                    color: "#d3a36e",
                    transform: sortOpen ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 200ms ease",
                  }}
                />
              </button>
              {sortOpen && (
                <ul
                  role="listbox"
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    marginTop: 4,
                    background: "#ffffff",
                    border: "1px solid #e5e0da",
                    boxShadow: "0 10px 30px rgba(47,85,80,0.12)",
                    minWidth: 220,
                    listStyle: "none",
                    padding: "8px 0",
                    margin: 0,
                    zIndex: 30,
                  }}
                >
                  {SORT_OPTIONS.map((opt) => (
                    <li key={opt.key}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={sort === opt.key}
                        onClick={() => {
                          onSortChange(opt.key);
                          setSortOpen(false);
                        }}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "10px 16px",
                          background: sort === opt.key ? "#f7f5f2" : "transparent",
                          border: "none",
                          cursor: "pointer",
                          fontSize: 15,
                          color: "#3a3a3a",
                          fontFamily: "var(--font-body)",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#f7f5f2")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = sort === opt.key ? "#f7f5f2" : "transparent")}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div style={{ width: 1, background: "#e5e0da" }} />

            {/* FILTER */}
            <div className="flex items-center" style={{ paddingLeft: 24, gap: 10 }}>
              <button
                type="button"
                onClick={onOpenFilter}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: "2px solid #d3a36e",
                  borderRadius: 0,
                  color: "#d3a36e",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body)",
                  cursor: "pointer",
                  padding: "8px 4px",
                }}
              >
                Filter
              </button>
              {filterActive && (
                <span
                  aria-label={`${activeFilterCount} active filters`}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#d3a36e",
                    color: "#ffffff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {activeFilterCount}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col" style={{ padding: "16px 0", gap: 12 }}>
          <div style={valueStyle}>{countText}</div>
          <div ref={sortRef} className="relative grid grid-cols-2" style={{ gap: 12 }}>
            <button
              type="button"
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center justify-center"
              style={{
                height: 48,
                border: "1px solid #e5e0da",
                background: "#ffffff",
                cursor: "pointer",
                gap: 6,
                fontSize: 14,
                fontWeight: 500,
                color: "#3a3a3a",
                letterSpacing: 2,
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
              }}
            >
              Sort
              <ChevronDown size={14} style={{ color: "#d3a36e" }} />
            </button>
            <button
              type="button"
              onClick={onOpenFilter}
              className="flex items-center justify-center"
              style={{
                height: 48,
                border: "1px solid #d3a36e",
                background: "#ffffff",
                cursor: "pointer",
                gap: 8,
                fontSize: 14,
                fontWeight: 500,
                color: "#d3a36e",
                letterSpacing: 2,
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
              }}
            >
              Filter
              {filterActive && (
                <span
                  style={{
                    minWidth: 22,
                    height: 22,
                    padding: "0 6px",
                    borderRadius: 11,
                    background: "#d3a36e",
                    color: "#ffffff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                  }}
                >
                  {activeFilterCount}
                </span>
              )}
            </button>
            {sortOpen && (
              <ul
                role="listbox"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  marginTop: 4,
                  background: "#ffffff",
                  border: "1px solid #e5e0da",
                  boxShadow: "0 10px 30px rgba(47,85,80,0.12)",
                  listStyle: "none",
                  padding: "8px 0",
                  margin: 0,
                  zIndex: 30,
                }}
              >
                {SORT_OPTIONS.map((opt) => (
                  <li key={opt.key}>
                    <button
                      type="button"
                      onClick={() => {
                        onSortChange(opt.key);
                        setSortOpen(false);
                      }}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "12px 16px",
                        background: sort === opt.key ? "#f7f5f2" : "transparent",
                        border: "none",
                        cursor: "pointer",
                        fontSize: 15,
                        color: "#3a3a3a",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyToolbar;
