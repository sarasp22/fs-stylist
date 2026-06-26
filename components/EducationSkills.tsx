import React from 'react';
import { EDUCATION, SKILLS } from '../constants';

const EducationSkills: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-12 md:gap-y-16 py-12 md:py-24">
      <div className="flex flex-col space-y-6 md:space-y-8 reveal">
        <div className="w-full">
          <div className="border-4 border-white p-2 bg-neutral-950/20">
            <img
              src="foto10.jpg"
              alt="Skills Visual"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>

        <div className="pt-2">
          <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-6">
            Education
          </h2>
          <div className="space-y-6">
            {EDUCATION.map((item, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-xl md:text-2xl uppercase leading-none">{item.degree}</h3>
                <p className="text-sm uppercase opacity-50 mt-2">{item.school} | {item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-6 md:space-y-8 reveal reveal-delay-1">
        <div className="pt-2">
          <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-6">
            Skills
          </h2>
          <ul className="space-y-3">
            {SKILLS.map((skill, idx) => (
              <li key={idx} className="text-lg md:text-xl uppercase tracking-tight flex items-start">
                <span className="mr-3 opacity-30 text-xl leading-none">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full">
          <div className="border-4 border-white p-2 bg-neutral-950/20">
            <img
              src="foto9.jpg"
              alt="Education Visual"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSkills;
