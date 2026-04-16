import { useEffect, useRef, useState } from "react";

interface PropertyHeroProps {
  image: string;
  tagline: string;
  onViewGallery: () => void;
}

const PropertyHero = ({ image, tagline, onViewGallery }: PropertyHeroProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative w-full overflow-hidden" style={{ minHeight: "70vh" }}>
      <img
        src={image}
        alt="Treleigh clifftop retreat"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: `translateY(${scrollY * 0.3}px)`, willChange: "transform" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(47,85,80,0.2) 0%, rgba(47,85,80,0.6) 100%)",
        }}
      />
      <div className="relative h-full flex flex-col items-center justify-end" style={{ minHeight: "70vh", paddingBottom: "8vh" }}>
        <p
          className="text-center text-white px-6"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 300,
            lineHeight: 1.3,
            maxWidth: 800,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 400ms ease, transform 400ms ease",
          }}
        >
          {tagline}
        </p>
        <button
          onClick={onViewGallery}
          className="mt-20 transition-all duration-300 hover:bg-white hover:text-brand-teal"
          style={{
            background: "transparent",
            border: "2px solid white",
            color: "white",
            fontFamily: "var(--font-body)",
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: 3,
            padding: "14px 40px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 400ms ease 200ms, transform 400ms ease 200ms, background 300ms, color 300ms",
          }}
        >
          View Gallery
        </button>
      </div>
    </section>
  );
};

export default PropertyHero;
