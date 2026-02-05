
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 py-24 md:py-40 items-start">
      <div className="md:col-span-5 reveal">
        <h2 className="text-7xl md:text-[10vw] font-black uppercase leading-[0.8] tracking-tighter mb-16">
          Get in<br />Touch
        </h2>

        <div className="w-full h-px bg-white/20 mb-16" />

        <div className="space-y-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-2">Email</p>
            <a
              href="mailto:fr.sparacia@gmail.com"
              className="text-2xl md:text-3xl font-black uppercase border-b border-white pb-1 hover:opacity-50 transition-all"
            >
              fr.sparacia@gmail.com
            </a>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-2">Based in</p>
            <p className="text-2xl md:text-3xl font-black uppercase">Paris, FR</p>
          </div>
        </div>
      </div>

      <div className="md:col-span-7 reveal reveal-delay-2">
        <div className="overflow-hidden">
          <img
            src="foto13.webp"
            alt="Final Editorial"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
