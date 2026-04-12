import { useLanguage } from "@/context/useLanguage";

const FONT = { fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' };

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 px-6 section-hidden" style={FONT}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[#00D4FF]/70 mb-3">
            Skills
          </p>
          <h2 className="text-3xl font-bold text-white">
            {t.skills.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.skills.categories.map((category) => (
            <div
              key={category.title}
              className="fluent-acrylic-surface fluent-depth-1 rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold text-white/80 mb-4 pb-3 border-b border-white/8 tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag-dark">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
