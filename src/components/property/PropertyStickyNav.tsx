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
  const navRef = useRef<HTMLDivElement>(null);
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
        ref={navRef}
        className={`bg-white border-b border-brand-border z-40 transition-shadow duration-300 ${
          isSticky ? "fixed top-0 left-0 right-0 shadow-sm" : ""
        }`}
        style={{ height: 60 }}
      >
        <div className="pc-container h-full flex items-center overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-6 lg:gap-8 mx-auto whitespace-nowrap">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="transition-colors duration-200"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: 14,
                  letterSpacing: 2,
                  color: active === s.id ? "#3a3a3a" : "#d3a36e",
                  borderBottom: active === s.id ? "2px solid #3a3a3a" : "2px solid transparent",
                  paddingBottom: 4,
                  background: "none",
                  border: "none",
                  borderBottomWidth: 2,
                  borderBottomStyle: "solid",
                  borderBottomColor: active === s.id ? "#3a3a3a" : "transparent",
                  cursor: "pointer",
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
      {isSticky && <div style={{ height: 60 }} />}
    </>
  );
};

export default PropertyStickyNav;
