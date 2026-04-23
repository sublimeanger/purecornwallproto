import { Star } from "lucide-react";

export interface TrustStat {
  value: string;
  label: string;
  hasStar?: boolean;
  subtext?: string;
}

interface TrustStripProps {
  stats: TrustStat[];
}

const TrustStrip = ({ stats }: TrustStripProps) => (
  <section
    style={{
      background: "#f7f5f2",
      padding: "3vw 0",
      borderTop: "2px solid #6fb6ae",
    }}
  >
    <div className="pc-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{
              textAlign: "center",
              padding: "16px 24px",
              borderRight:
                i < stats.length - 1 ? "1px solid #d4cec5" : "none",
            }}
            className={
              i < stats.length - 1
                ? "max-md:border-r-0 max-md:border-b max-md:border-b-[#d4cec5] last:max-md:border-b-0"
                : ""
            }
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              {s.hasStar && (
                <Star
                  size={14}
                  fill="#d3a36e"
                  color="#d3a36e"
                  strokeWidth={1.5}
                />
              )}
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: "clamp(36px, 3.6vw, 54px)",
                  color: "#2f5550",
                  margin: 0,
                  lineHeight: 1.0,
                }}
              >
                {s.value}
              </p>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 500,
                color: "#6fb6ae",
                letterSpacing: 3,
                textTransform: "uppercase",
                marginTop: 10,
                marginBottom: 0,
              }}
            >
              {s.label}
            </p>
            {s.subtext && (
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#7a7a7a",
                  marginTop: 4,
                  marginBottom: 0,
                }}
              >
                {s.subtext}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
