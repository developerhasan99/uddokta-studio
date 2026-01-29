import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ArrowUpRight, Filter } from "lucide-react";

const categories = [
  "সব খবর",
  "বিজনেস কৌশল",
  "ডিজাইন",
  "টেকনোলজি",
  "উদ্যোক্তা জীবন",
];

interface BlogPost {
  slug: string;
  data: {
    title: string;
    description: string;
    pubDate: string;
    author: string;
    image: string;
    category: string;
    readTime: string;
  };
}

interface BlogGalleryProps {
  posts: BlogPost[];
}

const BlogGallery: React.FC<BlogGalleryProps> = ({ posts }) => {
  const [activeTab, setActiveTab] = useState("সব খবর");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesTab =
      activeTab === "সব খবর" || post.data.category === activeTab;
    const matchesSearch = post.data.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 -mt-10 mb-10">
        <div className="relative w-full md:w-80 group">
          <Search
            className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors"
            size={20}
          />
          <input
            type="text"
            placeholder="খুঁজুন..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-3xl focus:outline-none focus:border-red-600 focus:bg-white transition-all font-medium text-slate-900"
          />
        </div>
      </div>

      <section className="border-y border-slate-100 py-6 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-4 min-w-max">
          <Filter size={18} className="text-red-600 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`
                px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap
                ${activeTab === cat
                  ? "bg-red-600 text-white shadow-xl shadow-red-600/20"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col h-full"
                >
                  <a
                    href={`/blog/${post.slug}`}
                    className="block relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-white mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700"
                  >
                    <img
                      src={post.data.image}
                      alt={post.data.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-red-600 text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      {post.data.category}
                    </div>
                  </a>

                  <div className="px-4 flex-grow">
                    <div className="flex items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} /> {post.data.pubDate}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} /> {post.data.readTime}
                      </div>
                    </div>

                    <a href={`/blog/${post.slug}`}>
                      <h4 className="text-3xl font-display font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-4 leading-tight">
                        {post.data.title}
                      </h4>
                    </a>

                    <p className="text-slate-500 font-medium line-clamp-2 mb-8 leading-relaxed">
                      {post.data.description}
                    </p>

                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all"
                    >
                      পড়ুন <ArrowUpRight size={18} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="py-40 text-center">
              <h3 className="text-2xl font-bold text-slate-400">
                দুঃখিত, কোনো পোস্ট খুঁজে পাওয়া যায়নি।
              </h3>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogGallery;
