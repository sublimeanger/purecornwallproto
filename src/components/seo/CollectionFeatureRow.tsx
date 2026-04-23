import type { CollectionHubCard } from "@/components/hub/CollectionsGrid";

interface CollectionFeatureRowProps {
  collections: CollectionHubCard[];
}

const CollectionFeatureRow = ({ collections }: CollectionFeatureRowProps) => (
  <section style={{ background: "#ffffff", padding: "6vw 0" }}>
    <div className="pc-container">
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 500,
            color: "#6fb6ae",
            letterSpacing: 3,
            textTransform: "uppercase",
            margin: 0,
            marginBottom: 18,
          }}
        >
          Browse by feature
        </p>
        <h2
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(24px, 2.2vw, 32px)",
            fontWeight: 500,
            color: "#2f5550",
            letterSpacing: 3,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Shop our cottages by what matters
        </h2>
        <div
          style={{
            width: 200,
            height: 2,
            backgroundColor: "#d3a36e",
            marginTop: 25,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 17,
            fontWeight: 400,
            color: "#7a7a7a",
            marginTop: 20,
            marginBottom: 0,
            maxWidth: 640,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.5,
          }}
        >
          Six features that shape how Cornish holidays feel. Filter by the one
          that matters most to yours.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ gap: 20 }}
      >
        {collections.map((c) => (
          <a
            key={c.slug}
            href={`/collections/${c.slug}`}
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#ffffff",
              borderTop: "2px solid #6fb6ae",
              textDecoration: "none",
              color: "inherit",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "4 / 3",
                overflow: "hidden",
                background: "#e5e0da",
              }}
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 250ms ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
            <div
              style={{
                padding: 20,
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  fontWeight: 500,
                  color: "#6fb6ae",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                FEATURE
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: "clamp(22px, 1.6vw, 26px)",
                  color: "#2f5550",
                  marginTop: 8,
                  marginBottom: 0,
                  lineHeight: 1.2,
                }}
              >
                {c.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#3a3a3a",
                  lineHeight: 1.5,
                  marginTop: 10,
                  marginBottom: 0,
                }}
              >
                {c.descriptor}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#6fb6ae",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  marginTop: 16,
                  marginBottom: 0,
                }}
              >
                {c.cottageCount} Cottages · From £{c.fromPrice}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default CollectionFeatureRow;
