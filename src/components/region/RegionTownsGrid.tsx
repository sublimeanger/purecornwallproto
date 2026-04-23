import { Star } from "lucide-react";
import type { RegionTown } from "@/data/westCornwallData";

interface RegionTownsGridProps {
  regionName: string;
  towns: RegionTown[];
}

const RegionTownsGrid = ({ regionName, towns }: RegionTownsGridProps) => {
  const sorted = [...towns].sort((a, b) => {
    if (a.isPriority !== b.isPriority) return a.isPriority ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <section
      style={{
        background: "#f7f5f2",
        padding: "6vw 0",
        borderTop: "2px solid #6fb6ae",
      }}
    >
      <div className="pc-container">
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
            {towns.length} Towns in {regionName}
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
            Where to stay in {regionName}
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

        <div
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
          style={{ gap: 20 }}
        >
          {sorted.map((t) => (
            <a
              key={t.slug}
              href={`/destinations/${t.slug}`}
              className="group"
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
                background: "#ffffff",
              }}
            >
              <div
                className="aspect-[4/3]"
                style={{ position: "relative", width: "100%", overflow: "hidden" }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="group-hover:scale-[1.02]"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 250ms ease",
                  }}
                />
                {t.isPriority && (
                  <div
                    aria-label="Priority destination"
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      width: 28,
                      height: 28,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      filter: "drop-shadow(0 1px 2px rgba(255,255,255,0.6))",
                    }}
                  >
                    <Star size={20} color="#d3a36e" fill="#d3a36e" strokeWidth={1.5} />
                  </div>
                )}
              </div>
              <div style={{ padding: "14px 0" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 400,
                    fontSize: "clamp(20px, 1.4vw, 22px)",
                    color: "#2f5550",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {t.name}
                </h3>
                {t.oneLineDescriptor && (
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      fontWeight: 400,
                      color: "#3a3a3a",
                      margin: 0,
                      marginTop: 6,
                      lineHeight: 1.5,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {t.oneLineDescriptor}
                  </p>
                )}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#6fb6ae",
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    marginTop: 8,
                    marginBottom: 0,
                  }}
                >
                  {t.cottageCount} Cottages · From £{t.fromPrice}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionTownsGrid;
