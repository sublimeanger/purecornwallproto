export type CollectionChipKey = "all" | "features" | "character" | "seasonal" | "activity";

interface CollectionFilterChipsProps {
  active: CollectionChipKey;
  onChange: (next: CollectionChipKey) => void;
}

const CHIPS: { key: CollectionChipKey; label: string }[] = [
  { key: "all", label: "ALL" },
  { key: "features", label: "FEATURES" },
  { key: "character", label: "CHARACTER" },
  { key: "seasonal", label: "SEASONAL" },
  { key: "activity", label: "ACTIVITY" },
];

const CollectionFilterChips = ({ active, onChange }: CollectionFilterChipsProps) => {
  return (
    <section style={{ background: "#ffffff", padding: "3vw 0 1vw 0" }}>
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          paddingLeft: "2.5vw",
          paddingRight: "2.5vw",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 500,
            color: "#6fb6ae",
            letterSpacing: 3,
            textTransform: "uppercase",
            margin: 0,
            marginBottom: 20,
          }}
        >
          Browse by
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {CHIPS.map((chip) => {
            const isActive = chip.key === active;
            return (
              <button
                key={chip.key}
                type="button"
                onClick={() => onChange(chip.key)}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "#f7f5f2";
                    e.currentTarget.style.borderColor = "#d3a36e";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.borderColor = "#e5e0da";
                  }
                }}
                style={{
                  padding: "12px 24px",
                  background: isActive ? "#d3a36e" : "#ffffff",
                  color: isActive ? "#ffffff" : "#2f5550",
                  border: `1px solid ${isActive ? "#d3a36e" : "#e5e0da"}`,
                  borderRadius: 0,
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition:
                    "background 200ms ease, color 200ms ease, border-color 200ms ease",
                }}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionFilterChips;
