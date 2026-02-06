
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="pt-6 md:pt-12">
      <div className="reveal">
        <h1 className="text-[7vw] md:text-[5vw] font-black leading-[0.85] uppercase tracking-tighter mb-12">
          Sparacia<br />Francesca
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-4 md:mt-6">
        <div className="md:col-span-8 grid grid-cols-12 gap-4 items-center reveal reveal-delay-1">
          <div className="col-span-12 overflow-hidden">
            <img
              src="foto1.jpg"
              alt="Work 01 Main"
              className="hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col justify-start pt-4 reveal reveal-delay-2">
          <div className="mb-8">
            <h2 className="font-black uppercase text-xl md:text-2xl leading-tight">Fashion Stylist</h2>
            <p className="font-bold uppercase text-xs md:text-sm text-yellow-500 tracking-tight mt-1">
              Editorial - Personal - Event
            </p>
          </div>
          <p className="text-lg md:text-xl font-bold leading-tight max-w-xs uppercase">
            From one-on-one consultations to event styling and curated wardrobes — every look is crafted uniquely for you.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
