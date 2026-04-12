import { Github, Mail, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/useLanguage";

const FONT = { fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' };

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer
      className="relative py-16 px-6 border-t border-white/8"
      style={FONT}
    >
      {/* Top separator glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
          {t.footer.connect}
        </h3>
        <p className="text-white/45 mb-8 max-w-md mx-auto text-sm leading-relaxed">
          {t.footer.description}
        </p>

        <div className="flex justify-center gap-3 mb-10">
          <a
            href="mailto:a0903109727@gmail.com"
            className="fluent-btn-ghost w-11 h-11 rounded-xl flex items-center justify-center text-white/60 hover:text-white"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Ai-Chen-Hsieh"
            target="_blank"
            rel="noopener noreferrer"
            className="fluent-btn-ghost w-11 h-11 rounded-xl flex items-center justify-center text-white/60 hover:text-white"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://medium.com/@chen090"
            target="_blank"
            rel="noopener noreferrer"
            className="fluent-btn-ghost w-11 h-11 rounded-xl flex items-center justify-center text-white/60 hover:text-white"
            aria-label="Blog"
          >
            <BookOpen className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs text-white/25">
          © {currentYear} Ai Chen Hsieh. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
