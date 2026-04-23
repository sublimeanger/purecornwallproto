import { Search, X } from "lucide-react";

interface TownsSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const TownsSearchBar = ({ value, onChange }: TownsSearchBarProps) => (
  <div style={{ maxWidth: 520, margin: "0 auto", position: "relative" }}>
    <Search
      size={18}
      strokeWidth={1.75}
      color="#6fb6ae"
      style={{
        position: "absolute",
        left: 14,
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none",
      }}
    />
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Find a town…"
      className="pc-towns-search"
      style={{
        width: "100%",
        background: "transparent",
        border: "none",
        borderBottom: "2px solid #d3a36e",
        borderRadius: 0,
        outline: "none",
        padding: "14px 44px 14px 44px",
        fontFamily: "var(--font-body)",
        fontSize: 17,
        fontWeight: 400,
        color: "#2f5550",
      }}
    />
    {value && (
      <button
        type="button"
        onClick={() => onChange("")}
        aria-label="Clear search"
        style={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          padding: 6,
          cursor: "pointer",
          color: "#7a7a7a",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <X size={18} strokeWidth={1.75} />
      </button>
    )}
    <style>{`
      .pc-towns-search:focus { border-bottom-width: 2.5px !important; }
      .pc-towns-search::placeholder { color: #9a9a9a; }
    `}</style>
  </div>
);

export default TownsSearchBar;
