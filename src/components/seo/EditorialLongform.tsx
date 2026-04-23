interface EditorialSubsection {
  heading: string;
  paragraphs: string[];
}

interface EditorialLongformProps {
  eyebrow: string;
  heading: string;
  subsections: EditorialSubsection[];
}

// Inline **bold** parser — bold spans render weight 500, colour #2f5550
const renderInlineBold = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span
          key={i}
          style={{ fontWeight: 500, color: "#2f5550" }}
        >
          {part.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

const EditorialLongform = ({
  eyebrow,
  heading,
  subsections,
}: EditorialLongformProps) => (
  <section style={{ background: "#ffffff", padding: "8vw 0" }}>
    <div className="pc-container">
      {/* Top heading */}
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
          {eyebrow}
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
          {heading}
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

      {/* Subsections */}
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {subsections.map((sub, i) => (
          <div
            key={i}
            style={{
              marginBottom: i < subsections.length - 1 ? 72 : 0,
            }}
          >
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
                  marginBottom:
                    j < sub.paragraphs.length - 1 ? 20 : 0,
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

export default EditorialLongform;
