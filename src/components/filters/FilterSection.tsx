import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface FilterSectionProps {
  title: string;
  children: ReactNode;
  defaultOpenMobile?: boolean;
}

const FilterSection = ({ title, children, defaultOpenMobile = false }: FilterSectionProps) => {
  const [openMobile, setOpenMobile] = useState(defaultOpenMobile);

  return (
    <div>
      {/* Mobile collapsible header */}
      <button
        type="button"
        className="md:hidden w-full flex items-center justify-between py-2"
        onClick={() => setOpenMobile((v) => !v)}
        aria-expanded={openMobile}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: "#d3a36e",
            letterSpacing: 3,
            textTransform: "uppercase",
            fontFamily: "var(--font-body)",
          }}
        >
          {title}
        </span>
        <ChevronDown
          size={18}
          style={{
            color: "#d3a36e",
            transform: openMobile ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 200ms ease",
          }}
        />
      </button>

      {/* Desktop heading (always visible) */}
      <h3
        className="hidden md:block"
        style={{
          fontSize: 12,
          fontWeight: 500,
          color: "#d3a36e",
          letterSpacing: 3,
          textTransform: "uppercase",
          fontFamily: "var(--font-body)",
          marginBottom: 20,
        }}
      >
        {title}
      </h3>

      <div className={`${openMobile ? "block mt-4" : "hidden"} md:block`}>{children}</div>
    </div>
  );
};

export default FilterSection;
