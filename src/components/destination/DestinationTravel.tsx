import { Train, Car, Plane } from "lucide-react";
import { DestinationTravelItem } from "@/data/stIvesData";

interface DestinationTravelProps {
  items: DestinationTravelItem[];
}

const ICONS = {
  train: Train,
  car: Car,
  plane: Plane,
} as const;

const DestinationTravel = ({ items }: DestinationTravelProps) => (
  <section style={{ background: "#f7f5f2", padding: "5vw 0" }}>
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        paddingLeft: "2.5vw",
        paddingRight: "2.5vw",
      }}
    >
      <div className="text-center md:text-left">
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
          How to get here
        </h2>
        <div
          className="md:!ml-0 md:!mr-auto"
          style={{
            width: 200,
            height: 2,
            backgroundColor: "#d3a36e",
            marginTop: 25,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: 48, marginTop: 48 }}
      >
        {items.map((it) => {
          const Icon = ICONS[it.mode];
          return (
            <div key={it.mode}>
              <Icon size={28} strokeWidth={1.5} style={{ color: "#d3a36e" }} />
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#d3a36e",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  marginTop: 20,
                }}
              >
                By {it.mode}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  fontWeight: 400,
                  color: "#3a3a3a",
                  lineHeight: 1.7,
                  marginTop: 12,
                  margin: 0,
                  paddingTop: 12,
                }}
              >
                {it.copy}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default DestinationTravel;
