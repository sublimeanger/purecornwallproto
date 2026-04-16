import { useState, useCallback, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PropertyImageCarouselProps {
  images: string[];
  alt: string;
  aspectRatio?: string;
}

const PropertyImageCarousel = ({ images, alt, aspectRatio = "5/4" }: PropertyImageCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [loadedIndices, setLoadedIndices] = useState<Set<number>>(new Set([0]));
  const touchStart = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = images.length;

  const preloadAdjacent = useCallback((index: number) => {
    setLoadedIndices((prev) => {
      const next = new Set(prev);
      next.add(index);
      if (index > 0) next.add(index - 1);
      if (index < total - 1) next.add(index + 1);
      return next;
    });
  }, [total]);

  const goTo = useCallback((index: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    e?.preventDefault();
    const target = (index + total) % total;
    setCurrent(target);
    preloadAdjacent(target);
    if (!hasInteracted) setHasInteracted(true);
  }, [total, preloadAdjacent, hasInteracted]);

  const prev = useCallback((e: React.MouseEvent) => goTo(current - 1, e), [current, goTo]);
  const next = useCallback((e: React.MouseEvent) => goTo(current + 1, e), [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { goTo(current - 1); e.preventDefault(); }
      if (e.key === "ArrowRight") { goTo(current + 1); e.preventDefault(); }
    };
    el.addEventListener("keydown", handler);
    return () => el.removeEventListener("keydown", handler);
  }, [current, goTo]);

  // Touch/swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      goTo(diff > 0 ? current + 1 : current - 1);
    }
    touchStart.current = null;
  };

  if (total <= 1) {
    return (
      <div className="relative w-full overflow-hidden" style={{ aspectRatio }}>
        <img src={images[0]} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden group"
      style={{ aspectRatio }}
      tabIndex={0}
      onMouseEnter={() => { setHovered(true); if (!hasInteracted) { setHasInteracted(true); preloadAdjacent(0); } }}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-label={`${alt} image gallery`}
      aria-roledescription="carousel"
    >
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-300 ease-in-out"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
            aria-hidden={i !== current}
          >
            {(loadedIndices.has(i) || i === 0) && (
              <img
                src={src}
                alt={`${alt} - image ${i + 1}`}
                className="w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            )}
          </div>
        ))}
      </div>

      {/* Arrow buttons — visible on hover (desktop) or always (mobile via group-hover fallback) */}
      <button
        onClick={prev}
        className={`absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full transition-opacity duration-200 ${
          hovered ? "opacity-100" : "opacity-0 md:opacity-0"
        } touch-device:opacity-100`}
        style={{ backgroundColor: "rgba(47,85,80,0.5)" }}
        aria-label="Previous image"
      >
        <ChevronLeft size={18} className="text-white" />
      </button>
      <button
        onClick={next}
        className={`absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full transition-opacity duration-200 ${
          hovered ? "opacity-100" : "opacity-0 md:opacity-0"
        } touch-device:opacity-100`}
        style={{ backgroundColor: "rgba(47,85,80,0.5)" }}
        aria-label="Next image"
      >
        <ChevronRight size={18} className="text-white" />
      </button>

      {/* Dot indicators */}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 transition-opacity duration-300 ${
          hovered || hasInteracted ? "opacity-100" : "opacity-0"
        }`}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => goTo(i, e)}
            className="w-2.5 h-2.5 rounded-full transition-all duration-200"
            style={{
              backgroundColor: i === current ? "#d3a36e" : "rgba(255,255,255,0.6)",
              transform: i === current ? "scale(1.2)" : "scale(1)",
            }}
            aria-label={`View image ${i + 1} of ${total}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyImageCarousel;
