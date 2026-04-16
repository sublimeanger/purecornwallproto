import SectionHeading from "./SectionHeading";

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
              // Fallback to OpenStreetMap static tile if Mapbox token is invalid
              (e.target as HTMLImageElement).src =
                "https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=1400&height=500&center=lonlat:-5.4808,50.2115&zoom=12.5&apiKey=placeholder";
              (e.target as HTMLImageElement).onerror = () => {
                // Final fallback: a clean styled container
                (e.target as HTMLImageElement).style.display = "none";
              };
            }}
          />
          {/* Fallback styled map background if images fail */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #e8f0ee 0%, #d4e4e0 30%, #c5d9d4 60%, #b8cfc9 100%)",
              zIndex: 0,
            }}
          >
            {/* Road-like lines for map feel */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1400 500" preserveAspectRatio="none">
              <path d="M0 250 Q 350 200, 700 260 T 1400 240" stroke="#8aaa9f" strokeWidth="2" fill="none" />
              <path d="M0 300 Q 400 280, 800 310 T 1400 290" stroke="#8aaa9f" strokeWidth="1.5" fill="none" />
              <path d="M200 0 Q 220 150, 180 300 T 250 500" stroke="#8aaa9f" strokeWidth="1.5" fill="none" />
              <path d="M600 0 Q 580 180, 620 350 T 590 500" stroke="#8aaa9f" strokeWidth="1" fill="none" />
              <path d="M1000 0 Q 1020 200, 980 400 T 1050 500" stroke="#8aaa9f" strokeWidth="1" fill="none" />
              {/* Coast line */}
              <path d="M0 180 Q 200 150, 400 170 Q 600 190, 800 160 Q 1000 130, 1200 155 Q 1300 165, 1400 150" stroke="#6fb6ae" strokeWidth="3" fill="none" opacity="0.5" />
              {/* Water area above coast */}
              <path d="M0 0 L1400 0 L1400 150 Q 1300 165, 1200 155 Q 1000 130, 800 160 Q 600 190, 400 170 Q 200 150, 0 180 Z" fill="#6fb6ae" opacity="0.08" />
            </svg>

            {/* Place labels */}
            <div className="absolute" style={{ top: "35%", left: "38%", fontSize: 13, color: "#7a7a7a", letterSpacing: 2, fontFamily: "'Jost', sans-serif", textTransform: "uppercase" }}>
              St Ives
            </div>
            <div className="absolute" style={{ top: "55%", left: "55%", fontSize: 11, color: "#9a9a9a", letterSpacing: 1.5, fontFamily: "'Jost', sans-serif" }}>
              Carbis Bay
            </div>
            <div className="absolute" style={{ top: "60%", left: "72%", fontSize: 11, color: "#9a9a9a", letterSpacing: 1.5, fontFamily: "'Jost', sans-serif" }}>
              Hayle
            </div>
            <div className="absolute" style={{ top: "22%", left: "20%", fontSize: 11, color: "#6fb6ae", letterSpacing: 1.5, fontFamily: "'Jost', sans-serif", opacity: 0.7 }}>
              St Ives Bay
            </div>
            <div className="absolute" style={{ top: "45%", left: "15%", fontSize: 11, color: "#9a9a9a", letterSpacing: 1.5, fontFamily: "'Jost', sans-serif" }}>
              Porthmeor Beach
            </div>
          </div>

          {/* Gold pin marker */}
          <div className="absolute flex flex-col items-center" style={{ top: "38%", left: "42%", transform: "translate(-50%, -100%)", zIndex: 5 }}>
            <div
              className="rounded-full flex items-center justify-center shadow-lg"
              style={{ width: 36, height: 36, backgroundColor: "#d3a36e" }}
            >
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" fill="white" />
              </svg>
            </div>
            <div style={{ width: 2, height: 14, backgroundColor: "#d3a36e" }} />
            <div style={{ width: 8, height: 4, borderRadius: "50%", backgroundColor: "rgba(211,163,110,0.3)" }} />
          </div>
        </div>
        <p className="text-center mt-4" style={{ fontSize: 13, color: "#7a7a7a", fontFamily: "'Jost', sans-serif" }}>
          Location is approximate
        </p>
      </div>
    </div>
  </section>
);

export default LocationSection;
