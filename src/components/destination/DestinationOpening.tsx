interface DestinationOpeningProps {
  eyebrow: string;
  paragraphs: string[];
}

const DestinationOpening = ({ eyebrow, paragraphs }: DestinationOpeningProps) => (
  <section style={{ background: "#ffffff", padding: "6vw 0" }}>
    <div className="pc-container">
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 500,
            color: "#d3a36e",
            letterSpacing: 3,
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          {eyebrow}
        </p>

        {paragraphs.map((p, i) => {
          if (i === 0) {
            const first = p.charAt(0);
            const rest = p.slice(1);
            return (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 17,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: "#3a3a3a",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 400,
                    fontSize: 84,
                    color: "#d3a36e",
                    float: "left",
                    lineHeight: 0.9,
                    marginRight: 12,
                    marginTop: 6,
                  }}
                >
                  {first}
                </span>
                {rest}
              </p>
            );
          }
          return (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                fontWeight: 400,
                lineHeight: 1.75,
                color: "#3a3a3a",
                marginBottom: 20,
              }}
            >
              {p}
            </p>
          );
        })}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: 200,
              height: 2,
              backgroundColor: "#d3a36e",
              marginTop: 32,
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default DestinationOpening;
