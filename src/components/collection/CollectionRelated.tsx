import { CollectionRelatedItem } from "@/data/dogFriendlyData";

interface CollectionRelatedProps {
  items: CollectionRelatedItem[];
}

const CollectionRelated = ({ items }: CollectionRelatedProps) => {
  if (!items || items.length === 0) return null;
  return (
    <section style={{ background: "#ffffff", padding: "5vw 0" }}>
      <div className="pc-container">
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 500,
              color: "#6fb6ae",
              letterSpacing: 3,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            You might also like
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 32 }}
        >
          {items.map((item) => (
            <a
              key={item.slug}
              href={item.slug}
              style={{ textDecoration: "none", display: "block" }}
              className="group"
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3 / 2",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 250ms ease",
                  }}
                  className="group-hover:scale-[1.02]"
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.6) 100%)",
                  }}
                />
                <h3
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    padding: 24,
                    fontFamily: "var(--font-serif)",
                    fontWeight: 400,
                    fontSize: 28,
                    color: "#ffffff",
                    margin: 0,
                    lineHeight: 1.1,
                    textShadow: "0 1px 12px rgba(0,0,0,0.55)",
                  }}
                >
                  {item.name}
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#7a7a7a",
                  lineHeight: 1.6,
                  marginTop: 12,
                  marginBottom: 0,
                }}
              >
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionRelated;
