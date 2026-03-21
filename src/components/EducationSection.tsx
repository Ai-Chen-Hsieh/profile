import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-16 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          Education & Certification
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
                  Bachelor of Food Science
                </h3>
                <p className="text-accent font-medium mb-2">
                  National Ilan University
                </p>
                <p className="text-sm text-muted-foreground">
                  June 2014 - September 2018
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
                  Full Stack Web Development
                </h3>
                <p className="text-accent font-medium mb-2">Alpha Camp</p>
                <p className="text-sm text-muted-foreground">
                  October 2022 - April 2023
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
