import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { DestinationFAQ as FAQItem } from "@/data/stIvesData";

interface DestinationFAQProps {
  faqs: FAQItem[];
}

const DestinationFAQ = ({ faqs }: DestinationFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ background: "#f7f5f2", padding: "6vw 0" }}>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          paddingLeft: "2.5vw",
          paddingRight: "2.5vw",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 48 }}>
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
        </div>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, background: "#ffffff" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <li
                key={i}
                style={{
                  borderBottom: "1px solid #e5e0da",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    minHeight: 72,
                    background: "transparent",
                    border: "none",
                    borderRadius: 0,
                    padding: "20px 24px 20px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "var(--font-body)",
                    fontSize: 17,
                    fontWeight: 400,
                    color: "#3a3a3a",
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: "#d3a36e",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 200ms ease",
                      flexShrink: 0,
                      marginLeft: 16,
                    }}
                  />
                </button>
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? 600 : 0,
                    transition: "max-height 500ms ease",
                    background: "#fafaf8",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "#3a3a3a",
                      lineHeight: 1.7,
                      padding: "24px 24px 32px 0",
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default DestinationFAQ;
