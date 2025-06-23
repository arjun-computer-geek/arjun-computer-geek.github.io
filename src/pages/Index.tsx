import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { GitHubProjects } from "@/components/GitHubProjects";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-900/20">
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubProjects />
        <Blog />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
