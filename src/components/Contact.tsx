import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, ExternalLink, Linkedin, Github, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyDraft = () => {
    const draftText = `To: ${personalInfo.email}\nSubject: ${formData.subject || 'SDE Opportunity'}\n\nHi Kalyani,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`;
    navigator.clipboard.writeText(draftText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Please fill in your name, email, and message before sending.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setStatusMessage('Please provide a valid email address.');
      return;
    }

    const mailSubject = encodeURIComponent(formData.subject.trim() || `Inquiry from ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Hello Kalyani,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;

    setStatus('success');
    setStatusMessage('Your email client has been opened with your inquiry pre-filled. You can also copy the draft below if you prefer webmail (Gmail/Outlook).');
  };

  return (
    <section id="contact" className="py-24 border-t border-indigo-500/20 bg-[#060b18] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let’s Discuss SDE &amp; AI Engineering Opportunities
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            I am actively seeking Software Development Engineer Internships and full-stack/AI roles. Reach out via email, LinkedIn, or the message launcher below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Details Card */}
          <div className="lg:col-span-5 space-y-4">
            <TiltCard
              maxTilt={6}
              glowColor="rgba(99, 102, 241, 0.25)"
              className="p-6 sm:p-8 bg-[#0a1329]/90 border border-indigo-500/25 backdrop-blur-xl shadow-xl space-y-6"
            >
              <div>
                <h3 className="text-base font-bold text-white">
                  Direct Contact &amp; Channels
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Verified communication channels for recruiters and placement officers.
                </p>
              </div>

              <div className="space-y-3">
                {/* Personal Email */}
                <div className="p-3.5 rounded-xl bg-[#0e1939] border border-indigo-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Personal Email</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs font-semibold text-white hover:text-cyan-300 hover:underline">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md text-slate-400 hover:text-cyan-300 hover:bg-[#15254f] transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Academic Email */}
                <div className="p-3.5 rounded-xl bg-[#0e1939] border border-indigo-500/20 flex items-center gap-3">
                  <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Academic Email (MMIT)</span>
                    <a href={`mailto:${personalInfo.institutionalEmail}`} className="text-xs font-semibold text-white hover:text-purple-300 hover:underline">
                      {personalInfo.institutionalEmail}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-xl bg-[#0e1939] border border-indigo-500/20 flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Phone Number</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-xs font-semibold text-white hover:underline">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-[#0e1939] border border-indigo-500/20 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Location</span>
                    <span className="text-xs font-semibold text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-4 border-t border-indigo-500/20 space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Professional Profiles:
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#0e1939] border border-indigo-500/20 text-xs font-medium text-slate-200 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                      <span>linkedin.com/in/kalyaniramayane</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#0e1939] border border-indigo-500/20 text-xs font-medium text-slate-200 hover:text-white hover:border-indigo-500/40 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-indigo-400" />
                      <span>github.com/kalyani-21-rkj</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <TiltCard
              maxTilt={4}
              glowColor="rgba(6, 182, 212, 0.25)"
              className="p-6 sm:p-8 bg-[#0a1329]/90 border border-indigo-500/25 backdrop-blur-xl shadow-xl"
            >
              <h3 className="text-base font-bold text-white mb-1">
                Compose Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the message details below to dispatch a direct email communication.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Email client triggered successfully</span>
                  </div>
                  <p className="text-xs text-emerald-200/90 leading-relaxed">
                    {statusMessage}
                  </p>
                  <button
                    onClick={handleCopyDraft}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0b1736] text-xs font-semibold text-white border border-emerald-500/30 hover:bg-[#112455] transition-colors"
                  >
                    {copiedDraft ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                    <span>{copiedDraft ? 'Copied Draft to Clipboard!' : 'Copy Draft Text for Webmail'}</span>
                  </button>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 flex items-center gap-2 text-rose-300 text-xs">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Chen (Engineering Lead)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080e22] border border-indigo-500/30 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex.chen@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080e22] border border-indigo-500/30 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="SDE Intern Candidate Interview / Full-Stack Discussion"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080e22] border border-indigo-500/30 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Kalyani, we reviewed your work on BusinessHub CRM and your AI engineering internship at Infosys Springboard..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080e22] border border-indigo-500/30 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all leading-relaxed"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Launch Direct Email Client</span>
                  </button>
                </div>
              </form>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
