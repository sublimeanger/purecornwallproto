import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import TownsSearchBar from "./TownsSearchBar";
import TownsAtoZStrip from "./TownsAtoZStrip";

export interface HubTown {
  slug: string;
  name: string;
  region: "west" | "north" | "south";
  image: string;
  cottageCount: number;
  fromPrice: number;
  isPriority: boolean;
}

interface TownsDirectoryProps {
  towns: HubTown[];
}

const TownsDirectory = ({ towns }: TownsDirectoryProps) => {
  const [query, setQuery] = useState("");

  const sorted = useMemo(
    () => [...towns].sort((a, b) => a.name.localeCompare(b.name)),
    [towns],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sorted;
    return sorted.filter((t) => t.name.toLowerCase().includes(q));
  }, [sorted, query]);

  const availableLetters = useMemo(() => {
    const set = new Set<string>();
    filtered.forEach((t) => set.add(t.name[0].toUpperCase()));
    return Array.from(set);
  }, [filtered]);

  // Map of letter -> first slug, used to attach scroll-target id
  const firstSlugForLetter = useMemo(() => {
    const map: Record<string, string> = {};
    filtered.forEach((t) => {
      const letter = t.name[0].toUpperCase();
      if (!(letter in map)) map[letter] = t.slug;
    });
    return map;
  }, [filtered]);

  const isSearching = query.trim().length > 0;

  return (
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
            All 56 towns
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
            Browse all destinations
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
            All 56 Cornish towns we cover. Our handful of top destinations are starred.
          </p>
        </div>

        {/* Search */}
        <div style={{ marginBottom: 32 }}>
          <TownsSearchBar value={query} onChange={setQuery} />
        </div>

        {/* A-Z strip */}
        <div
          style={{
            marginBottom: 48,
            opacity: isSearching ? 0.5 : 1,
            pointerEvents: isSearching ? "none" : "auto",
            transition: "opacity 200ms ease",
          }}
        >
          <TownsAtoZStrip availableLetters={availableLetters} />
        </div>

        {/* Grid or empty state */}
        {filtered.length === 0 ? (
          <div
            style={{
              padding: "80px 0",
              textAlign: "center",
              fontFamily: "var(--font-body)",
              fontSize: 17,
              fontWeight: 400,
              color: "#7a7a7a",
            }}
          >
            No towns match "{query}". Try browsing by region above.
          </div>
        ) : (
          <div
            className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
            style={{ gap: 16 }}
          >
            {filtered.map((t) => {
              const letter = t.name[0].toUpperCase();
              const isFirstOfLetter = firstSlugForLetter[letter] === t.slug;
              return (
                <a
                  key={t.slug}
                  id={isFirstOfLetter ? `town-${letter}` : undefined}
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
                    style={{
                      position: "relative",
                      width: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 250ms ease",
                      }}
                      className="group-hover:scale-[1.02]"
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
                        <Star
                          size={20}
                          color="#d3a36e"
                          fill="#d3a36e"
                          strokeWidth={1.5}
                        />
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
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 11,
                        fontWeight: 500,
                        color: "#6fb6ae",
                        letterSpacing: 3,
                        textTransform: "uppercase",
                        marginTop: 6,
                        marginBottom: 0,
                      }}
                    >
                      {t.cottageCount} Cottages · From £{t.fromPrice}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default TownsDirectory;
