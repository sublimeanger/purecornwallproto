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
        <span style={{ fontSize: 16, color: "#3a3a3a", fontFamily: "'Jost', sans-serif" }}>
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
  <section id="facilities" className="bg-white" style={{ paddingTop: "5vw", paddingBottom: "5vw" }}>
    <div className="pc-container">
      <SectionHeading title="Facilities" />
      <p
        className="text-center mx-auto mt-8"
        style={{ maxWidth: 700, fontSize: 15, color: "#d3a36e", fontStyle: "italic", lineHeight: 1.7 }}
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
