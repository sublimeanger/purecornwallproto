import SectionHeading from "./SectionHeading";

interface AboutSectionProps {
  paragraphs: string[];
}

const pullQuote = "A private path descends through salt-hardy coastal planting — sea thrift, tamarisk, wild fennel — before the house reveals itself.";

const AboutSection = ({ paragraphs }: AboutSectionProps) => {
  const mid = Math.ceil(paragraphs.length / 2);
  const left = paragraphs.slice(0, mid);
  const right = paragraphs.slice(mid);

  return (
    <section id="about" style={{ paddingTop: "5vw", paddingBottom: "5vw", backgroundColor: "#f7f5f2" }}>
      <div className="pc-container">
        <SectionHeading title="About" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="flex flex-col gap-6">
            {left.map((p, i) => (
              <p key={i} style={{ fontSize: 15, lineHeight: 1.7, color: "#3a3a3a" }}>
                {i === 0 ? (
                  <>
                    <span
                      style={{
                        float: "left",
                        fontFamily: "var(--font-serif)",
                        fontSize: 84,
                        lineHeight: 0.75,
                        color: "#d3a36e",
                        paddingRight: 12,
                        paddingTop: 6,
                      }}
                    >
                      {p.charAt(0)}
                    </span>
                    {p.slice(1)}
                  </>
                ) : p}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {right.map((p, i) => (
              <p key={i} style={{ fontSize: 15, lineHeight: 1.7, color: "#3a3a3a" }}>{p}</p>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <div className="flex items-center gap-6 my-16 max-w-3xl mx-auto">
          <div style={{ flex: "0 0 80px", height: 1, backgroundColor: "#d3a36e" }} />
          <blockquote
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(24px, 2.5vw, 36px)",
              fontWeight: 300,
              color: "#3a3a3a",
              lineHeight: 1.4,
              textAlign: "center",
            }}
          >
            {pullQuote}
          </blockquote>
          <div style={{ flex: "0 0 80px", height: 1, backgroundColor: "#d3a36e" }} />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
