import SectionHeading from "./SectionHeading";

interface ActivitiesSectionProps {
  paragraphs: string[];
}

const ActivitiesSection = ({ paragraphs }: ActivitiesSectionProps) => {
  const mid = Math.ceil((paragraphs.length - 1) / 2);
  const left = paragraphs.slice(0, mid);
  const right = paragraphs.slice(mid, -1);
  const closing = paragraphs[paragraphs.length - 1];

  return (
    <section id="activities" className="bg-white" style={{ paddingTop: "5vw", paddingBottom: "5vw" }}>
      <div className="pc-container">
        <SectionHeading title="Activities" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="flex flex-col gap-6">
            {left.map((p, i) => (
              <p key={i} style={{ fontSize: 15, lineHeight: 1.7, color: "#3a3a3a" }} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {right.map((p, i) => (
              <p key={i} style={{ fontSize: 15, lineHeight: 1.7, color: "#3a3a3a" }} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>

        {/* Interstitial cinematic image */}
        <div className="my-12">
          <div style={{ aspectRatio: "21/9", overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1400&q=80"
              alt="The South West Coast Path at dusk"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p
            className="text-center mt-4"
            style={{ fontFamily: "var(--font-serif)", fontSize: 16, color: "#d3a36e" }}
          >
            The South West Coast Path at dusk
          </p>
        </div>

        <p className="mt-8" style={{ fontSize: 15, lineHeight: 1.7, color: "#3a3a3a" }}>
          {closing.replace(/<[^>]*>/g, "").replace("Read more, here.", "")}{" "}
          <a href="/journal" style={{ color: "#d3a36e", textDecoration: "underline", textUnderlineOffset: 4 }}>
            Read more, here.
          </a>
        </p>
      </div>
    </section>
  );
};

export default ActivitiesSection;
