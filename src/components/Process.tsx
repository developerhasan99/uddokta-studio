import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "০১",
    title: "আবিষ্কার ও গবেষণা",
    desc: "আমরা আপনার বিজনেস এবং টার্গেট অডিয়েন্স সম্পর্কে গভীরভাবে জানি যাতে কাজের ভিত্তি মজবুত হয়।",
  },
  {
    number: "০২",
    title: "প্রোটোটাইপিং",
    desc: "ডিজাইন শুরুর আগে আমরা কাঠামোগত খসড়া বা ব্লুপ্রিন্ট তৈরি করি যা আপনার লক্ষ্যের সাথে সামঞ্জস্যপূর্ণ।",
  },
  {
    number: "০৩",
    title: "ভিজ্যুয়াল ডিজাইন",
    desc: "আপনার ব্র্যান্ডের ব্যক্তিত্বকে পিক্সেল-পারফেক্ট ডিজাইনে রূপান্তর করি যা কাস্টমারকে আকর্ষণ করবে।",
  },
  {
    number: "০৪",
    title: "লঞ্চ ও অপ্টিমাইজেশন",
    desc: "প্রোডাক্ট রিলিজ করার পর আমরা এর কার্যকারিতা পর্যবেক্ষণ ও সময়োপযোগী উন্নত করি।",
  },
];

const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="py-40 bg-white border-b border-slate-50 relative overflow-hidden"
    >
      {/* Decorative watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[14rem] font-display font-black text-red-600/[0.02] select-none pointer-events-none uppercase -rotate-90">
        PROCESS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12"
          >
            <h2 className="text-red-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-8">
              কাজের ধারা
            </h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-slate-900 mb-10 tracking-tighter">
              একটি ক্লাসিক <span className="text-red-600">পদ্ধতি।</span>
            </h3>
            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-md">
              পরিকল্পিত কাজের ধারাই হলো আমাদের সফলতার চাবিকাঠি। আমরা প্রতিটি
              ধাপে স্বচ্ছতা এবং গুণমান নিশ্চিত করি।
            </p>
          </motion.div>

          <div className="lg:w-7/12 w-full space-y-12 relative">
            {/* Connector Line */}
            <div className="absolute left-10 top-14 bottom-14 w-px bg-red-100 hidden md:block"></div>

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-12 relative group"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-[1.8rem] bg-red-50 border border-red-100 flex items-center justify-center text-red-600 font-bold z-10 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm shadow-red-600/5">
                  <span className="text-xl font-display">{step.number}</span>
                </div>
                <div className="pt-4">
                  <h4 className="text-3xl font-display font-bold mb-4 text-slate-900 group-hover:text-red-600 transition-colors duration-500">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-xl">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
