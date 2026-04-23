import { Search, X } from "lucide-react";
import { useState } from "react";

interface SearchHeroProps {
  query: string;
  filteredCount: number;
  totalCount: number;
  onQueryChange: (next: string) => void;
  onQueryClear: () => void;
}

const SearchHero = ({
  query,
  filteredCount,
  totalCount,
  onQueryChange,
  onQueryClear,
}: SearchHeroProps) => {
  const [focused, setFocused] = useState(false);
  const hasQuery = query.trim().length > 0;

  return (
    <section style={{ background: "#f7f5f2", padding: "6vw 0 5vw 0" }}>
      <div className="pc-container" style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            fontSize: 13,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6fb6ae",
            marginBottom: 18,
          }}
        >
          Search Results
        </div>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(36px, 4vw, 54px)",
            color: "#2f5550",
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          {hasQuery ? <>Searching for &ldquo;{query}&rdquo;</> : "Browse All Cottages"}
        </h1>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            fontWeight: 400,
            color: "#7a7a7a",
            marginTop: 14,
            marginBottom: 0,
          }}
        >
          {filteredCount} of {totalCount} cottages match
        </p>

        <div
          style={{
            marginTop: 40,
            maxWidth: 720,
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative",
          }}
        >
          <Search
            size={20}
            color="#6fb6ae"
            style={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Search cottages, locations, features…"
            style={{
              width: "100%",
              padding: "18px 52px 18px 52px",
              border: "none",
              borderBottom: focused ? "2.5px solid #d3a36e" : "2px solid #d3a36e",
              borderRadius: 0,
              background: "transparent",
              fontFamily: "var(--font-body)",
              fontSize: 18,
              fontWeight: 400,
              color: "#2f5550",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          {hasQuery && (
            <button
              type="button"
              onClick={onQueryClear}
              aria-label="Clear search"
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#7a7a7a",
                transition: "color 200ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2f5550")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7a7a7a")}
            >
              <X size={18} />
            </button>
          )}
        </div>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            fontWeight: 400,
            color: "#7a7a7a",
            marginTop: 16,
            marginBottom: 0,
          }}
        >
          Press Enter to search — or use the filter drawer for deeper refinement
        </p>
      </div>
    </section>
  );
};

export default SearchHero;
