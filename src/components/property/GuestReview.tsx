interface GuestReviewProps {
  image: string;
  quote: string;
  body: string;
  attribution: string;
}

const GuestReview = ({ image, quote, body, attribution }: GuestReviewProps) => (
  <section className="bg-white" style={{ paddingTop: "5vw", paddingBottom: "5vw" }}>
    <div className="pc-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div style={{ aspectRatio: "4/3" }}>
          <img src={image} alt="Property view" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col relative" style={{ paddingLeft: "clamp(0px, 2vw, 40px)" }}>
          {/* Large decorative quote mark */}
          <span
            style={{
              position: "absolute",
              top: -20,
              left: 0,
              fontSize: 100,
              lineHeight: 1,
              color: "#d3a36e",
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              opacity: 0.3,
            }}
          >
            "
          </span>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(24px, 2.2vw, 32px)",
              fontWeight: 300,
              color: "#3a3a3a",
              lineHeight: 1.4,
              marginTop: 24,
              marginBottom: 24,
            }}
          >
            {quote}
          </h3>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#3a3a3a" }}>
            {body}
          </p>
          <p
            className="mt-8"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 16,
              color: "#d3a36e",
              textAlign: "center",
            }}
          >
            {attribution}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default GuestReview;
