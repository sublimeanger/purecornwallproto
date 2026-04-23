import { CollectionDestinationItem } from "@/data/dogFriendlyData";

interface CollectionDestinationsGridProps {
  items: CollectionDestinationItem[];
  collectionName: string;
  collectionSlug: string;
  filterKey: string;
}

const CollectionDestinationsGrid = ({
  items,
  collectionName,
  filterKey,
}: CollectionDestinationsGridProps) => {
  const visible = items.slice(0, 6);
  if (visible.length < 2) return null;

  return (
    <section
      style={{
        background: "#f7f5f2",
        padding: "6vw 0",
        borderTop: "2px solid #6fb6ae",
      }}
    >
      <div className="pc-container">
        {/* Heading block */}
        <div style={{ textAlign: "center", marginBottom: 14 }}>
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
            Where these cottages are
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
            {collectionName} across Cornwall
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
              fontFamily: "var(--font-serif)",
              fontSize: 17,
              color: "#7a7a7a",
              marginTop: 20,
              marginBottom: 0,
            }}
          >
            The {collectionName.toLowerCase()} cottages we look after, grouped by where they are
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 32, marginTop: 56 }}
        >
          {visible.map((item) => (
            <a
              key={item.slug}
              href={`/destinations/${item.slug}/?filter=${filterKey}`}
              style={{
                position: "relative",
                display: "block",
                width: "100%",
                aspectRatio: "4 / 3",
                overflow: "hidden",
                textDecoration: "none",
              }}
              className="group"
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 250ms ease",
                }}
                className="group-hover:scale-[1.02]"
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.10) 35%, rgba(0,0,0,0.65) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  padding: 24,
                  color: "#ffffff",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "#6fb6ae",
                    margin: 0,
                    marginBottom: 6,
                    textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                  }}
                >
                  {collectionName} in
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 400,
                    fontSize: 28,
                    color: "#ffffff",
                    margin: 0,
                    lineHeight: 1.1,
                    textShadow: "0 1px 12px rgba(0,0,0,0.55)",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.85)",
                    margin: 0,
                    marginTop: 10,
                    textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                  }}
                >
                  {item.count} Cottages · From £{item.fromPrice.toLocaleString()}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* View all link */}
        <div className="flex justify-center" style={{ marginTop: 48 }}>
          <a href="/destinations/" className="btn-flat">
            View all destinations →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectionDestinationsGrid;
