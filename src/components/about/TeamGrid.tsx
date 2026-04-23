export interface TeamMember {
  firstName: string;
  role: string;
  bio: string;
  image: string;
}

interface TeamGridProps {
  members: TeamMember[];
}

const TeamGrid = ({ members }: TeamGridProps) => (
  <section style={{ background: "#ffffff", padding: "6vw 0" }}>
    <div className="pc-container">
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 500,
            color: "#6fb6ae",
            letterSpacing: 3,
            textTransform: "uppercase",
            margin: 0,
            marginBottom: 18,
          }}
        >
          THE PEOPLE BEHIND PURE CORNWALL
        </p>
        <h2
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(24px, 2.2vw, 32px)",
            fontWeight: 500,
            color: "#2f5550",
            letterSpacing: 3,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          MEET THE TEAM
        </h2>
        <div
          style={{
            width: 200,
            height: 2,
            backgroundColor: "#d3a36e",
            marginTop: 25,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 17,
            fontWeight: 400,
            color: "#7a7a7a",
            maxWidth: 540,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
            marginBottom: 0,
            lineHeight: 1.6,
          }}
        >
          A small team, Cornwall-based, with decades of combined local knowledge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((m, i) => (
          <div key={i} style={{ borderTop: "2px solid #6fb6ae" }}>
            <div style={{ width: "100%", aspectRatio: "1 / 1", overflow: "hidden" }}>
              <img
                src={m.image}
                alt={m.firstName}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ padding: 20 }}>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: 26,
                  color: "#2f5550",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {m.firstName}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#d3a36e",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  margin: 0,
                  marginTop: 6,
                }}
              >
                {m.role}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#3a3a3a",
                  lineHeight: 1.65,
                  margin: 0,
                  marginTop: 14,
                }}
              >
                {m.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamGrid;
