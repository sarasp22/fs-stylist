
import React from 'react';
import { PROJECTS } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="space-y-40 md:space-y-64">
      <h2 className="text-8xl md:text-[12vw] font-black uppercase tracking-tighter reveal">Experience</h2>

      {PROJECTS.map((project) => (
        <div key={project.id} className="reveal">
          {project.images.length === 3 ? (
            <div className="relative grid grid-cols-14 gap-0 items-start min-h-[500px] md:min-h-[800px]">
              <div className="col-span-12 md:col-span-9 md:col-start-4 z-0 overflow-hidden group">
                <img
                  src={project.images[2]}
                  alt={`${project.title} background`}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-[3s]"
                />
              </div>

              <div className="absolute bottom-5 left-10 w-1/3 md:w-1/4 z-20 shadow-2xl border-2 border-black/10 overflow-hidden group">
                <img
                  src={project.images[0]}
                  alt={`${project.title} detail 1`}
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-[2s]"
                />
              </div>

              <div className="absolute bottom-1 right-10 w-1/2 md:w-5/12 z-10 shadow-2xl overflow-hidden group">
                <img
                  src={project.images[1]}
                  alt={`${project.title} detail 2`}
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-[2.5s]"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8 overflow-hidden group">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="md:col-span-4 overflow-hidden group">
                <img
                  src={project.images[1]}
                  alt={`${project.title} detail`}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          )}

          <div className="mt-12 flex items-start gap-6">
            <span className="text-6xl md:text-8xl font-black leading-none">{project.number}</span>
            <div className="pt-2">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">{project.title}</h3>
              {project.year && (
                <p className="text-xs font-bold uppercase opacity-60 mt-1">{project.year}, {project.category}</p>
              )}
              {project.credits && (
                <div className="mt-2 space-y-0.5 text-sm font-bold uppercase opacity-80">
                  <p>{project.credits.magazine}</p>
                  <p>{project.credits.editorInChief}</p>
                </div>
              )}
              {project.description && (
                <p className="mt-2 text-sm font-black uppercase max-w-sm tracking-tight">{project.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
