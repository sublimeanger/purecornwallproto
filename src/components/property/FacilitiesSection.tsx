import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface FacilitiesSectionProps {
  facilities: {
    downstairs: string[];
    upstairs: string[];
    outside: string[];
    pleaseNote: string[];
  };
}

const AccordionRow = ({ title, items }: { title: string; items: string[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #d3a36e" }}>
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <span style={{ fontSize: 16, color: "#3a3a3a", fontFamily: "var(--font-body)" }}>
          {title}:
        </span>
        <ChevronDown
          size={20}
          className="text-sandy-gold transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? 600 : 0, opacity: open ? 1 : 0 }}
      >
        <ul className="pb-4" style={{ paddingLeft: 16 }}>
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 mb-2">
              <span className="mt-2 shrink-0" style={{ width: 5, height: 5, backgroundColor: "#d3a36e", display: "block" }} />
              <span style={{ fontSize: 14, color: "#3a3a3a", lineHeight: 1.6 }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FacilitiesSection = ({ facilities }: FacilitiesSectionProps) => (
  <section
    id="facilities"
    className="relative overflow-hidden"
    style={{
      paddingTop: "5vw",
      paddingBottom: "5vw",
      background: "linear-gradient(180deg, #ffffff 0%, #f7f5f2 100%)",
    }}
  >
    {/* Decorative wave watermark */}
    <svg
      className="absolute top-8 right-8 opacity-[0.06]"
      width="180"
      height="80"
      viewBox="0 0 180 80"
      fill="none"
    >
      <path d="M10 40C30 15 50 15 70 40C90 65 110 65 130 40C150 15 170 15 180 30" stroke="#d3a36e" strokeWidth="3" strokeLinecap="round" />
      <path d="M10 55C30 30 50 30 70 55C90 80 110 80 130 55C150 30 170 30 180 45" stroke="#d3a36e" strokeWidth="2" strokeLinecap="round" />
    </svg>

    <div className="pc-container relative">
      <SectionHeading title="Facilities" />
      <p
        className="text-center mx-auto mt-8"
        style={{ maxWidth: 700, fontSize: 15, color: "#d3a36e", fontStyle: "italic", lineHeight: 1.7, fontFamily: "var(--font-serif)" }}
      >
        High-quality bed linen and towels are provided at all Pure Cornwall properties. Where a cot is supplied, guests are kindly asked to bring their own cot bedding.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2 mt-10">
        <div>
          <AccordionRow title="Downstairs" items={facilities.downstairs} />
          <AccordionRow title="Outside" items={facilities.outside} />
        </div>
        <div>
          <AccordionRow title="Upstairs" items={facilities.upstairs} />
          <AccordionRow title="Please note" items={facilities.pleaseNote} />
        </div>
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
