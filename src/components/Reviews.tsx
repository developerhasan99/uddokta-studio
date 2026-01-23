import React from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "আরিফ হোসেন",
    role: "প্রতিষ্ঠাতা, মাটির কারু",
    image: "https://i.pravatar.cc/150?u=arif",
    text: "উদ্যোক্তা স্টুডিও আমার ব্যবসার অনলাইন যাত্রাকে একদম সহজ করে দিয়েছে। তাদের ডিজাইন সেন্স এবং প্রফেশনালিজম সত্যিই প্রশংসনীয়!",
    rating: 5,
  },
  {
    name: "ফাতেমা জান্নাত",
    role: "CEO, ফ্যাশন ফিউশন",
    image: "https://i.pravatar.cc/150?u=fatema",
    text: "অল্প বাজেটেই বিশ্বমানের ওয়েবসাইট পেয়েছি। ক্ষুদ্র উদ্যোক্তাদের জন্য তারা সেরা সঙ্গী। তাদের সাথে কাজ করা এক চমৎকার অভিজ্ঞতা।",
    rating: 5,
  },
  {
    name: "কামরুল হাসান",
    role: "মালিক, খাস বাজার",
    image: "https://i.pravatar.cc/150?u=kamrul",
    text: "তাদের মার্কেটিং কৌশল আমাদের সেলস কয়েক গুণ বাড়িয়ে দিয়েছে। তারা শুধু ওয়েবসাইট বানায় না, ব্যবসার বৃদ্ধি নিশ্চিত করে।",
    rating: 5,
  },
  {
    name: "নুসরাত জাহান",
    role: "ডিজাইনার, হোম ডেকোর",
    image: "https://i.pravatar.cc/150?u=nusrat",
    text: "খুবই সুন্দর এবং ক্লাসিক ডিজাইন। সাইট ভিজিটররা সবাই প্রশংসা করছে। পিক্সেল পারফেক্ট কাজ বলতে যা বোঝায়, এটি তেমনই।",
    rating: 5,
  },
  {
    name: "শামীম রেজা",
    role: "উদ্যোক্তা, টেক সল্যুশন",
    image: "https://i.pravatar.cc/150?u=shamim",
    text: "কাজ শুরুর আগে আমাদের সব কথা ধৈর্য ধরে শুনেছেন এবং সঠিক পরামর্শ দিয়েছেন। সাপোর্ট টিমও অনেক হেল্পফুল।",
    rating: 5,
  },
  {
    name: "তানজিলা আক্তার",
    role: "প্রতিষ্ঠাতা, হস্তশিল্প বিডি",
    image: "https://i.pravatar.cc/150?u=tanjila",
    text: "আমাদের ই-কমার্স সাইটটি এখন অনেক দ্রুত কাজ করে। কাস্টমার এক্সপেরিয়েন্স অনেক ভালো হয়েছে। সাশ্রয়ী বাজেটে এর চেয়ে ভালো সেবা ভাবা যায় না।",
    rating: 5,
  },
];

const Reviews: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-32 bg-slate-50 border-b border-slate-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-red-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">
            সফলতার গল্প
          </h2>
          <h3 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8 tracking-tighter">
            উদ্যোক্তাদের <span className="text-red-600">অনুপ্রেরণা।</span>
          </h3>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full opacity-20"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-white border border-red-100/50 hover:border-red-600/20 transition-all group shadow-sm hover:shadow-2xl hover:shadow-red-600/5 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <Quote
                  className="text-red-50 group-hover:text-red-600 transition-colors duration-500"
                  size={40}
                  strokeWidth={1.5}
                />
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-red-600 text-red-600 opacity-20 group-hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed font-medium mb-10 italic flex-grow">
                "{review.text}"
              </p>

              <div className="flex items-center gap-5 pt-8 border-t border-slate-50">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-red-50 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-red-600 text-[10px] font-bold uppercase tracking-widest mt-1 opacity-70">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
