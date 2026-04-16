import stives from "@/assets/dest-stives.jpg";
import padstow from "@/assets/dest-padstow.jpg";
import falmouth from "@/assets/dest-falmouth.jpg";
import newquay from "@/assets/dest-newquay.jpg";

const destinations = [
  { img: stives, name: "St Ives", count: 43 },
  { img: padstow, name: "Padstow", count: 31 },
  { img: falmouth, name: "Falmouth", count: 27 },
  { img: newquay, name: "Newquay", count: 38 },
];

const Destinations = () => (
  <section className="pc-section">
    <div className="pc-container">
      <div className="text-center mb-[2.5vw]">
        <h2 className="text-brand-dark" style={{ fontSize: "clamp(32px, 3vw, 42px)" }}>
          Explore Cornwall
        </h2>
        <div className="gold-bar gold-bar--center" />
        <p className="text-brand-muted mt-6 max-w-[600px] mx-auto">
          From the artistic harbour towns of the north coast to the subtropical gardens of the south, discover Cornwall's diverse coastal areas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-[2.5vw]">
        {destinations.map((d) => (
          <a
            key={d.name}
            href="#"
            className="dest-card relative block cursor-pointer"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src={d.img}
              alt={d.name}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
              <h3
                className="text-white text-[28px] font-normal"
                style={{ letterSpacing: "3px", textTransform: "uppercase", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
              >
                {d.name}
              </h3>
              <p
                className="text-white/80 text-sm mt-2"
                style={{ textTransform: "uppercase", letterSpacing: "3px" }}
              >
                {d.count} cottages
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Destinations;
