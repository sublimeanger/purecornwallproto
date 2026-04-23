import type { JournalArticle } from "@/data/journalData";
import { CATEGORY_LABELS } from "@/data/journalData";

interface JournalHeroFeatureProps {
  hero: JournalArticle;
  companions: JournalArticle[]; // exactly 2
}

const HeroCard = ({ a }: { a: JournalArticle }) => (
  <a
    href={`/journal/${a.slug}`}
    style={{
      display: "flex",
      flexDirection: "column",
      borderTop: "2px solid #6fb6ae",
      background: "#ffffff",
      textDecoration: "none",
      color: "inherit",
      height: "100%",
    }}
    className="group"
  >
    <div style={{ overflow: "hidden" }} className="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5]">
      <img
        src={a.cardImage}
        alt={a.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 350ms ease",
        }}
        className="group-hover:scale-[1.02]"
      />
    </div>
    <div style={{ padding: 28, display: "flex", flexDirection: "column", flex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span aria-hidden="true" style={{ display: "inline-block", width: 2, height: 14, background: "#d3a36e" }} />
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
          Featured Journal
        </span>
      </div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          fontWeight: 500,
          color: "#6fb6ae",
          letterSpacing: 3,
          textTransform: "uppercase",
          margin: 0,
          marginTop: 14,
        }}
      >
        {CATEGORY_LABELS[a.category].toUpperCase()}
      </p>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          fontSize: "clamp(32px, 2.6vw, 44px)",
          color: "#2f5550",
          marginTop: 12,
          lineHeight: 1.15,
        }}
      >
        {a.title}
      </h2>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          color: "#3a3a3a",
          lineHeight: 1.6,
          marginTop: 14,
          maxWidth: 580,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {a.excerpt}
      </p>
      <div style={{ marginTop: "auto", paddingTop: 20 }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 500,
            color: "#7a7a7a",
            letterSpacing: 3,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          {a.readingTime} MIN READ · {a.publishDate}
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            fontWeight: 500,
            color: "#d3a36e",
            letterSpacing: 2,
            textTransform: "uppercase",
            margin: 0,
            marginTop: 10,
          }}
        >
          Read Article →
        </p>
      </div>
    </div>
  </a>
);

const CompanionCard = ({ a }: { a: JournalArticle }) => (
  <a
    href={`/journal/${a.slug}`}
    style={{
      display: "flex",
      flexDirection: "column",
      borderTop: "2px solid #6fb6ae",
      background: "#ffffff",
      textDecoration: "none",
      color: "inherit",
      flex: 1,
    }}
    className="group"
  >
    <div className="aspect-[4/3]" style={{ overflow: "hidden" }}>
      <img
        src={a.cardImage}
        alt={a.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 350ms ease",
        }}
        className="group-hover:scale-[1.02]"
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
        {CATEGORY_LABELS[a.category].toUpperCase()}
      </p>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          fontSize: "clamp(22px, 1.6vw, 26px)",
          color: "#2f5550",
          marginTop: 8,
          lineHeight: 1.2,
        }}
      >
        {a.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          color: "#3a3a3a",
          lineHeight: 1.5,
          marginTop: 8,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {a.excerpt}
      </p>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 10,
          fontWeight: 500,
          color: "#7a7a7a",
          letterSpacing: 3,
          textTransform: "uppercase",
          marginTop: 12,
          marginBottom: 0,
        }}
      >
        {a.readingTime} MIN READ · {a.publishDate}
      </p>
    </div>
  </a>
);

const JournalHeroFeature = ({ hero, companions }: JournalHeroFeatureProps) => (
  <section
    style={{
      background: "#ffffff",
      padding: "2vw 0 4vw 0",
      borderTop: "2px solid #6fb6ae",
    }}
  >
    <div className="pc-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr]" style={{ gap: 24, alignItems: "stretch" }}>
        <div className="md:col-span-2 lg:col-span-1">
          <HeroCard a={hero} />
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col md:col-span-2 lg:col-span-1" style={{ gap: 24 }}>
          {companions.map((c) => (
            <div key={c.slug} className="flex-1">
              <CompanionCard a={c} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default JournalHeroFeature;
