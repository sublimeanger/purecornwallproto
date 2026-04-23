import { useState } from "react";
import logo from "@/assets/pure-cornwall-logo.png";
import { Menu, X } from "lucide-react";

const navItems = ["Destinations", "Collections", "Journal", "About", "Contact"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <div className="pc-container flex items-center justify-between h-[90px] md:h-[120px]">
        <a href="/">
          <img src={logo} alt="Pure Cornwall" className="h-[72px] md:h-[96px] w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="nav-link text-brand-dark"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={28} className="text-brand-dark" />
          ) : (
            <Menu size={28} className="text-brand-dark" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={28} style={{ color: "#2f5550" }} />
          </button>
        </div>
        <div
          style={{
            padding: "0 32px 16px",
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#6fb6ae",
          }}
        >
          Menu
        </div>
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "20px 32px",
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: 22,
                color: "#2f5550",
                borderBottom: "1px solid #e5e0da",
                textDecoration: "none",
                transition: "color 200ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d3a36e")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2f5550")}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
