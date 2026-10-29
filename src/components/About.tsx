import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Code2, Brain, Database, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-24 border-t border-indigo-500/20 bg-[#070e24] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile &amp; Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering Rigor Grounded in Systems &amp; Applied AI
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Body */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            <p>
              I am an engineering student pursuing my <strong>B.E. in Artificial Intelligence and Data Science at Marathwada Mitra Mandal’s Institute of Technology (MMIT)</strong>, graduating in May 2027. Throughout my academic journey, I have maintained an <strong>SGPA of 9.33 / 10.0</strong>, combining solid theoretical foundations in data structures, algorithms, and operating systems with hands-on software development.
            </p>
            <p>
              My focus centers on the intersection of <strong>full-stack engineering</strong> and <strong>practical machine learning</strong>. Rather than viewing backend architecture, frontend interfaces, and ML models as disconnected components, I design them cohesively. In <strong>BusinessHub CRM</strong>, I engineered 6 interconnected business modules backed by granular Role-Based Access Control and normalized MongoDB schemas. In <strong>CASPA School OS</strong>, I designed multi-workspace routing and permission engines for educational institutions.
            </p>
            <p>
              During my AI Engineering Internship at <strong>Infosys Springboard</strong>, I constructed an end-to-end podcast intelligence pipeline that applied OpenAI Whisper for speech-to-text, TF-IDF lexical vectors for semantic topic segmentation, and segment sentiment tracking.
            </p>
            <p>
              My goal is to join a software development, full-stack, or AI/ML engineering team where I can contribute to mission-critical codebases, solve ambiguous system problems, and take full ownership of shipped software.
            </p>

            {/* Quick unboxed credential highlight */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-indigo-500/20">
              <div>
                <span className="block text-slate-500">Academic Institution</span>
                <span className="font-semibold text-white">MMIT Pune (Class of 2027)</span>
              </div>
              <div className="hidden sm:block text-slate-700">·</div>
              <div>
                <span className="block text-slate-500">Academic Standing</span>
                <span className="font-semibold text-emerald-400">SGPA: 9.33 / 10.0</span>
              </div>
              <div className="hidden sm:block text-slate-700">·</div>
              <div>
                <span className="block text-slate-500">Core Languages</span>
                <span className="font-semibold text-cyan-300">Python · Java · C++ · JavaScript</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Read Full Resume &amp; Credentials</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Highlights: 3D Tilt Pillar Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <TiltCard
              maxTilt={6}
              glowColor="rgba(99, 102, 241, 0.25)"
              className="p-6 bg-[#0a1329]/90 border border-indigo-500/25 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#0e1a3d] border border-indigo-500/20">
                  <Code2 className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-base font-bold text-white">
                  Full-Stack Architecture &amp; REST APIs
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Proficient in structuring clean RESTful API routes, JWT-based authentication guards, request validation pipelines, and responsive component interfaces using React and Node.js.
              </p>
            </TiltCard>

            <TiltCard
              maxTilt={6}
              glowColor="rgba(168, 85, 247, 0.25)"
              className="p-6 bg-[#0a1329]/90 border border-indigo-500/25 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#0e1a3d] border border-purple-500/20">
                  <Brain className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-base font-bold text-white">
                  Applied AI, NLP &amp; Speech Pipelines
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Practical implementation experience with OpenAI Whisper STT, acoustic signal preprocessing, TF-IDF lexical vectorization, sentiment trend scoring, and LLM prompt engineering.
              </p>
            </TiltCard>

            <TiltCard
              maxTilt={6}
              glowColor="rgba(16, 185, 129, 0.25)"
              className="p-6 bg-[#0a1329]/90 border border-indigo-500/25 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#0e1a3d] border border-emerald-500/20">
                  <Database className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-base font-bold text-white">
                  Data Modeling &amp; Fundamentals
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experienced in document schema design in MongoDB, relational querying with SQL/MySQL, complexity analysis, and object-oriented principles in Python, Java, and C++.
              </p>
            </TiltCard>

          </div>

        </div>

      </div>
    </section>
  );
};
