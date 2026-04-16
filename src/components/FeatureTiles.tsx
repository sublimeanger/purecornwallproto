import collPopular from "@/assets/coll-popular.jpg";
import collSeaviews from "@/assets/coll-seaviews.jpg";
import collHottubs from "@/assets/coll-hottubs.jpg";
import collLarge from "@/assets/coll-large.jpg";
import collDogs from "@/assets/coll-dogs.jpg";
import collSurfing from "@/assets/coll-surfing.jpg";
import collBeach from "@/assets/coll-beach.jpg";
import collPools from "@/assets/coll-pools.jpg";
import collGuide from "@/assets/coll-guide.jpg";

const tiles = [
  { img: collPopular, title: "Most Popular", subtitle: "Our portfolio highlights" },
  { img: collSeaviews, title: "Sea View Cottages", subtitle: "Spectacular coastal outlooks" },
  { img: collHottubs, title: "Hot Tub Cottages", subtitle: "Relax in style with a hot tub" },
  { img: collLarge, title: "Large Holiday Cottages", subtitle: "Space for big groups and families" },
  { img: collDogs, title: "Dog Friendly Cottages", subtitle: "Your pet is welcome too" },
  { img: collSurfing, title: "Surfing Escapes", subtitle: "Surf's up with these retreats" },
  { img: collBeach, title: "Cornwall Beach Retreats", subtitle: "Coastal cottages by the sea" },
  { img: collPools, title: "Cottages with Pools", subtitle: "Dive into our swimming pool collection" },
  { img: collGuide, title: "The Great Cornwall Guide", subtitle: "The essential guide for visiting Cornwall", isGuide: true },
];

const FeatureTiles = () => (
  <section className="pc-section bg-white">
    <div className="pc-container">
      {/* Section heading */}
      <div className="text-center mb-[3vw]">
        <h2
          className="text-brand-dark"
          style={{ fontSize: "clamp(20px, 1.6vw, 24px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: 4 }}
        >
          Holiday Collections
        </h2>
        <div className="gold-bar gold-bar--center" />
      </div>

      {/* 3×3 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tiles.map((t) => (
          <a
            key={t.title}
            href="#"
            className="relative block group overflow-hidden cursor-pointer"
            style={{ aspectRatio: "3/2" }}
          >
            <img
              src={t.img}
              alt={t.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              loading="lazy"
              width={960}
              height={640}
            />
            {/* Overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
              style={{
                background: t.isGuide
                  ? "linear-gradient(180deg, rgba(47,85,80,0.4) 0%, rgba(47,85,80,0.85) 100%)"
                  : "linear-gradient(180deg, rgba(47,85,80,0.3) 0%, rgba(47,85,80,0.7) 100%)",
              }}
            />
            {/* Text */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-[20%] px-4 text-center">
              <h3
                className="text-white"
                style={{ fontSize: "clamp(14px, 1.2vw, 18px)", textTransform: "uppercase", letterSpacing: 3, fontWeight: 500 }}
              >
                {t.title}
              </h3>
              <p className="text-white/95 mt-2" style={{ fontSize: "clamp(12px, 1vw, 14px)", fontWeight: 400 }}>
                {t.subtitle}
              </p>
              {t.isGuide && (
                <span
                  className="mt-3 text-sandy-gold italic"
                  style={{ fontSize: "clamp(20px, 1.8vw, 28px)", fontWeight: 300 }}
                >
                  Cornwall
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureTiles;
