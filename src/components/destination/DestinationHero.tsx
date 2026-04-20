interface DestinationHeroProps {
  image: string;
  eyebrow: string;
  name: string;
  tagline: string;
  caption: string;
}

const DestinationHero = ({ image, eyebrow, name, tagline, caption }: DestinationHeroProps) => (
  <section
    aria-label={`${name} hero`}
    style={{
      position: "relative",
      width: "100%",
      minHeight: "50vh",
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#ffffff",
      overflow: "hidden",
    }}
    className="min-h-[35vh] md:min-h-[50vh]"
  >
    {/* Gradient overlay */}
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%)",
        zIndex: 1,
      }}
    />

    <div
      style={{
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        padding: "0 24px",
        marginTop: "5vh",
        maxWidth: 900,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          fontWeight: 500,
          color: "#ffffff",
          letterSpacing: 3,
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        {eyebrow}
      </p>
      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(64px, 8vw, 128px)",
          lineHeight: 1.0,
          color: "#ffffff",
          margin: 0,
        }}
      >
        {name}
      </h1>
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(18px, 1.5vw, 22px)",
          color: "rgba(255,255,255,0.9)",
          marginTop: 20,
          maxWidth: 600,
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.4,
        }}
      >
        {tagline}
      </p>
    </div>

    <div
      style={{
        position: "absolute",
        bottom: 16,
        right: 24,
        zIndex: 2,
        fontFamily: "var(--font-body)",
        fontSize: 11,
        fontWeight: 500,
        color: "#ffffff",
        letterSpacing: 2,
        textTransform: "uppercase",
        background: "rgba(0,0,0,0.45)",
        padding: "6px 12px",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    >
      {caption}
    </div>
  </section>
);

export default DestinationHero;
