import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "An absolutely stunning property in the most magical location. Pure Cornwall made everything seamless from booking to checkout. We'll be back every summer.",
    name: "Sarah & James Mitchell",
    property: "Treleigh, St Ives",
  },
  {
    quote: "The cottage exceeded all our expectations. Every detail had been thought of, and the views were simply breathtaking. A truly luxurious experience.",
    name: "The Henderson Family",
    property: "Harbour View, Falmouth",
  },
  {
    quote: "From the moment we arrived, we knew this was going to be a special holiday. The cottage was immaculate and the local recommendations were spot on.",
    name: "David & Claire Townsend",
    property: "Driftwood Cottage, Padstow",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="pc-section bg-brand-dark">
      <div className="pc-container text-center">
        <h2 className="text-white" style={{ fontSize: "clamp(32px, 3vw, 42px)" }}>
          What Our Guests Say
        </h2>
        <div className="gold-bar gold-bar--center" />

        <div className="mt-12 max-w-[720px] mx-auto">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-sandy-gold fill-sandy-gold" />
            ))}
          </div>
          <p className="text-white text-2xl font-light italic leading-relaxed">
            "{t.quote}"
          </p>
          <p
            className="text-white mt-8 text-sm"
            style={{ textTransform: "uppercase", letterSpacing: "3px" }}
          >
            {t.name}
          </p>
          <p className="text-white/50 text-sm mt-2">{t.property}</p>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full border-2 border-sandy-gold transition-colors ${
                i === active ? "bg-sandy-gold" : "bg-transparent"
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
