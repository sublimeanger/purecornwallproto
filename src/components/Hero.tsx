import heroImg from "@/assets/hero-cornwall.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(500px, 80vh, 900px)" }}
    >
      <div className="absolute inset-0 hero-kenburns">
        <img
          src={heroImg}
          alt="Cornwall coastline"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      {/* Subtle vignette to add cinematic depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.35) 100%)",
        }}
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

        .hero-kenburns {
          will-change: transform;
          animation: heroKenBurns 24s ease-in-out infinite alternate;
          transform-origin: 50% 55%;
        }

        .hero-kenburns img {
          will-change: transform;
          animation: heroKenBurnsImg 24s ease-in-out infinite alternate;
        }

        @keyframes heroKenBurns {
          0% {
            transform: scale(1.08) translate3d(-1.5%, 1%, 0);
            transform-origin: 30% 65%;
          }
          100% {
            transform: scale(1.18) translate3d(1.5%, -1%, 0);
            transform-origin: 70% 40%;
          }
        }

        @keyframes heroKenBurnsImg {
          0%   { filter: brightness(1) saturate(1); }
          50%  { filter: brightness(1.02) saturate(1.04); }
          100% { filter: brightness(1) saturate(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-kenburns,
          .hero-kenburns img {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
