import authorPhoto from "@/assets/property-1.jpg";

interface JournalAuthorCardProps {
  variant: "top" | "bottom";
}

// EXCEPTION to the no-border-radius rule: author headshot uses border-radius: 50%
// to render as a circular avatar. Documented exception, used in two places only.

const TopVariant = () => (
  <section
    style={{
      background: "#f7f5f2",
      padding: "3vw 0",
      borderTop: "2px solid #6fb6ae",
      borderBottom: "1px solid #e5e0da",
    }}
  >
    <div className="pc-container">
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={authorPhoto}
          alt="Rebecca Moore"
          style={{
            width: 64,
            height: 64,
            objectFit: "cover",
            borderRadius: "50%",
            flexShrink: 0,
          }}
        />
        <div style={{ paddingLeft: 20 }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "#7a7a7a",
              margin: 0,
            }}
          >
            Written by
          </p>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: 20,
              color: "#2f5550",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Rebecca Moore
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "#7a7a7a",
              margin: 0,
              marginTop: 4,
            }}
          >
            In-house Cornwall writer
          </p>
        </div>
      </div>
    </div>
  </section>
);

const BottomVariant = () => (
  <section
    style={{
      background: "#ffffff",
      padding: "6vw 0 4vw 0",
      borderTop: "2px solid #6fb6ae",
    }}
  >
    <div className="pc-container">
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={authorPhoto}
          alt="Rebecca Moore"
          style={{
            width: 120,
            height: 120,
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 500,
            color: "#6fb6ae",
            letterSpacing: 3,
            textTransform: "uppercase",
            marginTop: 24,
            margin: 0,
            marginBlockStart: 24,
          }}
        >
          About the Author
        </p>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: 32,
            color: "#2f5550",
            marginTop: 12,
            margin: 0,
            marginBlockStart: 12,
          }}
        >
          Rebecca Moore
        </h2>
        <div style={{ marginTop: 20, maxWidth: 600 }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "#3a3a3a",
              lineHeight: 1.75,
              marginBottom: 14,
            }}
          >
            Rebecca Moore has been writing about Cornwall for eight years — first as a freelance travel journalist, now as Pure Cornwall&apos;s in-house writer. Originally from Norfolk, she moved to Penzance in 2017 and hasn&apos;t found a reason to leave.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "#3a3a3a",
              lineHeight: 1.75,
              marginBottom: 14,
            }}
          >
            Her writing has appeared in the Telegraph Travel section, Condé Nast Traveller, and Cornwall Life. At Pure Cornwall, she writes about the places and people that make this corner of England feel like its own country — and she walks most of the coast path each year to make sure she still knows it.
          </p>
        </div>
        <a
          href="/journal?author=rebecca-moore"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            fontWeight: 500,
            color: "#d3a36e",
            letterSpacing: 2,
            textTransform: "uppercase",
            borderBottom: "1px solid #d3a36e",
            paddingBottom: 2,
            marginTop: 28,
            display: "inline-block",
            textDecoration: "none",
          }}
        >
          Read more from Rebecca →
        </a>
      </div>
    </div>
  </section>
);

const JournalAuthorCard = ({ variant }: JournalAuthorCardProps) =>
  variant === "top" ? <TopVariant /> : <BottomVariant />;

export default JournalAuthorCard;
