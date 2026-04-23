interface CottagesEmptyStateProps {
  onClearAll: () => void;
}

const CottagesEmptyState = ({ onClearAll }: CottagesEmptyStateProps) => (
  <section style={{ background: "#ffffff", padding: "10vw 0" }}>
    <div className="pc-container" style={{ textAlign: "center" }}>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          fontSize: "clamp(28px, 2.4vw, 36px)",
          color: "#2f5550",
          margin: 0,
        }}
      >
        No cottages match these filters
      </h2>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 17,
          fontWeight: 400,
          color: "#7a7a7a",
          marginTop: 16,
          maxWidth: 480,
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.6,
        }}
      >
        Try removing a filter or two, or browse our full selection — 119 Cornish cottages across three regions.
      </p>
      <button
        type="button"
        onClick={onClearAll}
        style={{
          marginTop: 32,
          padding: "14px 40px",
          background: "transparent",
          border: "1px solid #d3a36e",
          borderRadius: 0,
          color: "#d3a36e",
          fontFamily: "var(--font-body)",
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: 3,
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "background 200ms ease, color 200ms ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#d3a36e";
          e.currentTarget.style.color = "#ffffff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#d3a36e";
        }}
      >
        Clear All Filters →
      </button>
    </div>
  </section>
);

export default CottagesEmptyState;
