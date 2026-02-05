
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start py-12 md:py-24">
      <div className="md:col-span-8 reveal">
        <h2 className="text-3xl md:text-6xl font-black leading-[0.95] uppercase tracking-tighter mb-12">
          Italian-born<br />
          Paris-based Francesca<br />
          is a fashion stylist<br />
          with a bold, sculptural<br />
          approach to style.
        </h2>

        <div className="w-full h-px bg-white/30 mb-12" />

        <div className="space-y-6 text-xl md:text-3xl font-black uppercase leading-none tracking-tighter reveal reveal-delay-1">
          <p>Where sharp tailoring meets unapologetic glamour.</p>
          <p>Inspired by bold silhouettes and a refined sense of drama.</p>
        </div>
      </div>

      <div className="md:col-span-4 reveal reveal-delay-2 mt-12 md:mt-0">
        <div className="relative group overflow-hidden">
          <img
            src="foto9.jpg"
            alt="Bio Image"
            className="w-full group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute top-6 right-6 text-right">
            <span className="text-5xl font-black">03</span>
            <p className="text-[10px] font-bold uppercase tracking-widest mt-1">Dapper Dan<br />x Saint Laurent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
