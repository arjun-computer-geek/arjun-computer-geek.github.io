import { Github, ArrowRight, Lock, ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  const toggleProjectExpansion = (projectId: string) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

  // Truncate by characters for better UX with single-paragraph text
  const CHAR_LIMIT = 160;
  const truncateDescription = (text: string, charLimit: number = CHAR_LIMIT) => {
    if (text.length <= charLimit) return text;
    return text.slice(0, charLimit) + '...';
  };

  const hasMoreContent = (text: string, charLimit: number = CHAR_LIMIT) => {
    return text.length > charLimit;
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Showcasing my most impactful and technically challenging projects
          </p>
        </div>

        {/* Featured Projects Grid - Improved spacing and consistency */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div key={project.id} className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 glow-border group flex flex-col h-full relative">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {project.private && (
                  <div className="absolute top-4 right-4 bg-yellow-500/90 text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Private
                  </div>
                )}
              </div>

              <div className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                    {project.category}
                  </Badge>
                </div>
                {project.company && (
                  project.companyUrl ? (
                    <a href={project.companyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-purple-400 font-medium text-xs mb-2 hover:underline hover:text-pink-400 transition-colors">
                      <Briefcase className="w-3 h-3" />
                      {project.company}
                    </a>
                  ) : (
                    <div className="flex items-center gap-1 text-purple-400 font-medium text-xs mb-2">
                      <Briefcase className="w-3 h-3" />
                      {project.company}
                    </div>
                  )
                )}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Long Description with Read More */}
                <div className="mt-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {expandedProjects.has(project.id)
                      ? project.longDescription
                      : truncateDescription(project.longDescription, CHAR_LIMIT)
                    }
                  </p>

                  {hasMoreContent(project.longDescription, CHAR_LIMIT) && (
                    <button
                      onClick={() => toggleProjectExpansion(project.id)}
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1 transition-colors mt-2"
                    >
                      {expandedProjects.has(project.id) ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Read Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          Read More
                        </>
                      )}
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 mt-auto">
                  {project.private ? (
                    <Button variant="outline" size="sm" className="border-purple-500/50 hover:bg-purple-500/10 flex-1" disabled>
                      <Lock className="w-4 h-4 mr-2" />
                      Private Code
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="border-purple-500/50 hover:bg-purple-500/10 flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex-1">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 rotate-45" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button - Improved consistency */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-3 text-base font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <a href="/projects" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
