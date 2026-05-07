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
    description: 'Xây dựng giao diện người dùng đẹp mắt với HTML, CSS và các framework JavaScript.',
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
    description: 'Xây dựng ứng dụng server mạnh mẽ, API và dịch vụ dữ liệu.',
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
    description: 'Thành thạo cả frontend và backend — lộ trình lập trình viên toàn diện.',
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
        tip: 'Bạn có thể bỏ qua phần này và quay lại sau khi học Backend' },
      { id: 'github',           label: 'GitHub',                        level: 3,  type: 'skill',      children: ['cp-frontend'] },
      { id: 'git',              label: 'Git',                           level: 3,  type: 'skill',      children: ['cp-frontend'] },
      { id: 'cp-frontend',      label: 'Checkpoint - Frontend Apps',    level: 4,  type: 'checkpoint', children: ['nodejs'] },
      // ─── Backend ───
      { id: 'nodejs',           label: 'Node.js',                       level: 5,  type: 'skill',      children: ['cp-cli'],
        tip: 'Bạn có thể chọn bất kỳ ngôn ngữ backend nào. Khuyến nghị là Node.js vì bạn đã quen với JavaScript và dễ dàng hơn để bắt đầu.' },
      { id: 'cp-cli',           label: 'Checkpoint — CLI Apps',         level: 6,  type: 'checkpoint', children: ['postgresql'] },
      { id: 'postgresql',       label: 'PostgreSQL',                    level: 7,  type: 'skill',      children: ['cp-crud'] },
      { id: 'cp-crud',          label: 'Checkpoint — Simple CRUD Apps', level: 8,  type: 'checkpoint', children: ['redis', 'jwt', 'restful'],
        tip: 'Sử dụng các checkpoint và đừng quên thực hành những gì bạn đã học. Có các ý tưởng dự án tại mỗi checkpoint để bạn củng cố kiến thức.' },
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
      { afterLevel: 4, label: 'Bắt đầu phát triển Backend', sublabel: 'Backend bắt đầu từ đây' },
      { afterLevel: 10, label: 'DevOps bắt đầu từ đây', sublabel: '' }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps Engineer',
    category: 'role',
    description: 'Quản lý hạ tầng, CI/CD và triển khai trên cloud.',
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
    description: 'Phân tích dữ liệu, xây dựng mô hình ML và khám phá thông tin chi tiết.',
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
    description: 'Thư viện UI dựa trên component',
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
    description: 'Ngôn ngữ của web',
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
    description: 'Phiên bản có kiểu dữ liệu của JavaScript',
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
    description: 'Ngôn ngữ đa năng cho mọi mục đích',
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
    description: 'Truy vấn và quản lý dữ liệu quan hệ',
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
    description: 'Nền tảng container hóa',
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
    description: 'Hệ thống quản lý phiên bản',
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

// ─── Projects ──────────────────────────────────────────
export const PROJECTS = [
  // ═══ FRONTEND ═══
  {
    id: 'fe-portfolio',
    pathId: 'frontend',
    category: 'Frontend',
    difficulty: 'Beginner',
    tags: ['HTML', 'CSS', 'Responsive'],
    title: 'Website Portfolio Cá Nhân',
    description: 'Xây dựng trang portfolio cá nhân responsive để giới thiệu công việc, kỹ năng và thông tin liên hệ.',
    longDescription: 'Create a fully responsive personal portfolio website using only HTML and CSS. The site should feature a hero section, an about section, a project gallery with hover effects, and a contact form. Focus on clean layout, typography, and mobile-first design principles. This is an excellent starter project to solidify your foundational web development skills.',
    requirements: [
      'Responsive Design: The layout must adapt seamlessly to mobile, tablet, and desktop viewports using CSS media queries.',
      'Semantic HTML: Use proper HTML5 semantic elements such as <header>, <main>, <section>, and <footer>.',
      'Navigation: Include a sticky navigation bar with smooth-scroll anchor links to each section.',
      'Project Gallery: Display at least 4 project cards with thumbnail images, titles, and short descriptions.',
      'Contact Form: Build a styled contact form with name, email, and message fields (front-end only, no backend required).'
    ],
    checklist: [
      'Repository contains a valid index.html at the root',
      'All pages are fully responsive (mobile, tablet, desktop)',
      'Project gallery section displays at least 4 items',
      'Contact form is present and styled',
      'README includes a live demo link or screenshots'
    ],
    started: 1420
  },
  {
    id: 'fe-weather',
    pathId: 'frontend',
    category: 'Frontend',
    difficulty: 'Intermediate',
    tags: ['React', 'API', 'State Management'],
    title: 'Ứng Dụng Dashboard Thời Tiết',
    description: 'Tạo bảng điều khiển thời tiết lấy dữ liệu thời gian thực từ API công khai và hiển thị dự báo.',
    longDescription: 'Build a dynamic weather dashboard application using React. The app should allow users to search for any city and display current conditions, a 5-day forecast, and data visualizations such as temperature trends. Integrate with a free weather API like OpenWeatherMap. This project will sharpen your skills in API integration, state management, and component architecture.',
    requirements: [
      'City Search: Implement a search bar with debounced input that queries a weather API and displays matching results.',
      'Current Weather: Show temperature, humidity, wind speed, and an appropriate weather icon for the selected city.',
      '5-Day Forecast: Render a horizontally scrollable or grid-based 5-day forecast with daily highs and lows.',
      'Error Handling: Gracefully handle API errors, invalid city names, and network timeouts with user-friendly messages.',
      'Loading States: Display skeleton loaders or spinners while data is being fetched.'
    ],
    checklist: [
      'Application builds and runs without errors',
      'City search returns and displays results from a weather API',
      'Current conditions and 5-day forecast render correctly',
      'Error and loading states are implemented',
      'README documents setup instructions and API key configuration'
    ],
    started: 870
  },
  {
    id: 'fe-ecommerce',
    pathId: 'frontend',
    category: 'Frontend',
    difficulty: 'Advanced',
    tags: ['React', 'Redux', 'Stripe', 'Auth'],
    title: 'Cửa Hàng E-Commerce',
    description: 'Xây dựng cửa hàng trực tuyến đầy đủ tính năng với duyệt sản phẩm, giỏ hàng và quy trình thanh toán mẫu.',
    longDescription: 'Develop a comprehensive e-commerce single-page application featuring product listing with filters and sorting, a persistent shopping cart, user authentication (mock or Firebase), and a multi-step checkout flow. Use Redux or Context API for global state management. This advanced project covers complex UI patterns, performance optimization, and real-world application architecture.',
    requirements: [
      'Product Catalog: Display products in a grid with filtering by category, price range, and search. Support sorting by price and rating.',
      'Shopping Cart: Implement a fully functional cart with add, remove, update quantity, and persistent state across sessions using localStorage.',
      'Authentication: Add sign-up and login flows (mock or Firebase) with protected routes for checkout and order history.',
      'Checkout Flow: Build a multi-step checkout with shipping address, payment (mock), and order summary confirmation.',
      'Performance: Implement lazy loading for product images and code-split routes for optimal bundle size.'
    ],
    checklist: [
      'Product listing page with filter and sort functionality',
      'Shopping cart persists across page refreshes',
      'Authentication flow (sign-up, login, logout) works correctly',
      'Multi-step checkout process is fully functional',
      'README includes architecture overview and setup guide'
    ],
    started: 530
  },

  // ═══ BACKEND ═══
  {
    id: 'be-rest-api',
    pathId: 'backend',
    category: 'Backend',
    difficulty: 'Beginner',
    tags: ['Node.js', 'Express', 'REST'],
    title: 'RESTful Task Manager API',
    description: 'Thiết kế và xây dựng CRUD REST API để quản lý tác vụ với danh mục và mức ưu tiên.',
    longDescription: 'Create a RESTful API using Node.js and Express that supports full CRUD operations for a task management system. Tasks should have titles, descriptions, due dates, priority levels, and categories. Implement proper HTTP status codes, input validation, and structured JSON responses. Use an in-memory store or JSON file for persistence. This project lays the groundwork for understanding backend architecture and API design.',
    requirements: [
      'CRUD Endpoints: Implement GET, POST, PUT, and DELETE endpoints for tasks following REST conventions.',
      'Validation: Validate all incoming request bodies and return descriptive 400-level error messages for invalid data.',
      'Filtering & Sorting: Support query parameters for filtering tasks by category, priority, and completion status, plus sorting by due date.',
      'Error Handling: Implement a centralized error handling middleware that returns consistent JSON error responses.',
      'Documentation: Provide API documentation (in README or a /docs endpoint) listing all endpoints, methods, and example payloads.'
    ],
    checklist: [
      'All CRUD endpoints work correctly and return proper status codes',
      'Input validation rejects malformed requests with clear errors',
      'Filtering and sorting query parameters function as documented',
      'README contains full API documentation with example requests',
      'Project runs with a single npm start command'
    ],
    started: 1105
  },
  {
    id: 'be-auth-service',
    pathId: 'backend',
    category: 'Backend',
    difficulty: 'Intermediate',
    tags: ['Node.js', 'JWT', 'PostgreSQL', 'Security'],
    title: 'Microservice Xác Thực',
    description: 'Xây dựng dịch vụ xác thực bảo mật với JWT token, refresh token và phân quyền theo vai trò.',
    longDescription: 'Develop a standalone authentication microservice using Node.js with PostgreSQL for user storage. Implement secure user registration with password hashing (bcrypt), login with JWT access/refresh token pairs, email verification flow, and role-based access control (RBAC). This project teaches critical security concepts that every backend developer must master.',
    requirements: [
      'Registration: Implement user sign-up with email uniqueness validation, strong password requirements, and bcrypt hashing.',
      'JWT Tokens: Issue short-lived access tokens and long-lived refresh tokens. Implement a /refresh endpoint to rotate tokens.',
      'Role-Based Access: Define at least 3 roles (admin, user, guest) and protect endpoints based on the authenticated user\'s role.',
      'Password Reset: Build a password reset flow using time-limited tokens sent via a mock email service.',
      'Security Headers: Set appropriate security headers (CORS, Helmet) and implement rate limiting on auth endpoints.'
    ],
    checklist: [
      'User registration and login endpoints return valid JWT tokens',
      'Refresh token rotation works and old tokens are invalidated',
      'Role-based middleware correctly restricts access to protected routes',
      'Password reset flow generates and validates reset tokens',
      'README covers setup, environment variables, and security considerations'
    ],
    started: 680
  },
  {
    id: 'be-realtime-chat',
    pathId: 'backend',
    category: 'Backend',
    difficulty: 'Advanced',
    tags: ['Node.js', 'WebSocket', 'Redis', 'MongoDB'],
    title: 'Nền Tảng Chat Thời Gian Thực',
    description: 'Thiết kế backend chat thời gian thực có khả năng mở rộng với phòng chat, trạng thái online và lưu trữ tin nhắn.',
    longDescription: 'Build a production-grade real-time chat backend using WebSockets (Socket.io), Redis for pub/sub and session management, and MongoDB for message persistence. Support multiple chat rooms, typing indicators, online presence tracking, and message history with pagination. This advanced project covers event-driven architecture, horizontal scaling patterns, and real-time data synchronization.',
    requirements: [
      'WebSocket Server: Implement a Socket.io server supporting connection, disconnection, join/leave room, and message events.',
      'Chat Rooms: Allow users to create, join, and leave named rooms. Broadcast messages only to participants of the target room.',
      'Presence System: Track online/offline status per user using Redis and broadcast presence updates to relevant rooms.',
      'Message Persistence: Store all messages in MongoDB with timestamps and sender info. Provide a REST endpoint for paginated message history.',
      'Scalability: Use Redis pub/sub adapter so the WebSocket server can be horizontally scaled across multiple processes or nodes.'
    ],
    checklist: [
      'WebSocket connections are established and messages are delivered in real-time',
      'Multiple chat rooms function independently with correct message routing',
      'Online presence updates are broadcast when users connect or disconnect',
      'Message history endpoint returns paginated results from the database',
      'README includes architecture diagram and scaling instructions'
    ],
    started: 340
  },

  // ═══ DEVOPS ═══
  {
    id: 'do-docker-app',
    pathId: 'devops',
    category: 'DevOps',
    difficulty: 'Beginner',
    tags: ['Docker', 'Containers', 'Nginx'],
    title: 'Docker Hóa Ứng Dụng Full-Stack',
    description: 'Container hóa ứng dụng đa dịch vụ với Docker và Docker Compose.',
    longDescription: 'Take an existing full-stack application (or build a simple one) and containerize it using Docker. Create optimized, multi-stage Dockerfiles for both the frontend and backend services, and orchestrate them with Docker Compose alongside a database container and an Nginx reverse proxy. This project teaches containerization fundamentals that are essential for modern deployment workflows.',
    requirements: [
      'Dockerfiles: Write multi-stage Dockerfiles for the frontend and backend that produce minimal production images.',
      'Docker Compose: Create a docker-compose.yml that defines all services (frontend, backend, database, proxy) with proper networking.',
      'Environment Config: Use environment variables and .env files to configure database credentials, API URLs, and other settings.',
      'Volumes: Configure named volumes for database persistence and bind mounts for development hot-reloading.',
      'Health Checks: Add Docker health checks to critical services and configure restart policies.'
    ],
    checklist: [
      'docker-compose up builds and starts all services successfully',
      'Frontend is accessible through the Nginx reverse proxy',
      'Backend API responds to requests routed through the proxy',
      'Database data persists across container restarts',
      'README documents all environment variables and setup steps'
    ],
    started: 920
  },
  {
    id: 'do-cicd-pipeline',
    pathId: 'devops',
    category: 'DevOps',
    difficulty: 'Intermediate',
    tags: ['GitHub Actions', 'CI/CD', 'Testing'],
    title: 'CI/CD Pipeline với GitHub Actions',
    description: 'Thiết kế pipeline CI/CD hoàn chỉnh để lint, test, build và deploy trên mỗi lần push.',
    longDescription: 'Build a robust CI/CD pipeline using GitHub Actions for an existing project. The pipeline should lint code, run unit and integration tests, build production artifacts, and deploy to a staging environment automatically. Include branch protection rules, manual approval gates for production, and Slack/Discord notifications. This project demonstrates modern DevOps practices for automated software delivery.',
    requirements: [
      'Workflow Triggers: Configure workflows to trigger on push to main, pull requests, and manual dispatch with input parameters.',
      'Test Stage: Run linting (ESLint/Prettier) and execute the full test suite with coverage reporting uploaded as an artifact.',
      'Build Stage: Build optimized production artifacts and cache dependencies between runs for faster builds.',
      'Deploy Stage: Deploy to a staging environment automatically and require manual approval before production deployment.',
      'Notifications: Send pipeline status notifications to a Slack or Discord webhook on success and failure.'
    ],
    checklist: [
      'Pipeline triggers correctly on push and pull request events',
      'Lint and test stages run and report results accurately',
      'Build artifacts are produced and cached between runs',
      'Deployment to staging is automated with a manual gate for production',
      'README explains the pipeline stages and how to configure secrets'
    ],
    started: 510
  },
  {
    id: 'do-k8s-cluster',
    pathId: 'devops',
    category: 'DevOps',
    difficulty: 'Advanced',
    tags: ['Kubernetes', 'Helm', 'Terraform', 'Monitoring'],
    title: 'Triển Khai Kubernetes Cluster',
    description: 'Khởi tạo Kubernetes cluster và triển khai ứng dụng microservices với hệ thống giám sát.',
    longDescription: 'Provision a Kubernetes cluster using Terraform (on a cloud provider or locally with Minikube/kind), then deploy a microservices application using Helm charts. Configure horizontal pod autoscaling, ingress controllers, secrets management, and a full monitoring stack with Prometheus and Grafana. This capstone-level project ties together infrastructure-as-code, container orchestration, and observability.',
    requirements: [
      'Infrastructure: Use Terraform to provision the Kubernetes cluster with configurable node counts and instance types.',
      'Helm Charts: Package the application as a Helm chart with configurable values for replicas, resource limits, and environment.',
      'Ingress & TLS: Configure an Ingress controller to route external traffic and terminate TLS using cert-manager or self-signed certificates.',
      'Autoscaling: Set up Horizontal Pod Autoscaler (HPA) based on CPU/memory metrics with defined min and max replicas.',
      'Monitoring: Deploy Prometheus and Grafana with pre-configured dashboards for cluster health, pod metrics, and application-level metrics.'
    ],
    checklist: [
      'Terraform successfully provisions the cluster from scratch',
      'Helm chart installs the application with all dependencies',
      'Ingress routes traffic correctly with TLS termination',
      'HPA scales pods based on load within configured bounds',
      'Grafana dashboards display cluster and application metrics'
    ],
    started: 215
  }
]

export const getProject = (id) => PROJECTS.find(p => p.id === id)
export const getProjectsByCategory = (category) => PROJECTS.filter(p => p.category === category)
