import { Clock, Calendar, Home, type LucideIcon } from "lucide-react";

interface Cell {
  icon: LucideIcon;
  eyebrow: string;
  value: string;
  context: string;
}

const CELLS: Cell[] = [
  {
    icon: Clock,
    eyebrow: "RESPONSE TIME",
    value: "Within one working day",
    context: "Monday–Friday, often faster. Weekend enquiries answered first thing Monday.",
  },
  {
    icon: Calendar,
    eyebrow: "BUSINESS HOURS",
    value: "Monday–Friday, 9am–5:30pm",
    context: "Outside hours? Phone and email are always monitored for urgent booking issues.",
  },
  {
    icon: Home,
    eyebrow: "POSTAL ADDRESS",
    value: "Pure Cornwall Ltd",
    context: "The Old Coastguard Office, Market Street, Penzance, Cornwall TR18 2AX",
  },
];

const OfficeInfo = () => (
  <section style={{ background: "#f7f5f2", padding: "5vw 0 6vw" }}>
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
          WHEN WE'RE HERE
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
          HOW WE RESPOND
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CELLS.map((c, i) => {
          const Icon = c.icon;
          return (
            <div key={i} style={{ textAlign: "center", padding: "0 16px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Icon size={24} color="#6fb6ae" strokeWidth={1.5} />
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
                  marginTop: 16,
                }}
              >
                {c.eyebrow}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: 20,
                  color: "#2f5550",
                  margin: 0,
                  marginTop: 8,
                  lineHeight: 1.25,
                }}
              >
                {c.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "#7a7a7a",
                  lineHeight: 1.5,
                  margin: 0,
                  marginTop: 8,
                }}
              >
                {c.context}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default OfficeInfo;
