import aboutImg from "@/assets/about-interior.jpg";
import { Home, MapPin, Headphones, BadgeCheck } from "lucide-react";

const usps = [
  { icon: Home, title: "Handpicked Properties" },
  { icon: MapPin, title: "Local Expertise" },
  { icon: Headphones, title: "24/7 Guest Support" },
  { icon: BadgeCheck, title: "Best Price Guarantee" },
];

const AboutSection = () => (
  <section className="pc-section">
    <div className="pc-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5vw] items-center">
        <div className="overflow-hidden">
          <img
            src={aboutImg}
            alt="Luxury Cornwall cottage interior"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-brand-dark text-left" style={{ fontSize: "clamp(32px, 3vw, 42px)" }}>
            Cornwall, Beautifully Curated
          </h2>
          <div className="gold-bar gold-bar--left" />
          <p className="text-brand-body mt-8 leading-relaxed">
            Pure Cornwall is a luxury holiday cottage rental company dedicated to showcasing the very best that Cornwall has to offer. Every property in our portfolio has been personally visited, inspected and approved by our team.
          </p>
          <p className="text-brand-body mt-4 leading-relaxed">
            We believe that where you stay shapes your entire holiday experience. That's why we only work with properties that meet our exacting standards for quality, character and location.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            {usps.map((u) => (
              <div key={u.title} className="flex items-start gap-3">
                <u.icon size={24} className="text-brand-teal flex-shrink-0 mt-0.5" />
                <span className="text-brand-dark text-sm font-medium">{u.title}</span>
              </div>
            ))}
          </div>

          <button className="btn-flat mt-10">About Pure Cornwall</button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
