import { Check } from "lucide-react";

interface FeaturePillProps {
  label: string;
  active: boolean;
  onToggle: () => void;
}

const FeaturePill = ({ label, active, onToggle }: FeaturePillProps) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={active}
      onClick={onToggle}
      className="flex items-center justify-center w-full transition-all"
      style={{
        height: 44,
        background: active ? "#d3a36e" : "#ffffff",
        border: `1px solid ${active ? "#d3a36e" : "#e5e0da"}`,
        color: active ? "#ffffff" : "#3a3a3a",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 400,
        cursor: "pointer",
        gap: 6,
        transition: "all 200ms ease",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.borderColor = "#d3a36e";
          e.currentTarget.style.color = "#d3a36e";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.borderColor = "#e5e0da";
          e.currentTarget.style.color = "#3a3a3a";
        }
      }}
    >
      {active && <Check size={14} strokeWidth={2} />}
      <span>{label}</span>
    </button>
  );
};

export default FeaturePill;
