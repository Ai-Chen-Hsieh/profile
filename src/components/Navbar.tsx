import { useLanguage } from "@/context/useLanguage";

const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary py-4 px-4">
      <nav className="flex items-center justify-end gap-4">
        <ul className="flex gap-4">
          <li>
            <a href="#about" className="text-sm text-white hover:underline">
              {t.nav.about}
            </a>
          </li>
          <li>
            <a href="#experience" className="text-sm text-white hover:underline">
              {t.nav.experience}
            </a>
          </li>
          <li>
            <a href="#education" className="text-sm text-white hover:underline">
              {t.nav.education}
            </a>
          </li>
          <li>
            <a href="#skills" className="text-sm text-white hover:underline">
              {t.nav.skills}
            </a>
          </li>
        </ul>
        <button
          onClick={toggleLanguage}
          className="text-xs text-white border border-white/40 rounded px-2 py-1 hover:bg-white/10 transition-colors"
        >
          {language === "en" ? "中文" : "EN"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
