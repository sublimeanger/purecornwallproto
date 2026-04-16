import { Search } from "lucide-react";

const SearchBar = () => (
  <div className="w-full bg-brand-dark">
    <div className="pc-container">
      <div className="flex flex-col md:flex-row items-stretch" style={{ minHeight: 80 }}>
        {/* Destination */}
        <div className="flex-1 flex flex-col justify-center px-4 py-3 md:border-r border-white/15">
          <label
            className="text-white/50 block"
            style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "3px" }}
          >
            Destination / Region
          </label>
          <select className="bg-transparent text-white text-base outline-none mt-1 appearance-none cursor-pointer">
            <option className="text-brand-dark">All Regions</option>
            <option className="text-brand-dark">St Ives</option>
            <option className="text-brand-dark">Padstow</option>
            <option className="text-brand-dark">Falmouth</option>
            <option className="text-brand-dark">Newquay</option>
          </select>
        </div>

        {/* Date of Arrival */}
        <div className="flex-1 flex flex-col justify-center px-4 py-3 md:border-r border-white/15">
          <label
            className="text-white/50 block"
            style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "3px" }}
          >
            Date of Arrival
          </label>
          <input
            type="date"
            className="bg-transparent text-white text-base outline-none mt-1 [color-scheme:dark]"
          />
        </div>

        {/* Length of Stay */}
        <div className="flex-1 flex flex-col justify-center px-4 py-3 md:border-r border-white/15">
          <label
            className="text-white/50 block"
            style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "3px" }}
          >
            Length of Stay
          </label>
          <select className="bg-transparent text-white text-base outline-none mt-1 appearance-none cursor-pointer">
            <option className="text-brand-dark">7 nights</option>
            <option className="text-brand-dark">3 nights</option>
            <option className="text-brand-dark">4 nights</option>
            <option className="text-brand-dark">10 nights</option>
            <option className="text-brand-dark">14 nights</option>
          </select>
        </div>

        {/* Guests */}
        <div className="flex-1 flex flex-col justify-center px-4 py-3 md:border-r border-white/15">
          <label
            className="text-white/50 block"
            style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "3px" }}
          >
            Guests
          </label>
          <select className="bg-transparent text-white text-base outline-none mt-1 appearance-none cursor-pointer">
            <option className="text-brand-dark">2 Guests</option>
            <option className="text-brand-dark">4 Guests</option>
            <option className="text-brand-dark">6 Guests</option>
            <option className="text-brand-dark">8+ Guests</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          className="flex items-center justify-center gap-2 px-8 py-3 bg-sandy-gold text-white font-medium transition-opacity hover:opacity-90"
          style={{ textTransform: "uppercase", letterSpacing: "3px", fontSize: 14, minWidth: 140 }}
        >
          <Search size={16} />
          Search
        </button>
      </div>
    </div>
  </div>
);

export default SearchBar;
