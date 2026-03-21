import { Github, Mail, BookOpen } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
        <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">
          I'm always open to discussing new opportunities and interesting
          projects.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href="mailto:a0903109727@gmail.com"
            className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Ai-Chen-Hsieh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://medium.com/@chen090"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            aria-label="Blog"
          >
            <BookOpen className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm text-primary-foreground/50">
          © {currentYear} Ai Chen Hsieh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
