import SectionHeading from "./SectionHeading";

const localSpots = [
  {
    name: "Porthmeor Beach",
    time: "1 min walk",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&q=80",
  },
  {
    name: "St Ives Harbour",
    time: "5 min walk",
    image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=400&q=80",
  },
  {
    name: "Tate St Ives",
    time: "10 min walk",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

const LocationSection = () => (
  <section id="location" style={{ paddingTop: "5vw", paddingBottom: "5vw", backgroundColor: "#f7f5f2" }}>
    <div className="pc-container">
      <SectionHeading title="Location" />
      <div className="mt-10">
        <div className="relative w-full overflow-hidden" style={{ height: 500 }}>
          <img
            src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-l+d3a36e(-5.4808,50.2115)/-5.4808,50.2115,12.5,0/1400x500@2x?access_token=pk.placeholder&logo=false"
            alt="Map of St Ives, Cornwall area"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=1400&height=500&center=lonlat:-5.4808,50.2115&zoom=12.5&apiKey=placeholder";
              (e.target as HTMLImageElement).onerror = () => {
                (e.target as HTMLImageElement).style.display = "none";
              };
            }}
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #e8f0ee 0%, #d4e4e0 30%, #c5d9d4 60%, #b8cfc9 100%)",
              zIndex: 0,
            }}
          >
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1400 500" preserveAspectRatio="none">
              <path d="M0 250 Q 350 200, 700 260 T 1400 240" stroke="#8aaa9f" strokeWidth="2" fill="none" />
              <path d="M0 300 Q 400 280, 800 310 T 1400 290" stroke="#8aaa9f" strokeWidth="1.5" fill="none" />
              <path d="M200 0 Q 220 150, 180 300 T 250 500" stroke="#8aaa9f" strokeWidth="1.5" fill="none" />
              <path d="M600 0 Q 580 180, 620 350 T 590 500" stroke="#8aaa9f" strokeWidth="1" fill="none" />
              <path d="M1000 0 Q 1020 200, 980 400 T 1050 500" stroke="#8aaa9f" strokeWidth="1" fill="none" />
              <path d="M0 180 Q 200 150, 400 170 Q 600 190, 800 160 Q 1000 130, 1200 155 Q 1300 165, 1400 150" stroke="#6fb6ae" strokeWidth="3" fill="none" opacity="0.5" />
              <path d="M0 0 L1400 0 L1400 150 Q 1300 165, 1200 155 Q 1000 130, 800 160 Q 600 190, 400 170 Q 200 150, 0 180 Z" fill="#6fb6ae" opacity="0.08" />
            </svg>
            <div className="absolute" style={{ top: "35%", left: "38%", fontSize: 13, color: "#7a7a7a", letterSpacing: 2, fontFamily: "var(--font-body)", textTransform: "uppercase" }}>St Ives</div>
            <div className="absolute" style={{ top: "55%", left: "55%", fontSize: 11, color: "#9a9a9a", letterSpacing: 1.5, fontFamily: "var(--font-body)" }}>Carbis Bay</div>
            <div className="absolute" style={{ top: "60%", left: "72%", fontSize: 11, color: "#9a9a9a", letterSpacing: 1.5, fontFamily: "var(--font-body)" }}>Hayle</div>
            <div className="absolute" style={{ top: "22%", left: "20%", fontSize: 11, color: "#6fb6ae", letterSpacing: 1.5, fontFamily: "var(--font-body)", opacity: 0.7 }}>St Ives Bay</div>
            <div className="absolute" style={{ top: "45%", left: "15%", fontSize: 11, color: "#9a9a9a", letterSpacing: 1.5, fontFamily: "var(--font-body)" }}>Porthmeor Beach</div>
          </div>
          <div className="absolute flex flex-col items-center" style={{ top: "38%", left: "42%", transform: "translate(-50%, -100%)", zIndex: 5 }}>
            <div className="rounded-full flex items-center justify-center shadow-lg" style={{ width: 36, height: 36, backgroundColor: "#d3a36e" }}>
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none"><path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" fill="white" /></svg>
            </div>
            <div style={{ width: 2, height: 14, backgroundColor: "#d3a36e" }} />
            <div style={{ width: 8, height: 4, borderRadius: "50%", backgroundColor: "rgba(211,163,110,0.3)" }} />
          </div>
        </div>
        <p className="text-center mt-4" style={{ fontSize: 13, color: "#7a7a7a", fontFamily: "var(--font-body)" }}>
          Location is approximate
        </p>
      </div>

      {/* Local context photo strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {localSpots.map((spot) => (
          <div key={spot.name} className="bg-white overflow-hidden">
            <div style={{ aspectRatio: "1/1" }}>
              <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-4 text-center">
              <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 3, color: "#3a3a3a", fontFamily: "var(--font-body)", marginBottom: 4 }}>
                {spot.name}
              </p>
              <p style={{ fontSize: 12, color: "#d3a36e", fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                {spot.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LocationSection;
