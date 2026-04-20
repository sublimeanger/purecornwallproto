import logo from "@/assets/pure-cornwall-logo.png";

const Footer = () => (
  <footer>
    {/* Upper footer */}
    <div className="relative overflow-hidden bg-brand-dark text-white" style={{ paddingTop: "7vw", paddingBottom: "3vw" }}>
      {/* Wave watermark */}
      <svg
        className="absolute bottom-0 right-0 pointer-events-none"
        width="280"
        height="120"
        viewBox="0 0 280 120"
        fill="none"
        style={{ opacity: 0.08 }}
        aria-hidden="true"
      >
        <path d="M10 60C40 25 70 25 100 60C130 95 160 95 190 60C220 25 250 25 270 45" stroke="#d3a36e" strokeWidth="3" strokeLinecap="round" />
        <path d="M10 85C40 50 70 50 100 85C130 120 160 120 190 85C220 50 250 50 270 70" stroke="#d3a36e" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div className="pc-container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 */}
          <div>
            <img src={logo} alt="Pure Cornwall" style={{ height: 110 }} className="mb-6 w-auto" />
            <p className="text-white/70 text-sm leading-relaxed">
              Pure Cornwall is a luxury holiday cottage rental company dedicated to showcasing the very best properties across Cornwall's stunning coastline.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4
              className="text-white text-sm mb-6"
              style={{ textTransform: "uppercase", letterSpacing: "3px" }}
            >
              Destinations
            </h4>
            <ul className="space-y-3">
              {["St Ives", "Padstow", "Falmouth", "Newquay", "Penzance", "Truro"].map((d) => (
                <li key={d}>
                  <a href="#" className="text-white/70 text-sm hover:text-brand-teal transition-colors">
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4
              className="text-white text-sm mb-6"
              style={{ textTransform: "uppercase", letterSpacing: "3px" }}
            >
              Discover
            </h4>
            <ul className="space-y-3">
              {["Collections", "Journal", "About", "Contact", "FAQs"].map((d) => (
                <li key={d}>
                  <a href="#" className="text-white/70 text-sm hover:text-brand-teal transition-colors">
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div>
            <h4
              className="text-white text-sm mb-6"
              style={{ textTransform: "uppercase", letterSpacing: "3px" }}
            >
              Newsletter
            </h4>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Join for seasonal guides and exclusive property previews
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent border-b-2 border-sandy-gold text-white text-sm px-1 py-2 outline-none placeholder:text-white/40"
              />
              <button
                className="ml-2 bg-sandy-gold text-white px-7 py-3 hover:opacity-90 transition-opacity"
                style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "3px" }}
              >
                Subscribe
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/70 hover:text-brand-teal transition-colors text-sm">Instagram</a>
              <a href="#" className="text-white/70 hover:text-brand-teal transition-colors text-sm">Facebook</a>
            </div>
          </div>
        </div>

        {/* Editorial sign-off */}
        <p
          className="text-center mt-12"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 14,
            color: "rgba(211,163,110,0.95)",
          }}
        >
          Pure Cornwall — handpicked holiday cottages, beautifully curated.
        </p>
      </div>
    </div>

    {/* Lower bar — white with gold separator */}
    <div className="bg-white" style={{ borderTop: "1px solid #d3a36e" }}>
      <div className="pc-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "#3a3a3a" }}>© 2026 Pure Cornwall. All rights reserved.</p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((l) => (
            <a key={l} href="#" className="text-xs transition-colors hover:text-brand-teal" style={{ color: "#3a3a3a" }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
