import React from "react";
import { ArrowLeft, Sparkles, Home } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const FourOhFour: React.FC = () => {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#fcfcfc]">
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
          <span>৪০৪ - পাতাটি পাওয়া যায়নি</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-[8rem] font-display font-bold leading-[1.05] mb-10 text-slate-900 tracking-tight"
        >
          দুঃখিত, এই পাতাটি <br />
          <span className="text-red-600">পাওয়া যায়নি।</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium mb-16"
        >
          হয়তো লিঙ্কটি ভুল ছিল অথবা পাতাটি সরিয়ে ফেলা হয়েছে। নিচে দেওয়া বাটনগুলো
          ব্যবহার করে আপনি আমাদের সাইটে ফিরে যেতে পারেন।
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="/"
            className="group bg-red-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-900 transition-all flex items-center gap-3 shadow-xl shadow-red-600/20 hover:shadow-slate-900/20"
          >
            <Home size={20} />
            হোমপেজে ফিরে যান
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(248, 250, 252, 1)",
            }}
            whileTap={{ scale: 0.98 }}
            href="/contact"
            className="group flex items-center gap-3 text-slate-900 font-bold px-10 py-5 rounded-2xl border border-slate-200 transition-all"
          >
            যোগাযোগ করুন
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Background Graphic Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-50/50 rounded-full blur-[120px] -z-0 opacity-50"></div>
    </section>
  );
};

export default FourOhFour;
