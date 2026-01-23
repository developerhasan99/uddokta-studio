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

const blogPosts = [
  {
    id: 1,
    title: "২০২৪ সালে ই-কমার্স বিজনেসের ৫টি জরুরি ট্রেন্ড",
    excerpt:
      "বাংলাদেশের ই-কমার্স মার্কেট দ্রুত পাল্টাচ্ছে। আপনি যদি নতুন উদ্যোক্তা হয়ে থাকেন, তবে এই ৫টি ট্রেন্ড সম্পর্কে জানা আপনার জন্য বাধ্যতামূলক...",
    category: "বিজনেস কৌশল",
    date: "মে ১৫, ২০২৪",
    readTime: "৫ মিনিট",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    author: "জনি হোসাইন",
  },
  {
    id: 2,
    title: "কেন মিনিমালিস্ট ডিজাইন আপনার ব্র্যান্ডের সেলস বাড়াবে?",
    excerpt:
      "ডিজাইন মানে কেবল রং নয়, ডিজাইন মানে সমস্যার সমাধান। মিনিমালিস্ট ডিজাইন কীভাবে কাস্টমারের ট্রাস্ট অর্জন করে তা নিয়ে আমাদের আজকের আলোচনা...",
    category: "ডিজাইন",
    date: "মে ১২, ২০২৪",
    readTime: "৪ মিনিট",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    author: "সায়মা আহমেদ",
  },
  {
    id: 3,
    title: "স্মল বিজনেসের জন্য এআই টুলস: যেভাবে খরচ কমাবেন",
    excerpt:
      "অটোমেশন কেবল বড় কোম্পানিগুলোর জন্য নয়। চ্যাটজিপিটি থেকে শুরু করে ক্যানভা এআই—ক্ষুদ্র উদ্যোক্তারা কীভাবে এগুলো ব্যবহার করে সময় বাঁচাতে পারেন...",
    category: "টেকনোলজি",
    date: "মে ১০, ২০২৪",
    readTime: "৭ মিনিট",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    author: "রাকিব হাসান",
  },
  {
    id: 4,
    title: "ব্যর্থতা থেকে শিক্ষা: একজন সফল উদ্যোক্তার গল্প",
    excerpt:
      "স্বপ্ন দেখার শুরুটা ছিল খুব কঠিন। ৩টি প্রজেক্ট ফেল করার পর কীভাবে আমরা আজকের এই অবস্থায় আসলাম, সেই অদেখা গল্পটি আজ শেয়ার করছি...",
    category: "উদ্যোক্তা জীবন",
    date: "মে ০৫, ২০২৪",
    readTime: "৬ মিনিট",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    author: "জনি হোসাইন",
  },
  {
    id: 5,
    title: "ডিজিটাল পেমেন্ট গেটওয়ে: আপনার দোকানের জন্য কোনটি সেরা?",
    excerpt:
      "বিকাশ, রকেট নাকি অনলাইন কার্ড পেমেন্ট? বাংলাদেশের প্রেক্ষাপটে পেমেন্ট গেটওয়ে চুজ করার ক্ষেত্রে যে বিষয়গুলো খেয়াল রাখবেন...",
    category: "টেকনোলজি",
    date: "এপ্রিল ২৮, ২০২৪",
    readTime: "৫ মিনিট",
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
    author: "রাকিব হাসান",
  },
];

const BlogGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState("সব খবর");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesTab = activeTab === "সব খবর" || post.category === activeTab;
    const matchesSearch = post.title
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

      <section className="sticky top-24 z-40 bg-white/80 backdrop-blur-xl border-y border-slate-100 py-6 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-4 min-w-max">
          <Filter size={18} className="text-red-600 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`
                px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap
                ${
                  activeTab === cat
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
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col h-full"
                >
                  <a
                    href={`/blog/${post.id}`}
                    className="block relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-white mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-red-600 text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      {post.category}
                    </div>
                  </a>

                  <div className="px-4 flex-grow">
                    <div className="flex items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} /> {post.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} /> {post.readTime}
                      </div>
                    </div>

                    <a href={`/blog/${post.id}`}>
                      <h4 className="text-3xl font-display font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-4 leading-tight">
                        {post.title}
                      </h4>
                    </a>

                    <p className="text-slate-500 font-medium line-clamp-2 mb-8 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <a
                      href={`/blog/${post.id}`}
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
