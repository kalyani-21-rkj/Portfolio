import React, { useState, useMemo } from 'react';
import { skillCategories } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Binary, Server, Brain, Database, Wrench, Layers, Search, Check, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Binary className="w-4 h-4 text-cyan-400" />;
      case 'Backend & Web Development':
        return <Server className="w-4 h-4 text-indigo-400" />;
      case 'AI, Machine Learning & NLP':
        return <Brain className="w-4 h-4 text-purple-400" />;
      case 'Databases & Storage':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Cloud, DevOps & Tooling':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      case 'CS Fundamentals':
        return <Layers className="w-4 h-4 text-rose-400" />;
      default:
        return <Server className="w-4 h-4 text-indigo-400" />;
    }
  };

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => selectedCategory === 'All' || cat.category === selectedCategory)
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const q = searchQuery.toLowerCase();
        const matchingSkills = cat.skills.filter((s) => s.toLowerCase().includes(q));
        if (matchingSkills.length > 0 || cat.category.toLowerCase().includes(q)) {
          return {
            ...cat,
            skills: matchingSkills.length > 0 ? matchingSkills : cat.skills,
          };
        }
        return null;
      })
      .filter(Boolean) as typeof skillCategories;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 border-t border-indigo-500/20 bg-[#060b18] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Engineering Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Technical Skills &amp; Stack
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Extracted directly from verified academic coursework at MMIT, internship deliverables at Infosys Springboard, and shipped project architectures.
            </p>
          </div>

          {/* Search Input with Neon Accent */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Python, Docker)..."
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#0a1329] border border-indigo-500/30 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all shadow-[0_0_15px_rgba(99,102,241,0.15)]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-indigo-500/15">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.35)]'
                  : 'text-slate-400 hover:text-white hover:bg-[#0f1d40]/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Skill Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <TiltCard
              key={group.category}
              maxTilt={8}
              glowColor="rgba(99, 102, 241, 0.25)"
              className="p-6 bg-[#0a1329]/90 border border-indigo-500/25 hover:border-indigo-400/50 backdrop-blur-xl"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2.5 rounded-xl bg-[#0e1a3a] border border-indigo-500/20">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      {group.category}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Skill Items */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0e1b3d]/90 text-slate-200 border border-indigo-500/20 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors shadow-sm"
                    >
                      <Check className="w-3 h-3 text-cyan-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}

          {filteredCategories.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-400 text-sm">
              No technical skills matched your search query "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
