import { ChevronLeft, ChevronRight } from "lucide-react";

interface CottagesPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const buttonBaseStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#ffffff",
  border: "1px solid #e5e0da",
  borderRadius: 0,
  fontFamily: "var(--font-body)",
  fontSize: 14,
  fontWeight: 500,
  color: "#3a3a3a",
  cursor: "pointer",
  transition: "background 200ms ease, border-color 200ms ease",
  padding: 0,
};

const computePageList = (current: number, total: number): (number | "ellipsis")[] => {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const list: (number | "ellipsis")[] = [];
  list.push(1);
  if (current <= 3) {
    list.push(2, 3, 4, "ellipsis", total);
  } else if (current >= total - 2) {
    list.push("ellipsis", total - 3, total - 2, total - 1, total);
  } else {
    list.push("ellipsis", current - 1, current, current + 1, "ellipsis", total);
  }
  return list;
};

const CottagesPagination = ({ currentPage, totalPages, onPageChange }: CottagesPaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = computePageList(currentPage, totalPages);
  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  return (
    <section style={{ background: "#ffffff", padding: "0 0 6vw 0" }}>
      <div className="pc-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
          }}
        >
          <button
            type="button"
            onClick={() => !prevDisabled && onPageChange(currentPage - 1)}
            aria-label="Previous page"
            disabled={prevDisabled}
            style={{
              ...buttonBaseStyle,
              opacity: prevDisabled ? 0.4 : 1,
              pointerEvents: prevDisabled ? "none" : "auto",
              color: "#2f5550",
            }}
            onMouseEnter={(e) => {
              if (!prevDisabled) {
                e.currentTarget.style.background = "#f7f5f2";
                e.currentTarget.style.borderColor = "#2f5550";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.borderColor = "#e5e0da";
            }}
          >
            <ChevronLeft size={16} />
          </button>

          {pages.map((p, i) => {
            if (p === "ellipsis") {
              return (
                <span
                  key={`e-${i}`}
                  aria-hidden="true"
                  style={{
                    width: 40,
                    height: 40,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7a7a7a",
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                  }}
                >
                  …
                </span>
              );
            }
            const active = p === currentPage;
            return (
              <button
                key={p}
                type="button"
                onClick={() => !active && onPageChange(p)}
                aria-current={active ? "page" : undefined}
                aria-label={`Go to page ${p}`}
                disabled={active}
                style={{
                  ...buttonBaseStyle,
                  background: active ? "#2f5550" : "#ffffff",
                  color: active ? "#ffffff" : "#3a3a3a",
                  borderColor: active ? "#2f5550" : "#e5e0da",
                  cursor: active ? "default" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = "#f7f5f2";
                    e.currentTarget.style.borderColor = "#2f5550";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.borderColor = "#e5e0da";
                  }
                }}
              >
                {p}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => !nextDisabled && onPageChange(currentPage + 1)}
            aria-label="Next page"
            disabled={nextDisabled}
            style={{
              ...buttonBaseStyle,
              opacity: nextDisabled ? 0.4 : 1,
              pointerEvents: nextDisabled ? "none" : "auto",
              color: "#2f5550",
            }}
            onMouseEnter={(e) => {
              if (!nextDisabled) {
                e.currentTarget.style.background = "#f7f5f2";
                e.currentTarget.style.borderColor = "#2f5550";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.borderColor = "#e5e0da";
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CottagesPagination;
