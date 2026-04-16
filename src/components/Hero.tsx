import heroImg from "@/assets/hero-cornwall.jpg";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full" style={{ height: "clamp(500px, 45vw, 720px)" }}>
      <img
        src={heroImg}
        alt="Cornwall coastline"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Gradient scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-[5vw] md:px-[2.5vw]">
        <p
          className="text-white text-xs font-light mb-4"
          style={{ letterSpacing: "5px", textTransform: "uppercase" }}
        >
          Luxury Cornwall Cottages
        </p>
        <h1
          className="text-white font-normal mb-4"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "clamp(38px, 4vw, 58px)",
          }}
        >
          Discover Pure Cornwall
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-[600px] font-light">
          Handpicked holiday cottages across Cornwall's most beautiful locations
        </p>
      </div>

      {/* Search widget */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="pc-container">
          <div
            className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-0 p-5 md:p-4"
            style={{
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="flex-1 px-3 py-2 md:border-r border-brand-border">
              <label className="block text-brand-muted text-xs uppercase" style={{ letterSpacing: "3px" }}>
                Destination
              </label>
              <select className="w-full bg-transparent text-brand-dark font-normal text-base outline-none border-b-2 border-sandy-gold mt-1 pb-1 appearance-none cursor-pointer">
                <option>All Destinations</option>
                <option>St Ives</option>
                <option>Padstow</option>
                <option>Falmouth</option>
                <option>Newquay</option>
              </select>
            </div>
            <div className="flex-1 px-3 py-2 md:border-r border-brand-border">
              <label className="block text-brand-muted text-xs uppercase" style={{ letterSpacing: "3px" }}>
                Check In
              </label>
              <input
                type="date"
                className="w-full bg-transparent text-brand-dark font-normal text-base outline-none border-b-2 border-sandy-gold mt-1 pb-1"
              />
            </div>
            <div className="flex-1 px-3 py-2 md:border-r border-brand-border">
              <label className="block text-brand-muted text-xs uppercase" style={{ letterSpacing: "3px" }}>
                Check Out
              </label>
              <input
                type="date"
                className="w-full bg-transparent text-brand-dark font-normal text-base outline-none border-b-2 border-sandy-gold mt-1 pb-1"
              />
            </div>
            <div className="flex-1 px-3 py-2 md:border-r border-brand-border">
              <label className="block text-brand-muted text-xs uppercase" style={{ letterSpacing: "3px" }}>
                Guests
              </label>
              <select className="w-full bg-transparent text-brand-dark font-normal text-base outline-none border-b-2 border-sandy-gold mt-1 pb-1 appearance-none cursor-pointer">
                <option>2 Guests</option>
                <option>4 Guests</option>
                <option>6 Guests</option>
                <option>8+ Guests</option>
              </select>
            </div>
            <div className="px-3 py-2 flex items-end">
              <button className="btn-flat flex items-center gap-2">
                <Search size={16} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
