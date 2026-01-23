import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "স্বপ্ন নিকেতন",
    category: "ই-কমার্স / ফ্যাশন",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "উদ্যম ড্যাশবোর্ড",
    category: "বিজনেস অটোমেশন",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "মাটির কারু",
    category: "ব্র্যান্ডিং / শিল্প",
    image:
      "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "খাস বাজার",
    category: "ডেলিভারি অ্যাপ",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div>
            <h2 className="text-red-600 font-bold uppercase tracking-[0.4em] text-xs mb-6">
              নির্বাচিত কাজ
            </h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold text-slate-900">
              ডিজিটাল <span className="text-red-600">সাফল্য</span> গাঁথা।
            </h3>
          </div>
          <a
            href="/portfolio"
            className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-red-600 transition-all shadow-xl shadow-black/10"
          >
            সব প্রজেক্ট দেখুন
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[16/10] bg-slate-100 mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-red-600 shadow-xl scale-75 group-hover:scale-100 transition-transform">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
              <div className="px-4">
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-4 py-1.5 rounded-full mb-4 inline-block">
                  {project.category}
                </span>
                <h4 className="text-3xl font-display font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
