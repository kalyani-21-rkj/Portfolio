import React from 'react';
import { experienceData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Briefcase, Calendar, Building, CheckCircle2, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-indigo-500/20 bg-[#060b18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Work History &amp; Internships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Practical Industry Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Verified internship track record delivering production machine learning workflows and full-stack software development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl space-y-6">
          {experienceData.map((item) => (
            <TiltCard
              key={item.id}
              maxTilt={5}
              glowColor="rgba(99, 102, 241, 0.2)"
              className="p-6 sm:p-8 bg-[#0a1329]/90 border border-indigo-500/25 backdrop-blur-xl"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold mb-1">
                    <span className="text-cyan-400">{item.type}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-indigo-300 font-medium">{item.status}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-300 mt-1">
                    <Building className="w-4 h-4 text-indigo-400" />
                    <span>{item.organization}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300 font-mono self-start sm:self-auto bg-[#0d1838] px-3.5 py-1.5 rounded-lg border border-indigo-500/25">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-5 text-sm text-slate-300">
                {item.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-indigo-500/20">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[#0d1838] text-slate-300 text-xs font-mono border border-indigo-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
