import prop1 from "@/assets/property-1.jpg";
import prop2 from "@/assets/property-2.jpg";
import prop3 from "@/assets/property-3.jpg";
import prop4 from "@/assets/property-4.jpg";
import prop5 from "@/assets/property-5.jpg";
import prop6 from "@/assets/property-6.jpg";
import { Bed, Bath, Users, Car, Dog, Sparkles } from "lucide-react";

const properties = [
  { img: prop1, name: "Treleigh", location: "Carbis Bay", beds: 4, baths: 3, sleeps: 8, price: 1850, parking: true, pets: true, feature: "Sea View" },
  { img: prop2, name: "Porthmeor Retreat", location: "Padstow", beds: 3, baths: 2, sleeps: 6, price: 1450, parking: true, pets: false, feature: "Hot Tub" },
  { img: prop3, name: "Harbour View", location: "Falmouth", beds: 5, baths: 4, sleeps: 10, price: 2200, parking: true, pets: true, feature: "Garden" },
  { img: prop4, name: "Atlantic Haven", location: "Newquay", beds: 3, baths: 2, sleeps: 6, price: 1350, parking: false, pets: true, feature: "Pool" },
  { img: prop5, name: "Sea View House", location: "St Ives", beds: 4, baths: 3, sleeps: 8, price: 1950, parking: true, pets: false, feature: "Panoramic Views" },
  { img: prop6, name: "Driftwood Cottage", location: "Padstow", beds: 2, baths: 1, sleeps: 4, price: 995, parking: true, pets: true, feature: "Beachfront" },
];

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
      </div>

      <div className="flex flex-col">
        {properties.map((p, i) => {
          const imgLeft = i % 2 === 0;
          const pairIndex = Math.floor(i / 2);
          const bgColor = pairIndex % 2 === 0 ? "#ffffff" : "#f7f5f2";
          return (
            <div
              key={p.name}
              className={`flex flex-col ${imgLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
              style={{ paddingTop: i === 0 ? 0 : 40, paddingBottom: 40 }}
            >
              {/* Image */}
              <div className="w-full md:w-[60%] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "5/4" }}
                  loading="lazy"
                />
              </div>

              {/* Detail card — editorial horizontal layout */}
              <div
                className="w-full md:w-[40%] flex items-center"
                style={{ backgroundColor: bgColor, padding: 48 }}
              >
                <div className="flex flex-col gap-4 w-full">
                  {/* Row 1: Location + Price */}
                  <div className="flex items-baseline justify-between">
                    <p
                      className="text-brand-dark"
                      style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, fontWeight: 500 }}
                    >
                      {p.location}
                    </p>
                    <div className="text-right flex items-baseline gap-1">
                      <span className="text-brand-muted" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 2 }}>
                        From
                      </span>
                      <span className="text-sandy-gold" style={{ fontSize: "clamp(22px, 1.8vw, 28px)", fontWeight: 400 }}>
                        £{p.price.toLocaleString()}
                      </span>
                      <span className="text-brand-muted" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 2 }}>
                        per week
                      </span>
                    </div>
                  </div>

                  {/* Row 2: Property name */}
                  <h3
                    className="text-sandy-gold"
                    style={{ fontSize: "clamp(28px, 2.5vw, 36px)", fontWeight: 400, lineHeight: 1.2 }}
                  >
                    {p.name}
                  </h3>

                  {/* Row 3: Primary stats */}
                  <div className="flex gap-6 mt-1">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-sandy-gold" />
                      <span className="text-brand-dark" style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 2 }}>
                        Sleeps {p.sleeps}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed size={18} className="text-sandy-gold" />
                      <span className="text-brand-dark" style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 2 }}>
                        {p.beds} Bed
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath size={18} className="text-sandy-gold" />
                      <span className="text-brand-dark" style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 2 }}>
                        {p.baths} Bath
                      </span>
                    </div>
                  </div>

                  {/* Row 4: Secondary features */}
                  <div className="flex flex-wrap gap-6">
                    {p.parking && (
                      <div className="flex items-center gap-2">
                        <Car size={16} className="text-brand-muted" />
                        <span className="text-brand-muted" style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2 }}>
                          Parking
                        </span>
                      </div>
                    )}
                    {p.pets && (
                      <div className="flex items-center gap-2">
                        <Dog size={16} className="text-brand-muted" />
                        <span className="text-brand-muted" style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2 }}>
                          Pet Welcome
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Sparkles size={16} className="text-brand-muted" />
                      <span className="text-brand-muted" style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2 }}>
                        {p.feature}
                      </span>
                    </div>
                  </div>

                  {/* Row 5: CTA */}
                  <div className="mt-4 text-right">
                    <button className="btn-flat text-xs">View Property</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturedProperties;
