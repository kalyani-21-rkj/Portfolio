import React, { useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Terminal, CheckCircle2, Sparkles, Cpu, Layers, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'architecture' | 'academics'>('profile');

  return (
    <section id="hero" className="relative pt-32 pb-24 overflow-hidden bg-navy-grid">
      {/* Deep Dark Navy Ambient Radial Lights */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-700/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split-screen Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy & Name Pop-up */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Kicker with glowing badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1b3e]/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>B.E. AI &amp; Data Science</span>
              <span aria-hidden="true" className="text-indigo-400/50">·</span>
              <span>MMIT 2027</span>
              <span aria-hidden="true" className="text-indigo-400/50">·</span>
              <span className="text-emerald-400">SGPA 9.33</span>
            </div>

            {/* Name Presentation Block */}
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-400 uppercase">
                <span>Hello, I am</span>
              </div>
              
              {/* Attractive, Clear, Highly Visible Name */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 drop-shadow-[0_2px_14px_rgba(6,182,212,0.4)]">
                  Kalyani J. Ramayane
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl sm:text-2xl font-bold text-slate-200 pt-1 leading-snug">
                Building <span className="text-cyan-300 font-extrabold">Intelligent Applications</span> &amp; Scalable Digital Experiences.
              </p>
            </div>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              Software engineering undergraduate specializing in AI &amp; Data Science at <strong>MMIT</strong>. I architect robust full-stack web applications, clean REST APIs, and applied speech &amp; NLP pipelines with Python, Java, and modern JavaScript.
            </p>

            {/* Floating 3D Feature Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs">
              <div className="px-3 py-1.5 rounded-lg bg-[#0c1733]/90 border border-indigo-500/25 text-slate-200 flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI Engineering Intern @ Infosys Springboard</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#0c1733]/90 border border-emerald-500/25 text-slate-200 flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>HackerRank Gold (Python)</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#0c1733]/90 border border-purple-500/25 text-slate-200 flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span>Full-Stack + RBAC Systems</span>
              </div>
            </div>

            {/* Action Buttons with 3D Glowing Hover */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-600 shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#0d1838]/90 text-slate-200 border border-indigo-500/30 hover:border-indigo-400 hover:bg-[#12224d] shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>View &amp; Download Resume</span>
              </button>
            </div>

            {/* Social Profile Channels */}
            <div className="flex items-center gap-6 pt-3 text-xs font-semibold text-slate-400">
              <span className="text-slate-500 uppercase tracking-wider text-[11px]">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-indigo-400" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Interactive Console Card */}
          <div className="lg:col-span-5">
            <TiltCard
              maxTilt={10}
              glowColor="rgba(99, 102, 241, 0.35)"
              className="border border-indigo-500/30 bg-[#0a1329]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(3,7,18,0.8)]"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-indigo-500/20 bg-[#080e21]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-indigo-300/80 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    kalyani_developer.ts
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-500/30 text-indigo-300">
                  TypeScript 5.2
                </span>
              </div>

              {/* Segmented Tab Controls */}
              <div className="flex border-b border-indigo-500/20 text-xs font-mono bg-[#091126]">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex-1 py-2.5 text-center border-b-2 transition-colors ${
                    activeTab === 'profile'
                      ? 'border-indigo-500 text-indigo-300 font-bold bg-[#0d1b3e]/60'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  profile.ts
                </button>
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`flex-1 py-2.5 text-center border-b-2 transition-colors ${
                    activeTab === 'architecture'
                      ? 'border-indigo-500 text-indigo-300 font-bold bg-[#0d1b3e]/60'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  stack.ts
                </button>
                <button
                  onClick={() => setActiveTab('academics')}
                  className={`flex-1 py-2.5 text-center border-b-2 transition-colors ${
                    activeTab === 'academics'
                      ? 'border-indigo-500 text-indigo-300 font-bold bg-[#0d1b3e]/60'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  records.ts
                </button>
              </div>

              {/* Code Panel Body */}
              <div className="p-5 font-mono text-xs overflow-x-auto leading-relaxed bg-[#070d1e]/80">
                {activeTab === 'profile' && (
                  <pre className="text-slate-300">
                    <code>
                      <span className="text-purple-400">export const</span> engineer = &#123;{'\n'}
                      {'  '}name: <span className="text-cyan-300">"{personalInfo.name}"</span>,{'\n'}
                      {'  '}degree: <span className="text-cyan-300">"{personalInfo.degree}"</span>,{'\n'}
                      {'  '}institution: <span className="text-cyan-300">"MMIT, Pune"</span>,{'\n'}
                      {'  '}graduation: <span className="text-amber-400">"Expected May 2027"</span>,{'\n'}
                      {'  '}sgpa: <span className="text-emerald-400">9.33 / 10.0</span>,{'\n'}
                      {'  '}internships: [{'\n'}
                      {'    '}<span className="text-cyan-300">"Infosys Springboard (AI Engineering)"</span>,{'\n'}
                      {'    '}<span className="text-cyan-300">"Startup Company (Full Stack)"</span>{'\n'}
                      {'  '}],{'\n'}
                      {'  '}roles: [<span className="text-indigo-400">"SDE Intern"</span>, <span className="text-indigo-400">"Full-Stack Dev"</span>, <span className="text-indigo-400">"AI Engineer"</span>]{'\n'}
                      &#125;;
                    </code>
                  </pre>
                )}

                {activeTab === 'architecture' && (
                  <pre className="text-slate-300">
                    <code>
                      <span className="text-slate-500">// Production Ready Stack Architecture</span>{'\n'}
                      <span className="text-purple-400">export interface</span> ProductionStack &#123;{'\n'}
                      {'  '}languages: [<span className="text-cyan-300">"Python"</span>, <span className="text-cyan-300">"Java"</span>, <span className="text-cyan-300">"C++"</span>, <span className="text-cyan-300">"JavaScript"</span>];{'\n'}
                      {'  '}backend: [<span className="text-indigo-400">"Node.js"</span>, <span className="text-indigo-400">"Express.js"</span>, <span className="text-indigo-400">"JWT Auth"</span>];{'\n'}
                      {'  '}frontend: [<span className="text-indigo-400">"React.js"</span>, <span className="text-indigo-400">"Tailwind CSS"</span>];{'\n'}
                      {'  '}databases: [<span className="text-emerald-400">"MongoDB"</span>, <span className="text-emerald-400">"MySQL"</span>];{'\n'}
                      {'  '}aiNlp: [<span className="text-purple-400">"Whisper STT"</span>, <span className="text-purple-400">"TF-IDF"</span>, <span className="text-purple-400">"LLMs"</span>];{'\n'}
                      {'  '}cloud: [<span className="text-amber-400">"AWS EC2"</span>, <span className="text-amber-400">"Docker"</span>, <span className="text-amber-400">"Vercel"</span>];{'\n'}
                      &#125;
                    </code>
                  </pre>
                )}

                {activeTab === 'academics' && (
                  <pre className="text-slate-300">
                    <code>
                      <span className="text-slate-500">// Academic Standing &amp; Badges</span>{'\n'}
                      <span className="text-purple-400">export const</span> credentials = &#123;{'\n'}
                      {'  '}engineeringSgpa: <span className="text-emerald-400">"9.33 / 10.0"</span>,{'\n'}
                      {'  '}sscExamScore: <span className="text-emerald-400">"99.20%"</span>,{'\n'}
                      {'  '}hscScienceScore: <span className="text-emerald-400">"70.17%"</span>,{'\n'}
                      {'  '}hackerrankBadge: <span className="text-amber-400">"Gold in Python"</span>,{'\n'}
                      {'  '}infosysCertificate: <span className="text-cyan-300">"AI Foundations &amp; ML"</span>,{'\n'}
                      {'  '}shippedProjects: <span className="text-indigo-400">4</span>{'\n'}
                      &#125;;
                    </code>
                  </pre>
                )}
              </div>

              {/* Status footer */}
              <div className="px-4 py-2.5 bg-[#080e21] border-t border-indigo-500/20 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-indigo-300">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Verified Engineering Portfolio
                </span>
                <span className="font-mono text-emerald-400">Active Build</span>
              </div>
            </TiltCard>
          </div>

        </div>

        {/* Full-width 3D Metric Strip */}
        <div className="mt-16 pt-8 border-t border-indigo-500/20 grid grid-cols-2 md:grid-cols-4 gap-4">
          <TiltCard
            glowColor="rgba(99, 102, 241, 0.25)"
            className="p-5 bg-[#0a142e]/80 border border-indigo-500/25 backdrop-blur-md"
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 tabular-nums">
              9.33
            </span>
            <span className="block text-xs text-slate-400 font-medium mt-1">
              B.E. Engineering SGPA (/ 10.0)
            </span>
          </TiltCard>

          <TiltCard
            glowColor="rgba(6, 182, 212, 0.25)"
            className="p-5 bg-[#0a142e]/80 border border-indigo-500/25 backdrop-blur-md"
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-200 tabular-nums">
              4
            </span>
            <span className="block text-xs text-slate-400 font-medium mt-1">
              Production &amp; Research Systems
            </span>
          </TiltCard>

          <TiltCard
            glowColor="rgba(245, 158, 11, 0.25)"
            className="p-5 bg-[#0a142e]/80 border border-indigo-500/25 backdrop-blur-md"
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
              Gold Tier
            </span>
            <span className="block text-xs text-slate-400 font-medium mt-1">
              HackerRank Python Problem Solving
            </span>
          </TiltCard>

          <TiltCard
            glowColor="rgba(16, 185, 129, 0.25)"
            className="p-5 bg-[#0a142e]/80 border border-indigo-500/25 backdrop-blur-md"
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tabular-nums">
              99.20%
            </span>
            <span className="block text-xs text-slate-400 font-medium mt-1">
              SSC Board Examination Score
            </span>
          </TiltCard>
        </div>

      </div>
    </section>
  );
};
