import React, { useState } from "react";
import { Send, CheckCircle2, Mail, Phone } from "lucide-react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    formData.append("_wpcf7_unit_tag", "wpcf7-f12-p13-o1");

    try {
      const response = await fetch(
        "https://aquorix.digital/wp-json/contact-form-7/v1/contact-forms/12/feedback",
        {
          method: "POST",
          body: formData,
        },
      );

      const result = await response.json();

      if (result.status === "mail_sent") {
        setFormState("success");
        setTimeout(() => setFormState("idle"), 3000);
      } else {
        setFormState("idle");
        setErrorMessage(result.message || "কিছু ভুল হয়েছে, আবার চেষ্টা করুন।");
      }
    } catch (error) {
      setFormState("idle");
      setErrorMessage("নেটওয়ার্ক সমস্যা, আবার চেষ্টা করুন।");
    }
  };

  return (
    <section id="contact" className="md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto md:px-6">
        <div className="bg-white md:rounded-[3.5rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col lg:flex-row">
          <div className="lg:w-5/12 bg-slate-900 p-6 pb-12 pt-24 md:p-12 lg:p-20 text-white flex flex-col justify-center">
            <h2 className="text-red-600 font-bold uppercase tracking-[0.5em] text-xs mb-6">
              যোগাযোগ করুন
            </h2>
            <h3 className="text-5xl font-display font-bold mb-12 !leading-tight">
              আসুন আপনার আইডিয়া নিয়ে{" "}
              <span className="text-red-600">কথা বলি।</span>
            </h3>

            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-red-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-1">
                    ইমেইল
                  </p>
                  <p className="text-xl font-bold">hello@uddokta.studio</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-red-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-1">
                    ফোন
                  </p>
                  <p className="text-xl font-bold">+৮৮০ ১৭২৪-৬৯৪৭১৮</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 p-6 pt-12 pb-24 md:p-20 relative">
            {formState === "success" && (
              <div className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h4 className="text-3xl font-display font-bold text-slate-900 mb-4">
                  ধন্যবাদ!
                </h4>
                <p className="text-slate-500 font-medium">
                  আপনার মেসেজ আমরা পেয়েছি, শীঘ্রই যোগাযোগ করছি।
                </p>
              </div>
            )}

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-1 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                    আপনার নাম
                  </label>
                  <input
                    required
                    name="your-name"
                    type="text"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white transition-all font-medium"
                    placeholder="জনি হোসাইন"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                    ইমেইল এড্রেস
                  </label>
                  <input
                    required
                    name="your-email"
                    type="email"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white transition-all font-medium"
                    placeholder="hello@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                    ফোন নম্বর
                  </label>
                  <input
                    required
                    name="your-phone"
                    type="tel"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white transition-all font-medium"
                    placeholder="+৮৮০ ১৭১২-৩৪৫৬৭৮"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                  বার্তাট লিখুন
                </label>
                <textarea
                  required
                  name="your-message"
                  className="w-full bg-slate-50 border border-slate-100 rounded-3xl px-6 py-6 h-40 text-slate-900 focus:outline-none focus:border-red-600 focus:bg-white transition-all font-medium resize-none"
                  placeholder="আপনার প্রোজেক্ট সম্পর্কে বিস্তারিত বলুন..."
                ></textarea>
              </div>

              {errorMessage && (
                <div className="text-red-600 text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              <button
                disabled={formState === "submitting"}
                type="submit"
                className="w-full bg-red-600 text-white py-6 rounded-2xl text-lg font-bold hover:bg-slate-900 transition-all shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === "submitting" ? (
                  "পাঠানো হচ্ছে..."
                ) : (
                  <>
                    মেসেজ পাঠান <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
