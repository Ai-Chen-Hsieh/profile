import { GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/context/useLanguage";

const EducationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-16 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          {t.education.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {t.education.degree}
                </h3>
                <p className="text-accent font-medium mb-2">
                  {t.education.university}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t.education.universityPeriod}
                </p>
              </div>
            </div>
          </div>

          {/* Certification */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {t.education.cert}
                </h3>
                <p className="text-accent font-medium mb-2">{t.education.certSchool}</p>
                <p className="text-sm text-muted-foreground">
                  {t.education.certPeriod}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
