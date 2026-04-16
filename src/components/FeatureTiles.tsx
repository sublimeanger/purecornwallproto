import coll1 from "@/assets/coll-seaviews.jpg";
import coll2 from "@/assets/coll-hottubs.jpg";
import coll3 from "@/assets/dest-falmouth.jpg";

const tiles = [
  { img: coll1, title: "Cornwall Beach Retreats", subtitle: "Coastal cottages for let" },
  { img: coll2, title: "Cottages with Pools", subtitle: "Dive into stunning pool homes" },
  { img: coll3, title: "The Great Cornwall Guide", subtitle: "The essential guide for visiting Cornwall" },
];

const FeatureTiles = () => (
  <section className="grid grid-cols-1 md:grid-cols-3">
    {tiles.map((t) => (
      <a
        key={t.title}
        href="#"
        className="relative block group overflow-hidden cursor-pointer"
        style={{ aspectRatio: "4/3" }}
      >
        <img
          src={t.img}
          alt={t.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <h3
            className="text-white text-[clamp(20px,1.8vw,28px)] font-normal group-hover:border-b-2 group-hover:border-sandy-gold pb-1 transition-all duration-300"
          >
            {t.title}
          </h3>
          <p className="text-white/70 text-sm mt-2">{t.subtitle}</p>
        </div>
      </a>
    ))}
  </section>
);

export default FeatureTiles;
