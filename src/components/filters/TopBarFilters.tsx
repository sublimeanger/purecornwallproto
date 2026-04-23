import {
  TopBarCollection,
  TOP_BAR_FEATURE_COLLECTIONS,
  TOP_BAR_OCCASION_COLLECTIONS,
  TOP_BAR_COLLECTION_LABELS,
} from "./types";

interface TopBarFiltersProps {
  active: TopBarCollection | null;
  onChange: (next: TopBarCollection | null) => void;
}

const Pill = ({
  slug,
  active,
  onClick,
}: {
  slug: TopBarCollection;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    style={{
      padding: "10px 18px",
      background: active ? "#2f5550" : "#ffffff",
      color: active ? "#ffffff" : "#2f5550",
      border: `1px solid ${active ? "#2f5550" : "#e5e0da"}`,
      borderRadius: 0,
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 3,
      textTransform: "uppercase",
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "background 200ms, color 200ms, border-color 200ms",
    }}
    onMouseEnter={(e) => {
      if (!active) {
        e.currentTarget.style.background = "#f7f5f2";
        e.currentTarget.style.borderColor = "#2f5550";
      }
    }}
    onMouseLeave={(e) => {
      if (!active) {
        e.currentTarget.style.background = "#ffffff";
        e.currentTarget.style.borderColor = "#e5e0da";
      }
    }}
  >
    {TOP_BAR_COLLECTION_LABELS[slug]}
  </button>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p
    style={{
      fontFamily: "var(--font-body)",
      fontSize: 10,
      fontWeight: 500,
      color: "#6fb6ae",
      letterSpacing: 3,
      textTransform: "uppercase",
      margin: 0,
      marginBottom: 10,
    }}
  >
    {children}
  </p>
);

const Cluster = ({
  eyebrow,
  slugs,
  active,
  onChange,
}: {
  eyebrow: string;
  slugs: readonly TopBarCollection[];
  active: TopBarCollection | null;
  onChange: (next: TopBarCollection | null) => void;
}) => (
  <div style={{ minWidth: 0, flex: "0 1 auto" }}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <div
      className="tbf-pill-row"
      style={{
        display: "flex",
        flexWrap: "nowrap",
        gap: 6,
        overflowX: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {slugs.map((slug) => (
        <Pill
          key={slug}
          slug={slug}
          active={active === slug}
          onClick={() => onChange(active === slug ? null : slug)}
        />
      ))}
    </div>
  </div>
);

const TopBarFilters = ({ active, onChange }: TopBarFiltersProps) => {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "16px 0",
        borderBottom: "1px solid #e5e0da",
        fontFamily: "var(--font-body)",
      }}
    >
      <div className="pc-container">
        {/* Stacked clusters on all screen sizes — prevents overflow clipping */}
        <div className="flex flex-col" style={{ gap: 20 }}>
          <Cluster
            eyebrow="By Feature"
            slugs={TOP_BAR_FEATURE_COLLECTIONS}
            active={active}
            onChange={onChange}
          />
          <Cluster
            eyebrow="By Occasion"
            slugs={TOP_BAR_OCCASION_COLLECTIONS}
            active={active}
            onChange={onChange}
          />
        </div>
      </div>
      <style>{`
        .tbf-pill-row::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default TopBarFilters;
