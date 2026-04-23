import type { MockCottage } from "@/components/filters/types";

interface CottagesGridProps {
  cottages: MockCottage[];
}

const CottageCard = ({ c }: { c: MockCottage }) => (
  <a
    href={`/properties/${c.id}`}
    style={{
      display: "block",
      textDecoration: "none",
      color: "inherit",
    }}
    className="cg-card"
  >
    <div
      style={{
        aspectRatio: "4/3",
        overflow: "hidden",
        background: "#f7f5f2",
      }}
    >
      <img
        src={c.image}
        alt={c.name}
        loading="lazy"
        className="cg-img"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 250ms ease",
        }}
      />
    </div>
    <div style={{ padding: "16px 0" }}>
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
          marginTop: 6,
          marginBottom: 0,
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
          marginTop: 8,
          marginBottom: 0,
        }}
      >
        From £{c.pricePerWeek.toLocaleString()}/Week
      </p>
    </div>
  </a>
);

const CottagesGrid = ({ cottages }: CottagesGridProps) => (
  <section
    id="cottages-grid-top"
    style={{
      background: "#ffffff",
      padding: "3vw 0 6vw 0",
    }}
  >
    <div className="pc-container">
      <div
        className="cg-grid"
        style={{
          display: "grid",
          gap: 20,
        }}
      >
        {cottages.map((c) => (
          <CottageCard key={c.id} c={c} />
        ))}
      </div>
    </div>
    <style>{`
      .cg-grid { grid-template-columns: repeat(2, 1fr); }
      @media (min-width: 768px) {
        .cg-grid { grid-template-columns: repeat(3, 1fr); }
      }
      @media (min-width: 1200px) {
        .cg-grid { grid-template-columns: repeat(4, 1fr); }
      }
      .cg-card:hover .cg-img {
        transform: scale(1.02);
      }
    `}</style>
  </section>
);

export default CottagesGrid;
