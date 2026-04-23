export interface FounderStorySubsection {
  heading: string;
  paragraphs: string[];
}

interface FounderStoryProps {
  subsections: FounderStorySubsection[];
}

const renderInlineBold = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} style={{ fontWeight: 500, color: "#2f5550" }}>
          {part.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

const FounderStory = ({ subsections }: FounderStoryProps) => (
  <section style={{ background: "#ffffff", padding: "8vw 0" }}>
    <div className="pc-container">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
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
          OUR STORY
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
          BUILT IN CORNWALL, FOR CORNWALL
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

      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {subsections.map((sub, i) => (
          <div key={i} style={{ marginTop: i === 0 ? 0 : 56 }}>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(28px, 2.2vw, 36px)",
                color: "#2f5550",
                margin: 0,
                marginBottom: 28,
                lineHeight: 1.2,
                textAlign: "left",
              }}
            >
              {sub.heading}
            </h3>
            {sub.paragraphs.map((p, j) => (
              <p
                key={j}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 17,
                  fontWeight: 400,
                  color: "#3a3a3a",
                  lineHeight: 1.75,
                  margin: 0,
                  marginBottom: j < sub.paragraphs.length - 1 ? 20 : 0,
                }}
              >
                {renderInlineBold(p)}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FounderStory;
