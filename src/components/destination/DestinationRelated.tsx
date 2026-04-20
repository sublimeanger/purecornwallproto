import { DestinationRelated as DestinationRelatedItem } from "@/data/stIvesData";

interface DestinationRelatedProps {
  items: DestinationRelatedItem[];
}

const DestinationRelated = ({ items }: DestinationRelatedProps) => (
  <section style={{ background: "#ffffff", padding: "5vw 0" }}>
    <div className="pc-container">
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          fontWeight: 500,
          color: "#d3a36e",
          letterSpacing: 3,
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: 32,
        }}
      >
        Nearby
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: 32 }}
      >
        {items.map((it) => (
          <a
            key={it.slug}
            href={it.slug}
            style={{ display: "block", textDecoration: "none", color: "inherit" }}
          >
            <div className="dest-card" style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden" }}>
              <img
                src={it.image}
                alt={it.name}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <h3
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 24,
                  zIndex: 2,
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: 28,
                  color: "#ffffff",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {it.name}
              </h3>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 400,
                color: "#7a7a7a",
                marginTop: 12,
                margin: 0,
                paddingTop: 12,
                lineHeight: 1.5,
              }}
            >
              {it.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default DestinationRelated;
