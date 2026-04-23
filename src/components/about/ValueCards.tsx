import { ShieldCheck, Users, MapPin, HandHeart, type LucideIcon } from "lucide-react";

export interface ValueCard {
  icon: "shield-check" | "users" | "map-pin" | "hand-heart";
  eyebrow: string;
  title: string;
  body: string;
}

interface ValueCardsProps {
  values: ValueCard[];
}

const ICON_MAP: Record<ValueCard["icon"], LucideIcon> = {
  "shield-check": ShieldCheck,
  users: Users,
  "map-pin": MapPin,
  "hand-heart": HandHeart,
};

const ValueCards = ({ values }: ValueCardsProps) => (
  <section
    style={{
      background: "#f7f5f2",
      padding: "6vw 0",
      borderTop: "2px solid #6fb6ae",
    }}
  >
    <div className="pc-container">
      <div style={{ textAlign: "center", marginBottom: 56 }}>
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
          WHAT WE STAND FOR
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
          FOUR PRINCIPLES, TWENTY-PLUS YEARS
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => {
          const Icon = ICON_MAP[v.icon];
          return (
            <div
              key={i}
              style={{
                background: "#ffffff",
                borderTop: "2px solid #6fb6ae",
                padding: 32,
              }}
            >
              <Icon size={32} color="#6fb6ae" strokeWidth={1.5} />
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#6fb6ae",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  margin: 0,
                  marginTop: 20,
                }}
              >
                {v.eyebrow}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: 24,
                  color: "#2f5550",
                  margin: 0,
                  marginTop: 8,
                  lineHeight: 1.2,
                }}
              >
                {v.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  fontWeight: 400,
                  color: "#3a3a3a",
                  lineHeight: 1.6,
                  margin: 0,
                  marginTop: 14,
                }}
              >
                {v.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ValueCards;
