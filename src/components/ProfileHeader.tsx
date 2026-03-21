import { Github, Mail, Phone, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

const ProfileHeader = () => {
  return (
    <header id="top" className="relative bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground overflow-hidden min-h-[600px] flex items-center">
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 sm:py-28 w-full">
        <div className="text-center">
          {/* Avatar */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent/20 border-4 border-accent flex items-center justify-center text-5xl font-bold backdrop-blur-sm">
            AC
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 drop-shadow-lg">
            Ai Chen Hsieh
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-primary-foreground/80 mb-8">
            Frontend Developer
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="backdrop-blur-sm"
            >
              <a href="mailto:a0903109727@gmail.com" className="gap-2">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="backdrop-blur-sm"
            >
              <a href="tel:+886903109727" className="gap-2">
                <Phone className="w-4 h-4" />
                Call
              </a>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="backdrop-blur-sm"
            >
              <a
                href="https://github.com/Ai-Chen-Hsieh"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="backdrop-blur-sm"
            >
              <a
                href="https://medium.com/@chen090"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Blog
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </header>
  );
};

export default ProfileHeader;
