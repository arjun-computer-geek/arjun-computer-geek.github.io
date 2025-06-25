import { useState } from "react";
import { useExperience, useGitHubStats } from "@/hooks/use-github";
import { Loader2 } from "lucide-react";
import { formatExperience } from "@/lib/utils";

export const About = () => {
  const [imgError, setImgError] = useState(false);
  const { data: experience, isLoading: experienceLoading } = useExperience();
  const { data: stats, isLoading: statsLoading } = useGitHubStats();

  const isLoading = experienceLoading || statsLoading;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="glass rounded-2xl p-8 md:p-12 glow-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Section */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center p-4">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-6xl font-bold text-white">
                    {imgError ? (
                      "A"
                    ) : (
                      <img
                        src="/profile.png"
                        alt="Arjun Kumar - Full Stack Developer Profile Photo"
                        className="w-full h-full rounded-xl object-cover shadow-lg"
                        onError={() => setImgError(true)}
                        loading="eager"
                      />
                    )}
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl animate-glow"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate Full Stack Developer with over 2 years of experience in creating innovative web solutions.
                  My journey in tech started with a web development bootcamp and has evolved into a deep passion for
                  building applications that make a difference in the digital world.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in modern web technologies including React, Next.js, Node.js, and MongoDB. I have experience
                  in developing chat applications, e-commerce platforms, and internationalization features. When I'm not coding,
                  you can find me exploring new technologies, contributing to open source projects, or sharing knowledge
                  with the developer community.
                </p>
              </div>

              {/* Primary Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="w-8 h-8 animate-spin text-purple-400" />
                    </div>
                  ) : (
                    <>
                      <div className="text-3xl font-bold text-purple-400 mb-2">
                        {experience ? formatExperience(experience.years, experience.months % 12) : '0 months'}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">Experience</div>
                    </>
                  )}
                </div>
                <div className="text-center p-6 rounded-xl bg-pink-500/10 border border-pink-500/20 backdrop-blur-sm">
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="w-8 h-8 animate-spin text-pink-400" />
                    </div>
                  ) : (
                    <>
                      <div className="text-3xl font-bold text-pink-400 mb-2">
                        {stats?.totalRepos || 0}+
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
                    </>
                  )}
                </div>
              </div>

              {/* Secondary Stats Grid */}
              {!isLoading && stats && (
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                    <div className="text-xl font-bold text-blue-400 mb-1">{stats.totalStars}</div>
                    <div className="text-xs text-muted-foreground font-medium">Stars</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
                    <div className="text-xl font-bold text-green-400 mb-1">{stats.totalForks}</div>
                    <div className="text-xs text-muted-foreground font-medium">Forks</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm">
                    <div className="text-xl font-bold text-orange-400 mb-1">{Object.keys(stats.topLanguages).length}</div>
                    <div className="text-xs text-muted-foreground font-medium">Languages</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
