import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, ChevronRight, X } from "lucide-react";

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
  const [lengthOfStay, setLengthOfStay] = useState("7 nights");
  const [guests, setGuests] = useState("2 Guests");
  const [extraFilter, setExtraFilter] = useState("Any");
  const [arrivalDate, setArrivalDate] = useState("");

  // Mobile sheet
  const [sheetOpen, setSheetOpen] = useState(false);
  const [mobileDestPickerOpen, setMobileDestPickerOpen] = useState(false);

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

  // Lock body scroll while sheet open
  useEffect(() => {
    if (sheetOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [sheetOpen]);

  const fieldLabel: React.CSSProperties = { fontSize: 11, textTransform: "uppercase", letterSpacing: 3, fontWeight: 500, color: "#ffffff" };
  const fieldValue: React.CSSProperties = { fontSize: 16, fontWeight: 400, color: "#ffffff" };
  const divider: React.CSSProperties = { width: 1, backgroundColor: "rgba(255,255,255,0.2)", alignSelf: "stretch" };

  const summary = `${selectedDest} · ${lengthOfStay} · ${guests}`;

  // Shared mobile sheet field styles
  const sheetLabel: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-body)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: "#6fb6ae",
    marginBottom: 8,
  };
  const sheetInput: React.CSSProperties = {
    width: "100%",
    fontFamily: "var(--font-body)",
    fontSize: 18,
    fontWeight: 400,
    color: "#2f5550",
    padding: "12px 0",
    border: "none",
    borderBottom: "2px solid #d3a36e",
    background: "transparent",
    outline: "none",
    borderRadius: 0,
  };

  return (
    <div className="relative w-full" style={{ zIndex: 40 }}>
      {/* DESKTOP layout — unchanged, hidden on mobile */}
      <div className="hidden md:block" style={{ backgroundColor: "#6fb6ae" }}>
        <div className="pc-container" style={{ paddingRight: 0 }}>
          <div className="flex flex-col md:flex-row items-stretch" style={{ minHeight: 80 }}>
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

            <div className="flex-1 flex flex-col justify-center px-5 py-3">
              <label style={fieldLabel}>Date of Arrival</label>
              <input
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="bg-transparent outline-none mt-1 [color-scheme:dark]"
                style={fieldValue}
              />
            </div>

            <div className="hidden md:block" style={divider} />

            <div className="flex-1 flex flex-col justify-center px-5 py-3">
              <label style={fieldLabel}>Length of Stay</label>
              <select
                value={lengthOfStay}
                onChange={(e) => setLengthOfStay(e.target.value)}
                className="bg-transparent outline-none mt-1 appearance-none cursor-pointer"
                style={fieldValue}
              >
                <option className="text-brand-dark">7 nights</option>
                <option className="text-brand-dark">3 nights</option>
                <option className="text-brand-dark">4 nights</option>
                <option className="text-brand-dark">10 nights</option>
                <option className="text-brand-dark">14 nights</option>
              </select>
            </div>

            <div className="hidden md:block" style={divider} />

            <div className="flex-1 flex flex-col justify-center px-5 py-3">
              <label style={fieldLabel}>Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="bg-transparent outline-none mt-1 appearance-none cursor-pointer"
                style={fieldValue}
              >
                <option className="text-brand-dark">2 Guests</option>
                <option className="text-brand-dark">4 Guests</option>
                <option className="text-brand-dark">6 Guests</option>
                <option className="text-brand-dark">8+ Guests</option>
              </select>
            </div>

            <div className="hidden md:block" style={divider} />

            <div className="flex-1 flex flex-col justify-center px-5 py-3">
              <label style={fieldLabel}>Additional Filters</label>
              <select
                value={extraFilter}
                onChange={(e) => setExtraFilter(e.target.value)}
                className="bg-transparent outline-none mt-1 appearance-none cursor-pointer"
                style={fieldValue}
              >
                <option className="text-brand-dark">Any</option>
                <option className="text-brand-dark">Pet Friendly</option>
                <option className="text-brand-dark">Hot Tub</option>
                <option className="text-brand-dark">Sea View</option>
                <option className="text-brand-dark">Swimming Pool</option>
                <option className="text-brand-dark">Parking</option>
              </select>
            </div>

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

      {/* Desktop destination dropdown panel */}
      {destOpen && (
        <div className="hidden md:block absolute left-0 right-0" style={{ zIndex: 50 }}>
          <div ref={panelRef} className="pc-container">
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "32px 40px",
                boxShadow: "0 10px 40px rgba(47,85,80,0.15)",
              }}
            >
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

      {/* MOBILE compact card — visible only on mobile */}
      <div className="md:hidden" style={{ backgroundColor: "#6fb6ae" }}>
        <button
          onClick={() => setSheetOpen(true)}
          style={{
            width: "100%",
            padding: "20px 24px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 12,
            textAlign: "left",
          }}
        >
          <Search size={20} color="#ffffff" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Search Cornwall Cottages
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 400,
                color: "#ffffff",
                marginTop: 4,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {summary}
            </div>
          </div>
          <ChevronRight size={18} color="rgba(255,255,255,0.7)" />
        </button>
      </div>

      {/* MOBILE fullscreen sheet */}
      {sheetOpen && (
        <div
          className="md:hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSheetOpen(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 100,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "calc(100vh - 60px)",
              background: "#ffffff",
              padding: "24px 24px 32px",
              overflowY: "auto",
              animation: "pcSheetSlideUp 300ms ease-out",
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: 28,
                  color: "#2f5550",
                  margin: 0,
                }}
              >
                Search
              </h2>
              <button
                onClick={() => setSheetOpen(false)}
                aria-label="Close search"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2f5550",
                }}
              >
                <X size={28} />
              </button>
            </div>

            <div style={{ height: 1, background: "#e5e0da", marginTop: 20, marginBottom: 28 }} />

            {/* If a sub-picker (destinations) is open, show that view */}
            {mobileDestPickerOpen ? (
              <div style={{ flex: 1 }}>
                <button
                  onClick={() => setMobileDestPickerOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#6fb6ae",
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    cursor: "pointer",
                    padding: 0,
                    marginBottom: 20,
                  }}
                >
                  ← Back
                </button>
                {Object.entries(destinations).map(([heading, places]) => (
                  <div key={heading} style={{ marginBottom: 28 }}>
                    <h4
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#d3a36e",
                        marginBottom: 12,
                        fontFamily: "var(--font-body)",
                        letterSpacing: 2,
                        textTransform: "uppercase",
                      }}
                    >
                      {heading}
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {places.map((place) => (
                        <li key={`m-${heading}-${place}`}>
                          <button
                            onClick={() => {
                              setSelectedDest(place);
                              setMobileDestPickerOpen(false);
                            }}
                            style={{
                              width: "100%",
                              textAlign: "left",
                              fontFamily: "var(--font-body)",
                              fontSize: 17,
                              fontWeight: 400,
                              color: "#2f5550",
                              padding: "14px 0",
                              borderBottom: "1px solid #f0ece6",
                              background: "none",
                              border: "none",
                              borderBottomWidth: 1,
                              borderBottomStyle: "solid",
                              borderBottomColor: "#f0ece6",
                              cursor: "pointer",
                            }}
                          >
                            {place}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {/* Field 1: Destinations */}
                <div style={{ marginBottom: 24 }}>
                  <label style={sheetLabel}>Destinations</label>
                  <button
                    onClick={() => setMobileDestPickerOpen(true)}
                    style={{
                      ...sheetInput,
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{selectedDest}</span>
                    <ChevronRight size={18} color="#7a7a7a" />
                  </button>
                </div>

                {/* Field 2: Date of arrival */}
                <div style={{ marginBottom: 24 }}>
                  <label style={sheetLabel}>Date of Arrival</label>
                  <input
                    type="date"
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                    style={sheetInput}
                  />
                </div>

                {/* Field 3: Length of stay */}
                <div style={{ marginBottom: 24 }}>
                  <label style={sheetLabel}>Length of Stay</label>
                  <select
                    value={lengthOfStay}
                    onChange={(e) => setLengthOfStay(e.target.value)}
                    style={sheetInput}
                  >
                    <option>7 nights</option>
                    <option>3 nights</option>
                    <option>4 nights</option>
                    <option>10 nights</option>
                    <option>14 nights</option>
                  </select>
                </div>

                {/* Field 4: Guests */}
                <div style={{ marginBottom: 24 }}>
                  <label style={sheetLabel}>Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    style={sheetInput}
                  >
                    <option>2 Guests</option>
                    <option>4 Guests</option>
                    <option>6 Guests</option>
                    <option>8+ Guests</option>
                  </select>
                </div>

                {/* Field 5: Additional filters */}
                <div style={{ marginBottom: 24 }}>
                  <label style={sheetLabel}>Additional Filters</label>
                  <select
                    value={extraFilter}
                    onChange={(e) => setExtraFilter(e.target.value)}
                    style={sheetInput}
                  >
                    <option>Any</option>
                    <option>Pet Friendly</option>
                    <option>Hot Tub</option>
                    <option>Sea View</option>
                    <option>Swimming Pool</option>
                    <option>Parking</option>
                  </select>
                </div>

                {/* Search button */}
                <button
                  onClick={() => {
                    setSheetOpen(false);
                    // Placeholder: navigation to /search?... wired at WP port phase
                  }}
                  style={{
                    width: "100%",
                    padding: "18px 24px",
                    background: "#d3a36e",
                    color: "#ffffff",
                    border: "none",
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    fontFamily: "var(--font-body)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    marginTop: 32,
                    borderRadius: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#b88659")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#d3a36e")}
                >
                  <Search size={18} />
                  Search Cottages
                </button>
              </>
            )}
          </div>
          <style>{`
            @keyframes pcSheetSlideUp {
              from { transform: translateY(100%); }
              to { transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
