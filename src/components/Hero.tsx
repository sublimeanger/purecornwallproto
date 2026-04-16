import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-cornwall.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(500px, 80vh, 900px)" }}>
      <img
        src={heroImg}
        alt="Cornwall coastline"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: `translateY(${scrollY * 0.3}px)`, willChange: "transform" }}
        width={1920}
        height={1080}
      />
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div
          style={{
            width: 1,
            height: 40,
            backgroundColor: "#d3a36e",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
