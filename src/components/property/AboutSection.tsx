import SectionHeading from "./SectionHeading";

interface AboutSectionProps {
  paragraphs: string[];
}

const AboutSection = ({ paragraphs }: AboutSectionProps) => {
  const mid = Math.ceil(paragraphs.length / 2);
  const left = paragraphs.slice(0, mid);
  const right = paragraphs.slice(mid);

  return (
    <section id="about" style={{ paddingTop: "5vw", paddingBottom: "5vw", backgroundColor: "#f7f5f2" }}>
      <div className="pc-container">
        <SectionHeading title="About" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="flex flex-col gap-6">
            {left.map((p, i) => (
              <p key={i} style={{ fontSize: 15, lineHeight: 1.7, color: "#3a3a3a" }}>{p}</p>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {right.map((p, i) => (
              <p key={i} style={{ fontSize: 15, lineHeight: 1.7, color: "#3a3a3a" }}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
