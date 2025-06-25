
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const handleViewWork = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleGetInTouch = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground mb-2">Hi, I'm  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Arjun
            </span></span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-right delay-300">
            <p className="mb-2">Full Stack Developer</p>
            <p className="text-base md:text-lg max-w-2xl mx-auto">
              Passionate about creating innovative web solutions with React, Next.js, and Node.js.
              I love building chat applications, e-commerce platforms, and internationalization features.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-500">
            <Button
              size="lg"
              onClick={handleViewWork}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
            >
              View My Work
              <ArrowDown className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleGetInTouch}
              className="border-purple-500/50 hover:bg-purple-500/10"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in delay-700">
            <a
              href="https://github.com/arjun-computer-geek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-purple-400 transition-colors p-2 hover:scale-110 transform duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/arjun-computer-geek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-purple-400 transition-colors p-2 hover:scale-110 transform duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:arjun2000raj@gmail.com"
              className="text-muted-foreground hover:text-purple-400 transition-colors p-2 hover:scale-110 transform duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
