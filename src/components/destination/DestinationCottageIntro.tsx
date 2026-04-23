interface DestinationCottageIntroProps {
  eyebrow: string;
  name: string;
  leadIn: string;
}

const DestinationCottageIntro = ({ eyebrow, name, leadIn }: DestinationCottageIntroProps) => (
  <section style={{ background: "#ffffff", padding: "6vw 0 3vw" }}>
    <div className="pc-container">
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 500,
            color: "#d3a36e",
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 20,
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
          Our cottages in {name}
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
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: 19,
            color: "#3a3a3a",
            maxWidth: 680,
            margin: "24px auto 0",
            lineHeight: 1.55,
          }}
        >
          {leadIn}
        </p>
      </div>
    </div>
  </section>
);

export default DestinationCottageIntro;
