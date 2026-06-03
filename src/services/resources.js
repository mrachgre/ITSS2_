// ═══════════════════════════════════════════════════════
//  Node learning resources — keyed by node ID
//  Each entry: { title, url, type: 'article'|'video'|'course'|'docs' }
// ═══════════════════════════════════════════════════════

const RESOURCES = {
  // ─── HTML / CSS / JS fundamentals ───
  html: [
    { title: 'MDN — HTML Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML', type: 'docs' },
    { title: 'W3Schools HTML Tutorial', url: 'https://www.w3schools.com/html/', type: 'course' },
    { title: 'HTML Crash Course — Traversy Media', url: 'https://www.youtube.com/watch?v=UB1O30fR-EE', type: 'video' },
  ],
  css: [
    { title: 'MDN — CSS First Steps', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps', type: 'docs' },
    { title: 'CSS-Tricks — Complete Guide to Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', type: 'article' },
    { title: 'CSS Crash Course — Traversy Media', url: 'https://www.youtube.com/watch?v=yfoY53QXEnI', type: 'video' },
    { title: 'Learn CSS — web.dev', url: 'https://web.dev/learn/css', type: 'course' },
  ],
  javascript: [
    { title: 'The Modern JavaScript Tutorial', url: 'https://javascript.info/', type: 'course' },
    { title: 'MDN — JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', type: 'docs' },
    { title: 'freeCodeCamp — JavaScript Algorithms', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', type: 'course' },
    { title: 'JavaScript Crash Course — Traversy Media', url: 'https://www.youtube.com/watch?v=hdI2bqOjy3c', type: 'video' },
  ],
  'js-basics': [
    { title: 'The Modern JavaScript Tutorial', url: 'https://javascript.info/', type: 'course' },
    { title: 'MDN — JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', type: 'docs' },
    { title: 'freeCodeCamp — JavaScript', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', type: 'course' },
  ],

  // ─── Checkpoints ───
  'cp-static': [
    { title: 'Build a Portfolio Website — freeCodeCamp', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', type: 'course' },
    { title: 'Frontend Mentor Challenges', url: 'https://www.frontendmentor.io/', type: 'course' },
  ],
  'cp-interactivity': [
    { title: '30 Day Vanilla JS Challenge', url: 'https://javascript30.com/', type: 'course' },
    { title: 'Build a Calculator — YouTube', url: 'https://www.youtube.com/watch?v=j59qQ7YWLxw', type: 'video' },
  ],
  npm: [
    { title: 'npm Docs — Getting Started', url: 'https://docs.npmjs.com/getting-started', type: 'docs' },
    { title: 'What is npm? — freeCodeCamp', url: 'https://www.freecodecamp.org/news/what-is-npm/', type: 'article' },
  ],
  'cp-collab': [
    { title: 'GitHub Flow Guide', url: 'https://docs.github.com/en/get-started/quickstart/github-flow', type: 'docs' },
    { title: 'First Contributions — GitHub', url: 'https://github.com/firstcontributions/first-contributions', type: 'course' },
  ],
  'cp-external': [
    { title: 'Awesome npm Packages', url: 'https://github.com/sindresorhus/awesome-nodejs', type: 'article' },
  ],

  // ─── Frontend Frameworks & Tools ───
  react: [
    { title: 'React Official Docs', url: 'https://react.dev/learn', type: 'docs' },
    { title: 'Full React Course — freeCodeCamp', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', type: 'video' },
    { title: 'React Tutorial — W3Schools', url: 'https://www.w3schools.com/react/', type: 'course' },
  ],
  tailwind: [
    { title: 'Tailwind CSS Docs', url: 'https://tailwindcss.com/docs', type: 'docs' },
    { title: 'Tailwind CSS Crash Course', url: 'https://www.youtube.com/watch?v=UBOj6rqRUME', type: 'video' },
  ],
  github: [
    { title: 'GitHub Docs — Hello World', url: 'https://docs.github.com/en/get-started/quickstart/hello-world', type: 'docs' },
    { title: 'Git & GitHub for Beginners — freeCodeCamp', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk', type: 'video' },
  ],
  git: [
    { title: 'Pro Git Book (free)', url: 'https://git-scm.com/book/en/v2', type: 'docs' },
    { title: 'Learn Git Branching (interactive)', url: 'https://learngitbranching.js.org/', type: 'course' },
    { title: 'Git Cheat Sheet — GitHub', url: 'https://education.github.com/git-cheat-sheet-education.pdf', type: 'article' },
  ],
  'cp-frontend': [
    { title: 'Build a React Todo App', url: 'https://www.youtube.com/watch?v=T8mqZZ0r-RA', type: 'video' },
    { title: 'Frontend Project Ideas — roadmap.sh', url: 'https://roadmap.sh/frontend/projects', type: 'article' },
  ],

  // ─── Backend ───
  nodejs: [
    { title: 'Node.js Official Docs', url: 'https://nodejs.org/en/docs/guides', type: 'docs' },
    { title: 'Node.js Crash Course — Traversy Media', url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4', type: 'video' },
    { title: 'The Odin Project — NodeJS', url: 'https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs', type: 'course' },
  ],
  'cp-cli': [
    { title: 'Build a CLI with Node.js', url: 'https://www.youtube.com/watch?v=_oHByo8tiEY', type: 'video' },
    { title: 'CLI Project Ideas — roadmap.sh', url: 'https://roadmap.sh/projects/task-tracker', type: 'article' },
  ],
  postgresql: [
    { title: 'PostgreSQL Official Tutorial', url: 'https://www.postgresql.org/docs/current/tutorial.html', type: 'docs' },
    { title: 'PostgreSQL Crash Course — Traversy Media', url: 'https://www.youtube.com/watch?v=qw--VYLpxG4', type: 'video' },
    { title: 'SQLBolt — Interactive SQL', url: 'https://sqlbolt.com/', type: 'course' },
  ],
  'cp-crud': [
    { title: 'Build a CRUD REST API with Node + PostgreSQL', url: 'https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/', type: 'article' },
  ],
  redis: [
    { title: 'Redis Official Docs', url: 'https://redis.io/docs/', type: 'docs' },
    { title: 'Redis Crash Course — Traversy Media', url: 'https://www.youtube.com/watch?v=jgpVdJB2sKQ', type: 'video' },
  ],
  jwt: [
    { title: 'JWT.io — Introduction', url: 'https://jwt.io/introduction', type: 'docs' },
    { title: 'Node.js JWT Authentication Tutorial', url: 'https://www.youtube.com/watch?v=mbsmsi7l3r4', type: 'video' },
  ],
  restful: [
    { title: 'RESTful API Design — Best Practices', url: 'https://restfulapi.net/', type: 'docs' },
    { title: 'Build a REST API with Node.js — freeCodeCamp', url: 'https://www.youtube.com/watch?v=pKd0Rpw7O48', type: 'video' },
  ],
  'cp-complete': [
    { title: 'Full Stack Project Ideas — roadmap.sh', url: 'https://roadmap.sh/projects', type: 'article' },
  ],

  // ─── DevOps / AWS ───
  route53: [
    { title: 'AWS Route 53 Docs', url: 'https://docs.aws.amazon.com/Route53/', type: 'docs' },
  ],
  ses: [
    { title: 'AWS SES Docs', url: 'https://docs.aws.amazon.com/ses/', type: 'docs' },
  ],
  ec2: [
    { title: 'AWS EC2 Getting Started', url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html', type: 'docs' },
    { title: 'EC2 Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=iHX-jtKIVNA', type: 'video' },
  ],
  vpc: [
    { title: 'AWS VPC Docs', url: 'https://docs.aws.amazon.com/vpc/', type: 'docs' },
  ],
  s3: [
    { title: 'AWS S3 Getting Started', url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html', type: 'docs' },
  ],

  // ─── Other paths shared nodes ───
  dom: [
    { title: 'MDN — DOM Introduction', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction', type: 'docs' },
  ],
  es6: [
    { title: 'ES6 Features Overview', url: 'https://es6-features.org/', type: 'article' },
    { title: 'JavaScript ES6 — freeCodeCamp', url: 'https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/', type: 'article' },
  ],
  'state-mgmt': [
    { title: 'Redux Official Tutorial', url: 'https://redux.js.org/tutorials/fundamentals/part-1-overview', type: 'docs' },
    { title: 'Zustand — Lightweight State', url: 'https://github.com/pmndrs/zustand', type: 'docs' },
  ],
  routing: [
    { title: 'React Router Docs', url: 'https://reactrouter.com/en/main/start/tutorial', type: 'docs' },
  ],
  testing: [
    { title: 'Jest Docs — Getting Started', url: 'https://jestjs.io/docs/getting-started', type: 'docs' },
    { title: 'React Testing Library', url: 'https://testing-library.com/docs/react-testing-library/intro/', type: 'docs' },
  ],
  deploy: [
    { title: 'Vercel — Deploy in Seconds', url: 'https://vercel.com/docs', type: 'docs' },
    { title: 'Netlify Docs', url: 'https://docs.netlify.com/', type: 'docs' },
  ],

  // ─── Backend path ───
  lang: [
    { title: 'Choosing Your First Language — roadmap.sh', url: 'https://roadmap.sh/backend', type: 'article' },
  ],
  http: [
    { title: 'MDN — HTTP Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview', type: 'docs' },
  ],
  framework: [
    { title: 'Express.js Guide', url: 'https://expressjs.com/en/starter/installing.html', type: 'docs' },
  ],
  database: [
    { title: 'Database Fundamentals — roadmap.sh', url: 'https://roadmap.sh/sql', type: 'article' },
  ],
  auth: [
    { title: 'OWASP Authentication Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html', type: 'docs' },
  ],
  orm: [
    { title: 'Prisma — Getting Started', url: 'https://www.prisma.io/docs/getting-started', type: 'docs' },
  ],
  caching: [
    { title: 'Redis Docs', url: 'https://redis.io/docs/', type: 'docs' },
  ],
  messaging: [
    { title: 'RabbitMQ Tutorials', url: 'https://www.rabbitmq.com/getstarted.html', type: 'docs' },
  ],

  // ─── DevOps path ───
  linux: [
    { title: 'Linux Command Line Basics', url: 'https://ubuntu.com/tutorials/command-line-for-beginners', type: 'course' },
  ],
  networking: [
    { title: 'Computer Networking Course — freeCodeCamp', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw', type: 'video' },
  ],
  docker: [
    { title: 'Docker — Getting Started', url: 'https://docs.docker.com/get-started/', type: 'docs' },
  ],
  cicd: [
    { title: 'GitHub Actions Docs', url: 'https://docs.github.com/en/actions', type: 'docs' },
  ],
  k8s: [
    { title: 'Kubernetes Docs — Tutorials', url: 'https://kubernetes.io/docs/tutorials/', type: 'docs' },
  ],
  iac: [
    { title: 'Terraform Getting Started', url: 'https://developer.hashicorp.com/terraform/tutorials', type: 'course' },
  ],
  monitoring: [
    { title: 'Prometheus + Grafana Tutorial', url: 'https://prometheus.io/docs/tutorials/getting_started/', type: 'docs' },
  ],
  cloud: [
    { title: 'AWS Free Tier', url: 'https://aws.amazon.com/free/', type: 'docs' },
  ],
  ansible: [
    { title: 'Ansible Documentation', url: 'https://docs.ansible.com/', type: 'docs' },
    { title: 'Ansible Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=G7n3i4r1_L4', type: 'video' },
  ],

  // ─── Data Science ───
  python: [
    { title: 'Python Official Tutorial', url: 'https://docs.python.org/3/tutorial/', type: 'docs' },
  ],
  math: [
    { title: 'Khan Academy — Statistics & Probability', url: 'https://www.khanacademy.org/math/statistics-probability', type: 'course' },
  ],
  pandas: [
    { title: 'Pandas Docs — 10 Minutes to Pandas', url: 'https://pandas.pydata.org/docs/user_guide/10min.html', type: 'docs' },
  ],
  viz: [
    { title: 'Matplotlib Tutorials', url: 'https://matplotlib.org/stable/tutorials/index.html', type: 'docs' },
  ],
  ml: [
    { title: 'Scikit-learn Tutorials', url: 'https://scikit-learn.org/stable/tutorial/', type: 'docs' },
  ],
  'feature-eng': [
    { title: 'Feature Engineering — Kaggle', url: 'https://www.kaggle.com/learn/feature-engineering', type: 'course' },
  ],
  dl: [
    { title: 'Deep Learning Specialization — Coursera', url: 'https://www.coursera.org/specializations/deep-learning', type: 'course' },
  ],
  mlops: [
    { title: 'MLOps Guide — neptune.ai', url: 'https://neptune.ai/blog/mlops', type: 'article' },
  ],

  // ─── Skill paths shared ───
  jsx: [
    { title: 'React Docs — Writing Markup with JSX', url: 'https://react.dev/learn/writing-markup-with-jsx', type: 'docs' },
  ],
  components: [
    { title: 'React Docs — Your First Component', url: 'https://react.dev/learn/your-first-component', type: 'docs' },
  ],
  props: [
    { title: 'React Docs — Passing Props', url: 'https://react.dev/learn/passing-props-to-a-component', type: 'docs' },
  ],
  state: [
    { title: 'React Docs — State', url: 'https://react.dev/learn/state-a-components-memory', type: 'docs' },
  ],
  hooks: [
    { title: 'React Docs — Hooks', url: 'https://react.dev/reference/react', type: 'docs' },
  ],
  context: [
    { title: 'React Docs — Context', url: 'https://react.dev/learn/passing-data-deeply-with-context', type: 'docs' },
  ],
  effects: [
    { title: 'React Docs — Synchronizing with Effects', url: 'https://react.dev/learn/synchronizing-with-effects', type: 'docs' },
  ],
  patterns: [
    { title: 'React Patterns', url: 'https://www.patterns.dev/react', type: 'article' },
  ],
  syntax: [
    { title: 'JavaScript.info — Fundamentals', url: 'https://javascript.info/first-steps', type: 'course' },
  ],
  types: [
    { title: 'MDN — Data Types', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures', type: 'docs' },
  ],
  functions: [
    { title: 'MDN — Functions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions', type: 'docs' },
  ],
  events: [
    { title: 'MDN — Events', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events', type: 'docs' },
  ],
  async: [
    { title: 'JavaScript.info — Promises', url: 'https://javascript.info/promise-basics', type: 'course' },
  ],
  modules: [
    { title: 'MDN — JavaScript Modules', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules', type: 'docs' },
  ],
  basics: [
    { title: 'Getting Started Guide', url: 'https://roadmap.sh/', type: 'docs' },
  ],
  interfaces: [
    { title: 'TypeScript Handbook — Interfaces', url: 'https://www.typescriptlang.org/docs/handbook/interfaces.html', type: 'docs' },
  ],
  generics: [
    { title: 'TypeScript Handbook — Generics', url: 'https://www.typescriptlang.org/docs/handbook/2/generics.html', type: 'docs' },
  ],
  enums: [
    { title: 'TypeScript Handbook — Enums', url: 'https://www.typescriptlang.org/docs/handbook/enums.html', type: 'docs' },
  ],
  advanced: [
    { title: 'TypeScript — Advanced Types', url: 'https://www.typescriptlang.org/docs/handbook/2/types-from-types.html', type: 'docs' },
  ],
  config: [
    { title: 'TSConfig Reference', url: 'https://www.typescriptlang.org/tsconfig', type: 'docs' },
  ],
  kotlin: [
    { title: 'Kotlin Bootcamp for Programmers', url: 'https://developer.android.com/courses/kotlin-bootcamp/overview', type: 'course' },
    { title: 'Kotlin Docs — Basic Syntax', url: 'https://kotlinlang.org/docs/basic-syntax.html', type: 'docs' }
  ],
  'android-studio': [
    { title: 'Build your first Android app', url: 'https://developer.android.com/training/basics/firstapp', type: 'docs' },
    { title: 'Gradle for Android — Overview', url: 'https://developer.android.com/studio/build', type: 'docs' }
  ],
  'app-components': [
    { title: 'Understand the Activity Lifecycle', url: 'https://developer.android.com/guide/components/activities/activity-lifecycle', type: 'article' },
    { title: 'Intents and Intent Filters', url: 'https://developer.android.com/guide/components/intents-filters', type: 'docs' }
  ],
  'android-ui': [
    { title: 'Jetpack Compose Basics', url: 'https://developer.android.com/courses/pathways/compose', type: 'course' },
    { title: 'RecyclerView in Android', url: 'https://developer.android.com/guide/topics/ui/layout/recyclerview', type: 'docs' }
  ],
  'android-arch': [
    { title: 'Guide to app architecture', url: 'https://developer.android.com/topic/architecture', type: 'docs' },
    { title: 'Dependency Injection with Hilt', url: 'https://developer.android.com/training/dependency-injection/hilt-android', type: 'article' }
  ],
  'android-storage': [
    { title: 'Save data in a local database using Room', url: 'https://developer.android.com/training/data-storage/room', type: 'docs' },
    { title: 'DataStore overview', url: 'https://developer.android.com/topic/libraries/architecture/datastore', type: 'docs' }
  ],
  'android-async': [
    { title: 'Kotlin coroutines on Android', url: 'https://developer.android.com/kotlin/coroutines', type: 'docs' },
    { title: 'StateFlow and SharedFlow', url: 'https://developer.android.com/kotlin/flow/stateflow-and-sharedflow', type: 'article' }
  ],
  'android-network': [
    { title: 'Retrofit Official Documentation', url: 'https://square.github.io/retrofit/', type: 'docs' },
    { title: 'Connect to the internet with Retrofit', url: 'https://developer.android.com/courses/pathways/android-basics-kotlin-unit-4-pathway-2', type: 'course' }
  ],
  'android-firebase': [
    { title: 'Add Firebase to your Android project', url: 'https://firebase.google.com/docs/android/setup', type: 'docs' }
  ],
  'android-testing': [
    { title: 'Test apps on Android', url: 'https://developer.android.com/training/testing', type: 'docs' },
    { title: 'Espresso UI testing', url: 'https://developer.android.com/training/testing/espresso', type: 'article' }
  ],
  'android-dist': [
    { title: 'Publish your app', url: 'https://developer.android.com/studio/publish', type: 'docs' }
  ],
  // Thêm vào object RESOURCES
  'cs-it-fundamentals': [
    { title: 'Linux Journey (Học Linux cơ bản)', url: 'https://linuxjourney.com/', type: 'course' },
    { title: 'Windows OS Basics', url: 'https://learn.microsoft.com/en-us/windows/win32/sysinfo/operating-system-version', type: 'docs' }
  ],
  'cs-networking': [
    { title: 'Computer Networking - freeCodeCamp', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw', type: 'video' },
    { title: 'OSI Model Explained', url: 'https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/', type: 'article' }
  ],
  'cs-scripting': [
    { title: 'Python for Cybersecurity', url: 'https://www.freecodecamp.org/news/python-for-cybersecurity/', type: 'article' },
    { title: 'Bash Scripting Tutorial', url: 'https://linuxconfig.org/bash-scripting-tutorial-for-beginners', type: 'docs' }
  ],
  'cs-security-core': [
    { title: 'CIA Triad - Nguyên tắc bảo mật lõi', url: 'https://www.fortinet.com/resources/cyberglossary/cia-triad', type: 'article' },
    { title: 'Cryptography Basics', url: 'https://www.khanacademy.org/computing/computer-science/cryptography', type: 'course' }
  ],
  'cs-network-sec': [
    { title: 'What is a Firewall?', url: 'https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html', type: 'article' },
    { title: 'IDS vs IPS Explained', url: 'https://www.varonis.com/blog/ids-vs-ips', type: 'article' }
  ],
  'cs-app-sec': [
    { title: 'OWASP Top 10 Web Vulnerabilities', url: 'https://owasp.org/www-project-top-ten/', type: 'docs' },
    { title: 'Web Security Academy - PortSwigger', url: 'https://portswigger.net/web-security', type: 'course' }
  ],
  'cs-soc-ir': [
    { title: 'Incident Response Lifecycle', url: 'https://www.crowdstrike.com/cybersecurity-101/incident-response/', type: 'article' },
    { title: 'What is SIEM?', url: 'https://www.ibm.com/topics/siem', type: 'article' }
  ],
  'cs-cloud-sec': [
    { title: 'AWS Security Fundamentals', url: 'https://aws.amazon.com/security/', type: 'docs' },
    { title: 'What is Cloud Security?', url: 'https://www.cloudflare.com/learning/cloud/what-is-cloud-security/', type: 'article' }
  ],
  'cs-ctf-certs': [
    { title: 'TryHackMe - Beginner Pathways', url: 'https://tryhackme.com/', type: 'course' },
    { title: 'CompTIA Security+ Prep', url: 'https://www.comptia.org/certifications/security', type: 'docs' }
  ],
}

/** Get resources for a node ID. Returns [] if none found. */
export const getNodeResources = (nodeId) => {
  return RESOURCES[nodeId] || []
}

/** Icon per resource type */
export const RESOURCE_TYPE_ICONS = {
  article: '📄',
  video: '🎬',
  course: '🎓',
  docs: '📖'
}
