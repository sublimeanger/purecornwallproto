import type { MockCottage } from "@/components/filters/types";

interface HandpickedCottagesProps {
  cottages: MockCottage[];
  totalCottages: number;
}

const HandpickedCottages = ({
  cottages,
  totalCottages,
}: HandpickedCottagesProps) => (
  <section
    style={{
      background: "#f7f5f2",
      padding: "6vw 0",
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
          Handpicked by us
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
          Our selection of Cornish cottages
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
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.5,
          }}
        >
          Twelve cottages from our {totalCottages}-cottage collection that
          showcase the range — from clifftop romantic retreats to large family
          homes.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{ gap: 20 }}
      >
        {cottages.map((c) => (
          <a
            key={c.id}
            href={`/cottages/${c.id}`}
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#ffffff",
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
            <div style={{ padding: 18 }}>
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
                {c.location}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: "clamp(20px, 1.4vw, 22px)",
                  color: "#2f5550",
                  margin: 0,
                  marginTop: 6,
                  lineHeight: 1.2,
                }}
              >
                {c.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  fontWeight: 500,
                  color: "#7a7a7a",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  marginTop: 6,
                  marginBottom: 0,
                }}
              >
                {c.sleeps} Sleeps · {c.bedrooms} Bed · {c.bathrooms} Bath
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#d3a36e",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginTop: 10,
                  marginBottom: 0,
                }}
              >
                From £{c.pricePerWeek.toLocaleString()}/week
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: 56 }}>
        <a
          href="/cottages"
          style={{
            display: "inline-block",
            padding: "16px 42px",
            border: "1px solid #d3a36e",
            color: "#d3a36e",
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: 3,
            textTransform: "uppercase",
            textDecoration: "none",
            background: "transparent",
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
          See all {totalCottages} cottages →
        </a>
      </div>
    </div>
  </section>
);

export default HandpickedCottages;
