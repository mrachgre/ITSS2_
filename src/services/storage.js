// ═══════════════════════════════════════════════════════
//  CarrierPath — localStorage mock database
// ═══════════════════════════════════════════════════════

const STORAGE_KEYS = {
  CAREER_PATHS: 'carrierpath_career_paths',
  COMPLETED_SKILLS: 'carrierpath_completed_skills',
  PINNED_NODES: 'carrierpath_pinned_nodes',
  DAILY_CHECKINS: 'carrierpath_daily_checkins',
  WORKSPACE: 'carrierpath_workspace'
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
      { id: 'html', label: 'HTML', level: 0, type: 'skill', children: ['css'] },
<<<<<<< HEAD
      { id: 'css', label: 'CSS', level: 0, type: 'skill', children: ['js-basics'] },
      { id: 'js-basics', label: 'JavaScript Basics', level: 1, type: 'skill', children: ['dom', 'es6'] },
      { id: 'cp-static', label: 'Practice - Static Pages', level: 2, type: 'checkpoint', children: ['dom', 'es6'] },
      { id: 'dom', label: 'DOM Manipulation', level: 3, type: 'skill', children: ['react'] },
      { id: 'es6', label: 'ES6+ Features', level: 3, type: 'skill', children: ['react'] },
=======
      { id: 'css', label: 'CSS', level: 0, type: 'skill', children: ['js-basics', 'sass'] },
      { id: 'js-basics', label: 'JavaScript Basics', level: 1, type: 'skill', children: ['dom', 'es6', 'git'] },
      { id: 'sass', label: 'Sass / SCSS', level: 1, type: 'skill', children: ['tailwind', 'bootstrap'] },
      { id: 'cp-static', label: 'Checkpoint — Static Pages', level: 2, type: 'checkpoint', children: ['dom', 'es6', 'git'] },
      { id: 'git', label: 'Git & Version Control', level: 2, type: 'skill', children: ['npm', 'dom'] },
      { id: 'npm', label: 'npm & Package Managers', level: 2, type: 'skill', children: ['typescript', 'webpack'] },
      { id: 'dom', label: 'DOM Manipulation', level: 3, type: 'skill', children: ['rest-api', 'react'] },
      { id: 'es6', label: 'ES6+ Features', level: 3, type: 'skill', children: ['react', 'typescript'] },
      { id: 'typescript', label: 'TypeScript', level: 3, type: 'skill', children: ['react'] },
      { id: 'tailwind', label: 'Tailwind CSS', level: 3, type: 'skill', children: ['react'] },
      { id: 'bootstrap', label: 'Bootstrap', level: 3, type: 'skill', children: ['react'] },
      { id: 'rest-api', label: 'REST API Integration', level: 4, type: 'skill', children: ['react', 'web-security'] },
      { id: 'webpack', label: 'Webpack & Build Tools', level: 4, type: 'skill', children: ['react', 'deploy'] },
>>>>>>> 1aaebb2231ea6b4121360ac8b44648f4bfecdd5f
      { id: 'react', label: 'React.js', level: 4, type: 'skill', children: ['state-mgmt', 'routing'] },
      { id: 'state-mgmt', label: 'State Management', level: 5, type: 'skill', children: ['testing', 'graphql'] },
      { id: 'routing', label: 'React Router', level: 5, type: 'skill', children: ['testing'] },
      { id: 'testing', label: 'Testing (Jest/Vitest)', level: 6, type: 'skill', children: ['web-security', 'performance'] },
      { id: 'web-security', label: 'Web Security Basics', level: 6, type: 'skill', children: ['performance', 'pwa'] },
      { id: 'graphql', label: 'GraphQL', level: 6, type: 'skill', children: ['deploy'] },
      { id: 'performance', label: 'Performance Optimization', level: 7, type: 'skill', children: ['pwa', 'deploy'] },
      { id: 'pwa', label: 'Progressive Web Apps (PWA)', level: 7, type: 'skill', children: ['deploy'] },
      { id: 'deploy', label: 'Build & Deploy', level: 8, type: 'skill', children: [] }
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
      { id: 'lang', label: 'Pick a Language', level: 0, type: 'skill', children: ['http'] },
      { id: 'http', label: 'HTTP & APIs', level: 1, type: 'skill', children: ['framework'] },
      { id: 'framework', label: 'Web Framework', level: 2, type: 'skill', children: ['database', 'auth'] },
      { id: 'database', label: 'Database (SQL/NoSQL)', level: 3, type: 'skill', children: ['orm'] },
      { id: 'auth', label: 'Auth & Security', level: 3, type: 'skill', children: ['caching'] },
      { id: 'orm', label: 'ORM / Query Builder', level: 4, type: 'skill', children: ['caching'] },
      { id: 'caching', label: 'Caching (Redis)', level: 5, type: 'skill', children: ['messaging'] },
      { id: 'messaging', label: 'Message Queues', level: 6, type: 'skill', children: ['deploy'] },
      { id: 'deploy', label: 'Deployment', level: 7, type: 'skill', children: [] },
      { id: 'linux',      label: 'Terminal & Linux',     level: 0, type: 'skill', children: ['git'] },
      { id: 'git',        label: 'Git & GitHub',         level: 0, type: 'skill', children: ['http'] },
      { id: 'http',       label: 'HTTP & APIs',          level: 0, type: 'skill', children: ['java'] },
      { id: 'java',       label: 'Java Programming',     level: 1, type: 'skill', children: ['cp-cli'] },
      { id: 'cp-cli',     label: 'Checkpoint — Java CLI', level: 2, type: 'checkpoint', children: ['spring-boot'], tip: 'Viết các chương trình console quản lý bằng Java để nắm vững OOP.' },
      { id: 'spring-boot',label: 'Spring Boot Framework',level: 3, type: 'skill', children: ['mysql', 'mongodb'] },
      { id: 'mysql',      label: 'MySQL (Relational DB)',level: 4, type: 'skill', children: ['cp-crud'] },
      { id: 'mongodb',    label: 'MongoDB (NoSQL)',      level: 4, type: 'skill', children: ['cp-crud'] },
      { id: 'cp-crud',    label: 'Checkpoint — RESTful CRUD', level: 5, type: 'checkpoint', children: ['orm', 'auth'], tip: 'Xây dựng API quản lý Task (Task Manager API) kết nối với Database.' },
      { id: 'orm',        label: 'Hibernate / ORM',      level: 6, type: 'skill', children: ['testing-backend'] },
      { id: 'auth',       label: 'Auth & Security',      level: 6, type: 'skill', children: ['testing-backend'] },
      { id: 'testing-backend', label: 'Backend Testing', level: 7, type: 'skill', children: ['caching', 'messaging'] },
      { id: 'caching',    label: 'Caching (Redis)',      level: 8, type: 'skill', children: ['docker'] },
      { id: 'messaging',  label: 'Message Queues',       level: 8, type: 'skill', children: ['docker'] },
      { id: 'docker',     label: 'Docker Containers',    level: 9, type: 'skill', children: ['cicd'] },
      { id: 'cicd',       label: 'CI/CD Pipelines',      level: 9, type: 'skill', children: ['cp-complete'] },
      { id: 'cp-complete',label: 'Checkpoint — Microservice', level: 10, type: 'checkpoint', children: ['deploy'], tip: 'Tích hợp Auth, Caching và Docker vào một dịch vụ Backend hoàn chỉnh.' },
      { id: 'deploy',     label: 'Deployment',           level: 11, type: 'skill', children: [] }
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
      { id: 'html', label: 'HTML', level: 0, type: 'skill', children: ['css'] },
      { id: 'css', label: 'CSS', level: 0, type: 'skill', children: ['javascript'] },
      { id: 'javascript', label: 'JavaScript', level: 0, type: 'skill', children: ['cp-static', 'cp-interactivity', 'npm'] },
      { id: 'cp-static', label: 'Practice - Static Webpages', level: 1, type: 'checkpoint', children: ['cp-collab'] },
      { id: 'cp-interactivity', label: 'Practice - Interactivity', level: 1, type: 'checkpoint', children: ['cp-external'] },
      { id: 'npm', label: 'npm', level: 1, type: 'skill', children: ['cp-external'] },
      { id: 'cp-collab', label: 'Practice - Collaborative Work', level: 2, type: 'checkpoint', children: ['react', 'tailwind'] },
      { id: 'cp-external', label: 'Practice - External Packages', level: 2, type: 'checkpoint', children: ['github', 'git'] },
      { id: 'react', label: 'React', level: 3, type: 'skill', children: ['cp-frontend'] },
      {
        id: 'tailwind', label: 'Tailwind CSS', level: 3, type: 'skill', children: ['cp-frontend'],
        tip: 'Bạn có thể bỏ qua phần này và quay lại sau khi học Backend'
      },
      { id: 'github', label: 'GitHub', level: 3, type: 'skill', children: ['cp-frontend'] },
      { id: 'git', label: 'Git', level: 3, type: 'skill', children: ['cp-frontend'] },
      { id: 'cp-frontend', label: 'Practice - Frontend Apps', level: 4, type: 'checkpoint', children: ['nodejs'] },
      // ─── Backend ───
      {
        id: 'nodejs', label: 'Node.js', level: 5, type: 'skill', children: ['cp-cli'],
        tip: 'Bạn có thể chọn bất kỳ ngôn ngữ backend nào. Khuyến nghị là Node.js vì bạn đã quen với JavaScript và dễ dàng hơn để bắt đầu.'
      },
      { id: 'cp-cli', label: 'Practice - CLI Apps', level: 6, type: 'checkpoint', children: ['postgresql'] },
      { id: 'postgresql', label: 'PostgreSQL', level: 7, type: 'skill', children: ['cp-crud'] },
      {
        id: 'cp-crud', label: 'Practice - Simple CRUD Apps', level: 8, type: 'checkpoint', children: ['redis', 'jwt', 'restful'],
        tip: 'Sử dụng các checkpoint và đừng quên thực hành những gì bạn đã học. Có các ý tưởng dự án tại mỗi checkpoint để bạn củng cố kiến thức.'
      },
      { id: 'redis', label: 'Redis', level: 9, type: 'skill', children: ['cp-complete'] },
      { id: 'jwt', label: 'JWT Auth', level: 9, type: 'skill', children: ['cp-complete'] },
      { id: 'restful', label: 'RESTful APIs', level: 9, type: 'skill', children: ['cp-complete'] },
      { id: 'cp-complete', label: 'Practice - Complete App', level: 10, type: 'checkpoint', children: ['route53', 'ses', 'ec2', 'vpc', 's3'] },
      // ─── DevOps ───
      { id: 'route53', label: 'Route53', level: 11, type: 'skill', children: [] },
      { id: 'ses', label: 'SES', level: 11, type: 'skill', children: [] },
      { id: 'ec2', label: 'EC2', level: 12, type: 'skill', children: [] },
      { id: 'vpc', label: 'VPC', level: 12, type: 'skill', children: [] },
      { id: 's3', label: 'S3', level: 12, type: 'skill', children: [] }
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
      { id: 'linux', label: 'Linux & Shell', level: 0, type: 'skill', children: ['networking'] },
      { id: 'networking', label: 'Networking Basics', level: 1, type: 'skill', children: ['docker'] },
      { id: 'docker', label: 'Docker', level: 2, type: 'skill', children: ['k8s', 'cicd'] },
      { id: 'cicd', label: 'CI/CD Pipelines', level: 3, type: 'skill', children: ['iac'] },
      { id: 'k8s', label: 'Kubernetes', level: 3, type: 'skill', children: ['iac'] },
      { id: 'iac', label: 'Infra as Code', level: 4, type: 'skill', children: ['monitoring'] },
      { id: 'monitoring', label: 'Monitoring & Logging', level: 5, type: 'skill', children: ['cloud'] },
      { id: 'cloud', label: 'Cloud (AWS/GCP)', level: 6, type: 'skill', children: [] },
      { id: 'ansible', label: 'Ansible', level: 7, type: 'skill', children: [] },

    ]
  },
  {
    id: 'datascience',
    name: 'Data Science',
    category: 'role',
    description: 'Phân tích dữ liệu, xây dựng mô hình ML và khám phá thông tin chi tiết.',
    icon: '📊',
    color: '#a8e6cf',
    nodes: [
<<<<<<< HEAD
      { id: 'python', label: 'Python Fundamentals', level: 0, type: 'skill', children: ['cp-ds-python', 'pandas'] },
      { id: 'math', label: 'Math & Statistics', level: 0, type: 'skill', children: ['cp-ds-python', 'ml'] },
      { id: 'cp-ds-python', label: 'Practice - Python Data Notebook', level: 1, type: 'checkpoint', children: ['pandas', 'viz'], tip: 'Load a CSV, clean simple issues, calculate summaries, and explain what the data contains.' },
      { id: 'pandas', label: 'Pandas / NumPy', level: 2, type: 'skill', children: ['cp-ds-cleaning', 'viz'] },
      { id: 'viz', label: 'Data Visualization', level: 2, type: 'skill', children: ['cp-ds-eda'] },
      { id: 'cp-ds-cleaning', label: 'Practice - Clean a Real Dataset', level: 3, type: 'checkpoint', children: ['cp-ds-eda'], tip: 'Choose a messy public dataset and document every cleaning decision.' },
      { id: 'cp-ds-eda', label: 'Practice - Exploratory Data Analysis', level: 3, type: 'checkpoint', children: ['feature-eng', 'ml'], tip: 'Create charts and written findings before training a model.' },
      { id: 'feature-eng', label: 'Feature Engineering', level: 4, type: 'skill', children: ['cp-ds-features', 'ml'] },
      { id: 'ml', label: 'Machine Learning', level: 4, type: 'skill', children: ['cp-ds-model'] },
      { id: 'cp-ds-features', label: 'Practice - Feature Pipeline', level: 5, type: 'checkpoint', children: ['cp-ds-model', 'mlops'], tip: 'Turn cleaning and feature steps into repeatable functions or a scikit-learn pipeline.' },
      { id: 'cp-ds-model', label: 'Practice - Train and Evaluate Models', level: 5, type: 'checkpoint', children: ['dl', 'mlops'], tip: 'Compare at least two baseline models with a clear metric and validation split.' },
      { id: 'dl', label: 'Deep Learning', level: 6, type: 'skill', children: ['cp-ds-deep-learning'] },
      { id: 'cp-ds-deep-learning', label: 'Practice - Neural Network Experiment', level: 7, type: 'checkpoint', children: ['mlops'], tip: 'Train a small neural network only after establishing a classical ML baseline.' },
      { id: 'mlops', label: 'MLOps', level: 7, type: 'skill', children: ['cp-ds-deploy'] },
      { id: 'cp-ds-deploy', label: 'Practice - Deploy a Data Product', level: 8, type: 'checkpoint', children: [], tip: 'Package a model or dashboard so another user can run it from a clean setup.' }
    ],
    sections: [
      { afterLevel: 3, label: 'Modeling starts after EDA', sublabel: 'Do not skip cleaning and exploration' },
      { afterLevel: 5, label: 'Production path branches here', sublabel: 'Deep learning is optional; MLOps is useful for most models' }
=======
      { id: 'python', label: 'Python', level: 0, type: 'skill', children: ['math'] },
      { id: 'math', label: 'Math & Statistics', level: 1, type: 'skill', children: ['pandas'] },
      { id: 'pandas', label: 'Pandas / NumPy', level: 2, type: 'skill', children: ['viz', 'ml'] },
      { id: 'viz', label: 'Data Visualization', level: 3, type: 'skill', children: ['ml'] },
      { id: 'ml', label: 'Machine Learning', level: 4, type: 'skill', children: ['dl', 'feature-eng'] },
      { id: 'python', label: 'Python', level: 0, type: 'skill', children: ['math'] },
      { id: 'math', label: 'Math & Statistics', level: 1, type: 'skill', children: ['pandas'] },
      { id: 'pandas', label: 'Pandas / NumPy', level: 2, type: 'skill', children: ['viz', 'ml'] },
      { id: 'viz', label: 'Data Visualization', level: 3, type: 'skill', children: ['ml'] },
      { id: 'ml', label: 'Machine Learning', level: 4, type: 'skill', children: ['dl', 'feature-eng'] },
      { id: 'feature-eng', label: 'Feature Engineering', level: 5, type: 'skill', children: ['dl'] },
      { id: 'dl', label: 'Deep Learning', level: 6, type: 'skill', children: ['mlops'] },
      { id: 'mlops', label: 'MLOps', level: 7, type: 'skill', children: [] }
>>>>>>> 1aaebb2231ea6b4121360ac8b44648f4bfecdd5f
    ]
  },
  {
    id: 'aiengineer',
  name: 'AI Engineer',
  category: 'role',
  description: 'Build AI-powered applications using LLMs, RAG systems, AI agents and production-ready GenAI infrastructure.',
  icon: '🤖',
  color: '#845ef7',

  sections: [
    'Programming Foundations',
    'Backend Engineering',
    'LLM Fundamentals',
    'Prompt Engineering',
    'Embeddings & Vector Search',
    'RAG Systems',
    'AI Agents',
    'Open Source LLMs',
    'Inference Optimization',
    'Deployment & MLOps',
    'Evaluation & Safety',
    'Projects & Portfolio'
  ],

  nodes: [

    // ─────────────────────────────
    // Programming Foundations
    // ─────────────────────────────

    {
      id: 'python-ai',
      label: 'Python Basics',
      section: 'Programming Foundations',
      level: 0,
      difficulty: 'beginner',
      type: 'skill',
      children: ['oop-ai', 'git-ai'],
      projects: [
        'CLI chatbot',
        'File summarizer',
        'Simple API client'
      ]
    },

    {
      id: 'oop-ai',
      label: 'OOP in Python',
      section: 'Programming Foundations',
      level: 1,
      difficulty: 'beginner',
      type: 'skill',
      children: ['async-ai']
    },

    {
      id: 'git-ai',
      label: 'Git & GitHub',
      section: 'Programming Foundations',
      level: 1,
      difficulty: 'beginner',
      type: 'skill',
      children: ['linux-ai']
    },

    {
      id: 'linux-ai',
      label: 'Linux & CLI',
      section: 'Programming Foundations',
      level: 2,
      difficulty: 'beginner',
      type: 'skill',
      children: ['docker-ai']
    },

    // ─────────────────────────────
    // Backend Engineering
    // ─────────────────────────────

    {
      id: 'rest-ai',
      label: 'REST APIs',
      section: 'Backend Engineering',
      level: 3,
      difficulty: 'beginner',
      type: 'skill',
      children: ['fastapi-ai']
    },

    {
      id: 'fastapi-ai',
      label: 'FastAPI',
      section: 'Backend Engineering',
      level: 4,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['websocket-ai']
    },

    {
      id: 'async-ai',
      label: 'Async Programming',
      section: 'Backend Engineering',
      level: 4,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['fastapi-ai']
    },

    {
      id: 'websocket-ai',
      label: 'WebSockets',
      section: 'Backend Engineering',
      level: 5,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['checkpoint-api-ai']
    },

    {
      id: 'checkpoint-api-ai',
      label: 'Checkpoint — AI Backend Service',
      section: 'Backend Engineering',
      level: 6,
      difficulty: 'intermediate',
      type: 'checkpoint',
      children: ['llm-basics-ai'],
      projects: [
        'Streaming chatbot backend',
        'AI API gateway',
        'Document upload service'
      ]
    },

    // ─────────────────────────────
    // LLM Fundamentals
    // ─────────────────────────────

    {
      id: 'llm-basics-ai',
      label: 'LLM Fundamentals',
      section: 'LLM Fundamentals',
      level: 7,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['transformers-ai', 'prompt-ai']
    },

    {
      id: 'transformers-ai',
      label: 'Transformers',
      section: 'LLM Fundamentals',
      level: 8,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['tokens-ai']
    },

    {
      id: 'tokens-ai',
      label: 'Tokenization',
      section: 'LLM Fundamentals',
      level: 9,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['embeddings-ai']
    },

    {
      id: 'embeddings-ai',
      label: 'Embeddings',
      section: 'Embeddings & Vector Search',
      level: 10,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['semantic-search-ai']
    },

    {
      id: 'semantic-search-ai',
      label: 'Semantic Search',
      section: 'Embeddings & Vector Search',
      level: 11,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['vector-db-ai']
    },

    {
      id: 'vector-db-ai',
      label: 'Vector Databases',
      section: 'Embeddings & Vector Search',
      level: 12,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['hybrid-search-ai']
    },

    {
      id: 'hybrid-search-ai',
      label: 'Hybrid Search',
      section: 'Embeddings & Vector Search',
      level: 13,
      difficulty: 'advanced',
      type: 'skill',
      children: ['rag-ai']
    },

    // ─────────────────────────────
    // Prompt Engineering
    // ─────────────────────────────

    {
      id: 'prompt-ai',
      label: 'Prompt Engineering',
      section: 'Prompt Engineering',
      level: 8,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['structured-output-ai']
    },

    {
      id: 'structured-output-ai',
      label: 'Structured Outputs',
      section: 'Prompt Engineering',
      level: 9,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['function-calling-ai']
    },

    {
      id: 'function-calling-ai',
      label: 'Function Calling',
      section: 'Prompt Engineering',
      level: 10,
      difficulty: 'advanced',
      type: 'skill',
      children: ['tool-calling-ai']
    },

    {
      id: 'tool-calling-ai',
      label: 'Tool Calling',
      section: 'Prompt Engineering',
      level: 11,
      difficulty: 'advanced',
      type: 'skill',
      children: ['mcp-ai']
    },

    {
      id: 'mcp-ai',
      label: 'Model Context Protocol (MCP)',
      section: 'Prompt Engineering',
      level: 12,
      difficulty: 'advanced',
      type: 'skill',
      children: ['agents-ai']
    },

    // ─────────────────────────────
    // RAG Systems
    // ─────────────────────────────

    {
      id: 'rag-ai',
      label: 'RAG Systems',
      section: 'RAG Systems',
      level: 14,
      difficulty: 'advanced',
      type: 'skill',
      children: ['chunking-ai']
    },

    {
      id: 'chunking-ai',
      label: 'Chunking Strategies',
      section: 'RAG Systems',
      level: 15,
      difficulty: 'advanced',
      type: 'skill',
      children: ['retrieval-ai']
    },

    {
      id: 'retrieval-ai',
      label: 'Retrieval Optimization',
      section: 'RAG Systems',
      level: 16,
      difficulty: 'advanced',
      type: 'skill',
      children: ['reranking-ai']
    },

    {
      id: 'reranking-ai',
      label: 'Reranking',
      section: 'RAG Systems',
      level: 17,
      difficulty: 'advanced',
      type: 'skill',
      children: ['memory-ai']
    },

    {
      id: 'memory-ai',
      label: 'Conversation Memory',
      section: 'RAG Systems',
      level: 18,
      difficulty: 'advanced',
      type: 'skill',
      children: ['checkpoint-rag-ai']
    },

    {
      id: 'checkpoint-rag-ai',
      label: 'Checkpoint — Production RAG App',
      section: 'RAG Systems',
      level: 19,
      difficulty: 'advanced',
      type: 'checkpoint',
      children: ['agents-ai'],
      projects: [
        'PDF chatbot',
        'Company knowledge assistant',
        'AI search engine'
      ]
    },

    // ─────────────────────────────
    // AI Agents
    // ─────────────────────────────

    {
      id: 'agents-ai',
      label: 'AI Agents',
      section: 'AI Agents',
      level: 20,
      difficulty: 'advanced',
      type: 'skill',
      children: ['multi-agent-ai']
    },

    {
      id: 'multi-agent-ai',
      label: 'Multi-Agent Systems',
      section: 'AI Agents',
      level: 21,
      difficulty: 'advanced',
      type: 'skill',
      children: ['workflow-ai']
    },

    {
      id: 'workflow-ai',
      label: 'AI Workflows',
      section: 'AI Agents',
      level: 22,
      difficulty: 'advanced',
      type: 'skill',
      children: ['evaluation-ai']
    },

    // ─────────────────────────────
    // Open Source LLMs
    // ─────────────────────────────

    {
      id: 'open-llm-ai',
      label: 'Open-source LLMs',
      section: 'Open Source LLMs',
      level: 23,
      difficulty: 'advanced',
      type: 'skill',
      children: ['ollama-ai']
    },

    {
      id: 'ollama-ai',
      label: 'Ollama',
      section: 'Open Source LLMs',
      level: 24,
      difficulty: 'advanced',
      type: 'skill',
      children: ['vllm-ai']
    },

    {
      id: 'vllm-ai',
      label: 'vLLM',
      section: 'Inference Optimization',
      level: 25,
      difficulty: 'advanced',
      type: 'skill',
      children: ['quantization-ai']
    },

    {
      id: 'quantization-ai',
      label: 'Quantization',
      section: 'Inference Optimization',
      level: 26,
      difficulty: 'advanced',
      type: 'skill',
      children: ['lora-ai']
    },

    {
      id: 'lora-ai',
      label: 'LoRA / PEFT',
      section: 'Inference Optimization',
      level: 27,
      difficulty: 'advanced',
      type: 'skill',
      children: ['deployment-ai']
    },

    // ─────────────────────────────
    // Deployment
    // ─────────────────────────────

    {
      id: 'docker-ai',
      label: 'Docker',
      section: 'Deployment & MLOps',
      level: 28,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['deployment-ai']
    },

    {
      id: 'deployment-ai',
      label: 'Deploy AI Applications',
      section: 'Deployment & MLOps',
      level: 29,
      difficulty: 'advanced',
      type: 'skill',
      children: ['monitoring-ai']
    },

    {
      id: 'monitoring-ai',
      label: 'Monitoring & Observability',
      section: 'Deployment & MLOps',
      level: 30,
      difficulty: 'advanced',
      type: 'skill',
      children: ['evaluation-ai']
    },

    // ─────────────────────────────
    // Evaluation & Safety
    // ─────────────────────────────

    {
      id: 'evaluation-ai',
      label: 'LLM Evaluation',
      section: 'Evaluation & Safety',
      level: 31,
      difficulty: 'advanced',
      type: 'skill',
      children: ['safety-ai']
    },

    {
      id: 'safety-ai',
      label: 'AI Safety & Guardrails',
      section: 'Evaluation & Safety',
      level: 32,
      difficulty: 'advanced',
      type: 'skill',
      children: []
    }
  ]
},

{
  id: 'machinelearning',
  name: 'Machine Learning Engineer',
  category: 'role',
  description: 'Build machine learning models, training pipelines, recommendation systems and production ML infrastructure.',
  icon: '🧠',
  color: '#20c997',

  sections: [
    'Programming Foundations',
    'Math Foundations',
    'Data Analysis',
    'Machine Learning Fundamentals',
    'Classical Machine Learning',
    'Feature Engineering',
    'Deep Learning',
    'Specializations',
    'MLOps & Deployment',
    'Projects & Portfolio'
  ],

  nodes: [

    // ─────────────────────────────
    // Programming Foundations
    // ─────────────────────────────

    {
      id: 'python-ml',
      label: 'Python Basics',
      section: 'Programming Foundations',
      level: 0,
      difficulty: 'beginner',
      type: 'skill',
      children: ['oop-ml', 'git-ml'],
      projects: [
        'CSV analyzer',
        'Data cleaner',
        'Simple ML scripts'
      ]
    },

    {
      id: 'oop-ml',
      label: 'OOP in Python',
      section: 'Programming Foundations',
      level: 1,
      difficulty: 'beginner',
      type: 'skill',
      children: ['numpy-ml']
    },

    {
      id: 'git-ml',
      label: 'Git & GitHub',
      section: 'Programming Foundations',
      level: 1,
      difficulty: 'beginner',
      type: 'skill',
      children: ['linux-ml']
    },

    {
      id: 'linux-ml',
      label: 'Linux & CLI',
      section: 'Programming Foundations',
      level: 2,
      difficulty: 'beginner',
      type: 'skill',
      children: ['docker-ml']
    },

    // ─────────────────────────────
    // Math Foundations
    // ─────────────────────────────

    {
      id: 'math-ml',
      label: 'Math for ML',
      section: 'Math Foundations',
      level: 2,
      difficulty: 'beginner',
      type: 'skill',
      children: ['linear-algebra-ml', 'statistics-ml']
    },

    {
      id: 'linear-algebra-ml',
      label: 'Linear Algebra',
      section: 'Math Foundations',
      level: 3,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['calculus-ml']
    },

    {
      id: 'calculus-ml',
      label: 'Calculus',
      section: 'Math Foundations',
      level: 4,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['probability-ml']
    },

    {
      id: 'statistics-ml',
      label: 'Statistics',
      section: 'Math Foundations',
      level: 3,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['probability-ml']
    },

    {
      id: 'probability-ml',
      label: 'Probability',
      section: 'Math Foundations',
      level: 4,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['optimization-ml']
    },

    {
      id: 'optimization-ml',
      label: 'Optimization',
      section: 'Math Foundations',
      level: 5,
      difficulty: 'advanced',
      type: 'skill',
      children: ['numpy-ml']
    },

    // ─────────────────────────────
    // Data Analysis
    // ─────────────────────────────

    {
      id: 'numpy-ml',
      label: 'NumPy',
      section: 'Data Analysis',
      level: 6,
      difficulty: 'beginner',
      type: 'skill',
      children: ['pandas-ml']
    },

    {
      id: 'pandas-ml',
      label: 'Pandas',
      section: 'Data Analysis',
      level: 7,
      difficulty: 'beginner',
      type: 'skill',
      children: ['sql-ml']
    },

    {
      id: 'sql-ml',
      label: 'SQL',
      section: 'Data Analysis',
      level: 8,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['data-cleaning-ml']
    },

    {
      id: 'data-cleaning-ml',
      label: 'Data Cleaning',
      section: 'Data Analysis',
      level: 9,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['eda-ml']
    },

    {
      id: 'eda-ml',
      label: 'Exploratory Data Analysis',
      section: 'Data Analysis',
      level: 10,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['data-vis-ml']
    },

    {
      id: 'data-vis-ml',
      label: 'Data Visualization',
      section: 'Data Analysis',
      level: 11,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['checkpoint-data-ml']
    },

    {
      id: 'checkpoint-data-ml',
      label: 'Checkpoint — Data Analysis Project',
      section: 'Data Analysis',
      level: 12,
      difficulty: 'intermediate',
      type: 'checkpoint',
      children: ['ml-fundamentals-ml'],
      projects: [
        'Sales analytics dashboard',
        'Netflix dataset analysis',
        'EDA portfolio project'
      ]
    },

    // ─────────────────────────────
    // ML Fundamentals
    // ─────────────────────────────

    {
      id: 'ml-fundamentals-ml',
      label: 'Machine Learning Fundamentals',
      section: 'Machine Learning Fundamentals',
      level: 13,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['supervised-ml', 'unsupervised-ml']
    },

    {
      id: 'supervised-ml',
      label: 'Supervised Learning',
      section: 'Machine Learning Fundamentals',
      level: 14,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['regression-ml', 'classification-ml']
    },

    {
      id: 'regression-ml',
      label: 'Regression Algorithms',
      section: 'Classical Machine Learning',
      level: 15,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['classification-ml']
    },

    {
      id: 'classification-ml',
      label: 'Classification Algorithms',
      section: 'Classical Machine Learning',
      level: 16,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['tree-models-ml']
    },

    {
      id: 'tree-models-ml',
      label: 'Decision Trees & Random Forest',
      section: 'Classical Machine Learning',
      level: 17,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['boosting-ml']
    },

    {
      id: 'boosting-ml',
      label: 'Boosting Algorithms',
      section: 'Classical Machine Learning',
      level: 18,
      difficulty: 'advanced',
      type: 'skill',
      children: ['xgboost-ml']
    },

    {
      id: 'xgboost-ml',
      label: 'XGBoost & LightGBM',
      section: 'Classical Machine Learning',
      level: 19,
      difficulty: 'advanced',
      type: 'skill',
      children: ['svm-ml']
    },

    {
      id: 'svm-ml',
      label: 'Support Vector Machines',
      section: 'Classical Machine Learning',
      level: 20,
      difficulty: 'advanced',
      type: 'skill',
      children: ['unsupervised-ml']
    },

    {
      id: 'unsupervised-ml',
      label: 'Unsupervised Learning',
      section: 'Machine Learning Fundamentals',
      level: 14,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['clustering-ml']
    },

    {
      id: 'clustering-ml',
      label: 'Clustering',
      section: 'Classical Machine Learning',
      level: 15,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['dim-reduction-ml']
    },

    {
      id: 'dim-reduction-ml',
      label: 'Dimensionality Reduction',
      section: 'Classical Machine Learning',
      level: 16,
      difficulty: 'advanced',
      type: 'skill',
      children: ['feature-eng-ml']
    },

    // ─────────────────────────────
    // Feature Engineering
    // ─────────────────────────────

    {
      id: 'feature-eng-ml',
      label: 'Feature Engineering',
      section: 'Feature Engineering',
      level: 21,
      difficulty: 'advanced',
      type: 'skill',
      children: ['feature-selection-ml']
    },

    {
      id: 'feature-selection-ml',
      label: 'Feature Selection',
      section: 'Feature Engineering',
      level: 22,
      difficulty: 'advanced',
      type: 'skill',
      children: ['model-eval-ml']
    },

    {
      id: 'model-eval-ml',
      label: 'Model Evaluation',
      section: 'Feature Engineering',
      level: 23,
      difficulty: 'advanced',
      type: 'skill',
      children: ['cross-validation-ml']
    },

    {
      id: 'cross-validation-ml',
      label: 'Cross Validation',
      section: 'Feature Engineering',
      level: 24,
      difficulty: 'advanced',
      type: 'skill',
      children: ['hyperparameter-ml']
    },

    {
      id: 'hyperparameter-ml',
      label: 'Hyperparameter Tuning',
      section: 'Feature Engineering',
      level: 25,
      difficulty: 'advanced',
      type: 'skill',
      children: ['sklearn-ml']
    },

    {
      id: 'sklearn-ml',
      label: 'Scikit-learn',
      section: 'Feature Engineering',
      level: 26,
      difficulty: 'advanced',
      type: 'skill',
      children: ['checkpoint-ml-system']
    },

    {
      id: 'checkpoint-ml-system',
      label: 'Checkpoint — End-to-End ML System',
      section: 'Feature Engineering',
      level: 27,
      difficulty: 'advanced',
      type: 'checkpoint',
      children: ['deep-learning-ml'],
      projects: [
        'Fraud detection system',
        'Recommendation system',
        'Stock prediction pipeline'
      ]
    },

    // ─────────────────────────────
    // Deep Learning
    // ─────────────────────────────

    {
      id: 'deep-learning-ml',
      label: 'Deep Learning',
      section: 'Deep Learning',
      level: 28,
      difficulty: 'advanced',
      type: 'skill',
      children: ['neural-networks-ml']
    },

    {
      id: 'neural-networks-ml',
      label: 'Neural Networks',
      section: 'Deep Learning',
      level: 29,
      difficulty: 'advanced',
      type: 'skill',
      children: ['cnn-ml', 'rnn-ml']
    },

    {
      id: 'cnn-ml',
      label: 'CNN',
      section: 'Deep Learning',
      level: 30,
      difficulty: 'advanced',
      type: 'skill',
      children: ['computer-vision-ml']
    },

    {
      id: 'computer-vision-ml',
      label: 'Computer Vision',
      section: 'Specializations',
      level: 31,
      difficulty: 'advanced',
      type: 'skill',
      children: ['tensorflow-ml']
    },

    {
      id: 'rnn-ml',
      label: 'RNN & LSTM',
      section: 'Deep Learning',
      level: 30,
      difficulty: 'advanced',
      type: 'skill',
      children: ['nlp-ml']
    },

    {
      id: 'nlp-ml',
      label: 'Natural Language Processing',
      section: 'Specializations',
      level: 31,
      difficulty: 'advanced',
      type: 'skill',
      children: ['pytorch-ml']
    },

    {
      id: 'tensorflow-ml',
      label: 'TensorFlow',
      section: 'Deep Learning',
      level: 32,
      difficulty: 'advanced',
      type: 'skill',
      children: ['mlops-ml']
    },

    {
      id: 'pytorch-ml',
      label: 'PyTorch',
      section: 'Deep Learning',
      level: 32,
      difficulty: 'advanced',
      type: 'skill',
      children: ['mlops-ml']
    },

    // ─────────────────────────────
    // MLOps
    // ─────────────────────────────

    {
      id: 'docker-ml',
      label: 'Docker',
      section: 'MLOps & Deployment',
      level: 33,
      difficulty: 'intermediate',
      type: 'skill',
      children: ['deployment-ml']
    },

    {
      id: 'deployment-ml',
      label: 'Deploy ML Models',
      section: 'MLOps & Deployment',
      level: 34,
      difficulty: 'advanced',
      type: 'skill',
      children: ['cloud-ml']
    },

    {
      id: 'cloud-ml',
      label: 'AWS / Azure / GCP',
      section: 'MLOps & Deployment',
      level: 35,
      difficulty: 'advanced',
      type: 'skill',
      children: ['mlops-ml']
    },

    {
      id: 'mlops-ml',
      label: 'MLOps',
      section: 'MLOps & Deployment',
      level: 36,
      difficulty: 'advanced',
      type: 'skill',
      children: ['monitoring-ml']
    },

    {
      id: 'monitoring-ml',
      label: 'Monitoring & Drift Detection',
      section: 'MLOps & Deployment',
      level: 37,
      difficulty: 'advanced',
      type: 'skill',
      children: []
    }
  ]
},
  {
    id: 'gameplayprogrammer',
  name: 'Gameplay Programmer',
  category: 'role',
  description: 'Lập trình gameplay, AI, combat system và các cơ chế hoạt động trong game.',
  icon: '🎮',
  color: '#89c2ff',
  nodes: [
    { id: 'gp-client',       label: 'Client Side Development',                 level: 0, type: 'skill', children: ['gp-math','gp-phy'] },
    { id: 'gp-math',         label: 'Game Mathematics',                level: 1, type: 'skill', children: ['gp-engine'] },
    { id: 'gp-phy',          label: 'Game Physics',                level: 1, type: 'skill', children: ['gp-engine'] },
    { id: 'gp-engine',       label: 'Unity / Unreal Engine',    level: 2, type: 'skill', children: ['gp-cpp'] },
    { id: 'gp-cpp',          label: 'Programming Languages',     level: 3, type: 'skill', children: ['gp-gra','gp-grap'] },
    { id: 'gp-gra',          label: 'Computer Graphics',    level: 4, type: 'skill', children: ['gp-ai'] },
    { id: 'gp-grap',         label: 'Graphics API',    level: 4, type: 'skill', children: ['gp-ai'] },
    { id: 'gp-ai',           label: 'Game AI',        level: 5, type: 'skill', children: ['gp-optimization'] },
    { id: 'gp-ren',          label: 'Advanced Rendering',   level: 6, type: 'skill', children: [] },
    { id: 'gp-chk',          label: 'Checkpoint',   level: 7, type: 'checkpoint', children: [] },
  ]
},

{
  id: 'gamedesigner',
  name: 'Game Designer',
  category: 'role',
  description: 'Thiết kế gameplay, level, mechanics và trải nghiệm người chơi.',
  icon: '🕹️',
  color: '#ffd6a5',
  nodes: [
    { id: 'gd-gamedesign',   label: 'Game Design Basics',       level: 0, type: 'skill', children: ['gd-mechanics'] },
    { id: 'gd-mechanics',    label: 'Gameplay Mechanics',       level: 1, type: 'skill', children: ['gd-leveldesign'] },
    { id: 'gd-leveldesign',  label: 'Level Design',             level: 2, type: 'skill', children: ['gd-storytelling'] },
    { id: 'gd-storytelling', label: 'Storytelling & Narrative', level: 3, type: 'skill', children: ['gd-gdd'] },
    { id: 'gd-gdd',          label: 'Game Design Document',     level: 4, type: 'skill', children: ['gd-balancing'] },
    { id: 'gd-balancing',    label: 'Game Balancing',           level: 5, type: 'skill', children: ['gd-ux'] },
    { id: 'gd-ux',           label: 'Player Experience (UX)',   level: 6, type: 'skill', children: ['gd-prototype'] },
    { id: 'gd-prototype',    label: 'Prototype with Unity',     level: 7, type: 'skill', children: [] }
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
      { id: 'jsx', label: 'JSX', level: 0, type: 'skill', children: ['components'] },
      { id: 'components', label: 'Components', level: 1, type: 'skill', children: ['props', 'state'] },
      { id: 'props', label: 'Props', level: 2, type: 'skill', children: ['hooks'] },
      { id: 'state', label: 'State', level: 2, type: 'skill', children: ['hooks'] },
      { id: 'hooks', label: 'Hooks', level: 3, type: 'skill', children: ['context', 'effects'] },
      { id: 'context', label: 'Context API', level: 4, type: 'skill', children: ['patterns'] },
      { id: 'effects', label: 'Side Effects', level: 4, type: 'skill', children: ['patterns'] },
      { id: 'patterns', label: 'Advanced Patterns', level: 5, type: 'skill', children: [] }
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
      { id: 'syntax', label: 'Syntax & Basics', level: 0, type: 'skill', children: ['types'] },
      { id: 'types', label: 'Data Types', level: 1, type: 'skill', children: ['functions', 'dom'] },
      { id: 'functions', label: 'Functions & Scope', level: 2, type: 'skill', children: ['async'] },
      { id: 'dom', label: 'DOM APIs', level: 2, type: 'skill', children: ['events'] },
      { id: 'events', label: 'Events', level: 3, type: 'skill', children: ['async'] },
      { id: 'async', label: 'Async / Promises', level: 4, type: 'skill', children: ['modules'] },
      { id: 'modules', label: 'Modules & Tooling', level: 5, type: 'skill', children: [] }
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
      { id: 'basics', label: 'Basic Types', level: 0, type: 'skill', children: ['interfaces'] },
      { id: 'interfaces', label: 'Interfaces', level: 1, type: 'skill', children: ['generics', 'enums'] },
      { id: 'generics', label: 'Generics', level: 2, type: 'skill', children: ['advanced'] },
      { id: 'enums', label: 'Enums & Unions', level: 2, type: 'skill', children: ['advanced'] },
      { id: 'advanced', label: 'Advanced Types', level: 3, type: 'skill', children: ['config'] },
      { id: 'config', label: 'TS Config & Tooling', level: 4, type: 'skill', children: [] }
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
      { id: 'basics', label: 'Syntax & Basics', level: 0, type: 'skill', children: ['data-structures'] },
      { id: 'data-structures', label: 'Data Structures', level: 1, type: 'skill', children: ['oop', 'functions'] },
      { id: 'oop', label: 'OOP', level: 2, type: 'skill', children: ['stdlib'] },
      { id: 'functions', label: 'Functions & Decorators', level: 2, type: 'skill', children: ['stdlib'] },
      { id: 'stdlib', label: 'Standard Library', level: 3, type: 'skill', children: ['packages'] },
      { id: 'packages', label: 'Package Management', level: 4, type: 'skill', children: ['testing'] },
      { id: 'testing', label: 'Testing', level: 5, type: 'skill', children: [] }
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
      { id: 'basics', label: 'SELECT & WHERE', level: 0, type: 'skill', children: ['joins'] },
      { id: 'joins', label: 'JOINs', level: 1, type: 'skill', children: ['agg', 'subq'] },
      { id: 'agg', label: 'Aggregations', level: 2, type: 'skill', children: ['indexes'] },
      { id: 'subq', label: 'Sub-queries', level: 2, type: 'skill', children: ['indexes'] },
      { id: 'indexes', label: 'Indexes & Perf', level: 3, type: 'skill', children: ['transactions'] },
      { id: 'transactions', label: 'Transactions', level: 4, type: 'skill', children: [] }
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
      { id: 'concepts', label: 'Core Concepts', level: 0, type: 'skill', children: ['images'] },
      { id: 'images', label: 'Images & Dockerfile', level: 1, type: 'skill', children: ['containers'] },
      { id: 'containers', label: 'Containers', level: 2, type: 'skill', children: ['networking', 'volumes'] },
      { id: 'networking', label: 'Networking', level: 3, type: 'skill', children: ['compose'] },
      { id: 'volumes', label: 'Volumes', level: 3, type: 'skill', children: ['compose'] },
      { id: 'compose', label: 'Docker Compose', level: 4, type: 'skill', children: [] }
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
      { id: 'basics', label: 'Init, Add, Commit', level: 0, type: 'skill', children: ['branching'] },
      { id: 'branching', label: 'Branching', level: 1, type: 'skill', children: ['merging', 'remote'] },
      { id: 'merging', label: 'Merging & Rebasing', level: 2, type: 'skill', children: ['workflows'] },
      { id: 'remote', label: 'Remote & Push/Pull', level: 2, type: 'skill', children: ['workflows'] },
      { id: 'workflows', label: 'Git Workflows', level: 3, type: 'skill', children: ['advanced'] },
      { id: 'advanced', label: 'Advanced (stash, cherry-pick)', level: 4, type: 'skill', children: [] }
    ]
  }
]

// ─── Initialization ────────────────────────────────────
// Always sync career paths from source so edits to DEFAULT_CAREER_PATHS
// are reflected immediately without manually clearing localStorage.
const initializeStorage = () => {
  localStorage.setItem(STORAGE_KEYS.CAREER_PATHS, JSON.stringify(DEFAULT_CAREER_PATHS))
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

// Check-in shape: { minutes, note, status: 'ahead'|'on-track'|'behind', locked: true }
export const upsertDailyCheckin = (dateKey, { minutes = 0, note = '', status = 'on-track' }) => {
  const all = getDailyCheckins()
  all[dateKey] = {
    minutes: Number(minutes) || 0,
    note: String(note || ''),
    status,
    locked: true,
    savedAt: new Date().toISOString()
  }
  localStorage.setItem(STORAGE_KEYS.DAILY_CHECKINS, JSON.stringify(all))
}

export const deleteDailyCheckin = (dateKey) => {
  const all = getDailyCheckins()
  delete all[dateKey]
  localStorage.setItem(STORAGE_KEYS.DAILY_CHECKINS, JSON.stringify(all))
}

// Return the date key for the next check-in given the last check-in date and frequency
// frequency: 'daily' = +1 day | 'every2days' = +2 days | 'weekly' = +7 days
export const getNextCheckinDate = (lastDateKey, frequency) => {
  if (!lastDateKey) return null
  const intervalDays = frequency === 'weekly' ? 7 : frequency === 'every2days' ? 2 : 1
  return addDays(lastDateKey, intervalDays)
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
  },
  {
    id: 'cs-osint-tool',
    pathId: 'cybersecurity',
    category: 'Security',
    difficulty: 'Intermediate',
    tags: ['Python', 'OSINT', 'Networking', 'API'],
    title: 'Công Cụ Phân Tích IP (OSINT)',
    description: 'Xây dựng tool CLI bằng Python để tự động thu thập thông tin tình báo từ một địa chỉ IP hoặc domain.',
    longDescription: 'Phát triển một công cụ dòng lệnh (CLI) bằng Python để phân tích tự động các dấu hiệu khả nghi của một IP hoặc Domain. Công cụ sẽ gọi các public API (như VirusTotal, AbuseIPDB, Shodan) để kiểm tra lịch sử độc hại, vị trí địa lý, thông tin WHOIS và các port đang mở. Dự án này giúp rèn luyện kỹ năng Scripting, tương tác API, và hiểu biết về Threat Intelligence.',
    requirements: [
      'Scripting: Viết mã Python sạch, sử dụng thư viện `requests` có xử lý lỗi (try/except) khi gọi API bị timeout hoặc lỗi.',
      'Tích hợp API: Gọi ít nhất 2 API bên ngoài (VD: VirusTotal, IP-API) để lấy dữ liệu json.',
      'Xử lý Dữ liệu: Phân tích cú pháp JSON trả về và format hiển thị báo cáo ra console một cách dễ đọc.',
      'CLI Argument: Sử dụng thư viện `argparse` để nhận input từ user (ví dụ: `python scanner.py --ip 8.8.8.8`).'
    ],
    checklist: [
      'Công cụ nhận diện đúng định dạng IP hoặc Domain hợp lệ',
      'Kết nối API thành công và trả về dữ liệu chuẩn xác',
      'Hiển thị cảnh báo màu sắc (đỏ/xanh) trên terminal nếu phát hiện IP độc hại',
      'README hướng dẫn cách cài đặt thư viện và thiết lập API keys'
    ],
    started: 215
  },
  // Thêm vào trong mảng PROJECTS
  {
    id: 'mb-rpg-wiki',
    pathId: 'android',
    category: 'Mobile',
    difficulty: 'Intermediate',
    tags: ['Kotlin', 'Room', 'Retrofit', 'MVVM'],
    title: 'Ứng Dụng Cẩm Nang Game RPG',
    description: 'Xây dựng một wiki app trên Android tra cứu thông tin vật phẩm, lore và nhân vật cho một tựa game Soulslike.',
    longDescription: 'Phát triển một ứng dụng Android native sử dụng Kotlin để tra cứu thông tin (vũ khí, bản đồ, lore cốt truyện) của các game hành động RPG. Ứng dụng cần sử dụng kiến trúc MVVM, lấy dữ liệu từ một public API (hoặc mock data) bằng Retrofit, và lưu trữ offline vào database cục bộ bằng Room để người chơi có thể tra cứu khi không có mạng. Sử dụng Coroutines và Flow để xử lý các tác vụ bất đồng bộ một cách mượt mà.',
    requirements: [
      'Giao diện: Thiết kế UI dark-theme bằng XML ConstraintLayout hoặc Jetpack Compose, có RecyclerView hiển thị danh sách vật phẩm.',
      'Kiến trúc MVVM: Tách biệt logic UI (Activity/Fragment), ViewModel và Repository.',
      'Networking: Sử dụng Retrofit để gọi API lấy thông tin nhân vật/vật phẩm.',
      'Database: Triển khai Room Database để cache dữ liệu, hỗ trợ đọc offline.',
      'Asynchronism: Dùng Kotlin Coroutines để gọi API và truy vấn Room mà không chặn Main Thread.'
    ],
    checklist: [
      'App chạy mượt mà không crash khi mất mạng',
      'Danh sách hiển thị đúng hình ảnh và tên vật phẩm',
      'Vuốt để làm mới (SwipeRefreshLayout) hoạt động tốt',
      'README có file APK hoặc screenshots của màn hình chính'
    ],
    started: 420
  }
]

export const getProject = (id) => PROJECTS.find(p => p.id === id)
export const getProjectsByCategory = (category) => PROJECTS.filter(p => p.category === category)

// ═══════════════════════════════════════════════════════
//  Personal Workspace — main roadmap + weekly plan
// ═══════════════════════════════════════════════════════

// ─── Date helpers ──────────────────────────────────────
function storageToday() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function addDays(dateStr, days) {
  const [y, m, d] = dateStr.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  date.setDate(date.getDate() + days)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

// ─── Weekly templates (hardcoded recommended durations) ─
//  Each value = total weeks recommended for that roadmap
export const WEEKLY_TEMPLATES = {
  frontend:          11,
  backend:            9,
  fullstack:         16,
  devops:             9,
  datascience:        8,
  'react-skill':      8,
  'javascript-skill': 7,
  'typescript-skill': 6,
  'python-skill':     7,
  'sql-skill':        6,
  'docker-skill':     6,
  'git-skill':        6,
}

// ─── Workspace CRUD ────────────────────────────────────
// Workspace shape:
// {
//   pathId: string,
//   startDate: 'YYYY-MM-DD',
//   checkinFrequency: 'daily' | 'every2days' | 'weekly',
//   weeklyPlan: [{
//     week: number,
//     nodeIds: string[],
//     missedNodeIds: string[],
//     status: 'upcoming' | 'active' | 'done' | 'failed',
//     startDate: 'YYYY-MM-DD',
//     endDate: 'YYYY-MM-DD'
//   }]
// }

export const getWorkspace = () => {
  const raw = localStorage.getItem(STORAGE_KEYS.WORKSPACE)
  return raw ? JSON.parse(raw) : null
}

export const saveWorkspace = (ws) => {
  localStorage.setItem(STORAGE_KEYS.WORKSPACE, JSON.stringify(ws))
}

export const clearWorkspace = () => {
  localStorage.removeItem(STORAGE_KEYS.WORKSPACE)
}

// ─── Generate weekly plan from scratch ─────────────────
export const generateWeeklyPlan = (pathId, startDate) => {
  const path = getCareerPath(pathId)
  if (!path) return []

  // Sort nodes by level so earlier skills come first
  const nodes = (path.nodes || []).slice().sort((a, b) => a.level - b.level || a.id.localeCompare(b.id))
  const totalWeeks = WEEKLY_TEMPLATES[pathId] || Math.max(nodes.length, 4)

  // Distribute nodes evenly: first (n % w) weeks get one extra node
  const n = nodes.length
  const w = totalWeeks
  const base = Math.floor(n / w)
  const extra = n % w

  const plan = []
  let nodeIdx = 0

  for (let i = 0; i < w; i++) {
    const count = base + (i < extra ? 1 : 0)
    const weekStart = addDays(startDate, i * 7)
    const weekEnd   = addDays(startDate, i * 7 + 6)
    plan.push({
      week: i + 1,
      nodeIds: nodes.slice(nodeIdx, nodeIdx + count).map(nd => nd.id),
      missedNodeIds: [],
      status: 'upcoming',
      startDate: weekStart,
      endDate: weekEnd,
    })
    nodeIdx += count
  }

  return plan
}

// ─── Evaluate week statuses based on current date & completions ─
export const checkAndFailMissedWeeks = (workspace) => {
  const today = storageToday()
  const completed = getCompletedSkills(workspace.pathId)

  const updatedPlan = workspace.weeklyPlan.map(week => {
    const allDone = week.nodeIds.length > 0 && week.nodeIds.every(id => completed.includes(id))

    if (week.endDate < today) {
      // Past week
      if (allDone) return { ...week, status: 'done', missedNodeIds: [] }
      const missed = week.nodeIds.filter(id => !completed.includes(id))
      return { ...week, status: 'failed', missedNodeIds: missed }
    } else if (week.startDate <= today) {
      // Current week
      if (allDone) return { ...week, status: 'done', missedNodeIds: [] }
      return { ...week, status: 'active', missedNodeIds: [] }
    } else {
      // Future week
      return { ...week, status: 'upcoming', missedNodeIds: [] }
    }
  })

  return { ...workspace, weeklyPlan: updatedPlan }
}

// ─── Reassign a missed node from a failed week ──────────
// mode: 'merge'   — add alongside existing nodes in target week
// mode: 'cascade' — add to target week, push its last node to next, cascading forward
export const reassignMissedNode = (workspace, nodeId, fromWeekNum, toWeekNum, mode) => {
  // Deep copy the plan
  const plan = workspace.weeklyPlan.map(w => ({
    ...w,
    nodeIds: [...w.nodeIds],
    missedNodeIds: [...(w.missedNodeIds || [])],
  }))

  // Remove from source week
  const fromIdx = plan.findIndex(w => w.week === fromWeekNum)
  if (fromIdx !== -1) {
    plan[fromIdx].missedNodeIds = plan[fromIdx].missedNodeIds.filter(id => id !== nodeId)
    plan[fromIdx].nodeIds       = plan[fromIdx].nodeIds.filter(id => id !== nodeId)
  }

  const toIdx = plan.findIndex(w => w.week === toWeekNum)
  if (toIdx === -1) return { ...workspace, weeklyPlan: plan }

  if (mode === 'merge') {
    // Simply add the missed node into the target week
    plan[toIdx].nodeIds.push(nodeId)
  } else {
    // Cascade: insert node at front of target week,
    // then bubble the last node of each subsequent week forward
    plan[toIdx].nodeIds.unshift(nodeId)
    for (let i = toIdx; i < plan.length - 1; i++) {
      if (plan[i].nodeIds.length > 1) {
        const overflow = plan[i].nodeIds.pop()
        plan[i + 1].nodeIds.unshift(overflow)
      }
    }
  }

  return { ...workspace, weeklyPlan: plan }
}
