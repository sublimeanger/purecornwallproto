import type { JournalArticle, JournalCategoryKey } from "@/data/journalData";
import { CATEGORY_LABELS } from "@/data/journalData";

interface JournalRelatedArticlesProps {
  currentSlug: string;
  currentCategory: JournalCategoryKey;
  allArticles: JournalArticle[];
}

const RelatedCard = ({ a }: { a: JournalArticle }) => (
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

const JournalRelatedArticles = ({
  currentSlug,
  currentCategory,
  allArticles,
}: JournalRelatedArticlesProps) => {
  const sameCat = allArticles.filter(
    (a) => a.category === currentCategory && a.slug !== currentSlug,
  );
  const others = allArticles.filter(
    (a) => a.category !== currentCategory && a.slug !== currentSlug,
  );
  const related = [...sameCat, ...others].slice(0, 3);

  if (related.length === 0) return null;

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
            }}
          >
            More from this category
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(32px, 3vw, 44px)",
              color: "#2f5550",
              marginTop: 12,
            }}
          >
            Related Reading
          </h2>
          <span
            aria-hidden="true"
            style={{
              display: "block",
              width: 200,
              height: 2,
              background: "#d3a36e",
              margin: "25px auto 0 auto",
            }}
          />
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 28 }}
        >
          {related.map((a) => (
            <RelatedCard key={a.slug} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalRelatedArticles;
