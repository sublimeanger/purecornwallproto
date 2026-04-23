import { useEffect, useState } from "react";
import type { CollectionHubCard } from "./CollectionsGrid";

interface CollectionHeroFeatureProps {
  hero: CollectionHubCard;
  companions: CollectionHubCard[];
}

const useLayout = () => {
  const [mode, setMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1024) setMode("desktop");
      else if (w >= 768) setMode("tablet");
      else setMode("mobile");
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return mode;
};

const HeroCard = ({ c, mode }: { c: CollectionHubCard; mode: "desktop" | "tablet" | "mobile" }) => (
  <a
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
        position: "relative",
        width: "100%",
        aspectRatio:
          mode === "mobile" ? "4 / 3"
          : mode === "tablet" ? "16 / 10"
          : "4 / 5",
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
          display: "block",
          transition: "transform 250ms ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </div>
    <div style={{ padding: 28, display: "flex", flexDirection: "column", flex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <span style={{ display: "inline-block", width: 2, height: 14, background: "#d3a36e" }} />
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 500,
            color: "#d3a36e",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Featured Collection
        </span>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          fontSize: "clamp(32px, 2.6vw, 42px)",
          color: "#2f5550",
          marginTop: 12,
          marginBottom: 0,
          lineHeight: 1.15,
        }}
      >
        {c.name}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          fontWeight: 400,
          color: "#3a3a3a",
          lineHeight: 1.6,
          marginTop: 14,
          marginBottom: 0,
          maxWidth: 560,
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
          marginTop: 20,
          marginBottom: 0,
        }}
      >
        {c.cottageCount} Cottages · From £{c.fromPrice}
      </p>
    </div>
  </a>
);

const CompanionCard = ({ c }: { c: CollectionHubCard }) => (
  <a
    href={`/collections/${c.slug}`}
    style={{
      display: "flex",
      flexDirection: "column",
      background: "#ffffff",
      borderTop: "2px solid #6fb6ae",
      textDecoration: "none",
      color: "inherit",
      overflow: "hidden",
      height: "100%",
    }}
  >
    <div
      style={{
        position: "relative",
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
          display: "block",
          transition: "transform 250ms ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </div>
    <div style={{ padding: 18, display: "flex", flexDirection: "column", flex: 1 }}>
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
          marginTop: 8,
          marginBottom: 0,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
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
          marginTop: "auto",
          paddingTop: 12,
          marginBottom: 0,
        }}
      >
        {c.cottageCount} Cottages · From £{c.fromPrice}
      </p>
    </div>
  </a>
);

const CollectionHeroFeature = ({ hero, companions }: CollectionHeroFeatureProps) => {
  const mode = useLayout();
  const hasCompanions = companions.length === 2;

  let gridStyle: React.CSSProperties;
  if (!hasCompanions) {
    gridStyle = { display: "grid", gridTemplateColumns: "1fr", gap: 24 };
  } else if (mode === "desktop") {
    gridStyle = {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: 24,
      alignItems: "stretch",
    };
  } else if (mode === "tablet") {
    gridStyle = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
    };
  } else {
    gridStyle = { display: "grid", gridTemplateColumns: "1fr", gap: 24 };
  }

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "2vw 0 4vw 0",
        borderTop: "2px solid #6fb6ae",
      }}
    >
      <div className="pc-container">
        <div style={gridStyle}>
          {hasCompanions && mode === "desktop" ? (
            <>
              <HeroCard c={hero} mode={mode} />
              <div style={{ display: "flex", flexDirection: "column", gap: 24, minHeight: 0 }}>
                <div style={{ flex: 1, minHeight: 0 }}>
                  <CompanionCard c={companions[0]} />
                </div>
                <div style={{ flex: 1, minHeight: 0 }}>
                  <CompanionCard c={companions[1]} />
                </div>
              </div>
            </>
          ) : hasCompanions && mode === "tablet" ? (
            <>
              <div style={{ gridColumn: "1 / 3" }}>
                <HeroCard c={hero} mode={mode} />
              </div>
              <CompanionCard c={companions[0]} />
              <CompanionCard c={companions[1]} />
            </>
          ) : hasCompanions ? (
            <>
              <HeroCard c={hero} mode={mode} />
              <CompanionCard c={companions[0]} />
              <CompanionCard c={companions[1]} />
            </>
          ) : (
            <HeroCard c={hero} mode={mode} />
          )}
        </div>
      </div>
    </section>
  );
};

export default CollectionHeroFeature;
