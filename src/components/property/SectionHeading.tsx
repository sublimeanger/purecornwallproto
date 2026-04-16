interface SectionHeadingProps {
  title: string;
  small?: boolean;
}

const SectionHeading = ({ title, small }: SectionHeadingProps) => (
  <div className="text-center">
    <h2
      style={{
        fontSize: small ? 18 : "clamp(24px, 2vw, 32px)",
        textTransform: "uppercase",
        letterSpacing: small ? 4 : 5,
        fontWeight: 400,
        color: "#3a3a3a",
      }}
    >
      {title}
    </h2>
    <div
      className="mx-auto"
      style={{
        width: small ? 120 : 200,
        height: 1,
        backgroundColor: "#d3a36e",
        marginTop: 25,
      }}
    />
  </div>
);

export default SectionHeading;
