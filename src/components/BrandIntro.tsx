const BrandIntro = () => (
  <section className="bg-white" style={{ paddingTop: "6vw", paddingBottom: "4vw" }}>
    <div className="mx-auto text-center" style={{ maxWidth: 780, padding: "0 2.5vw" }}>
      <h1
        className="text-sandy-gold"
        style={{ fontSize: "clamp(32px, 2.8vw, 40px)", fontWeight: 400, letterSpacing: 1, lineHeight: 1.2, marginBottom: 32 }}
      >
        Luxury Holiday Cottages in Cornwall
      </h1>
      <p style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "#3a3a3a" }}>
        Searching for the perfect self-catering{" "}
        <strong style={{ fontWeight: 500 }}>holiday cottage in Cornwall</strong>? Discover our Pure Cornwall
        collection in special corners of the coast, including{" "}
        <strong style={{ fontWeight: 500 }}>Padstow, St Ives, Bude and Newquay</strong>. From apartments with{" "}
        <strong style={{ fontWeight: 500 }}>sea views</strong> and{" "}
        <strong style={{ fontWeight: 500 }}>beach retreats</strong>, to cottages with{" "}
        <strong style={{ fontWeight: 500 }}>hot tubs</strong> and{" "}
        <strong style={{ fontWeight: 500 }}>dog-friendly properties</strong>, we've the ultimate Cornwall
        escape for you.
      </p>
      <p className="mt-4" style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "#3a3a3a" }}>
        With a friendly, dedicated team based on Cornish soils, we're passionate about making your holiday
        one to remember and our indispensable{" "}
        <strong style={{ fontWeight: 500 }}>Cornwall Guide</strong> is here to maximise your stay.
      </p>
    </div>
  </section>
);

export default BrandIntro;
