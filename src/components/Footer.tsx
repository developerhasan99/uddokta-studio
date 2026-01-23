import React from "react";
import { Twitter, Instagram, Linkedin, Rocket, ArrowRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                <Rocket className="text-white fill-current" size={20} />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-slate-900 uppercase">
                UDDOKTA STUDIO
              </span>
            </div>
            <p className="text-xl font-medium text-slate-500 mb-10 leading-relaxed max-w-sm">
              বাংলাদেশের উদ্যোক্তাদের জন্য আধুনিক ডিজিটাল সল্যুশন পার্টনার। আমরা
              আপনার স্বপ্নের পূর্ণতায় বিশ্বাসী।
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all border border-slate-100"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-3 gap-12">
            <div>
              <h5 className="font-bold mb-8 text-xs uppercase tracking-widest text-slate-400">
                লিঙ্কসমূহ
              </h5>
              <ul className="space-y-4">
                {[
                  { name: "হোম", href: "/" },
                  { name: "আমাদের কথা", href: "/about" },
                  { name: "সার্ভিস", href: "/#services" },
                  { name: "পোর্টফোলিও", href: "/portfolio" },
                  { name: "ব্লগ", href: "/blog" },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-slate-600 font-bold hover:text-red-600 transition-colors flex items-center gap-2 group"
                    >
                      {link.name}
                      <ArrowRight
                        size={14}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <h5 className="font-bold mb-8 text-xs uppercase tracking-widest text-slate-400">
                নিউজলেটার
              </h5>
              <p className="text-slate-500 mb-6 font-medium">
                নতুন আপডেট এবং অফার পেতে সাবস্ক্রাইব করুন।
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল"
                  className="flex-grow bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white transition-all font-medium"
                />
                <button className="bg-slate-900 text-white p-4 rounded-2xl hover:bg-red-600 transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
          <p>© ২০২৪ উদ্যোক্তা স্টুডিও। সকল স্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
