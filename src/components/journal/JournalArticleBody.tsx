import type { ArticleBlock } from "@/data/journalData";
import JournalInlineImage from "./JournalInlineImage";
import JournalPullQuote from "./JournalPullQuote";

interface JournalArticleBodyProps {
  blocks: ArticleBlock[];
}

// Render **bold** segments inline; bold = weight 500 + colour #2f5550
const renderInline = (text: string): React.ReactNode => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} style={{ fontWeight: 500, color: "#2f5550" }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

const JournalArticleBody = ({ blocks }: JournalArticleBodyProps) => {
  // Find first paragraph index for drop cap
  const firstParaIdx = blocks.findIndex((b) => b.type === "paragraph");

  return (
    <section style={{ background: "#ffffff", padding: "4vw 0 6vw 0" }}>
      <style>{`
        .journal-first-para::first-letter {
          font-family: var(--font-serif);
          font-size: 4.5em;
          float: left;
          line-height: 0.85;
          padding-right: 10px;
          padding-top: 4px;
          color: #2f5550;
          font-weight: 400;
        }
      `}</style>
      <div className="pc-container">
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {blocks.map((block, i) => {
            if (block.type === "paragraph") {
              return (
                <p
                  key={i}
                  className={i === firstParaIdx ? "journal-first-para" : undefined}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 19,
                    fontWeight: 400,
                    color: "#3a3a3a",
                    lineHeight: 1.75,
                    marginBottom: 24,
                  }}
                >
                  {renderInline(block.text)}
                </p>
              );
            }
            if (block.type === "heading") {
              return (
                <h2
                  key={i}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 400,
                    fontSize: "clamp(28px, 2.2vw, 36px)",
                    color: "#2f5550",
                    marginTop: 56,
                    marginBottom: 24,
                  }}
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "image") {
              // Image breaks out of 680px prose column to container width
              return (
                <div
                  key={i}
                  style={{
                    width: "100vw",
                    maxWidth: 1180,
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                    paddingLeft: "2.5vw",
                    paddingRight: "2.5vw",
                    boxSizing: "border-box",
                  }}
                >
                  <JournalInlineImage src={block.src} caption={block.caption} />
                </div>
              );
            }
            if (block.type === "pullQuote") {
              return <JournalPullQuote key={i} text={block.text} />;
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default JournalArticleBody;
