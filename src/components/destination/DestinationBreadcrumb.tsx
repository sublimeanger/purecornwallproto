interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DestinationBreadcrumbProps {
  items: BreadcrumbItem[];
}

const DestinationBreadcrumb = ({ items }: DestinationBreadcrumbProps) => (
  <div
    style={{
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "#ffffff",
      borderBottom: "1px solid #e5e0da",
      height: 48,
      display: "flex",
      alignItems: "center",
    }}
  >
    <div className="pc-container w-full">
      <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <span key={item.label} style={{ display: "inline-flex", alignItems: "center" }}>
              {item.href && !last ? (
                <a
                  href={item.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "#7a7a7a",
                    textDecoration: "none",
                    transition: "color 200ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#d3a36e")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#7a7a7a")}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: last ? "#3a3a3a" : "#7a7a7a",
                    fontWeight: last ? 500 : 400,
                  }}
                  aria-current={last ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!last && (
                <span
                  aria-hidden="true"
                  style={{ color: "#6fb6ae", margin: "0 10px", fontSize: 13 }}
                >
                  ›
                </span>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  </div>
);

export default DestinationBreadcrumb;
