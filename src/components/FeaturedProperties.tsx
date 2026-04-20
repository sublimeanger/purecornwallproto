import prop1 from "@/assets/property-1.jpg";
import prop2 from "@/assets/property-2.jpg";
import prop3 from "@/assets/property-3.jpg";
import prop4 from "@/assets/property-4.jpg";
import prop5 from "@/assets/property-5.jpg";
import prop6 from "@/assets/property-6.jpg";
import { Bed, Bath, Users, Car, Dog, Sparkles } from "lucide-react";
import PropertyImageCarousel from "./PropertyImageCarousel";
import { useEffect, useRef, useState } from "react";

const properties = [
  { images: [prop1, prop3, prop5, prop2], name: "Treleigh", location: "Carbis Bay", beds: 4, baths: 3, sleeps: 8, price: 1850, parking: true, pets: true, feature: "Sea View", tagline: "A stunning clifftop retreat with panoramic sea views across St Ives Bay", highlights: ["Private garden", "Wood burner", "Minutes from beach"] },
  { images: [prop2, prop4, prop6, prop1], name: "Porthmeor Retreat", location: "Padstow", beds: 3, baths: 2, sleeps: 6, price: 1450, parking: true, pets: false, feature: "Hot Tub", tagline: "Contemporary coastal living with a luxury hot tub and harbour views", highlights: ["Open-plan kitchen", "Walk to town"] },
  { images: [prop3, prop1, prop5, prop6], name: "Harbour View", location: "Falmouth", beds: 5, baths: 4, sleeps: 10, price: 2200, parking: true, pets: true, feature: "Garden", tagline: "A grand family home overlooking Falmouth's working harbour", highlights: ["Games room", "Sea views"] },
  { images: [prop4, prop2, prop3, prop5], name: "Atlantic Haven", location: "Newquay", beds: 3, baths: 2, sleeps: 6, price: 1350, parking: false, pets: true, feature: "Pool", tagline: "Surf-side living with a heated pool and direct beach access", highlights: ["Surf storage", "Beach access"] },
  { images: [prop5, prop6, prop1, prop4], name: "Sea View House", location: "St Ives", beds: 4, baths: 3, sleeps: 8, price: 1950, parking: true, pets: false, feature: "Panoramic Views", tagline: "Elegant interiors and sweeping views from Porthminster to Godrevy", highlights: ["Designer kitchen", "Balcony", "Coastal path"] },
  { images: [prop6, prop3, prop2, prop4], name: "Driftwood Cottage", location: "Padstow", beds: 2, baths: 1, sleeps: 4, price: 995, parking: true, pets: true, feature: "Beachfront", tagline: "A charming beachfront bolthole for couples and small families", highlights: ["Log burner", "Cosy interiors"] },
];

const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 500ms ease-out ${delay}ms, transform 500ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const FeaturedProperties = () => (
  <section style={{ paddingTop: "6vw", paddingBottom: "6vw" }}>
    <div className="pc-container">
      <div className="text-center mb-[3vw]">
        <h2
          className="text-brand-dark"
          style={{ fontSize: "clamp(28px, 2.5vw, 36px)", textTransform: "uppercase", letterSpacing: "3px" }}
        >
          Showcased &amp; Latest Properties
        </h2>
        <div className="gold-bar gold-bar--center" />

        {/* Editorial lead-in */}
        <p
          className="mx-auto"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 20,
            fontWeight: 400,
            color: "#3a3a3a",
            lineHeight: 1.6,
            maxWidth: 680,
            marginTop: 24,
            marginBottom: 80,
          }}
        >
          A selection from our curated collection — each property chosen for its setting, its character, and the particular Cornish story it tells. From clifftop retreats to harbour cottages, these are the places our guests return to.
        </p>
      </div>

      <div className="flex flex-col">
        {properties.map((p, i) => {
          const imgLeft = i % 2 === 0;
          const pairIndex = Math.floor(i / 2);
          const bgColor = pairIndex % 2 === 0 ? "#f7f5f2" : "#ffffff";
          return (
            <div
              key={p.name}
              className={`flex flex-col ${imgLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
              style={{ backgroundColor: bgColor, paddingTop: i === 0 ? 0 : 40, paddingBottom: 40 }}
            >
              {/* Image */}
              <div className="w-full md:w-[60%] overflow-hidden">
                <AnimatedCard>
                  <PropertyImageCarousel images={p.images} alt={p.name} aspectRatio="5/4" />
                </AnimatedCard>
              </div>

              {/* Detail */}
              <div
                className="w-full md:w-[40%] flex items-center"
                style={{ padding: 48 }}
              >
                <AnimatedCard delay={200}>
                  <div className="flex flex-col w-full" style={{ gap: 20 }}>
                    <div className="flex items-baseline justify-between">
                      <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, fontWeight: 500, color: "#6fb6ae" }}>
                        {p.location}
                      </p>
                      <div className="text-right flex items-baseline gap-1">
                        <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 2, color: "#7a7a7a" }}>From</span>
                        <span style={{ fontSize: "clamp(22px, 1.8vw, 28px)", fontWeight: 400, color: "#d3a36e" }}>£{p.price.toLocaleString()}</span>
                        <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 2, color: "#7a7a7a" }}>per week</span>
                      </div>
                    </div>

                    <h3 style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      fontSize: "clamp(28px, 2.5vw, 36px)",
                      fontWeight: 300,
                      lineHeight: 1.2,
                      color: "#d3a36e",
                    }}>
                      {p.name}
                    </h3>

                    <p style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      fontSize: 18,
                      fontWeight: 400,
                      color: "#3a3a3a",
                      lineHeight: 1.5,
                    }}>
                      {p.tagline}
                    </p>

                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <Users size={18} style={{ color: "#6fb6ae" }} />
                        <span style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 2, color: "#3a3a3a" }}>Sleeps {p.sleeps}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed size={18} style={{ color: "#6fb6ae" }} />
                        <span style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 2, color: "#3a3a3a" }}>{p.beds} Bed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath size={18} style={{ color: "#6fb6ae" }} />
                        <span style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 2, color: "#3a3a3a" }}>{p.baths} Bath</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-6">
                      {p.parking && (
                        <div className="flex items-center gap-2">
                          <Car size={16} style={{ color: "#7a7a7a" }} />
                          <span style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2, color: "#7a7a7a" }}>Parking</span>
                        </div>
                      )}
                      {p.pets && (
                        <div className="flex items-center gap-2">
                          <Dog size={16} style={{ color: "#7a7a7a" }} />
                          <span style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2, color: "#7a7a7a" }}>Pet Welcome</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Sparkles size={16} style={{ color: "#7a7a7a" }} />
                        <span style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2, color: "#7a7a7a" }}>{p.feature}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2" style={{ marginBottom: 4 }}>
                      {p.highlights.map((h) => (
                        <span
                          key={h}
                          style={{
                            fontSize: 11,
                            textTransform: "uppercase",
                            letterSpacing: 2,
                            color: "#2f5550",
                            border: "1px solid #e5e0da",
                            padding: "4px 12px",
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="text-right">
                      <button className="btn-flat text-xs">View Property</button>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturedProperties;
