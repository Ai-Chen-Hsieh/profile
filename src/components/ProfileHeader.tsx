import { Github, Mail, Phone, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/useLanguage";

const FONT = { fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' };

const ProfileHeader = () => {
  const { t } = useLanguage();

  return (
    <header
      id="top"
      className="relative overflow-hidden min-h-[600px] flex items-center"
      style={FONT}
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#0078D4]/8 blur-[110px] pointer-events-none animate-web3-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#7C3AED]/6 blur-[90px] pointer-events-none animate-web3-pulse" style={{ animationDelay: "1.3s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 w-full">
        <div className="text-center">

          {/* Avatar */}
          <div
            className="w-32 h-32 mx-auto mb-7 rounded-full fluent-acrylic-surface fluent-depth-2 flex items-center justify-center text-4xl font-bold text-white animate-web3-slide-up"
            style={{
              border: "2px solid rgba(0,120,212,0.45)",
              boxShadow: "0 0 32px rgba(0,120,212,0.25), 0 0 80px rgba(0,120,212,0.08)",
            }}
          >
            AC
          </div>

          {/* Name */}
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 animate-web3-slide-up web3-gradient-text"
            style={{ animationDelay: "0.1s" }}
          >
            Ai Chen Hsieh
          </h1>

          {/* Title */}
          <p
            className="text-xl sm:text-2xl font-light text-white/60 mb-10 animate-web3-slide-up tracking-wide"
            style={{ animationDelay: "0.2s" }}
          >
            {t.profile.title}
          </p>

          {/* Contact Links */}
          <div
            className="flex flex-wrap justify-center gap-3 animate-web3-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="mailto:a0903109727@gmail.com"
              className="fluent-btn-ghost flex items-center gap-2 text-sm text-white/80 px-4 py-2.5 rounded-xl"
            >
              <Mail className="w-4 h-4" />
              {t.profile.email}
            </a>
            <a
              href="tel:+886903109727"
              className="fluent-btn-ghost flex items-center gap-2 text-sm text-white/80 px-4 py-2.5 rounded-xl"
            >
              <Phone className="w-4 h-4" />
              {t.profile.call}
            </a>
            <a
              href="https://github.com/Ai-Chen-Hsieh"
              target="_blank"
              rel="noopener noreferrer"
              className="fluent-btn-ghost flex items-center gap-2 text-sm text-white/80 px-4 py-2.5 rounded-xl"
            >
              <Github className="w-4 h-4" />
              {t.profile.github}
            </a>
            <a
              href="https://medium.com/@chen090"
              target="_blank"
              rel="noopener noreferrer"
              className="fluent-btn-ghost flex items-center gap-2 text-sm text-white/80 px-4 py-2.5 rounded-xl"
            >
              <BookOpen className="w-4 h-4" />
              {t.profile.blog}
            </a>
          </div>
        </div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050A18] to-transparent pointer-events-none" />
    </header>
  );
};

export default ProfileHeader;
