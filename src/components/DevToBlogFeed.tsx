import React, { useEffect, useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface DevToPost {
    id: number;
    title: string;
    description: string;
    url: string;
    published_at: string;
    cover_image: string | null;
    tag_list: string[];
}

interface DevToBlogFeedProps {
    limit?: number;
    showSearch?: boolean;
}

const DevToBlogFeed: React.FC<DevToBlogFeedProps> = ({ limit, showSearch = false }) => {
    const [posts, setPosts] = useState<DevToPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://dev.to/api/articles?username=arjun_computer_geek')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch posts');
                return res.json();
            })
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const filteredPosts = useMemo(() => {
        if (!showSearch || !search.trim()) return posts;
        const q = search.toLowerCase();
        return posts.filter(post =>
            post.title.toLowerCase().includes(q) ||
            post.description.toLowerCase().includes(q) ||
            post.tag_list.some(tag => tag.toLowerCase().includes(q))
        );
    }, [posts, search, showSearch]);

    const displayPosts = limit ? filteredPosts.slice(0, limit) : filteredPosts;

    if (loading) return <div>Loading Dev.to posts...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Latest Dev.to Blog Posts
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Sharing insights about web development, best practices, and the latest technologies
                    </p>
                </div>
                {showSearch && (
                    <>
                        <div className="max-w-2xl mx-auto mb-6">
                            <input
                                type="text"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Search articles..."
                                className="w-full px-6 py-3 rounded-xl bg-[#18192a] border border-[#23244a] text-base text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-400"
                                aria-label="Search articles"
                            />
                        </div>
                        <div className="mb-4 text-left max-w-2xl mx-auto text-gray-400 text-sm">
                            {filteredPosts.length === 0 ? (
                                <>No articles found.</>
                            ) : (
                                <>Showing {displayPosts.length} of {filteredPosts.length} articles</>
                            )}
                        </div>
                    </>
                )}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
                    {displayPosts.map((post) => (
                        <div
                            key={post.id}
                            className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 glow-border group flex flex-col h-full"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-semibold text-purple-400 group-hover:text-purple-300 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                            </div>
                            <div className="text-sm text-muted-foreground mb-2">
                                {new Date(post.published_at).toLocaleDateString('en-US', {
                                    year: 'numeric', month: 'short', day: 'numeric'
                                })}
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-4 min-h-[3rem] line-clamp-3">
                                {post.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tag_list.slice(0, 3).map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                        {tag}
                                    </span>
                                ))}
                                {post.tag_list.length > 3 && (
                                    <span className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground">
                                        +{post.tag_list.length - 3}
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-3 pt-4 mt-auto">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="border-purple-500/50 hover:bg-purple-500/10 flex-1 group"
                                >
                                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                        Read on Dev.to
                                        <span aria-hidden="true">→</span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevToBlogFeed; 