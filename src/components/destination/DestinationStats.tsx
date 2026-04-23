// Reused across destination + collection pages
import { DestinationStat } from "@/data/stIvesData";

interface DestinationStatsProps {
  name: string;
  stats: DestinationStat[];
}

const DestinationStats = ({ name, stats }: DestinationStatsProps) => (
  <section style={{ background: "#f7f5f2", padding: "5vw 0", borderTop: "2px solid #6fb6ae" }}>
    <div className="pc-container">
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 500,
            color: "#6fb6ae",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          {name} in numbers
        </p>
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

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        style={{ marginTop: 48, gap: 24 }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{
              position: "relative",
              textAlign: "center",
              padding: "0 8px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(44px, 4vw, 64px)",
                color: "#2f5550",
                lineHeight: 1.0,
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 500,
                color: "#6fb6ae",
                letterSpacing: 3,
                textTransform: "uppercase",
                marginTop: 12,
              }}
            >
              {s.label}
            </div>
            {i < stats.length - 1 && (
              <div
                aria-hidden="true"
                className="hidden lg:block"
                style={{
                  position: "absolute",
                  right: -12,
                  top: "20%",
                  bottom: "20%",
                  width: 1,
                  background: "#e5e0da",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DestinationStats;
