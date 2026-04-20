import { Minus, Plus } from "lucide-react";
import { useRef } from "react";

interface NumberStepperProps {
  label: string;
  value: number | null; // null = Any
  min: number;
  max: number;
  onChange: (v: number | null) => void;
}

const NumberStepper = ({ label, value, min, max, onChange }: NumberStepperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const atMin = value === null;
  const atMax = value !== null && value >= max;

  const dec = () => {
    if (value === null) return;
    if (value <= min) {
      onChange(null);
    } else {
      onChange(value - 1);
    }
  };
  const inc = () => {
    if (value === null) {
      onChange(min);
    } else if (value < max) {
      onChange(value + 1);
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp" || e.key === "ArrowRight") {
      e.preventDefault();
      inc();
    }
    if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
      e.preventDefault();
      dec();
    }
  };

  const btnBase: React.CSSProperties = {
    width: 32,
    height: 32,
    border: "1px solid #e5e0da",
    borderRadius: 0,
    background: "#ffffff",
    color: "#d3a36e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "border-color 200ms ease, opacity 200ms ease",
  };

  return (
    <div
      ref={ref}
      tabIndex={0}
      onKeyDown={onKey}
      className="flex items-center justify-between outline-none focus-visible:ring-2 focus-visible:ring-[#d3a36e]"
      style={{ height: 52 }}
      role="spinbutton"
      aria-label={label}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value ?? undefined}
      aria-valuetext={value === null ? "Any" : String(value)}
    >
      <span
        style={{
          fontSize: 15,
          fontWeight: 400,
          color: "#3a3a3a",
          fontFamily: "var(--font-body)",
        }}
      >
        {label}
      </span>
      <div className="flex items-center" style={{ width: 120, justifyContent: "space-between" }}>
        <button
          type="button"
          onClick={dec}
          disabled={atMin}
          aria-label={`Decrease ${label}`}
          style={{ ...btnBase, opacity: atMin ? 0.3 : 1, cursor: atMin ? "not-allowed" : "pointer" }}
          onMouseEnter={(e) => {
            if (!atMin) e.currentTarget.style.borderColor = "#d3a36e";
          }}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e5e0da")}
        >
          <Minus size={14} />
        </button>
        <span
          style={{
            fontSize: 16,
            fontWeight: 400,
            color: "#3a3a3a",
            fontFamily: "var(--font-body)",
            minWidth: 36,
            textAlign: "center",
          }}
        >
          {value === null ? "Any" : value}
        </span>
        <button
          type="button"
          onClick={inc}
          disabled={atMax}
          aria-label={`Increase ${label}`}
          style={{ ...btnBase, opacity: atMax ? 0.3 : 1, cursor: atMax ? "not-allowed" : "pointer" }}
          onMouseEnter={(e) => {
            if (!atMax) e.currentTarget.style.borderColor = "#d3a36e";
          }}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e5e0da")}
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
};

export default NumberStepper;
