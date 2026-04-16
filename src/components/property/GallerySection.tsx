import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface GallerySectionProps {
  images: string[];
}

const GallerySection = ({ images }: GallerySectionProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index = 0) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const prev = () => setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setLightboxIndex((i) => (i + 1) % images.length);

  return (
    <>
      <section id="gallery" className="bg-white" style={{ paddingTop: "5vw", paddingBottom: "5vw" }}>
        <div className="pc-container">
          <SectionHeading title="Gallery" />
          {/* Overlapping layout */}
          <div className="relative mt-12" style={{ minHeight: 400 }}>
            <div className="lg:w-[60%] cursor-pointer" onClick={() => openLightbox(0)}>
              <img
                src={images[0]}
                alt="Gallery main"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
                loading="lazy"
              />
            </div>
            <div
              className="lg:absolute lg:right-0 lg:w-[42%] mt-4 lg:mt-0 cursor-pointer"
              style={{ top: "10%" }}
              onClick={() => openLightbox(1)}
            >
              <img
                src={images[1]}
                alt="Gallery secondary"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
                loading="lazy"
              />
            </div>
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => openLightbox(0)}
              style={{
                background: "transparent",
                border: "1px solid #d3a36e",
                color: "#d3a36e",
                fontFamily: "'Jost', sans-serif",
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: 3,
                padding: "14px 40px",
                cursor: "pointer",
                transition: "all 300ms ease",
              }}
              className="hover:bg-sandy-gold hover:text-white"
            >
              View Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
          <img
            src={images[lightboxIndex]}
            alt={`Gallery image ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white/60 text-sm">
            {lightboxIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
};

export default GallerySection;
