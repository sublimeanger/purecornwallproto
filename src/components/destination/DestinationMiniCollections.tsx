import { DestinationMiniCollection, MiniCollectionCottage } from "@/data/stIvesData";

interface DestinationMiniCollectionsProps {
  collections: DestinationMiniCollection[];
}

const PreviewCard = ({ c }: { c: MiniCollectionCottage }) => (
  <div style={{ background: "#ffffff", display: "flex", flexDirection: "column", height: "100%" }}>
    <div style={{ aspectRatio: "5/4", overflow: "hidden" }}>
      <img
        src={c.image}
        alt={c.name}
        loading="lazy"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
    <div style={{ padding: "16px 4px", flex: 1, display: "flex", flexDirection: "column" }}>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          fontWeight: 500,
          color: "#6fb6ae",
          letterSpacing: 3,
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        {c.location}
      </p>
      <h4
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          fontSize: 22,
          color: "#2f5550",
          margin: 0,
          marginBottom: 8,
        }}
      >
        {c.name}
      </h4>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#7a7a7a", margin: 0, marginBottom: 8 }}>
        Sleeps {c.sleeps} · {c.bedrooms} bed · {c.bathrooms} bath
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#3a3a3a", margin: 0 }}>
        From <span style={{ color: "#d3a36e", fontWeight: 500 }}>£{c.pricePerWeek.toLocaleString()}</span> / week
      </p>
    </div>
  </div>
);

const DestinationMiniCollections = ({ collections }: DestinationMiniCollectionsProps) => (
  <section style={{ background: "#ffffff", paddingBottom: "4vw" }}>
    <div className="pc-container">
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {collections.map((col) => (
          <div
            key={col.slug}
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: 24, alignItems: "stretch" }}
          >
            {/* Editorial card */}
            <div
              style={{
                background: "#f7f5f2",
                padding: 40,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 360,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 10,
                    fontWeight: 500,
                    color: "#6fb6ae",
                    letterSpacing: 3,
                    textTransform: "uppercase",
                  }}
                >
                  A curated group
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 400,
                    fontSize: 28,
                    color: "#2f5550",
                    marginTop: 12,
                    marginBottom: 16,
                    lineHeight: 1.2,
                  }}
                >
                  {col.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#3a3a3a",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {col.description}
                </p>
              </div>
              <a
                href={col.slug}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#6fb6ae",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  marginTop: 24,
                  display: "inline-block",
                  borderBottom: "1px solid transparent",
                  transition: "border-color 200ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#6fb6ae")}
                onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
              >
                View all {col.count} cottages →
              </a>
            </div>

            {/* Cottage previews */}
            {col.cottages.slice(0, 2).map((c) => (
              <PreviewCard key={c.id} c={c} />
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DestinationMiniCollections;
