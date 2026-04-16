import SectionHeading from "./SectionHeading";

interface AtAGlanceProps {
  columns: string[][];
}

const WaveMarker = () => (
  <svg width="14" height="10" viewBox="0 0 14 10" className="mt-1.5 shrink-0" fill="none">
    <path d="M1 6C2.5 3 4 3 5.5 5.5C7 8 8.5 8 10 5.5C11.5 3 13 3 13 5" stroke="#d3a36e" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AtAGlance = ({ columns }: AtAGlanceProps) => (
  <section id="at-a-glance" className="bg-white" style={{ paddingTop: "5vw", paddingBottom: "5vw" }}>
    <div className="pc-container">
      <SectionHeading title="At a Glance" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
        {columns.map((col, ci) => (
          <div key={ci} className="flex flex-col" style={{ gap: 14 }}>
            {col.map((item, ii) => (
              <div key={ii} className="flex items-start gap-3">
                <WaveMarker />
                <span style={{ fontSize: 15, fontWeight: 400, color: "#3a3a3a", lineHeight: 1.5 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AtAGlance;
