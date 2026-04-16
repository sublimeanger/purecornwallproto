import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "An absolutely stunning property in the most magical location. Pure Cornwall made everything seamless from booking to checkout. We'll be back every summer.",
    name: "Sarah & James Mitchell",
    property: "Treleigh, St Ives",
    since: "Guests since 2023",
  },
  {
    quote: "The cottage exceeded all our expectations. Every detail had been thought of, and the views were simply breathtaking. A truly luxurious experience.",
    name: "The Henderson Family",
    property: "Harbour View, Falmouth",
    since: "Guests since 2024",
  },
  {
    quote: "From the moment we arrived, we knew this was going to be a special holiday. The cottage was immaculate and the local recommendations were spot on.",
    name: "David & Claire Townsend",
    property: "Driftwood Cottage, Padstow",
    since: "Guests since 2023",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section style={{ backgroundColor: "#6fb6ae", paddingTop: "7vw", paddingBottom: "7vw" }}>
      <div className="pc-container text-center">
        <h2 className="text-white" style={{ fontSize: "clamp(32px, 3vw, 42px)" }}>
          What Our Guests Say
        </h2>
        <div className="gold-bar gold-bar--center" />

        <div className="mt-14 max-w-[720px] mx-auto">
          {/* Decorative quote mark — larger */}
          <div className="flex justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.7 }}>
              <path d="M14 40C14 35.6 15.4 31.8 18.2 28.6C21.1 25.4 24.9 23.2 29.6 22L31 25.4C27.5 26.5 24.9 28.2 23.2 30.6C21.5 33 20.7 35.5 20.7 38.2H28V48H14V40ZM38 40C38 35.6 39.4 31.8 42.2 28.6C45.1 25.4 48.9 23.2 53.6 22L55 25.4C51.5 26.5 48.9 28.2 47.2 30.6C45.5 33 44.7 35.5 44.7 38.2H52V48H38V40Z" fill="#d3a36e"/>
            </svg>
          </div>

          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="text-sandy-gold fill-sandy-gold" />
            ))}
          </div>
          <p className="text-white italic leading-relaxed" style={{ fontSize: "clamp(24px, 2.2vw, 28px)", fontWeight: 300, lineHeight: 1.6, textShadow: "0 1px 2px rgba(47,85,80,0.15)" }}>
            "{t.quote}"
          </p>
          <p
            className="text-white mt-12 text-sm"
            style={{ textTransform: "uppercase", letterSpacing: "3px" }}
          >
            {t.name}
          </p>
          <p className="text-white/85 text-sm mt-2">{t.property}</p>
          <p className="text-white/70 mt-2" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3 }}>
            {t.since}
          </p>
        </div>

        <div className="flex justify-center gap-3 mt-14">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full border-2 transition-colors ${
                i === active ? "bg-sandy-gold border-sandy-gold" : "bg-transparent border-white"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
