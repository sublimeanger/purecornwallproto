import { useState, useEffect, useRef } from "react";

interface GalleryRowProps {
  images: string[];
}

const GalleryRow = ({ images }: GalleryRowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col md:flex-row" style={{ gap: 4 }}>
      {images.map((src, i) => (
        <div
          key={i}
          className="flex-1"
          style={{
            aspectRatio: "4/3",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: `opacity 600ms ease-out ${i * 150}ms, transform 600ms ease-out ${i * 150}ms`,
          }}
        >
          <img src={src} alt={`Property detail ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default GalleryRow;
