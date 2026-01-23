import React from "react";
import {
  Target,
  Palette,
  Code,
  Smartphone,
  Rocket,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "ডিজিটাল কৌশল",
    slug: "digital-strategy",
    description:
      "আপনার ব্র্যান্ডের ডিজিটাল লক্ষ্য অর্জনে আমরা ডেটা-নির্ভর এবং সৃজনশীল রোডম্যাপ তৈরি করি।",
    icon: <Target size={32} />,
  },
  {
    title: "ইউআই/ইউএক্স ডিজাইন",
    slug: "ui-ux-design",
    description:
      "সহজ এবং আকর্ষণীয় ডিজিটাল ইন্টারফেসের মাধ্যমে ব্যবহারকারীর সেরা অভিজ্ঞতা নিশ্চিত করা।",
    icon: <Palette size={32} />,
  },
  {
    title: "ওয়েব ডেভেলপমেন্ট",
    slug: "web-development",
    description:
      "আধুনিক প্রযুক্তির সমন্বয়ে শক্তিশালী এবং দ্রুত গতির ওয়েবসাইট নির্মাণ করা।",
    icon: <Code size={32} />,
  },
  {
    title: "অ্যাপ সল্যুশন",
    slug: "app-solution",
    description:
      "মোবাইল প্ল্যাটফর্মের জন্য উচ্চমানের অ্যাপ্লিকেশন ডিজাইন এবং ডেভেলপমেন্ট।",
    icon: <Smartphone size={32} />,
  },
  {
    title: "ব্র্যান্ড গ্রোথ",
    slug: "brand-growth",
    description:
      "ডিজিটাল প্ল্যাটফর্মে আপনার ব্র্যান্ডকে সবার সামনে তুলে ধরতে কার্যকর বিপণন কৌশল।",
    icon: <Rocket size={32} />,
  },
  {
    title: "ই-কমার্স সল্যুশন",
    slug: "ecommerce-solution",
    description:
      "আপনার অনলাইন স্টোর পরিচালনার জন্য প্রয়োজনীয় সকল প্রযুক্তিগত সমাধান।",
    icon: <BrainCircuit size={32} />,
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-32 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-red-600 font-bold uppercase tracking-[0.4em] text-xs mb-6">
            কি করি আমরা
          </h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-6">
            বিজনেসের জন্য <span className="text-red-600 italic">পারফেক্ট</span>{" "}
            সল্যুশন।
          </h3>
          <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
            আমরা আপনার ব্যবসাকে কেবল অনলাইন করি না, একটি পূর্ণাঙ্গ ব্র্যান্ড
            হিসেবে প্রতিষ্ঠিত করি।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-12 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 transition-all group h-full flex flex-col hover:shadow-2xl hover:shadow-red-600/5"
            >
              <div className="mb-10 w-16 h-16 rounded-[1.5rem] bg-red-50 text-red-600 flex items-center justify-center transition-transform group-hover:scale-110">
                {service.icon}
              </div>

              <h4 className="text-2xl font-bold mb-6 text-slate-900">
                {service.title}
              </h4>
              <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10 flex-grow">
                {service.description}
              </p>

              <a
                href={`/services/${service.slug}`}
                className="flex items-center gap-3 text-red-600 font-bold text-sm uppercase tracking-widest transition-all group-hover:gap-5"
              >
                বিস্তারিত দেখুন <ArrowUpRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
