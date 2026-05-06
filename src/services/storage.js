// ═══════════════════════════════════════════════════════
//  CarrierPath — localStorage mock database
// ═══════════════════════════════════════════════════════

const STORAGE_KEYS = {
  CAREER_PATHS: 'carrierpath_career_paths',
  COMPLETED_SKILLS: 'carrierpath_completed_skills',
  PINNED_NODES: 'carrierpath_pinned_nodes',
  DAILY_CHECKINS: 'carrierpath_daily_checkins'
}

// ─── Default data ──────────────────────────────────────
// type: 'skill' | 'checkpoint'
// tip: optional annotation shown next to the node
const DEFAULT_CAREER_PATHS = [
  // ═══ ROLE-BASED ═══
  {
    id: 'frontend',
    name: 'Frontend Developer',
    category: 'role',
    description: 'Build beautiful user interfaces with HTML, CSS, and JavaScript frameworks.',
    icon: '🎨',
    color: '#ff6b6b',
    nodes: [
      { id: 'html',        label: 'HTML',               level: 0, type: 'skill', children: ['css'] },
      { id: 'css',         label: 'CSS',                level: 0, type: 'skill', children: ['js-basics'] },
      { id: 'js-basics',   label: 'JavaScript Basics',  level: 1, type: 'skill', children: ['dom', 'es6'] },
      { id: 'cp-static',   label: 'Checkpoint — Static Pages', level: 2, type: 'checkpoint', children: ['dom', 'es6'] },
      { id: 'dom',         label: 'DOM Manipulation',   level: 3, type: 'skill', children: ['react'] },
      { id: 'es6',         label: 'ES6+ Features',      level: 3, type: 'skill', children: ['react'] },
      { id: 'react',       label: 'React.js',           level: 4, type: 'skill', children: ['state-mgmt', 'routing'] },
      { id: 'state-mgmt',  label: 'State Management',   level: 5, type: 'skill', children: ['testing'] },
      { id: 'routing',     label: 'React Router',       level: 5, type: 'skill', children: ['testing'] },
      { id: 'testing',     label: 'Testing',            level: 6, type: 'skill', children: ['deploy'] },
      { id: 'deploy',      label: 'Build & Deploy',     level: 7, type: 'skill', children: [] }
    ]
  },
  {
    id: 'backend',
    name: 'Backend Developer',
    category: 'role',
    description: 'Build robust server applications, APIs, and data services.',
    icon: '⚙️',
    color: '#4ecdc4',
    nodes: [
      { id: 'lang',       label: 'Pick a Language',      level: 0, type: 'skill',      children: ['http'] },
      { id: 'http',       label: 'HTTP & APIs',          level: 1, type: 'skill',      children: ['framework'] },
      { id: 'framework',  label: 'Web Framework',        level: 2, type: 'skill',      children: ['database', 'auth'] },
      { id: 'database',   label: 'Database (SQL/NoSQL)', level: 3, type: 'skill',      children: ['orm'] },
      { id: 'auth',       label: 'Auth & Security',      level: 3, type: 'skill',      children: ['caching'] },
      { id: 'orm',        label: 'ORM / Query Builder',  level: 4, type: 'skill',      children: ['caching'] },
      { id: 'caching',    label: 'Caching (Redis)',       level: 5, type: 'skill',      children: ['messaging'] },
      { id: 'messaging',  label: 'Message Queues',       level: 6, type: 'skill',      children: ['deploy'] },
      { id: 'deploy',     label: 'Deployment',           level: 7, type: 'skill',      children: [] }
    ]
  },
  {
    id: 'fullstack',
    name: 'Full Stack Developer',
    category: 'role',
    description: 'Master both frontend and backend — the complete developer path.',
    icon: '🚀',
    color: '#95e1d3',
    nodes: [
      // ─── Frontend ───
      { id: 'html',             label: 'HTML',                          level: 0,  type: 'skill',      children: ['css'] },
      { id: 'css',              label: 'CSS',                           level: 0,  type: 'skill',      children: ['javascript'] },
      { id: 'javascript',       label: 'JavaScript',                    level: 0,  type: 'skill',      children: ['cp-static', 'cp-interactivity', 'npm'] },
      { id: 'cp-static',        label: 'Checkpoint - Static Webpages',  level: 1,  type: 'checkpoint', children: ['cp-collab'] },
      { id: 'cp-interactivity', label: 'Checkpoint - Interactivity',    level: 1,  type: 'checkpoint', children: ['cp-external'] },
      { id: 'npm',              label: 'npm',                           level: 1,  type: 'skill',      children: ['cp-external'] },
      { id: 'cp-collab',        label: 'Checkpoint - Collaborative Work', level: 2, type: 'checkpoint', children: ['react', 'tailwind'] },
      { id: 'cp-external',      label: 'Checkpoint - External Packages', level: 2, type: 'checkpoint', children: ['github', 'git'] },
      { id: 'react',            label: 'React',                         level: 3,  type: 'skill',      children: ['cp-frontend'] },
      { id: 'tailwind',         label: 'Tailwind CSS',                  level: 3,  type: 'skill',      children: ['cp-frontend'],
        tip: 'Feel free to skip these and revisit after learning Backend' },
      { id: 'github',           label: 'GitHub',                        level: 3,  type: 'skill',      children: ['cp-frontend'] },
      { id: 'git',              label: 'Git',                           level: 3,  type: 'skill',      children: ['cp-frontend'] },
      { id: 'cp-frontend',      label: 'Checkpoint - Frontend Apps',    level: 4,  type: 'checkpoint', children: ['nodejs'] },
      // ─── Backend ───
      { id: 'nodejs',           label: 'Node.js',                       level: 5,  type: 'skill',      children: ['cp-cli'],
        tip: 'You can pick any backend programming language. My recommendation is Node.js because you are already familiar with JavaScript and it\'s easier to pick.' },
      { id: 'cp-cli',           label: 'Checkpoint — CLI Apps',         level: 6,  type: 'checkpoint', children: ['postgresql'] },
      { id: 'postgresql',       label: 'PostgreSQL',                    level: 7,  type: 'skill',      children: ['cp-crud'] },
      { id: 'cp-crud',          label: 'Checkpoint — Simple CRUD Apps', level: 8,  type: 'checkpoint', children: ['redis', 'jwt', 'restful'],
        tip: 'Use the checkpoints and do not forget to practice what you learn. There are project ideas at each checkpoint that you can build to solidify your knowledge.' },
      { id: 'redis',            label: 'Redis',                         level: 9,  type: 'skill',      children: ['cp-complete'] },
      { id: 'jwt',              label: 'JWT Auth',                      level: 9,  type: 'skill',      children: ['cp-complete'] },
      { id: 'restful',          label: 'RESTful APIs',                  level: 9,  type: 'skill',      children: ['cp-complete'] },
      { id: 'cp-complete',      label: 'Checkpoint — Complete App',     level: 10, type: 'checkpoint', children: ['route53', 'ses', 'ec2', 'vpc', 's3'] },
      // ─── DevOps ───
      { id: 'route53',          label: 'Route53',                       level: 11, type: 'skill',      children: [] },
      { id: 'ses',              label: 'SES',                           level: 11, type: 'skill',      children: [] },
      { id: 'ec2',              label: 'EC2',                           level: 12, type: 'skill',      children: [] },
      { id: 'vpc',              label: 'VPC',                           level: 12, type: 'skill',      children: [] },
      { id: 's3',               label: 'S3',                            level: 12, type: 'skill',      children: [] }
    ],
    sections: [
      { afterLevel: 4, label: 'Start Backend Development', sublabel: 'Backend Starts here' },
      { afterLevel: 10, label: 'DevOps starts here', sublabel: '' }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps Engineer',
    category: 'role',
    description: 'Manage infrastructure, CI/CD, and cloud deployment.',
    icon: '🔧',
    color: '#ffd93d',
    nodes: [
      { id: 'linux',      label: 'Linux & Shell',         level: 0, type: 'skill', children: ['networking'] },
      { id: 'networking',  label: 'Networking Basics',     level: 1, type: 'skill', children: ['docker'] },
      { id: 'docker',     label: 'Docker',                level: 2, type: 'skill', children: ['k8s', 'cicd'] },
      { id: 'cicd',       label: 'CI/CD Pipelines',       level: 3, type: 'skill', children: ['iac'] },
      { id: 'k8s',        label: 'Kubernetes',            level: 3, type: 'skill', children: ['iac'] },
      { id: 'iac',        label: 'Infra as Code',         level: 4, type: 'skill', children: ['monitoring'] },
      { id: 'monitoring', label: 'Monitoring & Logging',  level: 5, type: 'skill', children: ['cloud'] },
      { id: 'cloud',      label: 'Cloud (AWS/GCP)',       level: 6, type: 'skill', children: [] }
    ]
  },
  {
    id: 'datascience',
    name: 'Data Scientist',
    category: 'role',
    description: 'Analyze data, build ML models, and uncover insights.',
    icon: '📊',
    color: '#a8e6cf',
    nodes: [
      { id: 'python',      label: 'Python',              level: 0, type: 'skill', children: ['math'] },
      { id: 'math',        label: 'Math & Statistics',   level: 1, type: 'skill', children: ['pandas'] },
      { id: 'pandas',      label: 'Pandas / NumPy',      level: 2, type: 'skill', children: ['viz', 'ml'] },
      { id: 'viz',         label: 'Data Visualization',  level: 3, type: 'skill', children: ['ml'] },
      { id: 'ml',          label: 'Machine Learning',    level: 4, type: 'skill', children: ['dl', 'feature-eng'] },
      { id: 'feature-eng', label: 'Feature Engineering', level: 5, type: 'skill', children: ['dl'] },
      { id: 'dl',          label: 'Deep Learning',       level: 6, type: 'skill', children: ['mlops'] },
      { id: 'mlops',       label: 'MLOps',               level: 7, type: 'skill', children: [] }
    ]
  },

  // ═══ SKILL-BASED ═══
  {
    id: 'react-skill',
    name: 'React',
    category: 'skill',
    description: 'Component-based UI library',
    icon: '⚛️',
    color: '#61dafb',
    nodes: [
      { id: 'jsx',        label: 'JSX',              level: 0, type: 'skill', children: ['components'] },
      { id: 'components', label: 'Components',       level: 1, type: 'skill', children: ['props', 'state'] },
      { id: 'props',      label: 'Props',            level: 2, type: 'skill', children: ['hooks'] },
      { id: 'state',      label: 'State',            level: 2, type: 'skill', children: ['hooks'] },
      { id: 'hooks',      label: 'Hooks',            level: 3, type: 'skill', children: ['context', 'effects'] },
      { id: 'context',    label: 'Context API',      level: 4, type: 'skill', children: ['patterns'] },
      { id: 'effects',    label: 'Side Effects',     level: 4, type: 'skill', children: ['patterns'] },
      { id: 'patterns',   label: 'Advanced Patterns', level: 5, type: 'skill', children: [] }
    ]
  },
  {
    id: 'javascript-skill',
    name: 'JavaScript',
    category: 'skill',
    description: 'The language of the web',
    icon: '📜',
    color: '#f7df1e',
    nodes: [
      { id: 'syntax',    label: 'Syntax & Basics',      level: 0, type: 'skill', children: ['types'] },
      { id: 'types',     label: 'Data Types',           level: 1, type: 'skill', children: ['functions', 'dom'] },
      { id: 'functions', label: 'Functions & Scope',    level: 2, type: 'skill', children: ['async'] },
      { id: 'dom',       label: 'DOM APIs',             level: 2, type: 'skill', children: ['events'] },
      { id: 'events',    label: 'Events',               level: 3, type: 'skill', children: ['async'] },
      { id: 'async',     label: 'Async / Promises',     level: 4, type: 'skill', children: ['modules'] },
      { id: 'modules',   label: 'Modules & Tooling',    level: 5, type: 'skill', children: [] }
    ]
  },
  {
    id: 'typescript-skill',
    name: 'TypeScript',
    category: 'skill',
    description: 'Typed superset of JavaScript',
    icon: '🔷',
    color: '#3178c6',
    nodes: [
      { id: 'basics',     label: 'Basic Types',        level: 0, type: 'skill', children: ['interfaces'] },
      { id: 'interfaces', label: 'Interfaces',         level: 1, type: 'skill', children: ['generics', 'enums'] },
      { id: 'generics',   label: 'Generics',           level: 2, type: 'skill', children: ['advanced'] },
      { id: 'enums',      label: 'Enums & Unions',     level: 2, type: 'skill', children: ['advanced'] },
      { id: 'advanced',   label: 'Advanced Types',     level: 3, type: 'skill', children: ['config'] },
      { id: 'config',     label: 'TS Config & Tooling', level: 4, type: 'skill', children: [] }
    ]
  },
  {
    id: 'python-skill',
    name: 'Python',
    category: 'skill',
    description: 'Versatile general purpose language',
    icon: '🐍',
    color: '#3776ab',
    nodes: [
      { id: 'basics',           label: 'Syntax & Basics',        level: 0, type: 'skill', children: ['data-structures'] },
      { id: 'data-structures',  label: 'Data Structures',        level: 1, type: 'skill', children: ['oop', 'functions'] },
      { id: 'oop',              label: 'OOP',                    level: 2, type: 'skill', children: ['stdlib'] },
      { id: 'functions',        label: 'Functions & Decorators', level: 2, type: 'skill', children: ['stdlib'] },
      { id: 'stdlib',           label: 'Standard Library',       level: 3, type: 'skill', children: ['packages'] },
      { id: 'packages',         label: 'Package Management',     level: 4, type: 'skill', children: ['testing'] },
      { id: 'testing',          label: 'Testing',                level: 5, type: 'skill', children: [] }
    ]
  },
  {
    id: 'sql-skill',
    name: 'SQL',
    category: 'skill',
    description: 'Query and manage relational data',
    icon: '🗄️',
    color: '#336791',
    nodes: [
      { id: 'basics',       label: 'SELECT & WHERE',  level: 0, type: 'skill', children: ['joins'] },
      { id: 'joins',        label: 'JOINs',           level: 1, type: 'skill', children: ['agg', 'subq'] },
      { id: 'agg',          label: 'Aggregations',    level: 2, type: 'skill', children: ['indexes'] },
      { id: 'subq',         label: 'Sub-queries',     level: 2, type: 'skill', children: ['indexes'] },
      { id: 'indexes',      label: 'Indexes & Perf',  level: 3, type: 'skill', children: ['transactions'] },
      { id: 'transactions', label: 'Transactions',    level: 4, type: 'skill', children: [] }
    ]
  },
  {
    id: 'docker-skill',
    name: 'Docker',
    category: 'skill',
    description: 'Containerization platform',
    icon: '🐳',
    color: '#2496ed',
    nodes: [
      { id: 'concepts',    label: 'Core Concepts',         level: 0, type: 'skill', children: ['images'] },
      { id: 'images',      label: 'Images & Dockerfile',   level: 1, type: 'skill', children: ['containers'] },
      { id: 'containers',  label: 'Containers',            level: 2, type: 'skill', children: ['networking', 'volumes'] },
      { id: 'networking',  label: 'Networking',            level: 3, type: 'skill', children: ['compose'] },
      { id: 'volumes',     label: 'Volumes',               level: 3, type: 'skill', children: ['compose'] },
      { id: 'compose',     label: 'Docker Compose',        level: 4, type: 'skill', children: [] }
    ]
  },
  {
    id: 'git-skill',
    name: 'Git & GitHub',
    category: 'skill',
    description: 'Version control system',
    icon: '🌿',
    color: '#f05032',
    nodes: [
      { id: 'basics',    label: 'Init, Add, Commit',           level: 0, type: 'skill', children: ['branching'] },
      { id: 'branching', label: 'Branching',                   level: 1, type: 'skill', children: ['merging', 'remote'] },
      { id: 'merging',   label: 'Merging & Rebasing',         level: 2, type: 'skill', children: ['workflows'] },
      { id: 'remote',    label: 'Remote & Push/Pull',         level: 2, type: 'skill', children: ['workflows'] },
      { id: 'workflows', label: 'Git Workflows',              level: 3, type: 'skill', children: ['advanced'] },
      { id: 'advanced',  label: 'Advanced (stash, cherry-pick)', level: 4, type: 'skill', children: [] }
    ]
  }
]

// ─── Initialization ────────────────────────────────────
const initializeStorage = () => {
  if (!localStorage.getItem(STORAGE_KEYS.CAREER_PATHS)) {
    localStorage.setItem(STORAGE_KEYS.CAREER_PATHS, JSON.stringify(DEFAULT_CAREER_PATHS))
  }
}

// ─── Career Paths CRUD ─────────────────────────────────
export const getAllCareerPaths = () => {
  initializeStorage()
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.CAREER_PATHS) || '[]')
}

export const getCareerPath = (id) => {
  return getAllCareerPaths().find(p => p.id === id)
}

// ─── Skill Completion ──────────────────────────────────
export const toggleSkillCompletion = (pathId, skillId) => {
  const completed = getCompletedSkills(pathId)
  const idx = completed.indexOf(skillId)
  if (idx > -1) completed.splice(idx, 1)
  else completed.push(skillId)
  localStorage.setItem(`${STORAGE_KEYS.COMPLETED_SKILLS}_${pathId}`, JSON.stringify(completed))
}

export const getCompletedSkills = (pathId) => {
  return JSON.parse(localStorage.getItem(`${STORAGE_KEYS.COMPLETED_SKILLS}_${pathId}`) || '[]')
}

export const getPathProgress = (pathId) => {
  const path = getCareerPath(pathId)
  const completed = getCompletedSkills(pathId)
  if (!path?.nodes?.length) return 0
  return Math.round((completed.length / path.nodes.length) * 100)
}

export const getUserProgress = () => {
  return getAllCareerPaths().map(path => ({
    id: path.id,
    name: path.name,
    progress: getPathProgress(path.id),
    completed: getCompletedSkills(path.id).length,
    total: path.nodes?.length || 0
  }))
}

export const resetPathProgress = (pathId) => {
  localStorage.removeItem(`${STORAGE_KEYS.COMPLETED_SKILLS}_${pathId}`)
}

export const resetAllProgress = () => {
  getAllCareerPaths().forEach(p => resetPathProgress(p.id))
}

// ─── Pinned Nodes ──────────────────────────────────────
export const getPinnedNodes = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.PINNED_NODES) || '[]')
}

export const isNodePinned = (pathId, nodeId) => {
  return getPinnedNodes().some(p => p.pathId === pathId && p.nodeId === nodeId)
}

export const togglePinnedNode = (pathId, nodeId) => {
  const pinned = getPinnedNodes()
  const idx = pinned.findIndex(p => p.pathId === pathId && p.nodeId === nodeId)
  if (idx > -1) pinned.splice(idx, 1)
  else pinned.push({ pathId, nodeId })
  localStorage.setItem(STORAGE_KEYS.PINNED_NODES, JSON.stringify(pinned))
}

// ─── Daily Check-ins ───────────────────────────────────
export const getDailyCheckins = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_CHECKINS) || '{}')
}

export const upsertDailyCheckin = (dateKey, { minutes = 0, note = '' }) => {
  const all = getDailyCheckins()
  all[dateKey] = { minutes: Number(minutes) || 0, note: String(note || '') }
  localStorage.setItem(STORAGE_KEYS.DAILY_CHECKINS, JSON.stringify(all))
}

export const deleteDailyCheckin = (dateKey) => {
  const all = getDailyCheckins()
  delete all[dateKey]
  localStorage.setItem(STORAGE_KEYS.DAILY_CHECKINS, JSON.stringify(all))
}
