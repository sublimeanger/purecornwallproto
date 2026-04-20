import { useState } from "react";
import { Plus } from "lucide-react";
import { DestinationFAQ as FAQItem } from "@/data/stIvesData";

interface DestinationFAQProps {
  faqs: FAQItem[];
}

const DestinationFAQ = ({ faqs }: DestinationFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ background: "#f7f5f2", padding: "6vw 0" }}>
      <div
        style={{
          maxWidth: 880,
          margin: "0 auto",
          paddingLeft: "2.5vw",
          paddingRight: "2.5vw",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 14 }}>
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
            Good to know
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
            Questions
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
              fontStyle: "italic",
              fontSize: 17,
              color: "#7a7a7a",
              marginTop: 20,
              marginBottom: 0,
            }}
          >
            The things people ask before they book
          </p>
        </div>

        {/* Accordion */}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "48px 0 0",
            background: "#ffffff",
            border: "1px solid #e5e0da",
          }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const isLast = i === faqs.length - 1;
            return (
              <li
                key={i}
                style={{
                  borderBottom: isLast ? "none" : "1px solid #e5e0da",
                  background: isOpen ? "#fafaf8" : "#ffffff",
                  transition: "background 200ms ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    minHeight: 76,
                    background: "transparent",
                    border: "none",
                    borderRadius: 0,
                    padding: "22px 28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 24,
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "var(--font-body)",
                    fontSize: 17,
                    fontWeight: 500,
                    color: "#2f5550",
                    lineHeight: 1.4,
                  }}
                >
                  <span style={{ flex: 1 }}>{faq.q}</span>
                  <span
                    aria-hidden="true"
                    style={{
                      width: 32,
                      height: 32,
                      flexShrink: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #6fb6ae",
                      color: "#6fb6ae",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                      transition: "transform 250ms ease",
                    }}
                  >
                    <Plus size={16} strokeWidth={1.5} />
                  </span>
                </button>
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? 600 : 0,
                    transition: "max-height 450ms ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0 28px 28px 28px",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 1,
                        background: "#d3a36e",
                        marginBottom: 18,
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 15,
                        fontWeight: 400,
                        color: "#3a3a3a",
                        lineHeight: 1.75,
                        margin: 0,
                        maxWidth: 720,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Footer nudge */}
        <p
          style={{
            textAlign: "center",
            fontFamily: "var(--font-body)",
            fontSize: 14,
            color: "#7a7a7a",
            marginTop: 32,
            marginBottom: 0,
          }}
        >
          Still have questions?{" "}
          <a
            href="#"
            style={{
              color: "#6fb6ae",
              textDecoration: "none",
              fontWeight: 500,
              letterSpacing: 1,
              borderBottom: "1px solid #6fb6ae",
              paddingBottom: 1,
            }}
          >
            Talk to us →
          </a>
        </p>
      </div>
    </section>
  );
};

export default DestinationFAQ;
