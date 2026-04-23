import { Bed, Bath, Users } from "lucide-react";
import PropertyImageCarousel from "../PropertyImageCarousel";
import SectionHeading from "./SectionHeading";

interface RelatedProperty {
  images: string[];
  name: string;
  location: string;
  tagline: string;
  sleeps: number;
  beds: number;
  baths: number;
  price: number;
}

interface RelatedPropertiesProps {
  properties: RelatedProperty[];
}

const RelatedProperties = ({ properties }: RelatedPropertiesProps) => (
  <section style={{ paddingTop: "5vw", paddingBottom: "5vw", backgroundColor: "#f7f5f2" }}>
    <div className="pc-container">
      <SectionHeading title="Not Quite What You Are Looking For?" />
      <p className="text-center mt-4" style={{ fontSize: 15, color: "#7a7a7a" }}>
        Explore similar properties in the area
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {properties.map((p) => (
          <div key={p.name} className="property-card bg-white">
            <div className="property-card__img">
              <PropertyImageCarousel images={p.images} alt={p.name} aspectRatio="5/4" />
            </div>
            <div style={{ padding: "24px 24px 28px" }}>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, fontWeight: 500, color: "#6fb6ae", marginBottom: 8 }}>
                {p.location}
              </p>
              <h3 style={{ fontSize: 24, fontWeight: 400, color: "#d3a36e", marginBottom: 8 }}>
                {p.name}
              </h3>
              <p style={{ fontSize: 14, color: "#7a7a7a", marginBottom: 16, lineHeight: 1.5 }}>
                {p.tagline}
              </p>
              <div className="flex gap-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <Users size={16} style={{ color: "#6fb6ae" }} />
                  <span style={{ fontSize: 13, color: "#3a3a3a" }}>Sleeps {p.sleeps}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Bed size={16} style={{ color: "#6fb6ae" }} />
                  <span style={{ fontSize: 13, color: "#3a3a3a" }}>{p.beds} Bed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Bath size={16} style={{ color: "#6fb6ae" }} />
                  <span style={{ fontSize: 13, color: "#3a3a3a" }}>{p.baths} Bath</span>
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-1">
                  <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 2, color: "#7a7a7a" }}>From</span>
                  <span style={{ fontSize: 22, color: "#d3a36e" }}>£{p.price.toLocaleString()}</span>
                  <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 2, color: "#7a7a7a" }}>pw</span>
                </div>
                <button className="btn-flat text-xs">View Property</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RelatedProperties;
