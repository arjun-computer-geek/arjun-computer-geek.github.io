import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="glass rounded-2xl p-8 md:p-12 text-center glow-border">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start a Project?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always excited to work on new projects and collaborate with amazing people.
              Whether you have a project in mind or just want to chat about tech, feel free to reach out!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
            >
              <a href="mailto:arjun2000raj@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500/50 hover:bg-purple-500/10"
            >
              <a href="/resume.pdf" target="_blank" className="flex items-center gap-2">
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/arjun-computer-geek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 hover:scale-110 transition-all duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/arjun-computer-geek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 hover:scale-110 transition-all duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:arjun2000raj@gmail.com"
              className="p-3 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 hover:scale-110 transition-all duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 Arjun. Built with ❤️ using React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
