import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";

const destinations = {
  "Most Popular": ["St Ives", "Newquay", "Padstow", "Bude"],
  "West Cornwall": ["St Ives", "Carbis Bay", "Marazion", "Hayle", "Mousehole", "Praa Sands", "Porthleven", "Newlyn", "Penzance", "Perranuthnoe", "Porthcurno"],
  "North Cornwall": ["Bude", "Padstow", "Rock", "Mawgan Porth", "Portreath", "Widemouth Bay", "Porthtowan", "Newquay", "Crantock", "Boscastle", "Crackington Haven", "Daymer Bay", "Port Isaac", "Watergate Bay", "Tintagel", "Wadebridge", "Constantine Bay", "Porth", "St Agnes", "Polzeath"],
  "South Cornwall": ["Falmouth", "Charlestown", "Fowey", "St Mawes", "Mevagissey", "Portloe", "Feock", "Coverack", "Helford", "Tregothnan Estate"],
};

const SearchBar = () => {
  const [destOpen, setDestOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState("All Destinations");
  const [propertySearch, setPropertySearch] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        panelRef.current && !panelRef.current.contains(e.target as Node) &&
        triggerRef.current && !triggerRef.current.contains(e.target as Node)
      ) {
        setDestOpen(false);
      }
    };
    if (destOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [destOpen]);

  const fieldLabel: React.CSSProperties = { fontSize: 11, textTransform: "uppercase", letterSpacing: 3, fontWeight: 500, color: "#ffffff" };
  const fieldValue: React.CSSProperties = { fontSize: 16, fontWeight: 400, color: "#ffffff" };
  const divider: React.CSSProperties = { width: 1, backgroundColor: "rgba(255,255,255,0.2)", alignSelf: "stretch" };

  return (
    <div className="relative w-full" style={{ zIndex: 40 }}>
      <div style={{ backgroundColor: "#6fb6ae" }}>
        <div className="pc-container" style={{ paddingRight: 0 }}>
          <div className="flex flex-col md:flex-row items-stretch" style={{ minHeight: 80 }}>
            {/* 1. Destinations / Property Search */}
            <button
              ref={triggerRef}
              onClick={() => setDestOpen(!destOpen)}
              className="flex-[1.3] flex items-center justify-between px-5 py-3 text-left transition-colors"
              style={destOpen ? { backgroundColor: "rgba(0,0,0,0.15)" } : {}}
            >
              <div>
                <span className="block whitespace-nowrap" style={fieldLabel}>Destinations</span>
                <span className="block mt-1" style={fieldValue}>{selectedDest}</span>
              </div>
              <ChevronDown size={18} style={{ color: "#ffffff", transform: destOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 200ms" }} />
            </button>

            <div className="hidden md:block" style={divider} />

            {/* 2. Date of Arrival */}
            <div className="flex-1 flex flex-col justify-center px-5 py-3">
              <label style={fieldLabel}>Date of Arrival</label>
              <input type="date" className="bg-transparent outline-none mt-1 [color-scheme:dark]" style={fieldValue} />
            </div>

            <div className="hidden md:block" style={divider} />

            {/* 3. Length of Stay */}
            <div className="flex-1 flex flex-col justify-center px-5 py-3">
              <label style={fieldLabel}>Length of Stay</label>
              <select className="bg-transparent outline-none mt-1 appearance-none cursor-pointer" style={fieldValue}>
                <option className="text-brand-dark">7 nights</option>
                <option className="text-brand-dark">3 nights</option>
                <option className="text-brand-dark">4 nights</option>
                <option className="text-brand-dark">10 nights</option>
                <option className="text-brand-dark">14 nights</option>
              </select>
            </div>

            <div className="hidden md:block" style={divider} />

            {/* 4. Guests */}
            <div className="flex-1 flex flex-col justify-center px-5 py-3">
              <label style={fieldLabel}>Guests</label>
              <select className="bg-transparent outline-none mt-1 appearance-none cursor-pointer" style={fieldValue}>
                <option className="text-brand-dark">2 Guests</option>
                <option className="text-brand-dark">4 Guests</option>
                <option className="text-brand-dark">6 Guests</option>
                <option className="text-brand-dark">8+ Guests</option>
              </select>
            </div>

            <div className="hidden md:block" style={divider} />

            {/* 5. Additional Filters */}
            <div className="flex-1 flex flex-col justify-center px-5 py-3">
              <label style={fieldLabel}>Additional Filters</label>
              <select className="bg-transparent outline-none mt-1 appearance-none cursor-pointer" style={fieldValue}>
                <option className="text-brand-dark">Any</option>
                <option className="text-brand-dark">Pet Friendly</option>
                <option className="text-brand-dark">Hot Tub</option>
                <option className="text-brand-dark">Sea View</option>
                <option className="text-brand-dark">Swimming Pool</option>
                <option className="text-brand-dark">Parking</option>
              </select>
            </div>

            {/* 6. Search button */}
            <button
              className="flex items-center justify-center gap-2 px-8 py-3 transition-colors"
              style={{ backgroundColor: "#d3a36e", color: "#ffffff", textTransform: "uppercase", letterSpacing: 3, fontSize: 14, fontWeight: 500, minWidth: 140 }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c09360")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#d3a36e")}
            >
              <Search size={16} />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Destination dropdown panel */}
      {destOpen && (
        <div className="absolute left-0 right-0" style={{ zIndex: 50 }}>
          <div
            ref={panelRef}
            className="pc-container"
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "32px 40px",
                boxShadow: "0 10px 40px rgba(47,85,80,0.15)",
              }}
            >
              {/* Property name search input */}
              <input
                type="text"
                placeholder="Enter Property Name..."
                value={propertySearch}
                onChange={(e) => setPropertySearch(e.target.value)}
                style={{
                  width: "100%",
                  border: "2px solid #d3a36e",
                  borderRadius: 7,
                  padding: "12px 16px",
                  fontSize: 16,
                  fontWeight: 400,
                  color: "#2f5550",
                  outline: "none",
                  fontFamily: "var(--font-body)",
                  marginBottom: 28,
                }}
              />

              {/* 4-column destination grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(destinations).map(([heading, places]) => (
                  <div key={heading}>
                    <h4 style={{ fontSize: 16, fontWeight: 500, color: "#d3a36e", marginBottom: 12 }}>
                      {heading}
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {places.map((place) => (
                        <li key={`${heading}-${place}`}>
                          <button
                            onClick={() => { setSelectedDest(place); setDestOpen(false); }}
                            className="w-full text-left transition-colors"
                            style={{ fontSize: 15, fontWeight: 400, color: "#2f5550", lineHeight: 2, background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)" }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = "#d3a36e"; e.currentTarget.style.textDecoration = "underline"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = "#2f5550"; e.currentTarget.style.textDecoration = "none"; }}
                          >
                            {place}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
