import heroImg from "@/assets/hero-cornwall.jpg";

const Hero = () => (
  <section className="relative w-full" style={{ height: "clamp(400px, 60vh, 680px)" }}>
    <img
      src={heroImg}
      alt="Cornwall coastline"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    {/* Brochure CTA pill */}
    <a
      href="#"
      className="absolute bottom-6 right-6 z-10 flex items-center gap-2 bg-sandy-gold text-white px-5 py-3 hover:opacity-90 transition-opacity"
      style={{ textTransform: "uppercase", letterSpacing: "3px", fontSize: 13, fontWeight: 500 }}
    >
      Request Our Brochure
    </a>
  </section>
);

export default Hero;
