import { Search } from "lucide-react";

const SearchBar = () => (
  <div className="w-full bg-brand-dark">
    <div className="pc-container">
      <div className="flex flex-col md:flex-row items-stretch" style={{ minHeight: 80 }}>
        {/* Property Search */}
        <div className="flex-1 flex flex-col justify-center px-4 py-3 md:border-r" style={{ borderColor: "#5a7570" }}>
          <label
            className="block"
            style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "3px", fontWeight: 500, color: "#ffffff" }}
          >
            Property Search
          </label>
          <input
            type="text"
            placeholder="Search by name..."
            className="bg-transparent text-base outline-none mt-1"
            style={{ color: "#ffffff" }}
          />
        </div>

        {/* Destination */}
        <div className="flex-1 flex flex-col justify-center px-4 py-3 md:border-r" style={{ borderColor: "#5a7570" }}>
          <label
            className="block"
            style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "3px", fontWeight: 500, color: "#ffffff" }}
          >
            Destination / Region
          </label>
          <select
            className="bg-transparent text-base outline-none mt-1 appearance-none cursor-pointer"
            style={{ color: "#ffffff" }}
          >
            <option className="text-brand-dark">All Regions</option>
            <option className="text-brand-dark">St Ives</option>
            <option className="text-brand-dark">Padstow</option>
            <option className="text-brand-dark">Falmouth</option>
            <option className="text-brand-dark">Newquay</option>
          </select>
        </div>

        {/* Date of Arrival */}
        <div className="flex-1 flex flex-col justify-center px-4 py-3 md:border-r" style={{ borderColor: "#5a7570" }}>
          <label
            className="block"
            style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "3px", fontWeight: 500, color: "#ffffff" }}
          >
            Date of Arrival
          </label>
          <input
            type="date"
            className="bg-transparent text-base outline-none mt-1 [color-scheme:dark]"
            style={{ color: "#ffffff" }}
          />
        </div>

        {/* Length of Stay */}
        <div className="flex-1 flex flex-col justify-center px-4 py-3 md:border-r" style={{ borderColor: "#5a7570" }}>
          <label
            className="block"
            style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "3px", fontWeight: 500, color: "#ffffff" }}
          >
            Length of Stay
          </label>
          <select
            className="bg-transparent text-base outline-none mt-1 appearance-none cursor-pointer"
            style={{ color: "#ffffff" }}
          >
            <option className="text-brand-dark">7 nights</option>
            <option className="text-brand-dark">3 nights</option>
            <option className="text-brand-dark">4 nights</option>
            <option className="text-brand-dark">10 nights</option>
            <option className="text-brand-dark">14 nights</option>
          </select>
        </div>

        {/* Guests */}
        <div className="flex-1 flex flex-col justify-center px-4 py-3 md:border-r" style={{ borderColor: "#5a7570" }}>
          <label
            className="block"
            style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "3px", fontWeight: 500, color: "#ffffff" }}
          >
            Guests
          </label>
          <select
            className="bg-transparent text-base outline-none mt-1 appearance-none cursor-pointer"
            style={{ color: "#ffffff" }}
          >
            <option className="text-brand-dark">2 Guests</option>
            <option className="text-brand-dark">4 Guests</option>
            <option className="text-brand-dark">6 Guests</option>
            <option className="text-brand-dark">8+ Guests</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          className="flex items-center justify-center gap-2 px-8 py-3 bg-sandy-gold font-medium transition-opacity hover:opacity-90"
          style={{ textTransform: "uppercase", letterSpacing: "3px", fontSize: 14, minWidth: 140, color: "#ffffff" }}
        >
          <Search size={16} style={{ color: "#ffffff" }} />
          Search
        </button>
      </div>
    </div>
  </div>
);

export default SearchBar;
