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

      <div className="flex flex-col" style={{ gap: "5vw" }}>
        {properties.map((p, i) => {
          const imgLeft = i % 2 === 0;
          return (
            <div
              key={p.name}
              className={`flex flex-col ${imgLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-0`}
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

              {/* Detail card — vertically centered stack */}
              <div className="w-full md:w-[40%] bg-brand-light border-b-2 border-sandy-gold flex items-center justify-center p-12">
                <div className="flex flex-col items-center text-center gap-4 w-full">
                  {/* Location */}
                  <p
                    className="text-brand-dark text-xs"
                    style={{ textTransform: "uppercase", letterSpacing: "3px" }}
                  >
                    {p.location}
                  </p>

                  {/* Name */}
                  <h3 className="text-sandy-gold font-normal" style={{ fontSize: "clamp(28px, 2.5vw, 40px)" }}>
                    {p.name}
                  </h3>

                  {/* Price block */}
                  <div className="flex flex-col items-center">
                    <span className="text-brand-muted text-[10px]" style={{ textTransform: "uppercase", letterSpacing: "3px" }}>
                      From
                    </span>
                    <span className="text-sandy-gold font-normal" style={{ fontSize: "clamp(24px, 2vw, 32px)" }}>
                      £{p.price.toLocaleString()}
                    </span>
                    <span className="text-brand-muted text-[10px]" style={{ textTransform: "uppercase", letterSpacing: "3px" }}>
                      Per Week
                    </span>
                  </div>

                  {/* Primary stats */}
                  <div className="flex gap-8 mt-2">
                    <div className="flex items-center gap-2">
                      <Users size={20} className="text-sandy-gold" />
                      <span className="text-brand-dark" style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "2px" }}>
                        Sleeps {p.sleeps}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed size={20} className="text-sandy-gold" />
                      <span className="text-brand-dark" style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "2px" }}>
                        {p.beds} Bed
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath size={20} className="text-sandy-gold" />
                      <span className="text-brand-dark" style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "2px" }}>
                        {p.baths} Bath
                      </span>
                    </div>
                  </div>

                  {/* Feature pills */}
                  <div className="flex flex-wrap justify-center gap-8">
                    {p.parking && (
                      <div className="flex items-center gap-2">
                        <Car size={20} className="text-sandy-gold" />
                        <span className="text-brand-muted" style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "2px" }}>
                          Parking
                        </span>
                      </div>
                    )}
                    {p.pets && (
                      <div className="flex items-center gap-2">
                        <Dog size={20} className="text-sandy-gold" />
                        <span className="text-brand-muted" style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "2px" }}>
                          Pet Welcome
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Sparkles size={20} className="text-sandy-gold" />
                      <span className="text-brand-muted" style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "2px" }}>
                        {p.feature}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-4">
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
