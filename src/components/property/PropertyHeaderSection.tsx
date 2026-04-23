import { LucideProps } from "lucide-react";
import {
  Bed, Bath, Waves, Palmtree, Dog, Flame, Sparkles, Fence, Wifi,
} from "lucide-react";

const iconMap: Record<string, React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>> = {
  bed: Bed, bath: Bath, waves: Waves, palmtree: Palmtree,
  dog: Dog, flame: Flame, sparkles: Sparkles, fence: Fence, wifi: Wifi,
};

interface PropertyHeaderSectionProps {
  name: string;
  region: string;
  priceFrom: number;
  stats: { icon: string; label: string }[];
}

const PropertyHeaderSection = ({ name, region, priceFrom, stats }: PropertyHeaderSectionProps) => (
  <section className="bg-white">
    <div className="pc-container" style={{ paddingTop: "4vw", paddingBottom: "2vw" }}>
      {/* Breadcrumbs */}
      <div className="flex flex-col lg:flex-row justify-between mb-6">
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, color: "#7a7a7a" }}>
          {region}
        </p>
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: "#7a7a7a" }}>
          Home / Properties / {name}
        </p>
      </div>

      {/* Name + Price */}
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="lg:w-[60%]">
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(52px, 5.5vw, 84px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#d3a36e",
              marginBottom: 32,
            }}
          >
            {name}
          </h1>
        </div>
        <div className="lg:w-[35%] lg:text-right">
          <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 3, color: "#7a7a7a", marginBottom: 8 }}>
            From:
          </p>
          <div className="flex items-baseline lg:justify-end gap-2">
            <span style={{ fontFamily: "var(--font-body)", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 400, color: "#d3a36e" }}>
              £{priceFrom.toLocaleString()}
            </span>
            <span style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 3, color: "#7a7a7a" }}>
              per week
            </span>
          </div>
          <button
            className="mt-6 transition-all duration-300 hover:bg-sandy-gold hover:text-white"
            style={{
              background: "transparent",
              border: "2px solid #d3a36e",
              color: "#d3a36e",
              fontFamily: "var(--font-body)",
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: 3,
              padding: "16px 40px",
            }}
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>

    {/* Quick stats */}
    <div className="pc-container" style={{ paddingTop: "4vw", paddingBottom: "2vw" }}>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
        {stats.map((stat) => {
          const Icon = iconMap[stat.icon];
          return (
            <div key={stat.label} className="flex flex-col items-center gap-3 group cursor-pointer">
              <div
                className="flex items-center justify-center transition-all duration-300 group-hover:bg-sandy-gold group-hover:scale-105"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "1px solid #d3a36e",
                }}
              >
                {Icon && <Icon size={24} className="text-sandy-gold transition-colors duration-300 group-hover:text-white" />}
              </div>
              <span style={{ fontSize: 13, color: "#3a3a3a", fontFamily: "var(--font-serif)", fontWeight: 400, letterSpacing: 0.5 }}>
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default PropertyHeaderSection;
