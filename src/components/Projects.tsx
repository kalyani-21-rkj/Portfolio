import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { TiltCard } from './TiltCard';
import {
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  Layers,
  Bot,
  GraduationCap,
  Briefcase,
  CheckCircle2,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filters: ProjectCategory[] = ['All', 'Full-Stack', 'AI / ML', 'Enterprise OS'];

  const filteredProjects =
    selectedFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full-Stack':
        return <Briefcase className="w-3.5 h-3.5 text-indigo-400" />;
      case 'AI / ML':
        return <Bot className="w-3.5 h-3.5 text-cyan-400" />;
      case 'Enterprise OS':
        return <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  const getGlowColor = (category: string) => {
    switch (category) {
      case 'Full-Stack':
        return 'rgba(99, 102, 241, 0.25)';
      case 'AI / ML':
        return 'rgba(6, 182, 212, 0.25)';
      case 'Enterprise OS':
        return 'rgba(20, 184, 166, 0.25)';
      default:
        return 'rgba(99, 102, 241, 0.2)';
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-indigo-500/20 bg-[#070e22] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Engineering Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Production Architectures &amp; AI Pipelines
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Every project below represents verified engineering—from normalized MongoDB schemas and RBAC authorization engines to speech recognition pipelines and LLM stream handlers.
            </p>
          </div>

          {/* Filter Segmented Controls */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0a142e] border border-indigo-500/25 self-start md:self-end">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid of 3D Tilt Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={7}
              glowColor={getGlowColor(project.category)}
              className="bg-[#0a1329]/90 border border-indigo-500/25 hover:border-indigo-400/60 backdrop-blur-xl group transition-all"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* Visual Media Header with 3D overlay */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#060b18] border-b border-indigo-500/20">
                    <img
                      src={project.imagePath}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    
                    <div className="absolute top-3 left-3 bg-[#070e24]/90 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-bold text-slate-200 border border-indigo-500/30 flex items-center gap-1.5 shadow-lg">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>

                    {project.deploymentPlatform && (
                      <div className="absolute bottom-3 right-3 bg-[#070e24]/90 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-mono text-cyan-300 border border-cyan-500/30">
                        {project.deploymentPlatform}
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-3.5">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-indigo-400 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Problem Statement */}
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {project.problemSolved}
                    </p>

                    {/* Key contributions */}
                    <div className="space-y-1.5 pt-1">
                      {project.keyContributions.slice(0, 2).map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges with 3D feel */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-[#0e1c3f]/80 text-slate-300 text-[11px] font-mono border border-indigo-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 text-[11px] font-mono text-slate-400">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 sm:px-7 py-4 border-t border-indigo-500/20 bg-[#080f24] flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                  >
                    <span>View Architecture &amp; Live Simulator</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-indigo-950/60 border border-transparent hover:border-indigo-500/30 transition-colors"
                        aria-label="View on GitHub"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-indigo-950/60 border border-transparent hover:border-indigo-500/30 transition-colors"
                        aria-label="Open Live Demo"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
