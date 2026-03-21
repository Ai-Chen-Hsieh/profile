import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Galaxy Software Services",
    period: "November 2024 – Present",
    achievements: [
      "Developed SaaS applications including E-Form systems, case management systems, and integrated platform features",
      "Contributed to internal frontend component library, creating reusable and scalable components",
      "Designed iframe-based architecture to integrate core products with third-party services",
      "Implemented GitLab CI/CD pipelines with Docker-based development environments",
      "Collaborated on requirement analysis, frontend architecture design, and system optimization",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Shinda Technology",
    period: "July 2023 - August 2024",
    achievements: [
      "Developed SaaS applications (E-commerce, EIP System) using Angular, RxJS, Tailwind, and Bootstrap",
      "Resolved cross-platform issues, ensuring adaptability across devices and browsers",
      "Optimized front-end performance through code refactoring and lazy loading",
      "Collaborated with international teams on complex projects",
      "Technical speaker for RxJS and Tailwind CSS sessions with 30+ attendees",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={`${exp}-${index}`}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 ml-4">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={`${achievement}-${i}`}
                    className="relative pl-6 text-muted-foreground before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-accent before:rounded-full"
                  >
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
