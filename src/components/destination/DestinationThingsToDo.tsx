import { DestinationThingToDo } from "@/data/stIvesData";

interface DestinationThingsToDoProps {
  items: DestinationThingToDo[];
}

const DestinationThingsToDo = ({ items }: DestinationThingsToDoProps) => (
  <section style={{ background: "#ffffff", padding: "6vw 0" }}>
    <div
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        paddingLeft: "2.5vw",
        paddingRight: "2.5vw",
      }}
    >
      <div style={{ textAlign: "center" }}>
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
          Things to do
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
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: 18,
            color: "#7a7a7a",
            marginTop: 16,
            marginBottom: 48,
          }}
        >
          The St Ives we'd point a friend towards
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ gap: 32 }}
      >
        {items.map((it) => (
          <article key={it.name}>
            <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
              <img
                src={it.image}
                alt={it.name}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ paddingTop: 16 }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  fontWeight: 500,
                  color: "#6fb6ae",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                }}
              >
                {it.category}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: 22,
                  color: "#2f5550",
                  marginTop: 8,
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}
              >
                {it.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#3a3a3a",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {it.description}
              </p>
              {it.link && (
                <a
                  href={it.link}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#d3a36e",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    textDecoration: "none",
                    display: "inline-block",
                    marginTop: 12,
                    borderBottom: "1px solid transparent",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#d3a36e")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
                >
                  Learn more →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

    </div>
  </section>
);

export default DestinationThingsToDo;
