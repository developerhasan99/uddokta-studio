
import React from 'react';

const clientLogos = [
  "স্বপ্ন", "আড়ং", "খাস ফুড", "পাঠাও", "চালডাল", "ফুডপান্ডা"
];

const Clients: React.FC = () => {
  return (
    <section className="py-12 border-y border-zinc-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-8">আমাদের সম্মানিত গ্রাহক</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">
            {clientLogos.map((logo, i) => (
              <span key={i} className="text-xl md:text-2xl font-display font-black tracking-tighter text-zinc-900 select-none">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
