import { Bed, Bath, Users } from "lucide-react";
import type { MockCottage } from "@/components/filters/types";

interface RegionFeaturedCottagesProps {
  regionName: string;
  regionSlug: string;
  cottages: MockCottage[];
  totalCottages: number;
}

const CottageCard = ({ c }: { c: MockCottage }) => (
  <a
    href={`/cottages/${c.id}`}
    className="group"
    style={{
      display: "block",
      textDecoration: "none",
      color: "inherit",
      background: "#ffffff",
    }}
  >
    <div
      className="aspect-[4/3]"
      style={{ position: "relative", width: "100%", overflow: "hidden" }}
    >
      <img
        src={c.image}
        alt={c.name}
        loading="lazy"
        className="group-hover:scale-[1.02]"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 250ms ease",
        }}
      />
    </div>
    <div style={{ padding: "14px 0" }}>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          fontWeight: 500,
          color: "#6fb6ae",
          letterSpacing: 3,
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        {c.location}
      </p>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          fontSize: "clamp(20px, 1.4vw, 22px)",
          color: "#2f5550",
          margin: 0,
          marginTop: 6,
          lineHeight: 1.2,
        }}
      >
        {c.name}
      </h3>
      <div
        style={{
          display: "flex",
          gap: 14,
          marginTop: 10,
          flexWrap: "wrap",
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-body)", fontSize: 12, color: "#7a7a7a", letterSpacing: 1 }}>
          <Users size={14} style={{ color: "#6fb6ae" }} /> {c.sleeps}
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-body)", fontSize: 12, color: "#7a7a7a", letterSpacing: 1 }}>
          <Bed size={14} style={{ color: "#6fb6ae" }} /> {c.bedrooms}
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-body)", fontSize: 12, color: "#7a7a7a", letterSpacing: 1 }}>
          <Bath size={14} style={{ color: "#6fb6ae" }} /> {c.bathrooms}
        </span>
      </div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          fontWeight: 500,
          color: "#d3a36e",
          letterSpacing: 2,
          textTransform: "uppercase",
          margin: 0,
          marginTop: 10,
        }}
      >
        From £{c.pricePerWeek.toLocaleString()} / week
      </p>
    </div>
  </a>
);

const RegionFeaturedCottages = ({
  regionName,
  regionSlug,
  cottages,
  totalCottages,
}: RegionFeaturedCottagesProps) => (
  <section style={{ background: "#ffffff", padding: "6vw 0" }}>
    <div className="pc-container">
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 500,
            color: "#6fb6ae",
            letterSpacing: 3,
            textTransform: "uppercase",
            margin: 0,
            marginBottom: 18,
          }}
        >
          Handpicked Cottages
        </p>
        <h2
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(24px, 2.2vw, 32px)",
            fontWeight: 500,
            color: "#2f5550",
            letterSpacing: 3,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Cottages in {regionName}
        </h2>
        <div
          style={{
            width: 200,
            height: 2,
            backgroundColor: "#d3a36e",
            marginTop: 25,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 17,
            fontWeight: 400,
            color: "#7a7a7a",
            lineHeight: 1.6,
            maxWidth: 680,
            margin: "20px auto 0",
          }}
        >
          Twelve hand-selected cottages from our full {totalCottages}-cottage collection in {regionName}. See the full set via the CTA below.
        </p>
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        style={{ gap: 20 }}
      >
        {cottages.map((c) => (
          <CottageCard key={c.id} c={c} />
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 48 }}>
        <a
          href={`/cottages?region=${regionSlug}`}
          style={{
            display: "inline-block",
            padding: "14px 40px",
            border: "1px solid #d3a36e",
            color: "#d3a36e",
            background: "transparent",
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: 3,
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "background 200ms ease, color 200ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#d3a36e";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#d3a36e";
          }}
        >
          See all {totalCottages} cottages in {regionName} →
        </a>
      </div>
    </div>
  </section>
);

export default RegionFeaturedCottages;
