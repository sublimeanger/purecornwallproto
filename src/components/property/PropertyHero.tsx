interface PropertyHeroProps {
  image: string;
  tagline: string;
  onViewGallery: () => void;
}

const PropertyHero = ({ image, tagline, onViewGallery }: PropertyHeroProps) => (
  <section className="relative w-full" style={{ minHeight: "70vh" }}>
    <img
      src={image}
      alt="Treleigh clifftop retreat"
      className="absolute inset-0 w-full h-full object-cover"
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
          fontFamily: "'Jost', sans-serif",
          fontSize: "clamp(28px, 3vw, 42px)",
          fontWeight: 300,
          
          lineHeight: 1.3,
          maxWidth: 800,
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
          fontFamily: "'Jost', sans-serif",
          fontSize: 13,
          textTransform: "uppercase",
          letterSpacing: 3,
          padding: "14px 40px",
        }}
      >
        View Gallery
      </button>
    </div>
  </section>
);

export default PropertyHero;
