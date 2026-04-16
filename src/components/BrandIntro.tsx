const BrandIntro = () => (
  <section className="bg-white" style={{ paddingTop: "6vw", paddingBottom: "4vw" }}>
    <div className="mx-auto text-center" style={{ maxWidth: 780, padding: "0 2.5vw" }}>
      <h1
        className="text-sandy-gold"
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "clamp(36px, 3.5vw, 52px)",
          fontWeight: 300,
          letterSpacing: 1,
          lineHeight: 1.2,
          marginBottom: 32,
        }}
      >
        Luxury Holiday Cottages in Cornwall
      </h1>
      <p className="text-left" style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "#3a3a3a" }}>
        <span
          style={{
            float: "left",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 72,
            lineHeight: 0.75,
            color: "#d3a36e",
            paddingRight: 12,
            paddingTop: 6,
          }}
        >
          S
        </span>
        earching for the perfect self-catering{" "}
        <strong style={{ fontWeight: 500 }}>holiday cottage in Cornwall</strong>? Discover our Pure Cornwall
        collection in special corners of the coast, including{" "}
        <strong style={{ fontWeight: 500 }}>Padstow, St Ives, Bude and Newquay</strong>. From apartments with{" "}
        <strong style={{ fontWeight: 500 }}>sea views</strong> and{" "}
        <strong style={{ fontWeight: 500 }}>beach retreats</strong>, to cottages with{" "}
        <strong style={{ fontWeight: 500 }}>hot tubs</strong> and{" "}
        <strong style={{ fontWeight: 500 }}>dog-friendly properties</strong>, we've the ultimate Cornwall
        escape for you.
      </p>

      {/* Decorative gold line */}
      <div className="flex justify-center my-6">
        <div style={{ width: 80, height: 1, backgroundColor: "#d3a36e" }} />
      </div>

      <p style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "#3a3a3a" }}>
        With a friendly, dedicated team based on Cornish soils, we're passionate about making your holiday
        one to remember and our indispensable{" "}
        <strong style={{ fontWeight: 500 }}>Cornwall Guide</strong> is here to maximise your stay.
      </p>

      {/* Editorial sign-off */}
      <p
        className="mt-8"
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: 16,
          color: "#d3a36e",
        }}
      >
        Welcome to Cornwall, beautifully curated.
      </p>
    </div>
  </section>
);

export default BrandIntro;
