import dogs from "@/assets/coll-dogs.jpg";
import seaviews from "@/assets/coll-seaviews.jpg";
import hottubs from "@/assets/coll-hottubs.jpg";
import family from "@/assets/coll-family.jpg";

const collections = [
  { img: dogs, name: "Dog Friendly", desc: "Bring your four-legged friend on holiday with cottages that welcome dogs" },
  { img: seaviews, name: "Sea Views", desc: "Wake up to the sound of waves and stunning panoramic ocean views" },
  { img: hottubs, name: "Hot Tubs & Pools", desc: "Relax under the stars in your own private hot tub or heated pool" },
  { img: family, name: "Family Friendly", desc: "Spacious homes with gardens, games rooms and everything families need" },
];

const Collections = () => (
  <section className="pc-section bg-brand-light">
    <div className="pc-container">
      <div className="text-center mb-[2.5vw]">
        <h2 className="text-brand-dark" style={{ fontSize: "clamp(32px, 3vw, 42px)" }}>
          Curated For You
        </h2>
        <div className="gold-bar gold-bar--center" />
        <p className="text-brand-muted mt-6 max-w-[600px] mx-auto">
          Browse our handpicked collections to find the perfect cottage for your kind of holiday
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-[2.5vw]">
        {collections.map((c) => (
          <div key={c.name} className="group">
            <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="text-brand-dark text-xl font-normal mt-5">{c.name}</h3>
            <p className="text-brand-muted text-sm mt-2 leading-relaxed">{c.desc}</p>
            <button className="btn-flat mt-4 text-xs">Browse</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Collections;
