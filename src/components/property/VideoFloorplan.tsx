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
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: 22,
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "white",
                  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}
              >
                Treleigh
              </p>
            </div>
          </div>
        </div>

        {/* Floorplan */}
        <div>
          <SectionHeading title="Floorplan" small />
          <div
            className="relative mt-8 bg-white flex items-center justify-center cursor-pointer border border-brand-border"
            style={{ aspectRatio: "16/9" }}
          >
            <div className="text-center p-8">
              <div style={{ fontSize: 48, color: "#e5e0da", marginBottom: 16 }}>⬡</div>
              <p style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 3, color: "#7a7a7a" }}>
                Floorplan
              </p>
              <p style={{ fontSize: 13, color: "#7a7a7a", marginTop: 8 }}>
                Click to enlarge
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoFloorplan;
