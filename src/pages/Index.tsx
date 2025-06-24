import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { GitHubProjects } from "@/components/GitHubProjects";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { useAnchorScroll } from "@/hooks/use-anchor-scroll";
import DevToBlogFeed from '../components/DevToBlogFeed';

const Index = () => {
  useAnchorScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-900/20">
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GitHubProjects />
        <div className="my-16">
          <DevToBlogFeed limit={3} />
          <div className="flex justify-center mt-8">
            <a href="/blog" className="px-6 py-2 rounded-lg bg-[#e879f9] text-white font-semibold hover:bg-[#d946ef] transition-colors">View All Posts →</a>
          </div>
        </div>
        <Contact />
      </main>
    </div>
  );
};

export default Index;
