import type { JournalArticle } from "@/data/journalData";
import { CATEGORY_LABELS } from "@/data/journalData";
import type { JournalChipKey } from "./JournalCategoryChips";

interface JournalGridProps {
  articles: JournalArticle[];
  activeCategory: JournalChipKey;
  excludeSlugs?: string[];
}

// Parse "Month YYYY" to a sortable number
const parseDate = (s: string): number => {
  const [month, year] = s.split(" ");
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const m = months.indexOf(month);
  return Number(year) * 12 + (m >= 0 ? m : 0);
};

const ArticleCard = ({ a }: { a: JournalArticle }) => (
  <a
    href={`/journal/${a.slug}`}
    style={{
      display: "flex",
      flexDirection: "column",
      background: "#ffffff",
      borderTop: "2px solid #6fb6ae",
      textDecoration: "none",
      color: "inherit",
    }}
    className="group"
  >
    <div className="aspect-[3/2]" style={{ overflow: "hidden" }}>
      <img
        src={a.cardImage}
        alt={a.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 250ms ease",
        }}
        className="group-hover:scale-[1.02]"
      />
    </div>
    <div style={{ padding: 20, display: "flex", flexDirection: "column", flex: 1 }}>
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
          marginTop: 10,
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
          marginTop: 14,
          marginBottom: 0,
        }}
      >
        {a.readingTime} MIN READ · {a.publishDate}
      </p>
    </div>
  </a>
);

const JournalGrid = ({ articles, activeCategory, excludeSlugs = [] }: JournalGridProps) => {
  let filtered: JournalArticle[];
  if (activeCategory === "all") {
    filtered = articles.filter((a) => !excludeSlugs.includes(a.slug));
  } else {
    filtered = articles.filter((a) => a.category === activeCategory);
  }
  filtered = [...filtered].sort((a, b) => parseDate(b.publishDate) - parseDate(a.publishDate));

  return (
    <section
      style={{
        background: "#f7f5f2",
        padding: "4vw 0 6vw 0",
        borderTop: "2px solid #6fb6ae",
      }}
    >
      <div className="pc-container">
        {filtered.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "80px 0",
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "#7a7a7a",
            }}
          >
            No articles in this category yet.
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
            style={{ gap: 28 }}
          >
            {filtered.map((a) => (
              <ArticleCard key={a.slug} a={a} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JournalGrid;
