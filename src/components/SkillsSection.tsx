interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "CSS Framework/Tools",
    skills: ["SCSS", "Bootstrap", "Tailwind CSS", "Angular Material"],
  },
  {
    title: "Frameworks",
    skills: ["Angular", "React", "Node.js"],
  },
  {
    title: "Tools & Others",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Vite",
      "Vercel",
      "Tanstack Query",
      "Docker",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                  >
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
