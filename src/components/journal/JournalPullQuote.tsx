interface JournalPullQuoteProps {
  text: string;
}

const JournalPullQuote = ({ text }: JournalPullQuoteProps) => (
  <blockquote
    style={{
      margin: "48px auto",
      maxWidth: 560,
      textAlign: "center",
    }}
  >
    <span
      aria-hidden="true"
      style={{
        display: "block",
        width: 80,
        height: 2,
        background: "#d3a36e",
        margin: "0 auto 24px auto",
      }}
    />
    <p
      style={{
        fontFamily: "var(--font-serif)",
        fontWeight: 400,
        fontSize: "clamp(28px, 2.4vw, 36px)",
        color: "#2f5550",
        lineHeight: 1.35,
        margin: 0,
      }}
    >
      {text}
    </p>
    <span
      aria-hidden="true"
      style={{
        display: "block",
        width: 80,
        height: 2,
        background: "#d3a36e",
        margin: "24px auto 0 auto",
      }}
    />
  </blockquote>
);

export default JournalPullQuote;
