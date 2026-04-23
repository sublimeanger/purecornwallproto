import { Star } from "lucide-react";

export interface ReviewCard {
  quote: string;
  guestName: string;
  context: string;
  stars: number;
}

interface ReviewCardsProps {
  reviews: ReviewCard[];
}

const ReviewCards = ({ reviews }: ReviewCardsProps) => (
  <section style={{ background: "#f7f5f2", padding: "6vw 0" }}>
    <div className="pc-container">
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
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
          What our guests say
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
          Five-star reviews, real Cornwall memories
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

      {/* Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: 24 }}
      >
        {reviews.map((r, i) => (
          <article
            key={i}
            style={{
              background: "#ffffff",
              padding: 32,
              borderTop: "2px solid #6fb6ae",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 4,
                marginBottom: 20,
              }}
              aria-label={`${r.stars} stars`}
            >
              {Array.from({ length: r.stars }).map((_, j) => (
                <Star
                  key={j}
                  size={16}
                  fill="#d3a36e"
                  color="#d3a36e"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                fontWeight: 400,
                color: "#3a3a3a",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {r.quote}
            </p>
            <div
              style={{
                width: 40,
                height: 1,
                background: "#d3a36e",
                margin: "24px 0",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 500,
                color: "#2f5550",
                margin: 0,
              }}
            >
              {r.guestName}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 400,
                color: "#7a7a7a",
                marginTop: 4,
                marginBottom: 0,
              }}
            >
              {r.context}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewCards;
