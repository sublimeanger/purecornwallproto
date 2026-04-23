import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "An absolutely stunning property in the most magical location. Pure Cornwall made everything seamless from booking to checkout. We'll be back every summer.",
    name: "Sarah & James Mitchell",
    property: "Treleigh, St Ives",
    since: "Guests since 2026",
  },
  {
    quote: "The cottage exceeded all our expectations. Every detail had been thought of, and the views were simply breathtaking. A truly luxurious experience.",
    name: "The Henderson Family",
    property: "Harbour View, Falmouth",
    since: "Guests since 2026",
  },
  {
    quote: "From the moment we arrived, we knew this was going to be a special holiday. The cottage was immaculate and the local recommendations were spot on.",
    name: "David & Claire Townsend",
    property: "Driftwood Cottage, Padstow",
    since: "Guests since 2026",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const t = testimonials[active];
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ backgroundColor: "#6fb6ae", paddingTop: "4vw", paddingBottom: "4vw" }}>
      <div className="pc-container text-center">
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: 3,
            textTransform: "uppercase",
            margin: 0,
            marginBottom: 14,
          }}
        >
          Guest Stories
        </p>

        <h2
          className="text-white"
          style={{
            fontSize: "clamp(20px, 1.6vw, 24px)",
            fontWeight: 400,
            letterSpacing: 3,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          What Our Guests Say
        </h2>

        <div
          style={{
            width: 60,
            height: 1,
            backgroundColor: "#d3a36e",
            margin: "18px auto 0",
          }}
        />

        <div
          ref={ref}
          className="mt-10 max-w-[680px] mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 600ms ease-out, transform 600ms ease-out",
          }}
        >
          <div className="flex justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-sandy-gold fill-sandy-gold" />
            ))}
          </div>

          <p
            key={active}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(17px, 1.4vw, 21px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.6,
              color: "#ffffff",
              margin: 0,
              animation: "fadeIn 500ms ease-out",
            }}
          >
            "{t.quote}"
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              marginTop: 28,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: 2.5,
                fontWeight: 500,
              }}
            >
              {t.name}
            </span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>·</span>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: 13,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {t.property}
            </span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>·</span>
            <span
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: 2.5,
              }}
            >
              {t.since}
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 24 : 6,
                height: 6,
                borderRadius: 3,
                background: i === active ? "#d3a36e" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                transition: "all 300ms ease",
                padding: 0,
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
