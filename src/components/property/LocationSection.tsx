import SectionHeading from "./SectionHeading";

const LocationSection = () => (
  <section id="location" style={{ paddingTop: "5vw", paddingBottom: "5vw", backgroundColor: "#f7f5f2" }}>
    <div className="pc-container">
      <SectionHeading title="Location" />
      <div className="mt-10">
        {/* Static map placeholder using a styled container with Unsplash aerial */}
        <div className="relative w-full overflow-hidden" style={{ height: 500 }}>
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=80"
            alt="Map of St Ives, Cornwall area"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.7) brightness(1.05)" }}
          />
          {/* Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
            <div
              className="rounded-full flex items-center justify-center"
              style={{ width: 32, height: 32, backgroundColor: "#d3a36e" }}
            >
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" fill="white"/>
              </svg>
            </div>
            <div style={{ width: 2, height: 12, backgroundColor: "#d3a36e" }} />
          </div>
        </div>
        <p className="text-center mt-4" style={{ fontSize: 12, color: "#7a7a7a" }}>
          Location is approximate
        </p>
      </div>
    </div>
  </section>
);

export default LocationSection;
