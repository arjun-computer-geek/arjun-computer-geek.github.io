import { useState, useMemo } from "react";
import { Github, Star, GitFork, ExternalLink, Calendar, Search, Filter, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useGitHubRepos } from "@/hooks/use-github";
import { Navigation } from "@/components/Navigation";

const GitHubProjectsPage = () => {
    const { data: repos, isLoading, error } = useGitHubRepos();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("All");
    const [sortBy, setSortBy] = useState("updated");

    // Get unique languages for filter
    const languages = useMemo(() => {
        if (!repos) return [];
        const langSet = new Set(repos.map(repo => repo.language).filter(Boolean));
        return ["All", ...Array.from(langSet).sort()];
    }, [repos]);

    // Filter and sort repositories
    const filteredRepos = useMemo(() => {
        if (!repos) return [];

        const filtered = repos.filter(repo => {
            const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesLanguage = selectedLanguage === "All" || repo.language === selectedLanguage;
            return matchesSearch && matchesLanguage;
        });

        // Sort repositories
        filtered.sort((a, b) => {
            switch (sortBy) {
                case "stars":
                    return b.stargazers_count - a.stargazers_count;
                case "forks":
                    return b.forks_count - a.forks_count;
                case "name":
                    return a.name.localeCompare(b.name);
                case "created":
                    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
                case "updated":
                default:
                    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
            }
        });

        return filtered;
    }, [repos, searchTerm, selectedLanguage, sortBy]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-900/20">
                <Navigation />
                <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <Loader2 className="w-8 h-8 animate-spin text-purple-400 mx-auto" />
                        <p className="mt-4 text-muted-foreground">Loading GitHub repositories...</p>
                    </div>
                </main>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-900/20">
                <Navigation />
                <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="glass rounded-2xl p-12 max-w-md mx-auto">
                            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Github className="w-8 h-8 text-red-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-red-400 mb-2">Error Loading Repositories</h3>
                            <p className="text-muted-foreground">
                                Unable to fetch repositories from GitHub. Please try again later.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-900/20">
            <Navigation />

            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            GitHub Repositories
                        </h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            All my public repositories from GitHub, automatically updated
                        </p>
                    </div>

                    {/* Search and Filters */}
                    <div className="glass rounded-xl p-6 mb-12">
                        <div className="grid md:grid-cols-3 gap-4">
                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search repositories..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>

                            {/* Language Filter */}
                            <div className="flex items-center gap-2">
                                <Filter className="w-4 h-4 text-purple-400" />
                                <select
                                    value={selectedLanguage}
                                    onChange={(e) => setSelectedLanguage(e.target.value)}
                                    className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    {languages.map((lang) => (
                                        <option key={lang} value={lang}>
                                            {lang}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Sort By */}
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    <option value="updated">Last Updated</option>
                                    <option value="created">Created Date</option>
                                    <option value="stars">Stars</option>
                                    <option value="forks">Forks</option>
                                    <option value="name">Name</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mb-8">
                        <p className="text-muted-foreground">
                            Showing {filteredRepos.length} of {repos?.length || 0} repositories
                        </p>
                    </div>

                    {/* Repositories Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredRepos.map((repo) => (
                            <div key={repo.id} className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 glow-border group">
                                {/* Repository Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                                        {repo.name}
                                    </h3>
                                    <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                                        {repo.language || 'Mixed'}
                                    </Badge>
                                </div>

                                {/* Repository Description */}
                                <p className="text-muted-foreground leading-relaxed mb-4 min-h-[3rem]">
                                    {repo.description || 'No description available'}
                                </p>

                                {/* Repository Stats */}
                                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-500" />
                                        <span>{repo.stargazers_count}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <GitFork className="w-4 h-4 text-blue-500" />
                                        <span>{repo.forks_count}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4 text-green-500" />
                                        <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
                                    </div>
                                </div>

                                {/* Topics/Tags */}
                                {repo.topics && repo.topics.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {repo.topics.slice(0, 3).map((topic) => (
                                            <span key={topic} className="px-2 py-1 text-xs rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                                {topic}
                                            </span>
                                        ))}
                                        {repo.topics.length > 3 && (
                                            <span className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground">
                                                +{repo.topics.length - 3}
                                            </span>
                                        )}
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4">
                                    <Button variant="outline" size="sm" className="border-purple-500/50 hover:bg-purple-500/10 flex-1">
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>
                                    </Button>
                                    {repo.homepage && (
                                        <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex-1">
                                            <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                                <ExternalLink className="w-4 h-4" />
                                                Demo
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredRepos.length === 0 && (
                        <div className="text-center py-20">
                            <div className="glass rounded-2xl p-12 max-w-md mx-auto">
                                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search className="w-8 h-8 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-purple-400 mb-2">No Repositories Found</h3>
                                <p className="text-muted-foreground">
                                    No repositories match your search criteria. Try adjusting your filters.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default GitHubProjectsPage; 