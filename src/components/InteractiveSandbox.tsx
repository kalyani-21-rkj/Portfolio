import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Lock,
  Layers,
  Send,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Copy,
  Check,
  Building,
  Key,
} from 'lucide-react';

interface InteractiveSandboxProps {
  project: ProjectItem;
}

export const InteractiveSandbox: React.FC<InteractiveSandboxProps> = ({ project }) => {
  if (project.id === 'business-hub') {
    return <BusinessHubSandbox />;
  }
  if (project.id === 'caspa-school-os') {
    return <CaspaSchoolSandbox />;
  }
  if (project.id === 'sigma-gpt') {
    return <SigmaGptSandbox />;
  }
  if (project.id === 'ai-podcast-transcription') {
    return <PodcastPipelineSandbox />;
  }

  return null;
};

// 1. BusinessHub CRM Interactive Simulator
const BusinessHubSandbox: React.FC = () => {
  const [activeRole, setActiveRole] = useState<'admin' | 'sales' | 'inventory' | 'hr'>('admin');
  const [activeModule, setActiveModule] = useState<'customers' | 'inventory' | 'billing'>('customers');

  const rolePermissions: Record<string, { read: string[]; write: string[]; delete: string[] }> = {
    admin: {
      read: ['Customers', 'HR', 'Employees', 'Inventory', 'Purchase', 'Billing'],
      write: ['Customers', 'HR', 'Employees', 'Inventory', 'Purchase', 'Billing'],
      delete: ['All Modules'],
    },
    sales: {
      read: ['Customers', 'Inventory (Read Only)', 'Billing (Invoices)'],
      write: ['Customers', 'Leads'],
      delete: ['None'],
    },
    inventory: {
      read: ['Inventory', 'Purchase Orders', 'Suppliers'],
      write: ['Stock Levels', 'Purchase Orders'],
      delete: ['Draft Orders'],
    },
    hr: {
      read: ['Employees', 'Attendance', 'Payroll Logs'],
      write: ['Attendance', 'Leaves'],
      delete: ['None'],
    },
  };

  const sampleCustomers = [
    { name: 'Apex Automation Ltd', contact: 'Rohan Mehta', value: '$45,000', stage: 'Contract Signed', status: 'Active' },
    { name: 'Kalyani Tech Systems', contact: 'Priya Sharma', value: '$12,500', stage: 'Negotiation', status: 'Pending' },
    { name: 'Quantum Cloud AI', contact: 'David Vance', value: '$88,000', stage: 'Proposal Review', status: 'Qualified' },
  ];

  const sampleInventory = [
    { sku: 'SRV-RACK-01', item: 'High-Density Rack Server', stock: 14, minAlert: 5, status: 'In Stock' },
    { sku: 'MEM-DDR5-64G', item: '64GB ECC Server Memory', stock: 4, minAlert: 8, status: 'Low Stock Alert' },
    { sku: 'NVME-4TB-PCIE', item: 'Enterprise 4TB NVMe SSD', stock: 28, minAlert: 10, status: 'Optimal' },
  ];

  return (
    <div className="space-y-4 text-xs font-mono">
      {/* Role Selector */}
      <div className="p-3.5 rounded-xl bg-[#070e24] border border-indigo-500/20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Key className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-bold text-white">Simulate RBAC Auth Role:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(['admin', 'sales', 'inventory', 'hr'] as const).map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-3 py-1 rounded-lg text-[11px] uppercase tracking-wider font-bold transition-all ${
                activeRole === role
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.4)]'
                  : 'bg-[#0a1329] text-slate-400 border border-indigo-500/20 hover:text-white'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Permissions Inspection Banner */}
      <div className="p-3.5 rounded-xl bg-[#080f26] border border-indigo-500/20 grid sm:grid-cols-3 gap-3">
        <div>
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">Read Access</span>
          <p className="text-white font-medium">
            {rolePermissions[activeRole].read.join(', ')}
          </p>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">Write Access</span>
          <p className="text-cyan-400 font-medium">
            {rolePermissions[activeRole].write.join(', ')}
          </p>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">Delete Authority</span>
          <p className="text-rose-400 font-medium">
            {rolePermissions[activeRole].delete.join(', ')}
          </p>
        </div>
      </div>

      {/* Live Module Preview */}
      <div className="border border-indigo-500/20 rounded-xl overflow-hidden bg-[#070d1e]">
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#080f26] border-b border-indigo-500/20">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveModule('customers')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                activeModule === 'customers' ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Customer Leads
            </button>
            <button
              onClick={() => setActiveModule('inventory')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                activeModule === 'inventory' ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Warehouse Inventory
            </button>
          </div>
          <span className="text-[11px] font-mono text-cyan-400/80">
            JWT: Bearer [Role:{activeRole}]
          </span>
        </div>

        <div className="p-4 overflow-x-auto">
          {activeModule === 'customers' && (
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-500 border-b border-indigo-500/20 text-[10px] uppercase">
                  <th className="pb-2">Account Name</th>
                  <th className="pb-2">Lead Contact</th>
                  <th className="pb-2">Pipeline Deal</th>
                  <th className="pb-2">Stage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-indigo-500/10">
                {sampleCustomers.map((c, i) => (
                  <tr key={i} className="hover:bg-[#0c1736]">
                    <td className="py-2.5 font-bold text-white">{c.name}</td>
                    <td className="py-2.5 text-slate-400">{c.contact}</td>
                    <td className="py-2.5 text-emerald-400 font-bold">{c.value}</td>
                    <td className="py-2.5 text-slate-300">{c.stage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeModule === 'inventory' && (
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-500 border-b border-indigo-500/20 text-[10px] uppercase">
                  <th className="pb-2">SKU</th>
                  <th className="pb-2">Hardware Item</th>
                  <th className="pb-2">Units in Stock</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-indigo-500/10">
                {sampleInventory.map((item, i) => (
                  <tr key={i} className="hover:bg-[#0c1736]">
                    <td className="py-2.5 font-mono text-cyan-400">{item.sku}</td>
                    <td className="py-2.5 font-bold text-white">{item.item}</td>
                    <td className="py-2.5 text-slate-300 tabular-nums">{item.stock}</td>
                    <td className="py-2.5">
                      <span className={item.stock < item.minAlert ? 'text-amber-400 font-bold' : 'text-emerald-400'}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

// 2. CASPA School OS Interactive Simulator
const CaspaSchoolSandbox: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'Principal' | 'Teacher' | 'Student' | 'Safety Officer'>('Principal');
  const [aiPrompt, setAiPrompt] = useState('Identify students needing algebra support based on Grade 8 quiz');
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  const roleWorkspaces = {
    Principal: {
      scope: 'Campus-Wide (Pre-K to 12)',
      activeViews: ['Attendance Aggregation (96.2%)', 'Faculty Workload Matrix', 'Financial Fee Realization', 'Board Compliance Audit'],
      aiCapability: 'Executive summarizing of student cohort retention and multi-branch resource utilization.',
    },
    Teacher: {
      scope: 'Section Scope (Class 8-A, 8-B, 10-A)',
      activeViews: ['Class Attendance Marker', 'Formative Assessment Gradebook', 'Homework Dispenser', 'Parent Discussion Notes'],
      aiCapability: 'Automated lesson plan drafting, diagnostic question generation, and differentiated worksheets.',
    },
    Student: {
      scope: 'Individual Student Profile & Enrolled Electives',
      activeViews: ['Daily Class Timetable', 'Submitted Assignments', 'Exam Schedule & Hall Ticket', 'AI Peer Tutor'],
      aiCapability: 'Step-by-step algebra problem coaching without revealing direct test answers.',
    },
    'Safety Officer': {
      scope: 'Confidential Campus Safeguarding & Anti-Ragging',
      activeViews: ['Encrypted Incident Depository', 'Dual-Blind Review Pipeline', 'Timestamped Chain of Custody', 'CCTV Route Logs'],
      aiCapability: 'Neutral incident timeline reconstruction with automatic redaction of non-involved parties.',
    },
  };

  const runAiSimulation = () => {
    setAiResponse('Analyzing section assessment data across 64 students...');
    setTimeout(() => {
      setAiResponse(
        `[CASPA AI - ${selectedRole} Mode] Analysis complete:\n• 4 students scored below threshold on Quadratic Factorization (Avg: 54%).\n• Recommended Action: Deploy Differentiated Worksheet B-12 and schedule 15-minute concept review.`
      );
    }, 400);
  };

  const current = roleWorkspaces[selectedRole];

  return (
    <div className="space-y-4 text-xs font-mono">
      {/* Role Switcher */}
      <div className="p-3.5 rounded-xl bg-[#070e24] border border-indigo-500/20 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Building className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-bold text-white">Switch CASPA Persona:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(['Principal', 'Teacher', 'Student', 'Safety Officer'] as const).map((role) => (
            <button
              key={role}
              onClick={() => {
                setSelectedRole(role);
                setAiResponse(null);
              }}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                selectedRole === role
                  ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-[0_0_12px_rgba(20,184,166,0.4)]'
                  : 'bg-[#0a1329] text-slate-400 border border-indigo-500/20 hover:text-white'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Workspace Inspection */}
      <div className="p-4 rounded-xl bg-[#080f26] border border-indigo-500/20 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-slate-400">Scoped Authority:</span>
          <span className="text-cyan-400 font-bold">{current.scope}</span>
        </div>

        <div>
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5">Rendered Modules:</span>
          <div className="grid grid-cols-2 gap-2">
            {current.activeViews.map((view, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-[#070d1e] border border-indigo-500/20 text-[11px] text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{view}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Layer */}
        <div className="pt-2 border-t border-indigo-500/20">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5">
            CASPA AI Gateway:
          </span>
          <div className="flex gap-2">
            <input
              type="text"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              className="flex-1 px-3.5 py-2 rounded-lg bg-[#070d1e] border border-indigo-500/25 text-white text-xs focus:outline-none focus:border-cyan-400"
            />
            <button
              onClick={runAiSimulation}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold flex items-center gap-1.5 shadow-[0_0_12px_rgba(20,184,166,0.3)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Query AI</span>
            </button>
          </div>

          {aiResponse && (
            <div className="mt-2.5 p-3 rounded-xl bg-[#06202a]/80 border border-teal-500/40 text-teal-200 whitespace-pre-line leading-relaxed">
              {aiResponse}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 3. SigmaGPT Chat Sandbox
const SigmaGptSandbox: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string; code?: string }>>([
    {
      role: 'user',
      text: 'How does your JWT verification middleware authenticate protected routes?',
    },
    {
      role: 'assistant',
      text: 'The Express middleware extracts the Authorization header, validates the HMAC-SHA256 signature using the secret key, attaches decoded user claims to req.user, and rejects expired tokens with a 401 Unauthorized status.',
      code: `const verifyToken = (req, res, next) => {\n  const authHeader = req.headers.authorization;\n  if (!authHeader?.startsWith('Bearer ')) return res.status(401).json({ error: 'Token missing' });\n  const token = authHeader.split(' ')[1];\n  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {\n    if (err) return res.status(403).json({ error: 'Invalid or expired token' });\n    req.user = decoded;\n    next();\n  });\n};`,
    },
  ]);
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: `[SigmaGPT Token Stream] Processing query: "${userText}"\nRetrieved context from MongoDB session thread. Generating optimized explanation...`,
        },
      ]);
    }, 350);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-3.5 text-xs font-mono">
      <div className="max-h-60 overflow-y-auto space-y-3 p-3.5 rounded-xl bg-[#070e24] border border-indigo-500/20">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`p-3.5 rounded-xl ${
              m.role === 'user'
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white ml-6 shadow-md'
                : 'bg-[#0a1329] border border-indigo-500/25 text-slate-200 mr-6'
            }`}
          >
            <div className="text-[10px] uppercase tracking-wider mb-1 opacity-70">
              {m.role === 'user' ? 'User Inquiry' : 'SigmaGPT Assistant'}
            </div>
            <p className="leading-relaxed">{m.text}</p>
            {m.code && (
              <div className="mt-2.5 p-3 rounded-lg bg-[#060a16] text-slate-200 font-mono text-[11px] relative overflow-x-auto border border-indigo-500/20">
                <button
                  onClick={() => handleCopyCode(m.code!)}
                  className="absolute right-2 top-2 p-1.5 rounded-md bg-[#0e1b3d] hover:bg-[#152758] text-slate-300"
                  title="Copy code"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
                <pre>{m.code}</pre>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask a question about database indexing or REST architecture..."
          className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#070e24] border border-indigo-500/25 text-white text-xs focus:outline-none focus:border-cyan-400"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold flex items-center gap-1.5 shadow-[0_0_12px_rgba(99,102,241,0.4)]"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

// 4. AI Podcast Transcription Pipeline Sandbox
const PodcastPipelineSandbox: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      time: '00:00 - 04:30',
      title: 'Acoustic Ingestion & Preprocessing',
      keywords: ['Bandpass Filter', 'RMS Normalization', 'SNR Ratio: +18dB'],
      sentiment: '+0.45 (Constructive / Engaged)',
      transcript: '"In this opening segment, we review audio noise suppression techniques before feeding raw waveforms into the Whisper acoustic model."',
    },
    {
      time: '04:31 - 11:20',
      title: 'Whisper Speech-to-Text Transcription',
      keywords: ['Phoneme Alignment', 'Word Error Rate: 4.2%', 'Timestamps'],
      sentiment: '+0.60 (Positive / Insightful)',
      transcript: '"Speech recognition inferences generate timestamped sentence tokens, accurately preserving technical terms like Scikit-learn and TF-IDF."',
    },
    {
      time: '11:21 - 18:45',
      title: 'TF-IDF Topic Segmentation & Sentiment',
      keywords: ['Cosine Similarity', 'Cluster Centroids', 'Polarity Shifts'],
      sentiment: '+0.30 (Analytical)',
      transcript: '"Applying term frequency-inverse document frequency vectors isolates topic transitions automatically without supervised labeling."',
    },
  ];

  return (
    <div className="space-y-3.5 text-xs font-mono">
      {/* Player header */}
      <div className="p-3.5 rounded-xl bg-[#070e24] border border-indigo-500/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 text-white transition-all shadow-[0_0_12px_rgba(99,102,241,0.4)]"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <div>
            <span className="font-bold text-white block">
              tech_podcast_ep42_analysis.wav
            </span>
            <span className="text-[11px] text-slate-400">
              Sample Rate: 16kHz · Whisper Base Model
            </span>
          </div>
        </div>

        <span className="text-[11px] text-cyan-400 font-bold">
          {chapters[activeChapter].time}
        </span>
      </div>

      {/* Chapters selection */}
      <div className="grid sm:grid-cols-3 gap-2">
        {chapters.map((ch, idx) => (
          <button
            key={idx}
            onClick={() => setActiveChapter(idx)}
            className={`p-3 rounded-xl text-left border transition-all ${
              activeChapter === idx
                ? 'bg-[#0f1d46] border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                : 'bg-[#080f26] border-indigo-500/20 text-slate-400 hover:text-white'
            }`}
          >
            <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
              Chapter {idx + 1}
            </div>
            <div className="font-bold text-xs line-clamp-1 mb-1 text-white">
              {ch.title}
            </div>
            <div className="text-[10px] text-cyan-400">
              {ch.time}
            </div>
          </button>
        ))}
      </div>

      {/* Detailed transcript & metric snapshot */}
      <div className="p-4 rounded-xl bg-[#070e24] border border-indigo-500/20 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wider text-slate-400">Extracted Chapter Transcript</span>
          <span className="text-[11px] text-emerald-400 font-bold">
            Sentiment: {chapters[activeChapter].sentiment}
          </span>
        </div>
        <p className="text-slate-200 italic leading-relaxed bg-[#060b18] p-3 rounded-lg border border-indigo-500/15">
          {chapters[activeChapter].transcript}
        </p>

        <div>
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1.5">
            TF-IDF Key Tokens:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {chapters[activeChapter].keywords.map((kw, i) => (
              <span key={i} className="px-2.5 py-0.5 rounded-md bg-[#0d1838] text-cyan-300 border border-indigo-500/20 text-[11px]">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
