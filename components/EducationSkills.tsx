
import React from 'react';
import { EDUCATION, SKILLS } from '../constants';

const EducationSkills: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 py-12 md:py-24">
      <div className="md:col-span-5 flex flex-col reveal">
        <div className="relative border-4 border-white p-2 mb-8">
           <img
              src="foto10.jpg"
              alt="Education Context"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-6 left-4 bg-black px-4 pt-4">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Education</h2>
            </div>
        </div>

        <div className="mt-12 space-y-10">
          {EDUCATION.map((item, idx) => (
            <div key={idx} className="reveal reveal-delay-1">
              <h3 className="font-black text-xl md:text-2xl uppercase leading-none">{item.degree}</h3>
              <p className="text-sm font-bold uppercase opacity-50 mt-2">{item.school} | {item.period}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:col-span-6 md:col-start-7 flex flex-col reveal reveal-delay-1">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">Skills</h2>
        <ul className="space-y-2 mb-16">
          {SKILLS.map((skill, idx) => (
            <li key={idx} className="text-lg md:text-xl font-bold uppercase tracking-tight flex items-start">
              <span className="mr-3 opacity-30">•</span>
              {skill}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-4 mt-auto">
          <div className="overflow-hidden">
            <img
              src="foto11.jpg"
              alt="Skill Visual 1"
              className="w-full aspect-[3/4] object-cover hover:scale-110 transition-transform duration-1000"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="foto12.jpg"
              alt="Skill Visual 2"
              className="w-full aspect-[3/4] object-cover hover:scale-110 transition-transform duration-1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSkills;
