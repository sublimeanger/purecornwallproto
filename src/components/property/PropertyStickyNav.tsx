import { useState, useEffect, useRef } from "react";

const sections = [
  { id: "at-a-glance", label: "At a Glance" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "video-floorplan", label: "Video" },
  { id: "facilities", label: "Facilities" },
  { id: "location", label: "Location" },
  { id: "activities", label: "Activities" },
  { id: "pricing", label: "Pricing & Availability" },
];

const PropertyStickyNav = () => {
  const [active, setActive] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i].id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 70;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <div ref={sentinelRef} />
      <nav
        className={`bg-white z-40 transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 right-0" : ""
        }`}
        style={{
          height: 56,
          borderBottom: isSticky ? "none" : "1px solid #e5e0da",
          boxShadow: isSticky ? "0 4px 12px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="pc-container h-full flex items-center overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-6 lg:gap-8 mx-auto whitespace-nowrap">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="relative transition-colors duration-200 pb-1"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: 3,
                    color: isActive ? "#d3a36e" : "#3a3a3a",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {s.label}
                  <span
                    className="absolute bottom-0 left-0 right-0 transition-all duration-300"
                    style={{
                      height: 2,
                      backgroundColor: "#d3a36e",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </nav>
      {isSticky && <div style={{ height: 56 }} />}
    </>
  );
};

export default PropertyStickyNav;
