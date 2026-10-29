import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-indigo-500/20 bg-[#050915] text-slate-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center md:text-left">
            <span className="font-extrabold text-base tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Kalyani J. Ramayane
            </span>
            <p className="text-xs text-slate-400">
              B.E. AI &amp; Data Science · MMIT (Graduating 2027) · Maharashtra, India
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold text-slate-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 transition-colors"
            >
              LinkedIn
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-indigo-400 transition-colors"
            >
              Email
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-3 rounded-xl border border-indigo-500/25 bg-[#0a142e] text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-[#102047] shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all"
          >
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>

        </div>
      </div>
    </footer>
  );
};
