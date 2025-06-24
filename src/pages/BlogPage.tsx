import { Navigation } from "@/components/Navigation";
import DevToBlogFeed from '../components/DevToBlogFeed';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-900/20">
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <DevToBlogFeed showSearch />
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
