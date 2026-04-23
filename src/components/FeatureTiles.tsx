import collPopular from "@/assets/coll-popular.jpg";
import collSeaviews from "@/assets/coll-seaviews.jpg";
import collHottubs from "@/assets/coll-hottubs.jpg";
import collLarge from "@/assets/coll-large.jpg";
import collDogs from "@/assets/coll-dogs.jpg";
import collSurfing from "@/assets/coll-surfing.jpg";
import collBeach from "@/assets/coll-beach.jpg";
import collPools from "@/assets/coll-pools.jpg";
import collGuide from "@/assets/coll-guide.jpg";
import { useEffect, useRef, useState } from "react";

const tiles = [
  { img: collPopular, title: "Most Popular", subtitle: "Our portfolio highlights" },
  { img: collSeaviews, title: "Sea View Cottages", subtitle: "Spectacular coastal outlooks" },
  { img: collHottubs, title: "Hot Tub Cottages", subtitle: "Relax in style with a hot tub" },
  { img: collLarge, title: "Large Holiday Cottages", subtitle: "Space for big groups and families" },
  { img: collDogs, title: "Dog Friendly Cottages", subtitle: "Your pet is welcome too" },
  { img: collSurfing, title: "Surfing Escapes", subtitle: "Surf's up with these retreats" },
  { img: collBeach, title: "Cornwall Beach Retreats", subtitle: "Coastal cottages by the sea" },
  { img: collPools, title: "Cottages with Pools", subtitle: "Dive into our swimming pool collection" },
  { img: collGuide, title: "The Great Cornwall Guide", subtitle: "The essential guide for visiting Cornwall" },
];

const FeatureTiles = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white" style={{ paddingTop: "4vw", paddingBottom: "6vw" }}>
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
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tiles.map((t, idx) => (
            <a
              key={t.title}
              href="#"
              className="relative block group overflow-hidden cursor-pointer"
              style={{
                aspectRatio: "3/2",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 500ms ease-out ${idx * 80}ms, transform 500ms ease-out ${idx * 80}ms`,
              }}
            >
              <img
                src={t.img}
                alt={t.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                loading="lazy"
                width={960}
                height={640}
              />
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                style={{
                  background: "linear-gradient(180deg, rgba(47,85,80,0.3) 0%, rgba(47,85,80,0.7) 100%)",
                }}
              />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-[20%] px-4 text-center">
                <h3
                  style={{ fontSize: "clamp(14px, 1.2vw, 18px)", textTransform: "uppercase", letterSpacing: 4, fontWeight: 500, color: "#ffffff" }}
                >
                  {t.title}
                </h3>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(13px, 1.1vw, 16px)",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.95)",
                  }}
                >
                  {t.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTiles;
