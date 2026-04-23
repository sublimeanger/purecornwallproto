interface JournalInlineImageProps {
  src: string;
  caption?: string;
}

const JournalInlineImage = ({ src, caption }: JournalInlineImageProps) => (
  <figure
    style={{
      margin: "48px 0",
      maxWidth: "100%",
    }}
  >
    <img
      src={src}
      alt={caption ?? ""}
      style={{ width: "100%", height: "auto", display: "block" }}
    />
    {caption && (
      <figcaption
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          fontWeight: 400,
          color: "#7a7a7a",
          marginTop: 12,
          textAlign: "center",
        }}
      >
        {caption}
      </figcaption>
    )}
  </figure>
);

export default JournalInlineImage;
