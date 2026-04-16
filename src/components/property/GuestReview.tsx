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
        <div className="flex flex-col" style={{ paddingLeft: "clamp(0px, 2vw, 40px)" }}>
          {/* Decorative quote mark */}
          <span style={{ fontSize: 72, lineHeight: 1, color: "#d3a36e", fontFamily: "Georgia, serif" }}>"</span>
          <h3
            style={{
              fontSize: "clamp(20px, 1.8vw, 24px)",
              fontWeight: 400,
              color: "#3a3a3a",
              lineHeight: 1.4,
              marginTop: -16,
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
              fontSize: 15,
              fontStyle: "italic",
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
