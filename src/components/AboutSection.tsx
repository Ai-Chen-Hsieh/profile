import { Code2, Lightbulb, Users, PenTool, type LucideIcon } from "lucide-react";
import { type MouseEvent } from "react";
import { useLanguage } from "@/context/useLanguage";

const ICONS: LucideIcon[] = [Code2, Lightbulb, Users, PenTool];
const COLORS = ["#0078D4", "#7C3AED", "#00D4FF", "#10B981"];

const FONT = { fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' };

const handleReveal = (e: MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--rx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--ry", `${e.clientY - rect.top}px`);
};

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-6 section-hidden" style={FONT}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[#0078D4]/70 mb-3">
            About
          </p>
          <h2 className="text-3xl font-bold text-white mb-6">
            {t.about.heading}
          </h2>
          <p className="text-lg text-white/50 leading-relaxed max-w-3xl mx-auto">
            {t.about.bio}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.about.highlights.map((item, i) => {
            const Icon = ICONS[i];
            const color = COLORS[i];
            return (
              <div
                key={item.title}
                className="reveal-card fluent-acrylic-surface fluent-depth-1 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-default group"
                onMouseMove={handleReveal}
              >
                <div
                  className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-white/45 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
