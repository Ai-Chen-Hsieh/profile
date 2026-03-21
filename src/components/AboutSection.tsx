import { Code2, Lightbulb, Users, PenTool, type LucideIcon } from "lucide-react";

interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AboutSection = () => {
  const highlights: Highlight[] = [
    {
      icon: Code2,
      title: "Frontend Expert",
      description: "Proficient in Angular & React with modern tooling",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Passionate about delivering high-quality solutions",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Experience collaborating with international teams",
    },
    {
      icon: PenTool,
      title: "Knowledge Sharer",
      description: "Technical speaker & tech blog writer",
    },
  ];

  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          About Me
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-12">
          A Frontend developer with experience in building web applications
          using Angular and React. I'm passionate about learning new
          technologies and solving complex problems to deliver high-quality
          solutions. I enjoy sharing technical knowledge as a technical speaker
          and writing tech blogs to share insights and expertise.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
