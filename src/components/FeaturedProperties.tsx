import prop1 from "@/assets/property-1.jpg";
import prop2 from "@/assets/property-2.jpg";
import prop3 from "@/assets/property-3.jpg";
import prop4 from "@/assets/property-4.jpg";
import prop5 from "@/assets/property-5.jpg";
import prop6 from "@/assets/property-6.jpg";

const properties = [
  { img: prop1, name: "Treleigh", location: "St Ives", beds: 4, baths: 3, sleeps: 8, price: 1850 },
  { img: prop2, name: "Porthmeor Retreat", location: "Padstow", beds: 3, baths: 2, sleeps: 6, price: 1450 },
  { img: prop3, name: "Harbour View", location: "Falmouth", beds: 5, baths: 4, sleeps: 10, price: 2200 },
  { img: prop4, name: "Atlantic Haven", location: "Newquay", beds: 3, baths: 2, sleeps: 6, price: 1350 },
  { img: prop5, name: "Sea View House", location: "St Ives", beds: 4, baths: 3, sleeps: 8, price: 1950 },
  { img: prop6, name: "Driftwood Cottage", location: "Padstow", beds: 2, baths: 1, sleeps: 4, price: 995 },
];

const FeaturedProperties = () => (
  <section className="pc-section">
    <div className="pc-container">
      <div className="text-center mb-[2.5vw]">
        <h2 className="text-brand-dark" style={{ fontSize: "clamp(32px, 3vw, 42px)" }}>
          Exceptional Cottages
        </h2>
        <div className="gold-bar gold-bar--center" />
        <p className="text-brand-muted mt-6 max-w-[600px] mx-auto">
          Each property in our collection has been personally inspected and chosen for its character, location and quality
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2.5vw]">
        {properties.map((p) => (
          <a key={p.name} href="#" className="property-card block cursor-pointer border-b-2 border-sandy-gold">
            <div className="property-card__img" style={{ aspectRatio: "755/508" }}>
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pt-5 pb-6">
              <h3 className="text-sandy-gold text-[32px] font-normal">{p.name}</h3>
              <p
                className="text-brand-dark text-base mt-1"
                style={{ textTransform: "uppercase", letterSpacing: "3px", fontSize: 16 }}
              >
                {p.location}
              </p>
              <div className="flex gap-6 mt-4">
                {[
                  { label: "Bedrooms", val: p.beds },
                  { label: "Bathrooms", val: p.baths },
                  { label: "Sleeps", val: p.sleeps },
                ].map((s) => (
                  <div key={s.label}>
                    <span
                      className="text-brand-muted text-xs block"
                      style={{ textTransform: "uppercase", letterSpacing: "2px" }}
                    >
                      {s.label}
                    </span>
                    <span className="text-sandy-gold text-lg font-normal">{s.val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className="text-brand-muted text-xs"
                  style={{ textTransform: "uppercase", letterSpacing: "3px" }}
                >
                  From
                </span>
                <span className="text-sandy-gold text-[40px] font-normal leading-none">
                  £{p.price.toLocaleString()}
                </span>
                <span
                  className="text-brand-muted text-xs"
                  style={{ textTransform: "uppercase", letterSpacing: "3px" }}
                >
                  per week
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-[2.5vw]">
        <button className="btn-flat">View All Cottages</button>
      </div>
    </div>
  </section>
);

export default FeaturedProperties;
