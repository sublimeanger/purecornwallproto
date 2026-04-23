import type { CollectionHubCard } from "@/components/hub/CollectionsGrid";

interface OccasionLinksProps {
  occasions: CollectionHubCard[];
}

const OccasionLinks = ({ occasions }: OccasionLinksProps) => (
  <section
    style={{
      background: "#ffffff",
      padding: "5vw 0",
      borderTop: "2px solid #6fb6ae",
    }}
  >
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
          Planning around a date?
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
          Browse by occasion
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
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-2 lg:grid-cols-3"
        style={{ gap: 16 }}
      >
        {occasions.map((o) => (
          <a
            key={o.slug}
            href={`/collections/${o.slug}`}
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#ffffff",
              borderTop: "2px solid #6fb6ae",
              padding: 20,
              textDecoration: "none",
              color: "inherit",
              transition: "background 200ms ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#f7f5f2")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#ffffff")
            }
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
              Occasion
            </p>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: 20,
                color: "#2f5550",
                margin: 0,
                marginTop: 8,
                lineHeight: 1.2,
              }}
            >
              {o.name}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 400,
                color: "#7a7a7a",
                lineHeight: 1.4,
                marginTop: 6,
                marginBottom: 0,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {o.descriptor}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 500,
                color: "#d3a36e",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginTop: 14,
                marginBottom: 0,
              }}
            >
              Explore →
            </p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default OccasionLinks;
