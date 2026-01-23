import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  LayoutGrid,
  Globe,
  Smartphone,
  Palette,
} from "lucide-react";

const categories = [
  { id: "all", label: "সব প্রজেক্ট", icon: <LayoutGrid size={16} /> },
  { id: "ecommerce", label: "ই-কমার্স", icon: <Globe size={16} /> },
  { id: "branding", label: "ব্র্যান্ডিং", icon: <Palette size={16} /> },
  { id: "app", label: "মোবাইল অ্যাপ", icon: <Smartphone size={16} /> },
];

const projects = [
  {
    id: 1,
    title: "স্বপ্ন নিকেতন",
    category: "ecommerce",
    categoryLabel: "ই-কমার্স / ফ্যাশন",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    description:
      "একটি আধুনিক ফ্যাশন ব্র্যান্ডের জন্য পূর্ণাঙ্গ ই-কমার্স সল্যুশন।",
  },
  {
    id: 2,
    title: "উদ্যম ড্যাশবোর্ড",
    category: "app",
    categoryLabel: "বিজনেস অটোমেশন",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    description: "ক্ষুদ্র উদ্যোক্তাদের জন্য ইনভেন্টরি ম্যানেজমেন্ট অ্যাপ।",
  },
  {
    id: 3,
    title: "মাটির কারু",
    category: "branding",
    categoryLabel: "ব্র্যান্ডিং / শিল্প",
    image:
      "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?auto=format&fit=crop&q=80&w=1200",
    description: "ঐতিহ্যবাহী মৃৎশিল্পের ডিজিটাল ব্র্যান্ডিং এবং আইডেন্টিটি।",
  },
  {
    id: 4,
    title: "খাস বাজার",
    category: "app",
    categoryLabel: "ডেলিভারি অ্যাপ",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200",
    description: "ফ্রেশ ফুড ডেলিভারির জন্য ইউজার ফ্রেন্ডলি মোবাইল অ্যাপ।",
  },
  {
    id: 5,
    title: "ফ্যাশন ফিউশন",
    category: "ecommerce",
    categoryLabel: "ফ্যাশন স্টোর",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?auto=format&fit=crop&q=80&w=1200",
    description: "একটি ট্রেন্ডি ক্লোথিং ব্র্যান্ডের অনলাইন স্টোর।",
  },
  {
    id: 6,
    title: "টেক সল্যুশন",
    category: "branding",
    categoryLabel: "কর্পোরেট ব্র্যান্ডিং",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    description: "আইটি ফার্মের জন্য মিনিমালিস্ট ও প্রফেশনাল ব্র্যান্ডিং।",
  },
];

const PortfolioGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <>
      {/* Filter Section */}
      <section className="sticky top-24 z-40 bg-white/80 backdrop-blur-xl border-y border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all
                ${
                  activeTab === cat.id
                    ? "bg-red-600 text-white shadow-xl shadow-red-600/20 scale-105"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }
              `}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24 bg-slate-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col h-full"
                >
                  <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-white mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                      <p className="text-white/80 text-sm font-medium mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        প্রজেক্ট দেখুন <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="px-6 flex-grow">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] bg-red-50 px-3 py-1 rounded-full mb-4 inline-block">
                      {project.categoryLabel}
                    </span>
                    <h4 className="text-3xl font-display font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2">
                      {project.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PortfolioGallery;
