import { Code2, Lightbulb, Users, PenTool, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/context/useLanguage";

const ICONS: LucideIcon[] = [Code2, Lightbulb, Users, PenTool];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          {t.about.heading}
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-12">
          {t.about.bio}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.highlights.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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
