import { useEffect, useState } from "react";
import { CollectionChipKey } from "./CollectionFilterChips";

export interface CollectionHubCard {
  slug: string;
  name: string;
  group: CollectionChipKey;
  groupLabel: string;
  image: string;
  descriptor: string;
  cottageCount: number;
  fromPrice: number;
}

interface CollectionsGridProps {
  collections: CollectionHubCard[];
  activeFilter: CollectionChipKey;
}

const useColumns = () => {
  const [cols, setCols] = useState(4);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1200) setCols(4);
      else if (w >= 768) setCols(3);
      else setCols(2);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return cols;
};

const CollectionsGrid = ({ collections, activeFilter }: CollectionsGridProps) => {
  const cols = useColumns();
  const visible = (
    activeFilter === "all"
      ? collections
      : collections.filter((c) => c.group === activeFilter)
  )
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section style={{ background: "#f7f5f2", padding: "4vw 0 6vw 0" }}>
      <div className="pc-container">
        {visible.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              fontFamily: "var(--font-body)",
              fontSize: 17,
              fontWeight: 400,
              color: "#7a7a7a",
              padding: "60px 0",
              margin: 0,
            }}
          >
            No collections in this group yet.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              gap: 24,
            }}
          >
            {visible.map((c) => (
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
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
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
                    {c.groupLabel}
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
        )}
      </div>
    </section>
  );
};

export default CollectionsGrid;
