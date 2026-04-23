import SectionHeading from "./SectionHeading";
import porthmeorImg from "@/assets/porthmeor-beach.jpg";
import harbourImg from "@/assets/st-ives-harbour.jpg";
import tateImg from "@/assets/tate-st-ives.jpg";

const localSpots = [
  {
    name: "Porthmeor Beach",
    time: "1 min walk",
    image: porthmeorImg,
  },
  {
    name: "St Ives Harbour",
    time: "5 min walk",
    image: harbourImg,
  },
  {
    name: "Tate St Ives",
    time: "10 min walk",
    image: tateImg,
  },
];

const LocationSection = () => (
  <section id="location" style={{ paddingTop: "5vw", paddingBottom: "5vw", backgroundColor: "#f7f5f2" }}>
    <div className="pc-container">
      <SectionHeading title="Location" />
      <div className="mt-10">
        <div className="relative w-full overflow-hidden" style={{ height: 500 }}>
          {/* Realistic map-style background */}
          <img
            src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-l+d3a36e(-5.4808,50.2115)/-5.4808,50.2115,13,0/1400x500@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw&logo=false"
            alt="Map of St Ives, Cornwall area"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Hide failed map image, show styled fallback beneath
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Styled map fallback — cartographic feel */}
          <div
            className="absolute inset-0"
            style={{
              background: "#e8ede9",
              zIndex: 0,
            }}
          >
            {/* Coastline and roads SVG overlay */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 500" preserveAspectRatio="xMidYMid slice">
              {/* Sea area */}
              <rect x="0" y="0" width="1400" height="500" fill="#dce8e4" />
              {/* Land mass */}
              <path d="M0 180 Q 100 160, 200 170 Q 350 140, 450 165 Q 550 190, 650 160 Q 750 130, 850 155 Q 950 180, 1050 150 Q 1150 130, 1250 145 Q 1350 160, 1400 150 L1400 500 L0 500 Z" fill="#e8ede9" />
              {/* Coastline */}
              <path d="M0 180 Q 100 160, 200 170 Q 350 140, 450 165 Q 550 190, 650 160 Q 750 130, 850 155 Q 950 180, 1050 150 Q 1150 130, 1250 145 Q 1350 160, 1400 150" stroke="#b8c9c0" strokeWidth="2.5" fill="none" />
              {/* Roads */}
              <path d="M300 500 Q 320 400, 380 350 Q 450 290, 500 250 Q 550 220, 620 200" stroke="#d4d0c8" strokeWidth="3" fill="none" />
              <path d="M620 200 Q 750 210, 900 230 Q 1000 240, 1100 260 Q 1200 280, 1400 300" stroke="#d4d0c8" strokeWidth="3" fill="none" />
              <path d="M500 500 Q 520 420, 560 360 Q 600 300, 620 200" stroke="#d4d0c8" strokeWidth="2" fill="none" />
              <path d="M800 500 Q 810 400, 830 320 Q 860 260, 900 230" stroke="#d4d0c8" strokeWidth="2" fill="none" />
              {/* Secondary roads */}
              <path d="M380 350 Q 420 340, 460 350 Q 500 360, 560 360" stroke="#ddd8d0" strokeWidth="1.5" fill="none" />
              <path d="M620 200 Q 640 240, 660 280 Q 680 320, 700 380 Q 720 440, 730 500" stroke="#ddd8d0" strokeWidth="1.5" fill="none" />
              {/* Beach areas */}
              <path d="M560 175 Q 580 168, 610 172 Q 630 175, 640 180" stroke="#e6d9b8" strokeWidth="6" fill="none" opacity="0.6" strokeLinecap="round" />
            </svg>
            {/* Place labels — cartographic style */}
            <div className="absolute" style={{ top: "36%", left: "40%", fontSize: 14, fontWeight: 500, color: "#4a5a54", letterSpacing: 3, fontFamily: "var(--font-body)", textTransform: "uppercase" }}>St Ives</div>
            <div className="absolute" style={{ top: "58%", left: "58%", fontSize: 11, color: "#7a8a82", letterSpacing: 2, fontFamily: "var(--font-body)" }}>Carbis Bay</div>
            <div className="absolute" style={{ top: "62%", left: "74%", fontSize: 11, color: "#7a8a82", letterSpacing: 2, fontFamily: "var(--font-body)" }}>Hayle</div>
            <div className="absolute" style={{ top: "20%", left: "25%", fontSize: 11, color: "#9aaba3", letterSpacing: 2, fontFamily: "var(--font-body)" }}>St Ives Bay</div>
            <div className="absolute" style={{ top: "28%", left: "35%", fontSize: 10, color: "#9aaba3", letterSpacing: 1.5, fontFamily: "var(--font-body)" }}>Porthmeor Beach</div>
            <div className="absolute" style={{ top: "48%", left: "48%", fontSize: 10, color: "#9aaba3", letterSpacing: 1.5, fontFamily: "var(--font-body)" }}>Porthminster</div>
          </div>
          {/* Gold pin marker */}
          <div className="absolute flex flex-col items-center" style={{ top: "32%", left: "42%", transform: "translate(-50%, -100%)", zIndex: 5 }}>
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
              <p style={{ fontSize: 12, color: "#d3a36e", fontFamily: "var(--font-serif)" }}>
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
