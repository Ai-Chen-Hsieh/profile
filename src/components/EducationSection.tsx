import { GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/context/useLanguage";

const FONT = { fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' };

const EducationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 px-6 section-hidden" style={FONT}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[#10B981]/70 mb-3">
            Education
          </p>
          <h2 className="text-3xl font-bold text-white">
            {t.education.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education */}
          <div className="fluent-acrylic-surface fluent-depth-2 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5 group">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: "rgba(0,120,212,0.12)",
                  border: "1px solid rgba(0,120,212,0.3)",
                }}
              >
                <GraduationCap className="w-6 h-6 text-[#0078D4]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1 tracking-tight">
                  {t.education.degree}
                </h3>
                <p className="text-[#00D4FF] font-medium text-sm mb-2">
                  {t.education.university}
                </p>
                <p className="text-xs text-white/40">{t.education.universityPeriod}</p>
              </div>
            </div>
          </div>

          {/* Certification */}
          <div className="fluent-acrylic-surface fluent-depth-2 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5 group">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.3)",
                }}
              >
                <Award className="w-6 h-6 text-[#7C3AED]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1 tracking-tight">
                  {t.education.cert}
                </h3>
                <p className="text-[#00D4FF] font-medium text-sm mb-2">
                  {t.education.certSchool}
                </p>
                <p className="text-xs text-white/40">{t.education.certPeriod}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
