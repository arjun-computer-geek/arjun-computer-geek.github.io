
import { useState } from "react";
import { Calendar, Clock, ArrowRight, Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blogPosts";
import { Navigation } from "@/components/Navigation";

const BlogPage = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const allTags = ["All", ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const clearFilters = () => {
    setSelectedTag("All");
    setSearchTerm("");
  };

  const hasActiveFilters = selectedTag !== "All" || searchTerm !== "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-900/20">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Blog Posts
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Insights, tutorials, and thoughts on web development, technology, and software engineering
            </p>
          </div>

          {/* Enhanced Filter Section */}
          <div className="mb-12">
            {/* Search and Filter Toggle */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 glass rounded-2xl border border-purple-500/20 bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-purple-400 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Filter Toggle Button (Mobile) */}
              <div className="lg:hidden">
                <Button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  variant="outline"
                  className="w-full border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                  {hasActiveFilters && (
                    <Badge className="ml-2 bg-purple-500 text-white px-2 py-1 text-xs">
                      {selectedTag !== "All" ? 1 : 0}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>

            {/* Filter Tags */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isFilterOpen || window.innerWidth >= 1024 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:max-h-96 lg:opacity-100'
            }`}>
              <div className="glass rounded-2xl p-6 border border-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-purple-400" />
                    <span className="text-sm font-medium text-foreground">Filter by topic</span>
                  </div>
                  {hasActiveFilters && (
                    <Button
                      onClick={clearFilters}
                      variant="ghost"
                      size="sm"
                      className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                    >
                      Clear all
                    </Button>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                        selectedTag === tag
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                          : "bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400/50"
                      }`}
                    >
                      {tag}
                      {selectedTag === tag && tag !== "All" && (
                        <X className="w-3 h-3 ml-2 inline" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Counter */}
            <div className="mt-6 text-center lg:text-left">
              <p className="text-muted-foreground">
                {filteredPosts.length === blogPosts.length 
                  ? `Showing all ${filteredPosts.length} articles`
                  : `Found ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} ${hasActiveFilters ? 'matching your filters' : ''}`
                }
              </p>
            </div>
          </div>

          {/* Blog Posts Grid with Animation */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 glow-border group opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                {/* Featured Badge */}
                {post.featured && (
                  <div className="mb-4">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Post Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Post Content */}
                <div className="space-y-4">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readingTime} min read
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-purple-400 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 4).map((tag) => (
                      <span 
                        key={tag} 
                        className={`px-3 py-1 text-xs rounded-full border transition-all duration-200 cursor-pointer hover:scale-105 ${
                          selectedTag === tag
                            ? "bg-purple-500 text-white border-purple-500"
                            : "bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30"
                        }`}
                        onClick={() => setSelectedTag(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 4 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                        +{post.tags.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Read More Button */}
                  <Button 
                    variant="outline" 
                    className="border-purple-500/50 hover:bg-purple-500/10 w-full group mt-6"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20 animate-fade-in">
              <div className="glass rounded-2xl p-12 max-w-md mx-auto">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">No Posts Found</h3>
                <p className="text-muted-foreground mb-4">
                  No blog posts match your search criteria. Try adjusting your search or filter.
                </p>
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  className="border-purple-500/50 hover:bg-purple-500/10"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
