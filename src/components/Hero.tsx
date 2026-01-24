import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const Hero: React.FC = () => {
  // Explicitly type variants to avoid TypeScript inference issues with easing arrays
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Explicitly type variants to avoid TypeScript inference issues with easing arrays
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#fcfcfc]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 relative z-10 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-100 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest mb-10"
        >
          <Sparkles size={14} className="fill-current" />
          <span>প্লাটিনাম ডিজিটাল সল্যুশন</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-[8rem] font-display font-bold leading-[1.05] mb-10 text-slate-900 tracking-tight"
        >
          আপনার ব্যবসার জন্য <br />
          <span className="text-red-600">ডিজিটাল সমাধান।</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium mb-16"
        >
          উদ্যোক্তা স্টুডিও বাংলাদেশের ক্ষুদ্র ও মাঝারি ব্যবসার জন্য তৈরি করে
          দ্রুত, কার্যকর এবং বিক্রি বাড়ানো ডিজিটাল প্ল্যাটফর্ম।
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="group bg-red-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-900 transition-all flex items-center gap-3 shadow-xl shadow-red-600/20 hover:shadow-slate-900/20"
          >
            ফ্রি কনসালটেশন নিন
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(248, 250, 252, 1)",
            }}
            whileTap={{ scale: 0.98 }}
            href="#portfolio"
            className="group flex items-center gap-3 text-slate-900 font-bold px-10 py-5 rounded-2xl border border-slate-200 transition-all"
          >
            আমাদের কাজ দেখুন
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-24 pt-10 border-t border-slate-100"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200 shadow-sm"
                >
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                </motion.div>
              ))}
            </div>
            <p className="text-sm font-semibold text-slate-400">
              ⭐ ৫০০+ উদ্যোক্তা আমাদের ওপর আস্থা রেখেছেন
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
