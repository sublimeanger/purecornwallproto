import logo from "@/assets/pure-cornwall-logo.png";

const Footer = () => (
  <footer className="bg-brand-dark text-white" style={{ paddingTop: "7vw", paddingBottom: "2.5vw" }}>
    <div className="pc-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {/* Col 1 */}
        <div>
          <img src={logo} alt="Pure Cornwall" style={{ height: 50 }} className="mb-6" />
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

      {/* Bottom bar */}
      <div className="mt-12 pt-6 border-t border-sandy-gold flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-xs">© 2026 Pure Cornwall. All rights reserved.</p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((l) => (
            <a key={l} href="#" className="text-white/50 text-xs hover:text-white transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
