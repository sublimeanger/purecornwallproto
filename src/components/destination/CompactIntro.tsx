// Reused across destination + collection pages
interface CompactIntroProps {
  text: string;
}

const CompactIntro = ({ text }: CompactIntroProps) => (
  <section style={{ background: "#ffffff", padding: "4vw 0", borderTop: "2px solid #6fb6ae" }}>
    <div className="pc-container">
      <p
        style={{
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
          fontFamily: "var(--font-body)",
          fontSize: 17,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#3a3a3a",
        }}
      >
        {text}
      </p>
    </div>
  </section>
);

export default CompactIntro;
