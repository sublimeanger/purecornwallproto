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
  </section>
);

export default Hero;
