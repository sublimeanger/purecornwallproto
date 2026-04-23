// Reused across destination + collection pages
import { DestinationPin } from "@/data/stIvesData";

interface DestinationMapProps {
  imageUrl: string;
  caption: string;
  pins: DestinationPin[];
}

// Arbitrary pin positions across the map (left%, top%) — visual only
const PIN_POSITIONS = [
  { left: 32, top: 38 },
  { left: 58, top: 52 },
  { left: 45, top: 48 },
  { left: 28, top: 30 },
  { left: 38, top: 60 },
  { left: 62, top: 32 },
  { left: 50, top: 70 },
  { left: 72, top: 62 },
];

const DestinationMap = ({ imageUrl, caption, pins }: DestinationMapProps) => {
  const visiblePins = pins.slice(0, 6);
  return (
  <section style={{ background: "#ffffff", padding: "6vw 0" }}>
    <div
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        paddingLeft: "2.5vw",
        paddingRight: "2.5vw",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 48 }}>
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
          The lie of the land
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

      <div className="grid grid-cols-1 lg:grid-cols-5" style={{ gap: 48 }}>
        {/* Map */}
        <div className="lg:col-span-3">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxHeight: 420,
              aspectRatio: "4/3",
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "saturate(0.7)",
            }}
          >
            {visiblePins.map((pin, i) => {
              const pos = PIN_POSITIONS[i] ?? PIN_POSITIONS[0];
              return (
                <div
                  key={pin.n}
                  aria-label={`Map pin ${pin.n}: ${pin.name}`}
                  style={{
                    position: "absolute",
                    left: `${pos.left}%`,
                    top: `${pos.top}%`,
                    transform: "translate(-50%, -50%)",
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#6fb6ae",
                    color: "#ffffff",
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  }}
                >
                  {pin.n}
                </div>
              );
            })}
          </div>
          {caption && (
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 400,
                color: "#7a7a7a",
                marginTop: 12,
              }}
            >
              {caption}
            </p>
          )}
        </div>

        {/* Legend */}
        <div className="lg:col-span-2">
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {visiblePins.map((pin) => (
              <li
                key={pin.n}
                style={{
                  display: "flex",
                  gap: 16,
                  marginBottom: 12,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#6fb6ae",
                    color: "#ffffff",
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {pin.n}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      fontWeight: 500,
                      color: "#2f5550",
                    }}
                  >
                    {pin.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      fontWeight: 400,
                      color: "#7a7a7a",
                      marginTop: 2,
                      lineHeight: 1.5,
                    }}
                  >
                    {pin.description}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
};

export default DestinationMap;
