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
    { title: 'HTML Roadmap', url: 'https://roadmap.sh/html', type: 'docs' },
    { title: 'HTML Guide - Roadmap.sh', url: 'https://roadmap.sh/guides/html', type: 'docs' },
  ],
  css: [
    { title: 'MDN — CSS First Steps', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps', type: 'docs' },
    { title: 'CSS-Tricks — Complete Guide to Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', type: 'article' },
    { title: 'CSS Crash Course — Traversy Media', url: 'https://www.youtube.com/watch?v=yfoY53QXEnI', type: 'video' },
    { title: 'Learn CSS — web.dev', url: 'https://web.dev/learn/css', type: 'course' },
    { title: 'CSS Roadmap', url: 'https://roadmap.sh/css', type: 'docs' },
    { title: 'CSS Guide - Roadmap.sh', url: 'https://roadmap.sh/guides/css-guide', type: 'docs' },
    { title: 'Responsive Design - Roadmap.sh', url: 'https://roadmap.sh/guides/responsive-design', type: 'docs' },
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
    { title: 'JavaScript Roadmap', url: 'https://roadmap.sh/javascript', type: 'docs' },
    { title: 'JavaScript Basics Guide', url: 'https://roadmap.sh/guides/javascript', type: 'docs' },
    { title: 'JavaScript Best Practices', url: 'https://roadmap.sh/guides/javascript-best-practices', type: 'docs' },
  ],

  // ─── Checkpoints ───
  'cp-static': [
    { title: 'Build a Portfolio Website — freeCodeCamp', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', type: 'course' },
    { title: 'Frontend Mentor Challenges', url: 'https://www.frontendmentor.io/', type: 'course' },
    { title: 'Building Your First Website', url: 'https://roadmap.sh/guides/how-does-internet-work', type: 'docs' },
    { title: 'Frontend Projects', url: 'https://roadmap.sh/frontend/projects', type: 'docs' },
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
    { title: 'React Roadmap', url: 'https://roadmap.sh/react', type: 'docs' },
    { title: 'React Guide - Roadmap.sh', url: 'https://roadmap.sh/guides/react', type: 'docs' },
    { title: 'React Best Practices', url: 'https://roadmap.sh/guides/react-best-practices', type: 'docs' },
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
    { title: 'DOM API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/DOM', type: 'docs' },
    { title: 'DOM Manipulation', url: 'https://roadmap.sh/guides/dom-manipulation', type: 'docs' },
    { title: 'JavaScript Events', url: 'https://developer.mozilla.org/en-US/docs/Web/Events', type: 'docs' },
  ],
  es6: [
    { title: 'ES6 Features Overview', url: 'https://es6-features.org/', type: 'article' },
    { title: 'JavaScript ES6 — freeCodeCamp', url: 'https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/', type: 'article' },
    { title: 'Modern JavaScript (ES6+)', url: 'https://roadmap.sh/guides/javascript-es6', type: 'docs' },
    { title: 'Arrow Functions & Classes', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions', type: 'docs' },
    { title: 'Async/Await & Promises', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises', type: 'docs' },
  ],
  'state-mgmt': [
    { title: 'Redux Official Tutorial', url: 'https://redux.js.org/tutorials/fundamentals/part-1-overview', type: 'docs' },
    { title: 'Zustand — Lightweight State', url: 'https://github.com/pmndrs/zustand', type: 'docs' },
    { title: 'State Management Guide', url: 'https://roadmap.sh/guides/state-management', type: 'docs' },
    { title: 'Context API vs Redux', url: 'https://roadmap.sh/guides/redux-vs-context-api', type: 'docs' },
  ],
  routing: [
    { title: 'React Router Docs', url: 'https://reactrouter.com/en/main/start/tutorial', type: 'docs' },
    { title: 'React Router Guide', url: 'https://roadmap.sh/guides/react-router', type: 'docs' },
    { title: 'Client-side Routing', url: 'https://developer.mozilla.org/en-US/docs/Glossary/SPA', type: 'docs' },
  ],
  testing: [
    { title: 'Jest Docs — Getting Started', url: 'https://jestjs.io/docs/getting-started', type: 'docs' },
    { title: 'React Testing Library', url: 'https://testing-library.com/docs/react-testing-library/intro/', type: 'docs' },
    { title: 'Frontend Testing Guide', url: 'https://roadmap.sh/guides/frontend-testing', type: 'docs' },
    { title: 'Playwright for E2E', url: 'https://playwright.dev', type: 'docs' },
  ],
  deploy: [
    { title: 'Vercel — Deploy in Seconds', url: 'https://vercel.com/docs', type: 'docs' },
    { title: 'Netlify Docs', url: 'https://docs.netlify.com/', type: 'docs' },
    { title: 'Build Tools Guide', url: 'https://roadmap.sh/guides/webpack', type: 'docs' },
    { title: 'Vite Documentation', url: 'https://vitejs.dev', type: 'docs' },
    { title: 'Deployment Guide', url: 'https://roadmap.sh/guides/deployment', type: 'docs' },
  ],

  // ─── Additional Frontend Skills ───
  sass: [
    { title: 'Sass Official Docs', url: 'https://sass-lang.com/documentation', type: 'docs' },
    { title: 'Sass Tutorial — W3Schools', url: 'https://www.w3schools.com/sass/', type: 'course' },
    { title: 'Sass Crash Course — YouTube', url: 'https://www.youtube.com/watch?v=_a5j7M6GENERALM7Y', type: 'video' },
    { title: 'SCSS Guide - Roadmap.sh', url: 'https://roadmap.sh/guides/scss', type: 'docs' },
  ],
  git: [
    { title: 'Pro Git Book (free)', url: 'https://git-scm.com/book/en/v2', type: 'docs' },
    { title: 'Learn Git Branching (interactive)', url: 'https://learngitbranching.js.org/', type: 'course' },
    { title: 'Git Tutorial for Beginners — freeCodeCamp', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk', type: 'video' },
    { title: 'Git Cheat Sheet — GitHub', url: 'https://education.github.com/git-cheat-sheet-education.pdf', type: 'article' },
    { title: 'Version Control with Git - Roadmap.sh', url: 'https://roadmap.sh/guides/git', type: 'docs' },
  ],
  npm: [
    { title: 'npm Docs — Getting Started', url: 'https://docs.npmjs.com/getting-started', type: 'docs' },
    { title: 'What is npm? — freeCodeCamp', url: 'https://www.freecodecamp.org/news/what-is-npm/', type: 'article' },
    { title: 'npm vs yarn — Comparison', url: 'https://www.youtube.com/watch?v=gNMhQP8K2F0', type: 'video' },
    { title: 'Package Managers Guide - Roadmap.sh', url: 'https://roadmap.sh/guides/package-managers', type: 'docs' },
  ],
  typescript: [
    { title: 'TypeScript Official Docs', url: 'https://www.typescriptlang.org/docs/', type: 'docs' },
    { title: 'TypeScript Course for Beginners', url: 'https://www.youtube.com/watch?v=BwuLSPajF40', type: 'video' },
    { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/', type: 'course' },
    { title: 'TypeScript Best Practices', url: 'https://roadmap.sh/guides/typescript', type: 'docs' },
  ],
  bootstrap: [
    { title: 'Bootstrap Official Docs', url: 'https://getbootstrap.com/docs/', type: 'docs' },
    { title: 'Bootstrap Tutorial — W3Schools', url: 'https://www.w3schools.com/bootstrap5/', type: 'course' },
    { title: 'Bootstrap Crash Course — YouTube', url: 'https://www.youtube.com/watch?v=4sosXZsdy-s', type: 'video' },
  ],
  'rest-api': [
    { title: 'RESTful API Design — Best Practices', url: 'https://restfulapi.net/', type: 'docs' },
    { title: 'Fetch API — MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API', type: 'docs' },
    { title: 'Working with APIs in JavaScript', url: 'https://www.youtube.com/watch?v=cuEtnrL2-1E', type: 'video' },
    { title: 'API Integration Guide - Roadmap.sh', url: 'https://roadmap.sh/guides/rest-api', type: 'docs' },
  ],
  webpack: [
    { title: 'Webpack Official Docs', url: 'https://webpack.js.org/concepts/', type: 'docs' },
    { title: 'Webpack Crash Course — freeCodeCamp', url: 'https://www.youtube.com/watch?v=3On5Z85jD0o', type: 'video' },
    { title: 'Build Tools Guide - Roadmap.sh', url: 'https://roadmap.sh/guides/webpack', type: 'docs' },
  ],
  graphql: [
    { title: 'GraphQL Official Docs', url: 'https://graphql.org/learn/', type: 'docs' },
    { title: 'Apollo Client Tutorial', url: 'https://www.apollographql.com/docs/react/get-started/', type: 'course' },
    { title: 'GraphQL Crash Course — YouTube', url: 'https://www.youtube.com/watch?v=7giZGFDGnMY', type: 'video' },
  ],
  'web-security': [
    { title: 'OWASP Top 10 - Web Security', url: 'https://owasp.org/www-project-top-ten/', type: 'docs' },
    { title: 'Web Security Basics — MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/Security', type: 'docs' },
    { title: 'Frontend Security Best Practices', url: 'https://www.youtube.com/watch?v=iLQp0XIPZzE', type: 'video' },
  ],
  performance: [
    { title: 'Web Vitals Guide', url: 'https://web.dev/vitals/', type: 'docs' },
    { title: 'Performance Optimization — MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance', type: 'docs' },
    { title: 'Frontend Performance Optimization', url: 'https://www.youtube.com/watch?v=5fLW5Q5ODiE', type: 'video' },
  ],
  pwa: [
    { title: 'Progressive Web Apps — MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps', type: 'docs' },
    { title: 'PWA Tutorial — Google Developers', url: 'https://developers.google.com/web/progressive-web-apps', type: 'course' },
    { title: 'PWA Crash Course — YouTube', url: 'https://www.youtube.com/watch?v=4XT23X0Zjak', type: 'video' },
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
    // ─── Gameplay Programmer ───
'gp-client': [
  { title: 'Client Side Architecture', url: 'https://gabrielgambetta.com/client-server-game-architecture.html', type: 'docs' },
],

'gp-math': [
  { title: 'Game Mathematics', url: 'https://gamemath.com/book/intro.html', type: 'doc' },
],

'gp-phy': [
  { title: 'Game Physics', url: 'https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection', type: 'docs' },
  { title: 'Master Game Physics', url: 'https://www.udemy.com/course/gamephysics/', type: 'course' },
],

'gp-engine': [
  { title: 'Unity Learn', url: 'https://learn.unity.com/', type: 'course' },
  { title: 'Unreal Engine Documentation', url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine', type: 'docs' },
  { title: 'Choose a Game Engine', url: 'https://www.youtube.com/watch?v=aMgB018o71U', type: 'video' },
],

'gp-cpp': [
  { title: 'Learn C++ for Game Development', url: 'https://learn.microsoft.com/en-us/cpp/overview/game-development-cpp?view=msvc-170', type: 'docs' },
  { title: 'Learn C++', url: 'https://www.udemy.com/course/unreal-engine-5-code/?utm_campaign=Search_Keyword_Beta_Prof_la.VI_cc.VN&utm_source=google&utm_medium=paid-search&portfolio=Vietnam&utm_audience=mx&utm_tactic=nb&utm_term=l%E1%BA%ADp+tr%C3%ACnh+game&utm_content=g&funnel=&test=&gad_source=1&gad_campaignid=23194768998&gbraid=0AAAAADROdO0UZvOXqWQ4dg095mz4M3cha&gclid=Cj0KCQjwz9_QBhD_ARIsADnSCfDU8wPNriV5MhtFCM9g0ptfa0ipfMGhdST7SrVql1g5HsfPuG0TO5oaAtrxEALw_wcB&couponCode=PMNVD2525', type: 'course' },
],

'gp-gra': [
  { title: 'Introduce to computer Graphics', url: 'https://open.umn.edu/opentextbooks/textbooks/420', type: 'article' },
  { title: 'how Game Graphics Work', url: 'https://www.youtube.com/watch?v=C8YtdC8mxTU', type: 'video' },
  { title: 'Shader', url: 'https://gamedesigning.org/learn/shaders/', type: 'article' },
  { title: 'Texture', url: 'https://docs.unity3d.com/Manual/Textures.html', type: 'article' },
  { title: 'Map', url: 'https://www.gamedeveloper.com/design/designing-maps-that-complement-game-mechanics', type: 'article' },
],

'gp-grap': [
  { title: 'OpenGL Tutorial', url: 'https://www.youtube.com/playlist?list=PLPaoO-vpZnumdcb4tZc4x5Q-v7CkrQ6M-', type: 'video' },
  { title: 'OpenGL Documentation', url: 'https://www.opengl.org/', type: 'docs' }, 
],

'gp-ai': [
  { title: 'machine learning', url: 'https://mitsloan.mit.edu/ideas-made-to-matter/machine-learning-explained', type: 'article' },
  { title: 'How 1 Game Developer With AI ', url: 'https://www.youtube.com/watch?v=cbDyGYRkz54', type: 'video' },
],

'gp-ren': [
  { title: 'Advanced Rendering', url: 'https://www.advances.realtimerendering.com/', type: 'article' },
  { title: 'Physically-Based Rendering', url: 'https://dev.epicgames.com/community/learning/tutorials/Yx3q/unreal-engine-physically-based-rendering-pbr-explained-in-depth', type: 'article' },
],
'gp-chk': [
  { title: 'Open source games', url: 'https://github.com/bobeff/open-source-games?fbclid=IwY2xjawSGH6tleHRuA2FlbQIxMABicmlkETFPdTJrTUdqZk5mSlpJMnpxc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHgZHdlW1Nca5CvcgDRbXLJIh0mS_Z7n_RHQaTRTk4nZqg5or9t513lRQUYvK_aem_FhCYP9P-b1dpboHkJkVvQQ', type: 'source' },
],
// ─── Game Designer ───
'gd-gamedesign': [
  { title: 'Introduction to Game Design', url: 'https://www.coursera.org/learn/game-design', type: 'course' },
  { title: 'Game Design Overview', url: 'https://www.youtube.com/watch?v=4FocGpxxOkQ', type: 'video' },
],

'gd-mechanics': [
  { title: 'Game Mechanics Explained', url: 'https://gamedevelopment.tutsplus.com/articles/game-design-concepts-understanding-game-mechanics--gamedev-1308', type: 'article' },
  { title: 'Top 10 Game Mechanics Every Designer Should Know', url: 'https://www.youtube.com/watch?v=_vwr8Uwq8Fg', type: 'video' },
],

'gd-leveldesign': [
  { title: 'Level Design Basics', url: 'https://book.leveldesignbook.com/', type: 'docs' },
  { title: 'Level Design Video Tutorial', url: 'https://www.youtube.com/watch?v=jRCvoWPTCvI', type: 'video' },
],

'gd-storytelling': [
  { title: 'Narrative Design for Games', url: 'https://gamedesignskills.com/game-design/narrative-design/', type: 'article' },
  { title: 'VIDEO GAME VÀ NGHỆ THUẬT KỂ CHUYỆN ĐỘC ĐÁO', url: 'https://www.youtube.com/watch?v=GrjjE3Q6rgo', type: 'video' },
],

'gd-gdd': [
  { title: 'Game Design Document Template', url: 'https://www.nuclino.com/articles/game-design-document-template', type: 'docs' },
],

'gd-balancing': [
  { title: 'Game Balance Concepts', url: 'https://www.gamedeveloper.com/design/design-101-balancing-games', type: 'article' },
  { title: 'Game Balance', url: 'https://gamedesignskills.com/game-design/game-balance/', type: 'docs' },
],

'gd-ux': [
  { title: 'UX Design for Games', url: 'https://itviec.com/blog/ui-ux-game/', type: 'article' },
  { title: 'UX tutorial', url: 'https://www.reddit.com/r/PBBG/comments/1stsbwf/new_player_experiencetutorial_old_school/?tl=vi', type: 'video' },
],

'gd-prototype': [
  { title: 'Unity Prototype Tutorial', url: 'https://learn.unity.com/project/creator-kit-beginner-code', type: 'course' },
  { title: 'Game Prototype Development', url: 'https://www.youtube.com/watch?v=wwZENsy9X1g', type: 'video' },
],
  // ─── Skill paths shared ───
  jsx: [
    { title: 'React Docs — Writing Markup with JSX', url: 'https://react.dev/learn/writing-markup-with-jsx', type: 'docs' },
    { title: 'JSX Guide - React.dev', url: 'https://react.dev/learn/writing-markup-with-jsx', type: 'docs' },
    { title: 'JSX Deep Dive', url: 'https://roadmap.sh/guides/jsx', type: 'docs' },
  ],
  components: [
    { title: 'React Docs — Your First Component', url: 'https://react.dev/learn/your-first-component', type: 'docs' },
    { title: 'React Components', url: 'https://react.dev/learn/your-first-component', type: 'docs' },
    { title: 'Functional Components Guide', url: 'https://roadmap.sh/guides/react-components', type: 'docs' },
  ],
  props: [
    { title: 'React Docs — Passing Props', url: 'https://react.dev/learn/passing-props-to-a-component', type: 'docs' },
    { title: 'React Props', url: 'https://react.dev/learn/passing-props-to-a-component', type: 'docs' },
    { title: 'Props Best Practices', url: 'https://roadmap.sh/guides/react-props', type: 'docs' },
  ],
  state: [
    { title: 'React Docs — State', url: 'https://react.dev/learn/state-a-components-memory', type: 'docs' },
    { title: 'React State', url: 'https://react.dev/learn/state-a-components-memory', type: 'docs' },
    { title: 'Managing State', url: 'https://react.dev/learn/managing-state', type: 'docs' },
  ],
  hooks: [
    { title: 'React Docs — Hooks', url: 'https://react.dev/reference/react', type: 'docs' },
    { title: 'React Hooks', url: 'https://react.dev/reference/react/hooks', type: 'docs' },
    { title: 'Hooks Guide - Roadmap.sh', url: 'https://roadmap.sh/guides/react-hooks', type: 'docs' },
    { title: 'useEffect Explained', url: 'https://react.dev/reference/react/useEffect', type: 'docs' },
  ],
  context: [
    { title: 'React Docs — Context', url: 'https://react.dev/learn/passing-data-deeply-with-context', type: 'docs' },
    { title: 'Context API', url: 'https://react.dev/learn/passing-data-deeply-with-context', type: 'docs' },
    { title: 'When to Use Context', url: 'https://react.dev/reference/react/useContext', type: 'docs' },
  ],
  effects: [
    { title: 'React Docs — Synchronizing with Effects', url: 'https://react.dev/learn/synchronizing-with-effects', type: 'docs' },
    { title: 'Side Effects & useEffect', url: 'https://react.dev/learn/synchronizing-with-effects', type: 'docs' },
    { title: 'Effect Cleanup', url: 'https://react.dev/learn/lifecycle-of-reactive-effect', type: 'docs' },
  ],
  patterns: [
    { title: 'React Patterns', url: 'https://www.patterns.dev/react', type: 'article' },
    { title: 'Advanced React Patterns', url: 'https://roadmap.sh/guides/advanced-react-patterns', type: 'docs' },
    { title: 'Compound Components', url: 'https://react.dev/learn', type: 'docs' },
    { title: 'Render Props & HOCs', url: 'https://react.dev/learn/render-props', type: 'docs' },
  ],
  syntax: [
    { title: 'JavaScript.info — Fundamentals', url: 'https://javascript.info/first-steps', type: 'course' },
    { title: 'JavaScript Basics', url: 'https://react.dev/learn/javascript', type: 'docs' },
    { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', type: 'docs' },
  ],
  types: [
    { title: 'MDN — Data Types', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures', type: 'docs' },
    { title: 'JavaScript Data Types', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures', type: 'docs' },
    { title: 'Type Coercion', url: 'https://roadmap.sh/guides/javascript-type-coercion', type: 'docs' },
  ],
  functions: [
    { title: 'MDN — Functions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions', type: 'docs' },
    { title: 'Functions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions', type: 'docs' },
    { title: 'Scope & Closures', url: 'https://roadmap.sh/guides/javascript-closures', type: 'docs' },
    { title: 'This & Binding', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this', type: 'docs' },
  ],
  events: [
    { title: 'MDN — Events', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events', type: 'docs' },
    { title: 'Event Handling', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Event', type: 'docs' },
    { title: 'Event Delegation', url: 'https://roadmap.sh/guides/event-delegation', type: 'docs' },
    { title: 'Event Loop', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop', type: 'docs' },
  ],
  async: [
    { title: 'JavaScript.info — Promises', url: 'https://javascript.info/promise-basics', type: 'course' },
    { title: 'Promises', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise', type: 'docs' },
    { title: 'Async/Await', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function', type: 'docs' },
    { title: 'Async Programming Guide', url: 'https://roadmap.sh/guides/javascript-promises-async-await', type: 'docs' },
  ],
  modules: [
    { title: 'MDN — JavaScript Modules', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules', type: 'docs' },
    { title: 'ES Modules', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules', type: 'docs' },
    { title: 'Module Bundlers', url: 'https://roadmap.sh/guides/module-bundlers', type: 'docs' },
    { title: 'npm & Package Management', url: 'https://roadmap.sh/guides/npm', type: 'docs' },
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
