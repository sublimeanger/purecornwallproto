interface TownsAtoZStripProps {
  availableLetters: string[];
  selected?: string;
  onSelect?: (letter: string) => void;
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const TownsAtoZStrip = ({ availableLetters, selected, onSelect }: TownsAtoZStripProps) => {
  const available = new Set(availableLetters);

  const handleClick = (letter: string) => {
    if (!available.has(letter)) return;
    onSelect?.(letter);
    const el = document.getElementById(`town-${letter}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 4,
        justifyContent: "center",
        flexWrap: "nowrap",
        overflowX: "auto",
        scrollbarWidth: "none",
      }}
      className="pc-az-strip"
    >
      <style>{`.pc-az-strip::-webkit-scrollbar { display: none; }`}</style>
      {ALPHABET.map((letter) => {
        const isAvailable = available.has(letter);
        const isSelected = selected === letter;
        return (
          <button
            key={letter}
            type="button"
            disabled={!isAvailable}
            onClick={() => handleClick(letter)}
            style={{
              width: 28,
              height: 28,
              flexShrink: 0,
              background: "transparent",
              border: "none",
              borderBottom: isSelected ? "2px solid #6fb6ae" : "2px solid transparent",
              borderRadius: 0,
              padding: 0,
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 500,
              color: !isAvailable ? "#7a7a7a" : isSelected ? "#6fb6ae" : "#2f5550",
              cursor: isAvailable ? "pointer" : "not-allowed",
              transition: "color 200ms ease",
            }}
            onMouseEnter={(e) => {
              if (isAvailable && !isSelected) e.currentTarget.style.color = "#6fb6ae";
            }}
            onMouseLeave={(e) => {
              if (isAvailable && !isSelected) e.currentTarget.style.color = "#2f5550";
            }}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default TownsAtoZStrip;
