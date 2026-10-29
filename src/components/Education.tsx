import React from 'react';
import { educationData, achievementsAndCertifications } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { GraduationCap, Award, CheckCircle, Sparkles } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 border-t border-indigo-500/20 bg-[#070e24] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Credentials &amp; Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education, Certifications &amp; Achievements
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Consistent top-tier academic scores paired with industry-recognized problem-solving credentials.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2 text-white font-bold text-lg">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <h3>Academic Background</h3>
            </div>

            <div className="space-y-4">
              {educationData.map((edu) => (
                <TiltCard
                  key={edu.id}
                  maxTilt={5}
                  glowColor="rgba(6, 182, 212, 0.2)"
                  className="p-6 bg-[#0a1329]/90 border border-indigo-500/25 backdrop-blur-xl"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-indigo-400 font-semibold mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs font-bold font-mono text-emerald-400 shrink-0">
                      {edu.score}
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 font-mono mb-3">
                    {edu.year}
                  </div>

                  {edu.notes && (
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {edu.notes}
                    </p>
                  )}

                  {edu.coursework && (
                    <div className="pt-3 border-t border-indigo-500/20">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                        Relevant Coursework:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2 py-0.5 text-[11px] rounded bg-[#0d1838] text-slate-300 border border-indigo-500/20"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2 text-white font-bold text-lg">
              <Award className="w-5 h-5 text-purple-400" />
              <h3>Certifications &amp; Recognition</h3>
            </div>

            <div className="space-y-4">
              {/* Certifications */}
              {achievementsAndCertifications.certifications.map((cert, index) => (
                <TiltCard
                  key={index}
                  maxTilt={5}
                  glowColor="rgba(168, 85, 247, 0.2)"
                  className="p-6 bg-[#0a1329]/90 border border-indigo-500/25 backdrop-blur-xl"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-purple-400 font-bold mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 shrink-0">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cert.detail}
                  </p>
                </TiltCard>
              ))}

              {/* Achievements Card */}
              <TiltCard
                maxTilt={5}
                glowColor="rgba(16, 185, 129, 0.2)"
                className="p-6 bg-[#0a1329]/90 border border-indigo-500/25 backdrop-blur-xl"
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Key Academic &amp; Engineering Achievements</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {achievementsAndCertifications.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
