import { useState, useEffect } from "react";
import logo from "@/assets/pure-cornwall-logo.png";
import { Menu, X } from "lucide-react";

const navItems = ["Destinations", "Collections", "Journal", "About", "Contact"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="pc-container flex items-center justify-between" style={{ height: 90 }}>
        <a href="/">
          <img src={logo} alt="Pure Cornwall" style={{ height: 60 }} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`nav-link ${scrolled ? "text-brand-dark" : "text-white"}`}
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
            <X size={28} className={scrolled ? "text-brand-dark" : "text-white"} />
          ) : (
            <Menu size={28} className={scrolled ? "text-brand-dark" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-brand-dark z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={28} className="text-white" />
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="nav-link text-white text-lg"
              onClick={() => setMenuOpen(false)}
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
