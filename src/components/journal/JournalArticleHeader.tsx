import type { JournalArticle } from "@/data/journalData";
import { CATEGORY_LABELS } from "@/data/journalData";

interface JournalArticleHeaderProps {
  article: JournalArticle;
}

const JournalArticleHeader = ({ article }: JournalArticleHeaderProps) => (
  <section
    aria-label={`${article.title} hero`}
    style={{
      position: "relative",
      width: "100%",
      backgroundImage: `url(${article.heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#ffffff",
      overflow: "hidden",
    }}
    className="min-h-[50vh] md:min-h-[65vh] flex items-end"
  >
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.75) 100%)",
        zIndex: 1,
      }}
    />
    <div
      style={{
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        padding: "0 24px",
        paddingBottom: "11vh",
        maxWidth: 880,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          fontWeight: 500,
          color: "#ffffff",
          letterSpacing: 4,
          textTransform: "uppercase",
          margin: 0,
          textShadow: "0 1px 3px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        {CATEGORY_LABELS[article.category].toUpperCase()}
      </p>
      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          fontSize: "clamp(40px, 5vw, 72px)",
          color: "#ffffff",
          lineHeight: 1.1,
          marginTop: 16,
          textShadow: "0 2px 20px rgba(0,0,0,0.6)",
        }}
      >
        {article.title}
      </h1>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 12,
          fontWeight: 500,
          color: "rgba(255,255,255,0.9)",
          letterSpacing: 3,
          textTransform: "uppercase",
          marginTop: 20,
        }}
      >
        {article.readingTime} MIN READ · {article.publishDate} · BY REBECCA MOORE
      </p>
    </div>
  </section>
);

export default JournalArticleHeader;
