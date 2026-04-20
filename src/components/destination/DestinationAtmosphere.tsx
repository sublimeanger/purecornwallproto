interface DestinationAtmosphereProps {
  images: { src: string; alt: string }[];
  caption: string;
}

const DestinationAtmosphere = ({ images, caption }: DestinationAtmosphereProps) => (
  <section style={{ background: "#f7f5f2", paddingBottom: "3vw" }}>
    <div
      className="grid grid-cols-1 md:grid-cols-3"
      style={{ gap: 0 }}
    >
      {images.map((img, i) => (
        <div
          key={i}
          style={{
            width: "100%",
            height: "45vh",
            overflow: "hidden",
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      ))}
    </div>
    <p
      style={{
        fontFamily: "var(--font-body)",
        fontStyle: "italic",
        fontSize: 11,
        fontWeight: 400,
        color: "#7a7a7a",
        textAlign: "center",
        marginTop: 12,
      }}
    >
      {caption}
    </p>
  </section>
);

export default DestinationAtmosphere;
