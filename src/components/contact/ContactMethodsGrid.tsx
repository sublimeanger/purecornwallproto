import { Phone, Mail, MessageSquare, MapPin, type LucideIcon } from "lucide-react";

export interface ContactMethod {
  icon: "phone" | "mail" | "message-square" | "map-pin";
  eyebrow: string;
  value: string;
  context: string;
  href?: string;
}

interface ContactMethodsGridProps {
  methods: ContactMethod[];
}

const ICON_MAP: Record<ContactMethod["icon"], LucideIcon> = {
  phone: Phone,
  mail: Mail,
  "message-square": MessageSquare,
  "map-pin": MapPin,
};

const ContactMethodsGrid = ({ methods }: ContactMethodsGridProps) => (
  <section
    style={{
      background: "#f7f5f2",
      padding: "5vw 0",
      borderTop: "2px solid #6fb6ae",
    }}
  >
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
          HOW TO REACH US
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
          FOUR WAYS, ONE TEAM
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {methods.map((m, i) => {
          const Icon = ICON_MAP[m.icon];
          const valueEl = m.href ? (
            <a
              href={m.href}
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: 22,
                color: "#2f5550",
                margin: 0,
                marginTop: 10,
                textDecoration: "none",
                display: "block",
                transition: "color 200ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d3a36e")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2f5550")}
            >
              {m.value}
            </a>
          ) : (
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: 22,
                color: "#2f5550",
                margin: 0,
                marginTop: 10,
              }}
            >
              {m.value}
            </p>
          );

          return (
            <div
              key={i}
              style={{
                background: "#ffffff",
                borderTop: "2px solid #6fb6ae",
                padding: 32,
                textAlign: "center",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Icon size={32} color="#6fb6ae" strokeWidth={1.5} />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  fontWeight: 500,
                  color: "#6fb6ae",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  margin: 0,
                  marginTop: 20,
                }}
              >
                {m.eyebrow}
              </p>
              {valueEl}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "#7a7a7a",
                  lineHeight: 1.6,
                  margin: 0,
                  marginTop: 10,
                }}
              >
                {m.context}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ContactMethodsGrid;
