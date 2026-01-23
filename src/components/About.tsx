import React from "react";
import { Target, ShieldCheck, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const values = [
    {
      icon: <Target size={28} className="text-red-600" />,
      title: "সুনির্দিষ্ট লক্ষ্য",
      desc: "আমরা প্রতিটি প্রজেক্টকে একটি সুনির্দিষ্ট লক্ষ্য নিয়ে শুরু করি।",
    },
    {
      icon: <Zap size={28} className="text-red-600" />,
      title: "আধুনিক প্রযুক্তি",
      desc: "লেটেস্ট প্রযুক্তির সমন্বয়ে আমরা সেরা সমাধান নিশ্চিত করি।",
    },
    {
      icon: <ShieldCheck size={28} className="text-red-600" />,
      title: "বিশ্বস্ত পার্টনার",
      desc: "সম্পর্ক এবং কাজের গুণমান আমাদের মূল চালিকাশক্তি।",
    },
  ];

  return (
    <section id="about" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-5/12"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=1036"
                  alt="Creative Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50 hidden md:block"
              >
                <p className="text-4xl font-display font-bold text-red-600">
                  ০৫+
                </p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                  বছরের অভিজ্ঞতা
                </p>
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-8 text-red-600">
                <Heart size={20} className="fill-current" />
                <span className="font-bold uppercase tracking-widest text-xs">
                  আমাদের কথা
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-10 leading-tight">
                সৃজনশীলতা এবং প্রযুক্তিগত{" "}
                <span className="text-red-600">নিখুঁততা।</span>
              </h2>

              <p className="text-xl font-medium text-slate-500 mb-12 max-w-2xl">
                উদ্যোক্তা স্টুডিওতে আমরা কেবল ওয়েবসাইট তৈরি করি না, আমরা একটি
                ডিজিটাল পরিচিতি গড়ি যা আপনার ব্যবসাকে প্রতিযোগিতায় এগিয়ে রাখে।
                আমাদের প্রতিটি ধাপে থাকে স্বচ্ছতা ও পরম যত্ন।
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-8">
              {values.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                  }}
                  className="p-8 rounded-[2rem] bg-slate-50 border border-transparent transition-all group"
                >
                  <div className="mb-6 w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
