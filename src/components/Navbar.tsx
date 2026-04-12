import { useState, useEffect } from "react";
import { useLanguage } from "@/context/useLanguage";

const FONT = { fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' };

const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "fluent-acrylic fluent-depth-2" : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-5xl mx-auto flex items-center justify-end gap-4 py-4 px-6"
        style={FONT}
      >
        <ul className="flex gap-6">
          <li>
            <a
              href="#about"
              className="text-sm text-white/70 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {t.nav.about}
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-sm text-white/70 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {t.nav.experience}
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="text-sm text-white/70 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {t.nav.education}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-sm text-white/70 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {t.nav.skills}
            </a>
          </li>
        </ul>

        <button
          onClick={toggleLanguage}
          className="fluent-btn-ghost text-xs text-white/80 px-3 py-1.5 rounded-lg"
        >
          {language === "en" ? "中文" : "EN"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
