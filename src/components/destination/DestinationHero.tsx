// Reused across destination + collection pages
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
    {/* Gradient overlay — darker for text legibility */}
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.55) 100%)",
        zIndex: 1,
      }}
    />
    {/* Centred radial vignette behind the headline */}
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
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
      {/*
        Eyebrow on photo: teal `#6fb6ae` requires fontWeight 600 + two-layer shadow
        for legibility against imagery. Standard teal usage elsewhere uses 500 weight.
      */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          fontWeight: 600,
          color: "#6fb6ae",
          letterSpacing: 4,
          textTransform: "uppercase",
          marginBottom: 16,
          textShadow: "0 1px 3px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        {eyebrow}
      </p>
      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          fontSize: "clamp(64px, 8vw, 128px)",
          lineHeight: 1.0,
          color: "#ffffff",
          margin: 0,
          textShadow: "0 2px 24px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.4)",
        }}
      >
        {name}
      </h1>
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          fontSize: "clamp(18px, 1.5vw, 22px)",
          color: "#ffffff",
          marginTop: 20,
          maxWidth: 600,
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.4,
          textShadow: "0 1px 12px rgba(0,0,0,0.65)",
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
