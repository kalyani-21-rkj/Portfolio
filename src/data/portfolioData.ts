import { ProjectItem, ExperienceItem, EducationItem, SkillCategory, CertificationItem } from '../types/portfolio';

export const personalInfo = {
  name: 'Kalyani J. Ramayane',
  shortName: 'Kalyani',
  headline: 'Building Intelligent Applications & Scalable Digital Experiences.',
  subheading: '2027 Computer Engineering Graduate · Artificial Intelligence & Data Science · MMIT',
  role: 'Software Development Engineer Intern | Full-Stack & AI Developer',
  degree: 'B.E. in Artificial Intelligence & Data Science',
  institution: 'Marathwada Mitra Mandal’s Institute of Technology (MMIT)',
  graduationYear: 'Expected May 2027',
  sgpa: '9.33 / 10.0',
  location: 'Maharashtra, India',
  email: 'ramayanekj2005@gmail.com',
  institutionalEmail: 'kalyani.ramayane23@mmit.edu.in',
  phone: '+91-8080099724',
  github: 'https://github.com/kalyani-21-rkj',
  linkedin: 'https://linkedin.com/in/kalyaniramayane',
  resumePath: '/Kalyani_Ramayane_Resume.pdf',
  summary:
    'Computer Engineering undergraduate specializing in AI & Data Science (SGPA 9.33/10, graduating May 2027) with hands-on experience building production-ready web systems and machine learning workflows. Comfortable across the entire software stack—from architecting normalized MongoDB schemas, writing modular REST endpoints in Node.js/Express, to integrating Whisper STT and LLM workflows. Proven track record across an AI engineering internship at Infosys Springboard and competitive full-stack selection.',
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    iconName: 'Binary',
    description: 'Core languages utilized for data structures, algorithms, and system development',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'SQL'],
  },
  {
    category: 'Backend & Web Development',
    iconName: 'Server',
    description: 'Server architectures, middleware design, and responsive component interfaces',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'AI, Machine Learning & NLP',
    iconName: 'Brain',
    description: 'Speech recognition, lexical vectorization, and generative LLM pipelines',
    skills: ['LLMs', 'Prompt Engineering', 'NLP', 'Machine Learning', 'Deep Learning', 'Scikit-learn', 'Whisper STT', 'TF-IDF'],
  },
  {
    category: 'Databases & Storage',
    iconName: 'Database',
    description: 'Document and relational data modeling with transactional consistency',
    skills: ['MongoDB', 'MySQL', 'Mongoose ORM'],
  },
  {
    category: 'Cloud, DevOps & Tooling',
    iconName: 'Wrench',
    description: 'Containerization, cloud infrastructure instances, and version control',
    skills: ['AWS EC2', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Git', 'GitHub', 'Postman'],
  },
  {
    category: 'CS Fundamentals',
    iconName: 'Layers',
    description: 'Core theoretical and algorithmic foundations applied in daily coding',
    skills: ['Data Structures & Algorithms', 'Complexity Analysis', 'Object-Oriented Design', 'Operating Systems', 'DBMS'],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'business-hub',
    title: 'BusinessHub CRM & Operations System',
    tagline: 'Enterprise CRM uniting 6 operational modules with role-based access control and JWT authentication.',
    category: 'Full-Stack',
    featured: true,
    imagePath: '/src/assets/images/project_businesshub_crm_1793241212887.jpg',
    deploymentPlatform: 'Vercel (Client) · Render (API Server)',
    githubUrl: 'https://github.com/kalyani-21-rkj',
    liveUrl: 'https://businesshub-crm.vercel.app',
    interactiveDemoType: 'crm',
    metrics: [
      { label: 'Integrated Modules', value: '6 Modules' },
      { label: 'Security Model', value: 'RBAC + JWT' },
      { label: 'Architecture', value: 'MERN Stack' },
    ],
    modulesList: ['Customer Leads & CRM', 'HR & Attendance', 'Employee Directory', 'Inventory Control', 'Purchase Orders', 'Automated Billing'],
    description:
      'Architected and implemented an end-to-end CRM and business operations engine uniting customer relationship management, inventory stock, purchasing workflows, employee records, and billing into a single coordinated system.',
    problemSolved:
      'Small and mid-sized enterprises often struggle with disconnected software silos—customer inquiries, warehouse stocks, and billing invoices live in separate spreadsheets, resulting in data desynchronization and security leaks.',
    keyContributions: [
      'Architected 6 integrated business modules: Customers, HR, Employees, Inventory, Purchase, and Billing.',
      'Enforced enterprise-grade Role-Based Access Control (RBAC) guaranteeing data isolation between sales staff, inventory managers, and administrators.',
      'Engineered secure RESTful endpoints in Express.js with JWT authentication, body schema validation, and centralized error handling middleware.',
      'Designed a normalized MongoDB data schema optimizing relation lookups and transactional integrity.',
      'Owned the entire software development lifecycle from schema blueprinting to cloud production deployment on Render and Vercel.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs', 'Git', 'Vercel', 'Render'],
    architecture: [
      'Client: React SPA with stateful role guards and responsive component dashboards.',
      'Server: Express.js REST API with JWT verification middleware and route controllers.',
      'Database: MongoDB with Mongoose schemas, indexed customer IDs, and audit logs.',
      'Deployment: Continuous deployment via GitHub to Render backend and Vercel CDN.',
    ],
  },
  {
    id: 'caspa-school-os',
    title: 'CASPA School OS | Multi-Role Educational ERP',
    tagline: 'Pre-Primary to Grade 12 educational OS featuring multi-role workspaces, safety workflows, and AI tutoring.',
    category: 'Enterprise OS',
    featured: true,
    imagePath: '/src/assets/images/project_caspa_school_os_1793241213083.jpg',
    githubUrl: 'https://github.com/kalyani-21-rkj',
    interactiveDemoType: 'rbac',
    metrics: [
      { label: 'Workspaces', value: '7 Dedicated Roles' },
      { label: 'Permissions', value: '3-Tier Scope Engine' },
      { label: 'Safety Module', value: 'Zero-Leak Audit' },
    ],
    modulesList: ['Super Admin & Branch Control', 'Principal Insights', 'Teacher Class Workspace', 'Student Learning Portal', 'Parent Tracking & Fees', 'Safeguarding / Anti-Ragging', 'CASPA AI Assistant Layer'],
    description:
      'Designed and developed architectural modules for CASPA School OS, an enterprise platform serving school leadership, teachers, parents, and students. Integrated sensitive safety handling, academic tracking, and an AI intelligence assistant layer.',
    problemSolved:
      'Schools juggle over half a dozen disconnected apps for fee collection, student attendance, report cards, and safety incident reporting. CASPA School OS consolidates these functions into one system where interface complexity is dynamically stripped based on role responsibilities.',
    keyContributions: [
      'Engineered multi-workspace role routing across 7 distinct personas (Super Admin, Principal, Teacher, Student, Parent, Accounts, Safety Officer).',
      'Implemented custom permission engine supporting Module-level, Record Scope (Campus, Class, Section), and Time-Bound permission rules.',
      'Built confidential safeguarding and anti-ragging incident tracking workflows with least-privilege review pipelines and audit trails.',
      'Architected the CASPA AI layer interface tailored for role-aware academic tutoring, automated worksheet generation, and administrative natural-language summaries.',
      'Implemented responsive, accessible layouts adhering to enterprise UI specifications (Deep Navy / Education Teal / CASPA Purple palette).',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RBAC Engine', 'REST APIs', 'Tailwind CSS', 'Figma'],
    architecture: [
      'Role Dispatcher: Dynamic workspace generator evaluating module, scope, and time tokens.',
      'Safety Engine: Dual-blind logging for sensitive incidents with cryptographic timestamping.',
      'CASPA AI Gateway: Prompt pipeline routing curriculum queries to LLM with role safety context.',
      'Storage: Hierarchical document models representing school campuses, grade sections, and student profiles.',
    ],
  },
  {
    id: 'sigma-gpt',
    title: 'SigmaGPT | MERN Stack LLM Assistant',
    tagline: 'Conversational AI platform featuring multi-thread memory, streaming response cards, and JWT security.',
    category: 'AI / ML',
    featured: true,
    imagePath: '/src/assets/images/project_sigmagpt_chat_1793241213537.jpg',
    githubUrl: 'https://github.com/kalyani-21-rkj',
    interactiveDemoType: 'llm',
    metrics: [
      { label: 'State Management', value: 'Multi-Thread Sync' },
      { label: 'Security', value: 'JWT + Hash Auth' },
      { label: 'Interface', value: 'Responsive Markdown' },
    ],
    modulesList: ['Chat Session Manager', 'Context Retention Buffer', 'LLM Prompt Engine', 'Code Highlight Viewer', 'User Identity Guard'],
    description:
      'Built a full-stack generative AI assistant featuring persistent multi-thread history, context retention, responsive streaming feedback, and secure user profile isolation.',
    problemSolved:
      'Many prototype chat apps lack reliable session persistence and authenticated privacy, losing user conversations upon page reload or failing to isolate personal conversational data across users.',
    keyContributions: [
      'Engineered real-time LLM interaction layer with structured prompt engineering and response parsing.',
      'Designed a scalable MongoDB schema modeling users, chat threads, and message nodes for fast historical query lookups.',
      'Implemented secure user authentication with encrypted password handling and JWT tokens.',
      'Built RESTful API endpoints handling streaming tokens, conversation pruning, and message state persistence.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'LLM API', 'Prompt Engineering', 'JWT Auth'],
    architecture: [
      'Frontend: React application with markdown rendering, copy-to-clipboard code blocks, and conversation tree navigation.',
      'API Layer: Node/Express server parsing user prompts and applying contextual framing before LLM invocation.',
      'Database: MongoDB collections for User Accounts, Thread Sessions, and Message Documents.',
    ],
  },
  {
    id: 'ai-podcast-transcription',
    title: 'AI Podcast Transcription & Topic Segmentation',
    tagline: 'Acoustic intelligence pipeline transforming multi-speaker audio into structured, chaptered insights.',
    category: 'AI / ML',
    featured: true,
    imagePath: '/src/assets/images/project_podcast_ai_audio_1793241213825.jpg',
    githubUrl: 'https://github.com/kalyani-21-rkj',
    interactiveDemoType: 'audio',
    metrics: [
      { label: 'STT Engine', value: 'OpenAI Whisper' },
      { label: 'NLP Technique', value: 'TF-IDF Vectors' },
      { label: 'Analysis', value: 'Topic & Sentiment' },
    ],
    modulesList: ['Audio Noise Reducer', 'Speech-to-Text Whisper', 'TF-IDF Topic Segmenter', 'Sentiment Trend Tracker', 'Transcript Search Engine'],
    description:
      'A machine learning audio processing pipeline that converts raw, multi-speaker podcast recordings into chaptered transcripts with searchable semantic tags and sentiment tone graphs.',
    problemSolved:
      'Long audio recordings are opaque and unsearchable. Finding specific topics or assessing emotional tone across a 45-minute episode requires tedious manual scrubbing.',
    keyContributions: [
      'Constructed an end-to-end Python pipeline chaining audio preprocessing (noise suppression, frequency normalization) with OpenAI Whisper.',
      'Applied Scikit-learn and TF-IDF vectorization for unsupervised keyword extraction and semantic topic segmentation.',
      'Quantified segment-by-segment sentiment to highlight conversational shifts and overall audio tone.',
      'Significantly boosted speech recognition accuracy in noisy recordings by engineering the audio preprocessing pipeline.',
    ],
    technologies: ['Python', 'Whisper STT', 'Scikit-learn', 'TF-IDF', 'NLP', 'Audio Signal Processing', 'NumPy'],
    architecture: [
      'Audio Ingestion: Cleanses and balances audio channels to optimize speech phoneme detection.',
      'Inference Engine: Whisper automatic speech recognition emitting timestamped sentences.',
      'Segmentation: Lexical frequency scoring grouping contiguous sentences into topical chapters.',
      'Visual Output: Structured JSON payload powering keyword tags and tone graphs.',
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'infosys-springboard',
    role: 'AI Engineering Intern',
    organization: 'Infosys Springboard (Virtual)',
    type: 'Internship',
    period: 'Jan 2025 - Apr 2025',
    status: 'Completed',
    highlights: [
      'Designed and built an end-to-end podcast analysis system in Python: audio preprocessing, speech-to-text, topic segmentation, and sentiment analysis.',
      'Applied TF-IDF and ML techniques for keyword extraction and topic segmentation, making long audio content searchable and easier to navigate.',
      'Improved transcription quality by developing an audio preprocessing stage ahead of the speech-to-text inference model.',
      'Delivered project milestones on schedule within an Agile team environment featuring regular standups, code reviews, and feedback cycles.',
    ],
    technologies: ['Python', 'Whisper', 'NLP', 'Scikit-learn', 'TF-IDF', 'Audio Preprocessing', 'Agile'],
  },
  {
    id: 'startup-intern',
    role: 'Full Stack Developer Intern',
    organization: 'Startup Company',
    type: 'Internship',
    period: 'Verified Selection / Upcoming',
    status: 'Selected',
    highlights: [
      'Selected as a Full Stack Developer Intern through competitive technical evaluation and coding assessments.',
      'Focusing on architecting responsive web applications, developing scalable REST APIs, and maintaining database integrations.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git'],
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'mmit-be',
    degree: 'B.E. in Artificial Intelligence & Data Science',
    institution: 'Marathwada Mitra Mandal’s Institute of Technology (MMIT)',
    score: 'SGPA: 9.33 / 10.0',
    year: '2023 - Expected May 2027',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Operating Systems',
      'Database Management Systems (DBMS)',
      'Machine Learning',
      'Software Engineering Principles',
    ],
    notes: 'Consistently maintaining top academic standing in the department with an SGPA of 9.33/10.',
  },
  {
    id: 'kbp-hsc',
    degree: 'Higher Secondary Certificate (HSC) - Science',
    institution: 'KBP College',
    score: '70.17%',
    year: 'Completed 2023',
    notes: 'Coursework focused on Physics, Chemistry, and Mathematics foundations.',
  },
  {
    id: 'khp-ssc',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'KHP High School',
    score: '99.20%',
    year: 'Completed 2021',
    notes: 'Exceptional academic performance scoring 99.20% across state-level board examinations.',
  },
];

export const achievementsAndCertifications = {
  achievements: [
    'HackerRank Gold Badge in Python demonstrating strong problem-solving and algorithmic programming foundations.',
    'Selected as a Full Stack Developer Intern at a startup company via technical coding evaluation.',
    'Maintained top tier academic standing with 9.33 / 10.0 SGPA in B.E. AI & Data Science at MMIT.',
    'Scored 99.20% in SSC examinations, demonstrating sustained academic consistency.',
  ],
  certifications: [
    {
      title: 'AI Foundations & Machine Learning Program Certificate',
      issuer: 'Infosys Springboard',
      year: '2025',
      detail: 'Comprehensive curriculum covering foundational machine learning, model training, NLP, and intelligent pipelines.',
    },
    {
      title: 'Python Problem Solving (Gold Badge)',
      issuer: 'HackerRank',
      year: 'Verified Credential',
      detail: 'Earned highest badge tier through solving complex data structures and algorithmic challenges in Python.',
    },
  ],
};
