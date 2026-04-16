import { Play } from "lucide-react";
import SectionHeading from "./SectionHeading";

const VideoFloorplan = () => (
  <section id="video-floorplan" style={{ paddingTop: "5vw", paddingBottom: "5vw", backgroundColor: "#f7f5f2" }}>
    <div className="pc-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Video */}
        <div>
          <SectionHeading title="Video" small />
          <div className="relative mt-8 cursor-pointer group" style={{ aspectRatio: "16/9", background: "#2f5550" }}>
            <img
              src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80"
              alt="Property video thumbnail"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="flex items-center justify-center rounded-full transition-transform group-hover:scale-110"
                style={{ width: 72, height: 72, backgroundColor: "rgba(211,163,110,0.9)" }}
              >
                <Play size={28} className="text-white ml-1" fill="white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p style={{ fontFamily: "var(--font-body)", fontSize: 22, fontWeight: 300, color: "white", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
                Treleigh
              </p>
            </div>
          </div>
          {/* Caption */}
          <div className="flex flex-col items-center mt-6">
            <div style={{ width: 80, height: 1, backgroundColor: "#d3a36e", marginBottom: 12 }} />
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, color: "#d3a36e" }}>
              Watch Treleigh come to life
            </p>
          </div>
        </div>

        {/* Floorplan */}
        <div>
          <SectionHeading title="Floorplan" small />
          <div
            className="relative mt-8 bg-white flex items-center justify-center cursor-pointer border border-brand-border overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            <img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80"
              alt="Treleigh floorplan"
              className="w-full h-full object-contain p-4"
              style={{ filter: "grayscale(1) contrast(1.2) brightness(1.1)", opacity: 0.85 }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg width="80%" height="70%" viewBox="0 0 400 280" fill="none" opacity="0.6">
                <rect x="20" y="20" width="360" height="240" stroke="#3a3a3a" strokeWidth="2" fill="none" />
                <line x1="200" y1="20" x2="200" y2="260" stroke="#3a3a3a" strokeWidth="1.5" />
                <line x1="20" y1="140" x2="200" y2="140" stroke="#3a3a3a" strokeWidth="1.5" />
                <line x1="200" y1="160" x2="380" y2="160" stroke="#3a3a3a" strokeWidth="1.5" />
                <line x1="300" y1="160" x2="300" y2="260" stroke="#3a3a3a" strokeWidth="1.5" />
                <line x1="120" y1="140" x2="120" y2="260" stroke="#3a3a3a" strokeWidth="1.5" />
                <path d="M200 120 Q 215 120 215 140" stroke="#7a7a7a" strokeWidth="1" fill="none" strokeDasharray="3 2" />
                <path d="M180 140 Q 180 155 200 155" stroke="#7a7a7a" strokeWidth="1" fill="none" strokeDasharray="3 2" />
                <text x="100" y="85" textAnchor="middle" fontSize="10" fill="#7a7a7a" fontFamily="Jost, sans-serif">LIVING</text>
                <text x="290" y="95" textAnchor="middle" fontSize="10" fill="#7a7a7a" fontFamily="Jost, sans-serif">KITCHEN</text>
                <text x="65" y="205" textAnchor="middle" fontSize="9" fill="#7a7a7a" fontFamily="Jost, sans-serif">BED 1</text>
                <text x="160" y="205" textAnchor="middle" fontSize="9" fill="#7a7a7a" fontFamily="Jost, sans-serif">BED 2</text>
                <text x="250" y="215" textAnchor="middle" fontSize="9" fill="#7a7a7a" fontFamily="Jost, sans-serif">BED 3</text>
                <text x="340" y="215" textAnchor="middle" fontSize="9" fill="#7a7a7a" fontFamily="Jost, sans-serif">BATH</text>
                <text x="360" y="45" fontSize="10" fill="#d3a36e" fontFamily="Jost, sans-serif" fontWeight="500">N ↑</text>
              </svg>
            </div>
            <p className="absolute bottom-3 right-4" style={{ fontSize: 12, color: "#7a7a7a", letterSpacing: 2, textTransform: "uppercase" }}>
              Click to enlarge
            </p>
          </div>
          {/* Caption */}
          <div className="flex flex-col items-center mt-6">
            <div style={{ width: 80, height: 1, backgroundColor: "#d3a36e", marginBottom: 12 }} />
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, color: "#d3a36e" }}>
              Two floors, considered by design
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoFloorplan;
