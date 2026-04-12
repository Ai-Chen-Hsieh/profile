import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/context/useLanguage";

const FONT = { fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' };

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-6 section-hidden" style={FONT}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[#7C3AED]/70 mb-3">
            Experience
          </p>
          <h2 className="text-3xl font-bold text-white">
            {t.experience.heading}
          </h2>
        </div>

        <div className="space-y-6">
          {t.experience.items.map((exp, index) => (
            <div
              key={`${exp.company}-${index}`}
              className="fluent-acrylic-surface fluent-depth-2 rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-0.5 group"
              style={{ borderLeft: "2px solid rgba(0,120,212,0.3)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderLeftColor = "rgba(0,120,212,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderLeftColor = "rgba(0,120,212,0.3)";
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: "rgba(0,120,212,0.12)",
                      border: "1px solid rgba(0,120,212,0.3)",
                    }}
                  >
                    <Briefcase className="w-6 h-6 text-[#0078D4]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="text-[#00D4FF] font-medium mt-0.5">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/40 text-sm shrink-0">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 ml-4">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={`${achievement}-${i}`}
                    className="relative pl-5 text-white/55 text-sm leading-relaxed"
                  >
                    <span
                      className="absolute left-0 top-[0.45em] w-1.5 h-1.5 rounded-full bg-[#0078D4]/70"
                    />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
