import type { JournalArticleCTA } from "@/data/journalData";

interface JournalContentCTAProps {
  cta: JournalArticleCTA;
}

// EXCEPTION to the dark-teal-only-on-footer rule: this content CTA is
// functionally a secondary navigational band ("footer-like") with a strong
// call-to-action. Documented exception, only used inside JournalPost.
const JournalContentCTA = ({ cta }: JournalContentCTAProps) => (
  <section
    style={{
      background: "#2f5550",
      padding: "5vw 0",
    }}
  >
    <div className="pc-container">
      <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
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
          {cta.eyebrow}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(28px, 2.4vw, 36px)",
            color: "#ffffff",
            marginTop: 16,
            lineHeight: 1.2,
          }}
        >
          {cta.heading}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 17,
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.65,
            marginTop: 16,
            maxWidth: 540,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {cta.body}
        </p>
        <a
          href={cta.buttonHref}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#b88659")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#d3a36e")}
          style={{
            display: "inline-block",
            padding: "14px 40px",
            background: "#d3a36e",
            color: "#ffffff",
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: 2,
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: 0,
            marginTop: 32,
            transition: "background 200ms ease",
          }}
        >
          {cta.buttonText}
        </a>
      </div>
    </div>
  </section>
);

export default JournalContentCTA;
