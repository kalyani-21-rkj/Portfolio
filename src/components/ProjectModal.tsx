import React, { useState, useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';
import { InteractiveSandbox } from './InteractiveSandbox';
import { X, ExternalLink, Github, CheckCircle2, Server, Terminal, Sparkles, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'simulator'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#030712]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog with 3D Depth */}
      <div className="relative w-full max-w-4xl bg-[#0a1329] rounded-2xl border border-indigo-500/30 shadow-[0_25px_70px_rgba(3,7,18,0.9)] overflow-hidden z-10 max-h-[92vh] flex flex-col text-slate-100">
        
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between p-6 border-b border-indigo-500/20 bg-[#070e24]">
          <div>
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-2">
              <span>{project.category}</span>
              {project.deploymentPlatform && (
                <>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-slate-400 normal-case font-mono">{project.deploymentPlatform}</span>
                </>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-indigo-300 font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#12224d] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Subnav Tabs */}
        <div className="flex border-b border-indigo-500/20 text-xs font-semibold bg-[#080f26] px-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-cyan-400 text-cyan-300 font-bold'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Overview &amp; Deliverables
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-4 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-cyan-400 text-cyan-300 font-bold'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`py-3 px-4 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'border-cyan-400 text-cyan-300 font-bold'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Simulator</span>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Image Banner */}
              <div className="rounded-xl overflow-hidden border border-indigo-500/20 bg-[#060b18] max-h-72">
                <img
                  src={project.imagePath}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Problem statement */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Problem &amp; Context
                </h4>
                <div className="p-4 rounded-xl bg-[#070e24] border border-indigo-500/20 text-sm text-slate-300 leading-relaxed">
                  {project.problemSolved}
                </div>
              </div>

              {/* Detailed scope */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Project Scope &amp; Functionality
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key contributions */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Verified Engineering Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {project.keyContributions.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modules list if present */}
              {project.modulesList && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    Integrated Submodules
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.modulesList.map((mod, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-[#070e24] border border-indigo-500/20 text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#0e1b3d] text-slate-300 border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {project.metrics && (
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#070e24] border border-indigo-500/20 text-center">
                      <span className="block text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">{m.value}</span>
                      <span className="text-xs text-slate-400">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {project.architecture && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Architectural Invariants &amp; Data Flow
                  </h4>
                  <div className="space-y-3 font-mono text-xs">
                    {project.architecture.map((arch, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-[#070e24] border border-indigo-500/20 text-slate-300 leading-relaxed">
                        {arch}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Code snippet representation */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Core Implementation Blueprint
                </h4>
                <div className="p-4 rounded-xl bg-[#060b18] text-slate-300 font-mono text-xs leading-relaxed overflow-x-auto border border-indigo-500/20">
                  <span className="text-slate-500">// Project Configuration &amp; Deployment Specification</span>{'\n'}
                  <span className="text-purple-400">export const</span> systemManifest = &#123;{'\n'}
                  {'  '}id: <span className="text-emerald-400">"{project.id}"</span>,{'\n'}
                  {'  '}title: <span className="text-emerald-400">"{project.title}"</span>,{'\n'}
                  {'  '}category: <span className="text-cyan-400">"{project.category}"</span>,{'\n'}
                  {'  '}deployment: <span className="text-amber-400">"{project.deploymentPlatform || 'Configured via Git'}"</span>,{'\n'}
                  {'  '}productionGrade: <span className="text-indigo-400">true</span>{'\n'}
                  &#125;;
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SIMULATOR */}
          {activeTab === 'simulator' && (
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-[#0e1f48] border border-cyan-500/30 text-xs text-cyan-200">
                Test the interactive workflow simulation for <strong>{project.title}</strong> right in your browser. All business logic and role checks run in real-time.
              </div>
              <InteractiveSandbox project={project} />
            </div>
          )}

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-6 border-t border-indigo-500/20 bg-[#070e24] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#0d1838] border border-indigo-500/30 text-white hover:bg-[#152554] transition-colors"
              >
                <Github className="w-4 h-4 text-indigo-400" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-[#12224d] transition-colors"
          >
            Close Dialog
          </button>
        </div>

      </div>
    </div>
  );
};
