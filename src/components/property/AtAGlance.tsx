import SectionHeading from "./SectionHeading";

interface AtAGlanceProps {
  columns: string[][];
}

const AtAGlance = ({ columns }: AtAGlanceProps) => (
  <section id="at-a-glance" className="bg-white" style={{ paddingTop: "5vw", paddingBottom: "5vw" }}>
    <div className="pc-container">
      <SectionHeading title="At a Glance" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
        {columns.map((col, ci) => (
          <div key={ci} className="flex flex-col" style={{ gap: 14 }}>
            {col.map((item, ii) => (
              <div key={ii} className="flex items-start gap-3">
                <span
                  className="mt-1.5 shrink-0"
                  style={{ width: 8, height: 8, backgroundColor: "#d3a36e", display: "block" }}
                />
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
