import React, { useEffect } from 'react';
import { personalInfo, skillCategories, projectsData, experienceData, educationData, achievementsAndCertifications } from '../data/portfolioData';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#030712]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#0a1329] rounded-2xl border border-indigo-500/30 shadow-[0_25px_70px_rgba(3,7,18,0.9)] overflow-hidden z-10 max-h-[94vh] flex flex-col text-slate-100">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 sm:px-6 border-b border-indigo-500/20 bg-[#070e24]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-bold text-white">
              Verified Engineering Resume
            </span>
            <span className="hidden sm:inline-block text-xs text-indigo-300 font-mono">
              · {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumePath}
              download="Kalyani_Ramayane_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.4)]"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0d1838] border border-indigo-500/30 text-slate-200 hover:bg-[#142654] transition-colors"
              title="Print Document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#12224d] transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informative placement hint for user */}
        <div className="px-6 py-2 bg-[#0d1b3e]/60 border-b border-indigo-500/20 text-[11px] text-cyan-200 flex items-center justify-between">
          <span>
            Target file: <code className="font-mono font-bold text-cyan-300">public/Kalyani_Ramayane_Resume.pdf</code>.
          </span>
        </div>

        {/* Formatted Resume Preview */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200 font-sans bg-[#080f24] print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="border-b border-indigo-500/20 pb-6 text-center sm:text-left space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-cyan-400 print:text-indigo-600">
              {personalInfo.degree} · MMIT (Expected May 2027) · SGPA: {personalInfo.sgpa}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.phone}</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{personalInfo.location}</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-indigo-400" />
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 border-b border-indigo-500/20 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-indigo-500/20 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold text-white print:text-black">
                    <span>{edu.degree} — {edu.institution}</span>
                    <span className="text-xs font-mono text-emerald-400">{edu.score}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">{edu.year}</div>
                  {edu.coursework && (
                    <div className="text-xs text-slate-400 mt-1">
                      Coursework: {edu.coursework.join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-indigo-500/20 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              {skillCategories.map((group) => (
                <div key={group.category} className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-2">
                  <span className="sm:col-span-4 font-semibold text-slate-200">
                    {group.category}:
                  </span>
                  <span className="sm:col-span-8 text-slate-400">
                    {group.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-indigo-500/20 pb-1">
              Internship &amp; Experience
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="text-xs sm:text-sm space-y-1.5">
                  <div className="flex justify-between items-baseline font-bold text-white print:text-black">
                    <span>{exp.role} — {exp.organization}</span>
                    <span className="text-xs font-mono text-cyan-300">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-indigo-500/20 pb-1">
              Featured Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-white print:text-black">
                    <span>{proj.title}</span>
                    <span className="text-xs font-mono text-cyan-400">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-300">{proj.description}</p>
                  <div className="text-xs text-slate-400 font-mono">
                    Technologies: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-indigo-500/20 pb-1">
              Certifications &amp; Achievements
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300">
              {achievementsAndCertifications.certifications.map((c, i) => (
                <li key={i}>
                  <strong className="text-white">{c.title}</strong> — {c.issuer} ({c.year})
                </li>
              ))}
              {achievementsAndCertifications.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-indigo-500/20 bg-[#070e24] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#0d1838] border border-indigo-500/30 text-slate-300 hover:text-white hover:bg-[#152554] transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
