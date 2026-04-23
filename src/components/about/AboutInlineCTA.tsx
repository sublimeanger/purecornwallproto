/*
  Dark teal #2f5550 usage: documented exception to "footer-only" rule.
  This section is functionally a secondary navigational band with primary CTA,
  treated as footer-adjacent. Pattern matches JournalContentCTA.
*/
const AboutInlineCTA = () => (
  <section style={{ background: "#2f5550", padding: "6vw 0" }}>
    <div className="pc-container" style={{ textAlign: "center" }}>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          fontWeight: 500,
          color: "#d3a36e",
          letterSpacing: 3,
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        READY TO TALK?
      </p>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          fontSize: "clamp(28px, 2.4vw, 36px)",
          color: "#ffffff",
          margin: 0,
          marginTop: 16,
          lineHeight: 1.25,
        }}
      >
        Let's plan your Cornwall trip together
      </h2>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 17,
          fontWeight: 400,
          color: "rgba(255,255,255,0.85)",
          lineHeight: 1.65,
          maxWidth: 540,
          margin: "16px auto 0",
        }}
      >
        We're a small team and we answer the phone ourselves. Whether you're booking, asking
        about a cottage, or thinking of listing your own — we'd love to hear from you.
      </p>
      <div
        style={{
          marginTop: 32,
          display: "flex",
          gap: 16,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/contact"
          style={{
            background: "#d3a36e",
            color: "#ffffff",
            padding: "14px 40px",
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            fontSize: 13,
            letterSpacing: 2,
            textTransform: "uppercase",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          GET IN TOUCH →
        </a>
        <a
          href="/cottages"
          style={{
            background: "transparent",
            color: "#ffffff",
            padding: "14px 40px",
            border: "1px solid #ffffff",
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            fontSize: 13,
            letterSpacing: 2,
            textTransform: "uppercase",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          BROWSE COTTAGES →
        </a>
      </div>
    </div>
  </section>
);

export default AboutInlineCTA;
