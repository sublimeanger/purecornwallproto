interface DestinationEditorialProps {
  name: string;
  paragraphs: string[];
  pullQuote: string;
}

// Tiny inline-bold renderer for **keyword** spans (SEO emphasis)
const renderInline = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return (
        <strong key={i} style={{ fontWeight: 500, color: "#2f5550" }}>
          {p.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{p}</span>;
  });
};

const DestinationEditorial = ({ name, paragraphs, pullQuote }: DestinationEditorialProps) => {
  const half = Math.ceil(paragraphs.length / 2);
  const col1 = paragraphs.slice(0, half);
  const col2 = paragraphs.slice(half);

  return (
    <section style={{ background: "#f7f5f2", padding: "6vw 0" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          paddingLeft: "2.5vw",
          paddingRight: "2.5vw",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(24px, 2.2vw, 32px)",
              fontWeight: 500,
              color: "#2f5550",
              letterSpacing: 3,
              textTransform: "uppercase",
              margin: 0,
              textAlign: "left",
            }}
          >
            Why {name}
          </h2>
          <div
            style={{
              width: 200,
              height: 2,
              backgroundColor: "#d3a36e",
              marginTop: 25,
            }}
          />
        </div>

        {/* Pull quote — floated right on desktop, only if provided */}
        {pullQuote && (
          <div
            className="md:float-right md:ml-10 md:mb-6"
            style={{
              maxWidth: 480,
              marginTop: 40,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 80,
                height: 1,
                background: "#d3a36e",
                marginBottom: 20,
              }}
            />
            <blockquote
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: 28,
                color: "#2f5550",
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              {pullQuote}
            </blockquote>
          </div>
        )}

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ columnGap: 60, rowGap: 0, marginTop: 40 }}
        >
          <div>
            {col1.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: "#3a3a3a",
                  marginBottom: 20,
                }}
              >
                {renderInline(p)}
              </p>
            ))}
          </div>
          <div>
            {col2.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: "#3a3a3a",
                  marginBottom: 20,
                }}
              >
                {renderInline(p)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationEditorial;
