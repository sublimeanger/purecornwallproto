import logo from "@/assets/pure-cornwall-logo.png";

const Footer = () => (
  <footer>
    {/* Upper footer — brand gold background */}
    <div className="relative overflow-hidden bg-[#d3a36e] text-white" style={{ paddingTop: "7vw", paddingBottom: "3vw" }}>
      {/* Subtle wave watermark */}
      <svg
        className="absolute bottom-0 right-0 pointer-events-none"
        width="280"
        height="120"
        viewBox="0 0 280 120"
        fill="none"
        style={{ opacity: 0.06 }}
        aria-hidden="true"
      >
        <path d="M10 60C40 25 70 25 100 60C130 95 160 95 190 60C220 25 250 25 270 45" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <path d="M10 85C40 50 70 50 100 85C130 120 160 120 190 85C220 50 250 50 270 70" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div className="pc-container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 */}
          <div>
            <img src={logo} alt="Pure Cornwall" style={{ height: 110 }} className="mb-6 w-auto brightness-0 invert" />
            <p className="text-white/80 text-sm leading-relaxed">
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
            {[
                { label: "St Ives", href: "/destinations/st-ives" },
                { label: "Padstow", href: "/destinations/padstow" },
                { label: "Falmouth", href: "/destinations/falmouth" },
                { label: "Newquay", href: "/destinations/newquay" },
                { label: "Penzance", href: "/destinations/penzance" },
                { label: "Truro", href: "/destinations/truro" },
              ].map((d) => (
                <li key={d.label}>
                  <a href={d.href} className="text-white/70 text-sm hover:text-white transition-colors">
                    {d.label}
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
            {[
                { label: "Collections", href: "/collections" },
                { label: "Journal", href: "/journal" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "FAQs", href: "#" },
              ].map((d) => (
                <li key={d.label}>
                  <a href={d.href} className="text-white/70 text-sm hover:text-white transition-colors">
                    {d.label}
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
                className="flex-1 bg-transparent border-b-2 border-white/40 text-white text-sm px-1 py-2 outline-none placeholder:text-white/40 focus:border-[#6fb6ae] transition-colors"
              />
              <button
                className="ml-2 bg-[#6fb6ae] text-white px-7 py-3 hover:bg-[#5aa89e] transition-colors"
                style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "3px" }}
              >
                Subscribe
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Instagram</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Facebook</a>
            </div>
          </div>
        </div>

        {/* Editorial sign-off */}
        <p
          className="text-center mt-12"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 14,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Pure Cornwall — handpicked holiday cottages, beautifully curated.
        </p>
      </div>
    </div>

    {/* Lower bar — teal with gold separator */}
    <div className="bg-[#6fb6ae]" style={{ borderTop: "1px solid #d3a36e" }}>
      <div className="pc-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/90">© 2026 Pure Cornwall. All rights reserved.</p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((l) => (
            <a key={l} href="#" className="text-xs text-white/90 transition-colors hover:text-white">
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
