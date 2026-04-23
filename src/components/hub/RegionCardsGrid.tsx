export interface HubRegionCard {
  slug: string;
  shortName: string;
  fullName: string;
  image: string;
  townCount: number;
  cottageCount: number;
  fromPrice: number;
  descriptor: string;
  thumbnails: string[];
}

interface RegionCardsGridProps {
  regions: HubRegionCard[];
}

const RegionCardsGrid = ({ regions }: RegionCardsGridProps) => (
  <section style={{ background: "#ffffff", padding: "6vw 0" }}>
    <div className="pc-container">
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
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
          Browse by region
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
          Three Cornwalls
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
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: 32 }}
      >
        {regions.map((r) => (
          <a
            key={r.slug}
            href={`/destinations/${r.slug}`}
            className="group"
            style={{
              position: "relative",
              display: "block",
              overflow: "hidden",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              className="aspect-[16/9] md:aspect-[4/5]"
              style={{
                position: "relative",
                width: "100%",
                backgroundImage: `url(${r.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
              }}
            >
              {/* Base vertical gradient — strong at top + bottom */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.8) 100%)",
                }}
              />
              {/* Left-weighted gradient — makes left-aligned content pop */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 100%)",
                }}
              />

              {/* Content left, top + bottom anchored */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "32px 28px",
                  zIndex: 2,
                }}
              >
                <div>
                  {/*
                    Eyebrow on photo: white text for legibility against imagery.
                    Two-layer shadow keeps the letters crisp on any background.
                  */}
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#ffffff",
                      letterSpacing: 4,
                      textTransform: "uppercase",
                      margin: 0,
                      textShadow: "0 1px 3px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)",
                    }}
                  >
                    {r.shortName}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 400,
                      fontSize: "clamp(36px, 4vw, 56px)",
                      lineHeight: 1.1,
                      color: "#ffffff",
                      margin: 0,
                      marginTop: 12,
                      textShadow: "0 2px 16px rgba(0,0,0,0.55)",
                    }}
                  >
                    {r.fullName}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.9)",
                      letterSpacing: 3,
                      textTransform: "uppercase",
                      margin: 0,
                      marginTop: 14,
                      textShadow: "0 2px 14px rgba(0,0,0,0.65)",
                    }}
                  >
                    {r.townCount} Towns · {r.cottageCount} Cottages · From £{r.fromPrice} / week
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.95)",
                      lineHeight: 1.5,
                      marginTop: 16,
                      marginBottom: 0,
                      maxWidth: 280,
                      textShadow: "0 2px 14px rgba(0,0,0,0.65)",
                    }}
                  >
                    {r.descriptor}
                  </p>
                </div>

                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#d3a36e",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    borderBottom: "1px solid #d3a36e",
                    paddingBottom: 2,
                    alignSelf: "flex-start",
                    textShadow: "0 2px 10px rgba(0,0,0,0.65)",
                  }}
                  className="group-hover:border-b-2"
                >
                  Explore {r.fullName} →
                </span>
              </div>

            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default RegionCardsGrid;
