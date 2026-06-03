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
  'testing-backend': [
    { title: 'JUnit 5 User Guide', url: 'https://junit.org/junit5/docs/current/user-guide/', type: 'docs' },
    { title: 'Mockito Crash Course', url: 'https://www.youtube.com/watch?v=HSGWcq_2AAM', type: 'video' },
  ],
  'mongodb': [
    { title: 'MongoDB Official Basics', url: 'https://www.mongodb.com/basics', type: 'docs' },
    { title: 'MongoDB Crash Course', url: 'https://www.youtube.com/watch?v=ofme2o29ngU', type: 'video' },
  ],
  "java": [
    { title: "Java Programming Tutorial — dev.java", url: "https://dev.java/learn/", type: "docs" },
    { title: "Java Full Course for Beginners", url: "https://www.youtube.com/watch?v=xk4_1vDrzzo", type: "video" }
  ],
  "spring-boot": [
    { title: "Spring Boot Official Guides", url: "https://spring.io/guides", type: "docs" },
    { title: "Spring Boot Tutorial for Beginners", url: "https://www.youtube.com/watch?v=9SGDpanrc8U", type: "video" },
    { title: "Building REST services with Spring", url: "https://spring.io/guides/tutorials/rest/", type: "docs" }
  ],
  "mysql": [
    { title: "MySQL Tutorial for Developers", url: "https://www.mysqltutorial.org/", type: "docs" },
    { title: "MySQL Crash Course", url: "https://www.youtube.com/watch?v=7S_tz1z_5bA", type: "video" }
  ],
  "docker": [
    { title: "Docker 101 - Getting Started", url: "https://docs.docker.com/get-started/", type: "docs" },
    { title: "Docker Tutorial for Beginners", url: "https://www.youtube.com/watch?v=pTFZFxd4hOI", type: "video" }
  ],

  // ─── DevOps / AWS ───
  route53: [
    { title: 'AWS Route 53 Docs', url: 'https://docs.aws.amazon.com/Route53/', type: 'docs' },
    { title: 'Route 53 Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=lBAwVqeHULI', type: 'video' },
    { title: 'How DNS and Route 53 Work', url: 'https://aws.amazon.com/route53/what-is-dns/', type: 'article' },
  ],
  ses: [
    { title: 'AWS SES Docs', url: 'https://docs.aws.amazon.com/ses/', type: 'docs' },
    { title: 'Send Emails with Node.js & AWS SES', url: 'https://www.youtube.com/watch?v=yJ4HqE9R3Zc', type: 'video' },
    { title: 'SES Best Practices', url: 'https://docs.aws.amazon.com/ses/latest/DeveloperGuide/best-practices.html', type: 'docs' },
  ],
  ec2: [
    { title: 'AWS EC2 Getting Started', url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html', type: 'docs' },
    { title: 'EC2 Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=iHX-jtKIVNA', type: 'video' },
    { title: 'Deploy Node.js App to EC2', url: 'https://www.youtube.com/watch?v=NjYsXuSBZ5U', type: 'video' },
    { title: 'AWS EC2 Pricing & Instance Types', url: 'https://aws.amazon.com/ec2/instance-types/', type: 'article' },
  ],
  vpc: [
    { title: 'AWS VPC Docs', url: 'https://docs.aws.amazon.com/vpc/', type: 'docs' },
    { title: 'AWS VPC Crash Course', url: 'https://www.youtube.com/watch?v=J3EEhEU1H5s', type: 'video' },
    { title: 'Networking Basics for Cloud', url: 'https://aws.amazon.com/vpc/faqs/', type: 'article' },
  ],
  s3: [
    { title: 'AWS S3 Getting Started', url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html', type: 'docs' },
    { title: 'S3 Crash Course — Traversy Media', url: 'https://www.youtube.com/watch?v=e6w9LwZJFIA', type: 'video' },
    { title: 'Upload Files to S3 using Node.js', url: 'https://www.youtube.com/watch?v=NZElg91l_vw', type: 'video' },
    { title: 'S3 Security Best Practices', url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html', type: 'article' },
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

// ─── AI Engineer ───

'python-ai': [
  { title: 'Python Official Tutorial', url: 'https://docs.python.org/3/tutorial/', type: 'docs' },
  { title: 'Python for Everybody', url: 'https://www.coursera.org/specializations/python', type: 'course' },
  { title: 'Automate the Boring Stuff with Python', url: 'https://automatetheboringstuff.com/', type: 'book' },
  { title: 'Real Python Tutorials', url: 'https://realpython.com/', type: 'article' },
  { title: 'CS50 Python', url: 'https://cs50.harvard.edu/python/', type: 'course' },
],

'git-ai': [
  { title: 'Git Handbook', url: 'https://guides.github.com/introduction/git-handbook/', type: 'docs' },
  { title: 'Learn Git Branching', url: 'https://learngitbranching.js.org/', type: 'interactive' },
  { title: 'Git Official Docs', url: 'https://git-scm.com/doc', type: 'docs' },
  { title: 'Atlassian Git Tutorials', url: 'https://www.atlassian.com/git/tutorials', type: 'article' },
],

'numpy-ai': [
  { title: 'NumPy Quickstart', url: 'https://numpy.org/doc/stable/user/quickstart.html', type: 'docs' },
  { title: 'NumPy Beginner Guide', url: 'https://numpy.org/doc/stable/user/absolute_beginners.html', type: 'docs' },
  { title: 'Kaggle NumPy Course', url: 'https://www.kaggle.com/learn/python', type: 'course' },
  { title: 'FreeCodeCamp NumPy Tutorial', url: 'https://www.youtube.com/watch?v=QUT1VHiLmmI', type: 'video' },
],

'pandas-ai': [
  { title: '10 Minutes to Pandas', url: 'https://pandas.pydata.org/docs/user_guide/10min.html', type: 'docs' },
  { title: 'Pandas User Guide', url: 'https://pandas.pydata.org/docs/user_guide/index.html', type: 'docs' },
  { title: 'Kaggle Pandas Course', url: 'https://www.kaggle.com/learn/pandas', type: 'course' },
  { title: 'Data Analysis with Python', url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/', type: 'course' },
],

'data-vis-ai': [
  { title: 'Matplotlib Tutorials', url: 'https://matplotlib.org/stable/tutorials/index.html', type: 'docs' },
  { title: 'Seaborn Tutorial', url: 'https://seaborn.pydata.org/tutorial.html', type: 'docs' },
  { title: 'Plotly Python Docs', url: 'https://plotly.com/python/', type: 'docs' },
  { title: 'Data Visualization with Python', url: 'https://www.coursera.org/learn/python-for-data-visualization', type: 'course' },
],

'cp-data': [
  { title: 'Build a Data Analysis Project — freeCodeCamp', url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/', type: 'project' },
  { title: 'Kaggle Titanic Competition', url: 'https://www.kaggle.com/competitions/titanic', type: 'practice' },
  { title: 'Data Analysis Portfolio Projects', url: 'https://www.kaggle.com/datasets', type: 'practice' },
  { title: 'Python Data Science Handbook', url: 'https://jakevdp.github.io/PythonDataScienceHandbook/', type: 'book' },
],

'ml-basics': [
  { title: 'Google ML Crash Course', url: 'https://developers.google.com/machine-learning/crash-course', type: 'course' },
  { title: 'Machine Learning by Andrew Ng', url: 'https://www.coursera.org/learn/machine-learning', type: 'course' },
  { title: 'Machine Learning Explained', url: 'https://www.ibm.com/topics/machine-learning', type: 'article' },
  { title: 'Hands-On ML with Scikit-Learn', url: 'https://github.com/ageron/handson-ml3', type: 'book' },
],

'sklearn-ai': [
  { title: 'Scikit-learn Tutorials', url: 'https://scikit-learn.org/stable/tutorial/', type: 'docs' },
  { title: 'Scikit-learn User Guide', url: 'https://scikit-learn.org/stable/user_guide.html', type: 'docs' },
  { title: 'Machine Learning with Scikit-learn', url: 'https://www.kaggle.com/learn/intro-to-machine-learning', type: 'course' },
  { title: 'Scikit-learn Crash Course', url: 'https://www.youtube.com/watch?v=0B5eIE_1vpU', type: 'video' },
],

'model-eval-ai': [
  { title: 'Scikit-learn Model Evaluation', url: 'https://scikit-learn.org/stable/model_evaluation.html', type: 'docs' },
  { title: 'Confusion Matrix Explained', url: 'https://www.youtube.com/watch?v=Kdsp6soqA7o', type: 'video' },
  { title: 'Precision Recall F1 Guide', url: 'https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall', type: 'article' },
],

'dl-basics': [
  { title: 'Deep Learning Specialization', url: 'https://www.coursera.org/specializations/deep-learning', type: 'course' },
  { title: 'Neural Networks and Deep Learning', url: 'http://neuralnetworksanddeeplearning.com/', type: 'book' },
  { title: 'Deep Learning Book', url: 'https://www.deeplearningbook.org/', type: 'book' },
  { title: '3Blue1Brown Neural Networks', url: 'https://www.youtube.com/watch?v=aircAruvnKk', type: 'video' },
],

'tensorflow-ai': [
  { title: 'TensorFlow Tutorials', url: 'https://www.tensorflow.org/tutorials', type: 'docs' },
  { title: 'TensorFlow Guide', url: 'https://www.tensorflow.org/guide', type: 'docs' },
  { title: 'DeepLearning.AI TensorFlow', url: 'https://www.coursera.org/professional-certificates/tensorflow-in-practice', type: 'course' },
],

'pytorch-ai': [
  { title: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/', type: 'docs' },
  { title: 'PyTorch Fundamentals', url: 'https://www.learnpytorch.io/', type: 'course' },
  { title: 'Official PyTorch Examples', url: 'https://github.com/pytorch/examples', type: 'github' },
  { title: 'PyTorch Zero to Mastery', url: 'https://www.udemy.com/course/pytorch-for-deep-learning/', type: 'course' },
],

'deployment-ai': [
  { title: 'FastAPI Documentation', url: 'https://fastapi.tiangolo.com/', type: 'docs' },
  { title: 'Docker Getting Started', url: 'https://docs.docker.com/get-started/', type: 'docs' },
  { title: 'MLflow Documentation', url: 'https://mlflow.org/docs/latest/index.html', type: 'docs' },
  { title: 'Deploy ML Models with FastAPI', url: 'https://www.youtube.com/watch?v=7t2alSnE2-I', type: 'video' },
],
'oop-ai': [
  { title: 'Python OOP Tutorial — Real Python', url: 'https://realpython.com/python3-object-oriented-programming/', type: 'article' },
  { title: 'Object-Oriented Programming in Python', url: 'https://www.geeksforgeeks.org/python-oops-concepts/', type: 'article' },
  { title: 'CS50 OOP Lecture', url: 'https://cs50.harvard.edu/python/', type: 'course' },
],

'linux-ai': [
  { title: 'Linux Journey', url: 'https://linuxjourney.com/', type: 'interactive' },
  { title: 'The Linux Command Line', url: 'https://linuxcommand.org/tlcl.php', type: 'book' },
  { title: 'Missing Semester — MIT', url: 'https://missing.csail.mit.edu/', type: 'course' },
],

'rest-ai': [
  { title: 'REST API Tutorial', url: 'https://restfulapi.net/', type: 'docs' },
  { title: 'What is REST?', url: 'https://aws.amazon.com/what-is/restful-api/', type: 'article' },
  { title: 'Build APIs with Python', url: 'https://fastapi.tiangolo.com/tutorial/', type: 'docs' },
],

'fastapi-ai': [
  { title: 'FastAPI Official Docs', url: 'https://fastapi.tiangolo.com/', type: 'docs' },
  { title: 'FastAPI Full Course', url: 'https://www.youtube.com/watch?v=0sOvCWFmrtA', type: 'video' },
  { title: 'FastAPI Best Practices', url: 'https://github.com/zhanymkanov/fastapi-best-practices', type: 'github' },
],

'async-ai': [
  { title: 'Async IO in Python', url: 'https://docs.python.org/3/library/asyncio.html', type: 'docs' },
  { title: 'Async Programming Tutorial', url: 'https://realpython.com/async-io-python/', type: 'article' },
  { title: 'Python Asyncio Course', url: 'https://www.youtube.com/watch?v=t5Bo1Je9EmE', type: 'video' },
],

'websocket-ai': [
  { title: 'FastAPI WebSockets', url: 'https://fastapi.tiangolo.com/advanced/websockets/', type: 'docs' },
  { title: 'WebSockets Explained', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API', type: 'docs' },
  { title: 'Realtime Chat App Tutorial', url: 'https://www.youtube.com/watch?v=1BfCnjr_Vjg', type: 'video' },
],

'checkpoint-api-ai': [
  { title: 'Build an AI Chat Backend', url: 'https://github.com/openai/openai-quickstart-python', type: 'github' },
  { title: 'FastAPI Production Guide', url: 'https://testdriven.io/blog/fastapi-docker-traefik/', type: 'article' },
  { title: 'Streaming Responses in FastAPI', url: 'https://fastapi.tiangolo.com/advanced/custom-response/', type: 'docs' },
],

'llm-basics-ai': [
  { title: 'Introduction to LLMs — Google', url: 'https://www.cloudskillsboost.google/course_templates/539', type: 'course' },
  { title: 'LLM University', url: 'https://github.com/mlabonne/llm-course', type: 'github' },
  { title: 'Hugging Face LLM Course', url: 'https://huggingface.co/learn/llm-course/chapter1/1', type: 'course' },
  { title: 'How GPT Works', url: 'https://www.youtube.com/watch?v=wjZofJX0v4M', type: 'video' },
],

'transformers-ai': [
  { title: 'Hugging Face Transformers', url: 'https://huggingface.co/docs/transformers/index', type: 'docs' },
  { title: 'Illustrated Transformer', url: 'https://jalammar.github.io/illustrated-transformer/', type: 'article' },
  { title: 'Attention Is All You Need', url: 'https://arxiv.org/abs/1706.03762', type: 'paper' },
],

'tokens-ai': [
  { title: 'OpenAI Tokenizer', url: 'https://platform.openai.com/tokenizer', type: 'tool' },
  { title: 'TikToken Guide', url: 'https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken', type: 'docs' },
  { title: 'Tokenization Explained', url: 'https://huggingface.co/docs/tokenizers/index', type: 'docs' },
],

'embeddings-ai': [
  { title: 'OpenAI Embeddings Guide', url: 'https://platform.openai.com/docs/guides/embeddings', type: 'docs' },
  { title: 'Embeddings Explained', url: 'https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/', type: 'course' },
  { title: 'Sentence Transformers', url: 'https://www.sbert.net/', type: 'docs' },
],

'semantic-search-ai': [
  { title: 'Semantic Search Guide', url: 'https://www.pinecone.io/learn/semantic-search/', type: 'article' },
  { title: 'Weaviate Semantic Search', url: 'https://weaviate.io/developers/weaviate/search/semantic-search', type: 'docs' },
  { title: 'Vector Search Explained', url: 'https://www.youtube.com/watch?v=sNa_uiqSlJo', type: 'video' },
],

'vector-db-ai': [
  { title: 'Pinecone Docs', url: 'https://docs.pinecone.io/', type: 'docs' },
  { title: 'Weaviate Docs', url: 'https://weaviate.io/developers/weaviate', type: 'docs' },
  { title: 'ChromaDB Documentation', url: 'https://docs.trychroma.com/', type: 'docs' },
  { title: 'FAISS Library', url: 'https://github.com/facebookresearch/faiss', type: 'github' },
],

'hybrid-search-ai': [
  { title: 'Hybrid Search Explained', url: 'https://www.pinecone.io/learn/hybrid-search/', type: 'article' },
  { title: 'BM25 Explained', url: 'https://www.elastic.co/what-is/bm25', type: 'article' },
  { title: 'Advanced Retrieval Techniques', url: 'https://docs.cohere.com/docs/retrieval', type: 'docs' },
],

'prompt-ai': [
  { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering', type: 'docs' },
  { title: 'DeepLearning.AI Prompt Engineering', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', type: 'course' },
  { title: 'Prompting Guide', url: 'https://www.promptingguide.ai/', type: 'docs' },
],

'structured-output-ai': [
  { title: 'Structured Outputs — OpenAI', url: 'https://platform.openai.com/docs/guides/structured-outputs', type: 'docs' },
  { title: 'JSON Mode Explained', url: 'https://platform.openai.com/docs/guides/text-generation/json-mode', type: 'docs' },
  { title: 'Pydantic AI', url: 'https://ai.pydantic.dev/', type: 'docs' },
],

'function-calling-ai': [
  { title: 'Function Calling — OpenAI', url: 'https://platform.openai.com/docs/guides/function-calling', type: 'docs' },
  { title: 'Tools and Function Calling', url: 'https://cookbook.openai.com/examples/how_to_call_functions_with_chat_models', type: 'docs' },
  { title: 'Function Calling Tutorial', url: 'https://www.youtube.com/watch?v=0lOSvOoF2to', type: 'video' },
],

'tool-calling-ai': [
  { title: 'LangChain Tool Calling', url: 'https://python.langchain.com/docs/modules/agents/tools/', type: 'docs' },
  { title: 'Building AI Agents with Tools', url: 'https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/', type: 'course' },
  { title: 'OpenAI Agents SDK', url: 'https://openai.github.io/openai-agents-python/', type: 'docs' },
],

'mcp-ai': [
  { title: 'Model Context Protocol Docs', url: 'https://modelcontextprotocol.io/', type: 'docs' },
  { title: 'MCP Introduction', url: 'https://www.anthropic.com/news/model-context-protocol', type: 'article' },
  { title: 'Build MCP Servers', url: 'https://github.com/modelcontextprotocol', type: 'github' },
],

'rag-ai': [
  { title: 'RAG from Scratch', url: 'https://github.com/langchain-ai/rag-from-scratch', type: 'github' },
  { title: 'Advanced RAG', url: 'https://www.deeplearning.ai/short-courses/advanced-retrieval-for-ai/', type: 'course' },
  { title: 'RAG Explained', url: 'https://www.pinecone.io/learn/retrieval-augmented-generation/', type: 'article' },
],

'chunking-ai': [
  { title: 'Chunking Strategies for RAG', url: 'https://www.pinecone.io/learn/chunking-strategies/', type: 'article' },
  { title: 'Text Splitters — LangChain', url: 'https://python.langchain.com/docs/modules/data_connection/document_transformers/', type: 'docs' },
  { title: 'RAG Chunking Guide', url: 'https://weaviate.io/blog/chunking-strategies-for-rag', type: 'article' },
],

'retrieval-ai': [
  { title: 'Retrieval Optimization', url: 'https://docs.cohere.com/docs/retrieval', type: 'docs' },
  { title: 'RAG Best Practices', url: 'https://platform.openai.com/docs/guides/rag', type: 'docs' },
  { title: 'Advanced Retrieval', url: 'https://www.pinecone.io/learn/series/rag/', type: 'article' },
],

'reranking-ai': [
  { title: 'Cohere Rerank API', url: 'https://docs.cohere.com/docs/rerank-overview', type: 'docs' },
  { title: 'Reranking Explained', url: 'https://www.pinecone.io/learn/series/rag/rerankers/', type: 'article' },
  { title: 'Cross Encoder Models', url: 'https://www.sbert.net/examples/cross_encoder/applications/README.html', type: 'docs' },
],

'memory-ai': [
  { title: 'Conversation Memory in LangChain', url: 'https://python.langchain.com/docs/modules/memory/', type: 'docs' },
  { title: 'Long-term Memory for Agents', url: 'https://www.youtube.com/watch?v=2xxziIWmaSA', type: 'video' },
  { title: 'Memory Systems in AI Agents', url: 'https://www.pinecone.io/learn/series/langchain/langchain-conversational-memory/', type: 'article' },

],
'agents-ai': [
  { title: 'LangChain Agents', url: 'https://python.langchain.com/docs/modules/agents/', type: 'docs' },
  { title: 'OpenAI Agents SDK', url: 'https://openai.github.io/openai-agents-python/', type: 'docs' },
  { title: 'CrewAI Documentation', url: 'https://docs.crewai.com/', type: 'docs' },
  { title: 'Building AI Agents', url: 'https://www.deeplearning.ai/short-courses/ai-agentic-design-patterns-with-autogen/', type: 'course' },
  { title: 'AI Agents Explained', url: 'https://www.youtube.com/watch?v=F8NKVhkZZWI', type: 'video' },
],

'multi-agent-ai': [
  { title: 'Microsoft AutoGen', url: 'https://microsoft.github.io/autogen/', type: 'docs' },
  { title: 'CrewAI Multi-Agent Systems', url: 'https://docs.crewai.com/concepts/agents', type: 'docs' },
  { title: 'Multi-Agent AI Systems', url: 'https://www.youtube.com/watch?v=sal78ACtGTc', type: 'video' },
  { title: 'Autonomous Agents Research', url: 'https://arxiv.org/abs/2308.08155', type: 'paper' },
],

'workflow-ai': [
  { title: 'LangGraph Documentation', url: 'https://langchain-ai.github.io/langgraph/', type: 'docs' },
  { title: 'Build AI Workflows', url: 'https://www.deeplearning.ai/short-courses/langgraph-for-llm-application-development/', type: 'course' },
  { title: 'n8n AI Automation', url: 'https://docs.n8n.io/', type: 'docs' },
  { title: 'AI Workflow Orchestration', url: 'https://www.youtube.com/watch?v=jGg_1h0qzaM', type: 'video' },
],

'open-llm-ai': [
  { title: 'Hugging Face Models', url: 'https://huggingface.co/models', type: 'docs' },
  { title: 'Open LLM Leaderboard', url: 'https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard', type: 'tool' },
  { title: 'Llama Documentation', url: 'https://www.llama.com/docs/', type: 'docs' },
  { title: 'Mistral AI Docs', url: 'https://docs.mistral.ai/', type: 'docs' },
  { title: 'Run Open Source LLMs', url: 'https://www.youtube.com/watch?v=GWB9ApTPTv4', type: 'video' },
],

'ollama-ai': [
  { title: 'Ollama Official Docs', url: 'https://ollama.com/library', type: 'docs' },
  { title: 'Run LLMs Locally with Ollama', url: 'https://github.com/ollama/ollama', type: 'github' },
  { title: 'Ollama Tutorial', url: 'https://www.youtube.com/watch?v=UtSSMs6ObqY', type: 'video' },
  { title: 'Ollama + LangChain', url: 'https://python.langchain.com/docs/integrations/llms/ollama/', type: 'docs' },
],

'vllm-ai': [
  { title: 'vLLM Documentation', url: 'https://docs.vllm.ai/', type: 'docs' },
  { title: 'vLLM GitHub Repository', url: 'https://github.com/vllm-project/vllm', type: 'github' },
  { title: 'Fast LLM Inference with vLLM', url: 'https://www.anyscale.com/blog/continuous-batching-llm-inference', type: 'article' },
  { title: 'vLLM Tutorial', url: 'https://www.youtube.com/watch?v=8u3Vf4xkxwA', type: 'video' },
],

'quantization-ai': [
  { title: 'Quantization — Hugging Face', url: 'https://huggingface.co/docs/transformers/main/en/quantization', type: 'docs' },
  { title: 'LLM Quantization Explained', url: 'https://www.youtube.com/watch?v=XpoKB3usmKc', type: 'video' },
  { title: 'bitsandbytes', url: 'https://github.com/TimDettmers/bitsandbytes', type: 'github' },
  { title: 'GPTQ Quantization Guide', url: 'https://huggingface.co/blog/gptq-integration', type: 'article' },
],

'lora-ai': [
  { title: 'LoRA Paper', url: 'https://arxiv.org/abs/2106.09685', type: 'paper' },
  { title: 'PEFT Documentation', url: 'https://huggingface.co/docs/peft/index', type: 'docs' },
  { title: 'Fine-tuning LLMs with LoRA', url: 'https://www.deeplearning.ai/short-courses/finetuning-large-language-models/', type: 'course' },
  { title: 'QLoRA Explained', url: 'https://www.youtube.com/watch?v=t8Y_SpD5DkY', type: 'video' },
],

'monitoring-ai': [
  { title: 'LangSmith Documentation', url: 'https://docs.smith.langchain.com/', type: 'docs' },
  { title: 'Weights & Biases', url: 'https://wandb.ai/site', type: 'tool' },
  { title: 'OpenTelemetry Docs', url: 'https://opentelemetry.io/docs/', type: 'docs' },
  { title: 'Monitoring LLM Applications', url: 'https://www.pinecone.io/learn/llm-observability/', type: 'article' },
],

'evaluation-ai': [
  { title: 'OpenAI Evals', url: 'https://github.com/openai/evals', type: 'github' },
  { title: 'DeepEval Framework', url: 'https://docs.confident-ai.com/', type: 'docs' },
  { title: 'RAG Evaluation Guide', url: 'https://docs.ragas.io/', type: 'docs' },
  { title: 'LLM Evaluation Explained', url: 'https://www.youtube.com/watch?v=CYk8oQ2A21U', type: 'video' },
],

'safety-ai': [
  { title: 'OpenAI Safety Best Practices', url: 'https://platform.openai.com/docs/guides/safety-best-practices', type: 'docs' },
  { title: 'Guardrails AI', url: 'https://www.guardrailsai.com/', type: 'tool' },
  { title: 'OWASP Top 10 for LLMs', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', type: 'docs' },
  { title: 'AI Safety Fundamentals', url: 'https://course.elementsofai.com/', type: 'course' },
],


// ─── Machine Learning Engineer ───

'python-ml': [
  { title: 'Python Official Tutorial', url: 'https://docs.python.org/3/tutorial/', type: 'docs' },
  { title: 'Automate the Boring Stuff', url: 'https://automatetheboringstuff.com/', type: 'book' },
  { title: 'Real Python', url: 'https://realpython.com/', type: 'article' },
],

'math-ml': [
  { title: 'Linear Algebra — Khan Academy', url: 'https://www.khanacademy.org/math/linear-algebra', type: 'course' },
  { title: 'Essence of Linear Algebra', url: 'https://www.youtube.com/watch?v=fNk_zzaMoSs', type: 'video' },
  { title: 'MIT Linear Algebra', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', type: 'course' },
],

'statistics-ml': [
  { title: 'Statistics & Probability', url: 'https://www.khanacademy.org/math/statistics-probability', type: 'course' },
  { title: 'Think Stats', url: 'https://greenteapress.com/wp/think-stats-2e/', type: 'book' },
  { title: 'StatQuest YouTube Channel', url: 'https://www.youtube.com/c/joshstarmer', type: 'video' },
],

'numpy-ml': [
  { title: 'NumPy Quickstart', url: 'https://numpy.org/doc/stable/user/quickstart.html', type: 'docs' },
  { title: 'Pandas User Guide', url: 'https://pandas.pydata.org/docs/user_guide/index.html', type: 'docs' },
  { title: 'Kaggle Pandas', url: 'https://www.kaggle.com/learn/pandas', type: 'course' },
],

'cp-ml': [
  { title: 'End-to-End Machine Learning Project', url: 'https://github.com/ageron/handson-ml3', type: 'project' },
  { title: 'Kaggle Intro to ML Projects', url: 'https://www.kaggle.com/learn/intro-to-machine-learning', type: 'practice' },
  { title: 'Machine Learning Engineering for Production', url: 'https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops', type: 'course' },
  { title: 'Awesome ML Projects', url: 'https://github.com/topics/machine-learning-project', type: 'github' },
],

'ml-algorithms': [
  { title: 'Machine Learning — Andrew Ng', url: 'https://www.coursera.org/learn/machine-learning', type: 'course' },
  { title: 'Google ML Crash Course', url: 'https://developers.google.com/machine-learning/crash-course', type: 'course' },
  { title: 'Hands-On Machine Learning', url: 'https://github.com/ageron/handson-ml3', type: 'book' },
  { title: 'Machine Learning Mastery', url: 'https://machinelearningmastery.com/', type: 'article' },
],

'supervised-ml': [
  { title: 'Supervised Learning — IBM', url: 'https://www.ibm.com/topics/supervised-learning', type: 'article' },
  { title: 'Kaggle Intro to ML', url: 'https://www.kaggle.com/learn/intro-to-machine-learning', type: 'course' },
  { title: 'StatQuest Decision Trees', url: 'https://www.youtube.com/watch?v=7VeUPuFGJHk', type: 'video' },
],

'unsupervised-ml': [
  { title: 'Unsupervised Learning — IBM', url: 'https://www.ibm.com/topics/unsupervised-learning', type: 'article' },
  { title: 'Clustering in ML', url: 'https://scikit-learn.org/stable/modules/clustering.html', type: 'docs' },
  { title: 'K-Means Clustering Explained', url: 'https://www.youtube.com/watch?v=4b5d3muPQmA', type: 'video' },
],

'feature-eng': [
  { title: 'Feature Engineering — Kaggle', url: 'https://www.kaggle.com/learn/feature-engineering', type: 'course' },
  { title: 'Feature Engineering Book', url: 'https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/', type: 'book' },
  { title: 'Feature Engineering Guide', url: 'https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/', type: 'article' },
],

'model-tuning': [
  { title: 'Hyperparameter Tuning — Scikit-learn', url: 'https://scikit-learn.org/stable/modules/grid_search.html', type: 'docs' },
  { title: 'Optuna Documentation', url: 'https://optuna.org/', type: 'docs' },
  { title: 'Random Search vs Grid Search', url: 'https://www.youtube.com/watch?v=HdlDYng8g9s', type: 'video' },
],

'mlops': [
  { title: 'MLOps Guide — neptune.ai', url: 'https://neptune.ai/blog/mlops', type: 'article' },
  { title: 'Made With ML — MLOps', url: 'https://madewithml.com/', type: 'course' },
  { title: 'Full Stack Deep Learning', url: 'https://fullstackdeeplearning.com/', type: 'course' },
],

'deploy-ml': [
  { title: 'MLflow Docs', url: 'https://mlflow.org/docs/latest/index.html', type: 'docs' },
  { title: 'FastAPI Documentation', url: 'https://fastapi.tiangolo.com/', type: 'docs' },
  { title: 'Deploy ML Models to Production', url: 'https://www.coursera.org/learn/introduction-to-machine-learning-in-production', type: 'course' },
],
'oop-ml': [
  { title: 'Python OOP Tutorial — Real Python', url: 'https://realpython.com/python3-object-oriented-programming/', type: 'article' },
  { title: 'Python OOP — GeeksforGeeks', url: 'https://www.geeksforgeeks.org/python-oops-concepts/', type: 'article' },
  { title: 'Object-Oriented Programming in Python', url: 'https://www.youtube.com/watch?v=Ej_02ICOIgs', type: 'video' },
],

'git-ml': [
  { title: 'Git Handbook', url: 'https://guides.github.com/introduction/git-handbook/', type: 'docs' },
  { title: 'Learn Git Branching', url: 'https://learngitbranching.js.org/', type: 'interactive' },
  { title: 'Git Official Docs', url: 'https://git-scm.com/doc', type: 'docs' },
  { title: 'Atlassian Git Tutorials', url: 'https://www.atlassian.com/git/tutorials', type: 'article' },
],

'linux-ml': [
  { title: 'Linux Journey', url: 'https://linuxjourney.com/', type: 'interactive' },
  { title: 'The Linux Command Line', url: 'https://linuxcommand.org/tlcl.php', type: 'book' },
  { title: 'Missing Semester — MIT', url: 'https://missing.csail.mit.edu/', type: 'course' },
],

'linear-algebra-ml': [
  { title: 'MIT Linear Algebra', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', type: 'course' },
  { title: 'Essence of Linear Algebra', url: 'https://www.youtube.com/watch?v=fNk_zzaMoSs', type: 'video' },
  { title: 'Linear Algebra — Khan Academy', url: 'https://www.khanacademy.org/math/linear-algebra', type: 'course' },
],

'calculus-ml': [
  { title: 'Calculus 1 — Khan Academy', url: 'https://www.khanacademy.org/math/calculus-1', type: 'course' },
  { title: 'Essence of Calculus', url: 'https://www.youtube.com/watch?v=WUvTyaaNkzM', type: 'video' },
  { title: 'MIT Single Variable Calculus', url: 'https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/', type: 'course' },
],

'probability-ml': [
  { title: 'Probability and Statistics — Khan Academy', url: 'https://www.khanacademy.org/math/statistics-probability/probability-library', type: 'course' },
  { title: 'Introduction to Probability', url: 'https://projects.iq.harvard.edu/stat110', type: 'course' },
  { title: 'StatQuest Probability', url: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF', type: 'video' },
],

'optimization-ml': [
  { title: 'Optimization for Machine Learning', url: 'https://www.coursera.org/learn/machine-learning-optimization', type: 'course' },
  { title: 'Gradient Descent Explained', url: 'https://www.youtube.com/watch?v=sDv4f4s2SB8', type: 'video' },
  { title: 'Convex Optimization Book', url: 'https://web.stanford.edu/~boyd/cvxbook/', type: 'book' },
],

'pandas-ml': [
  { title: '10 Minutes to Pandas', url: 'https://pandas.pydata.org/docs/user_guide/10min.html', type: 'docs' },
  { title: 'Pandas User Guide', url: 'https://pandas.pydata.org/docs/user_guide/index.html', type: 'docs' },
  { title: 'Kaggle Pandas Course', url: 'https://www.kaggle.com/learn/pandas', type: 'course' },
],

'sql-ml': [
  { title: 'SQLBolt', url: 'https://sqlbolt.com/', type: 'interactive' },
  { title: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/', type: 'course' },
  { title: 'SQL for Data Science', url: 'https://www.coursera.org/learn/sql-for-data-science', type: 'course' },
],

'data-cleaning-ml': [
  { title: 'Data Cleaning — Kaggle', url: 'https://www.kaggle.com/learn/data-cleaning', type: 'course' },
  { title: 'Cleaning Data in Python', url: 'https://realpython.com/python-data-cleaning-numpy-pandas/', type: 'article' },
  { title: 'Pandas Missing Data Guide', url: 'https://pandas.pydata.org/docs/user_guide/missing_data.html', type: 'docs' },
],

'eda-ml': [
  { title: 'EDA with Python', url: 'https://www.kaggle.com/learn/data-visualization', type: 'course' },
  { title: 'Exploratory Data Analysis Guide', url: 'https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15', type: 'article' },
  { title: 'EDA Tutorial', url: 'https://www.youtube.com/watch?v=xi0vhXFPegw', type: 'video' },
],

'data-vis-ml': [
  { title: 'Matplotlib Tutorials', url: 'https://matplotlib.org/stable/tutorials/index.html', type: 'docs' },
  { title: 'Seaborn Tutorial', url: 'https://seaborn.pydata.org/tutorial.html', type: 'docs' },
  { title: 'Plotly Python Docs', url: 'https://plotly.com/python/', type: 'docs' },
],

'checkpoint-data-ml': [
  { title: 'Data Analysis Portfolio Projects', url: 'https://www.kaggle.com/datasets', type: 'practice' },
  { title: 'Python Data Science Handbook', url: 'https://jakevdp.github.io/PythonDataScienceHandbook/', type: 'book' },
  { title: 'EDA Project Ideas', url: 'https://www.projectpro.io/article/exploratory-data-analysis-projects/510', type: 'project' },
],

'ml-fundamentals-ml': [
  { title: 'Machine Learning — Andrew Ng', url: 'https://www.coursera.org/learn/machine-learning', type: 'course' },
  { title: 'Google ML Crash Course', url: 'https://developers.google.com/machine-learning/crash-course', type: 'course' },
  { title: 'Hands-On ML with Scikit-Learn', url: 'https://github.com/ageron/handson-ml3', type: 'book' },
],

'regression-ml': [
  { title: 'Linear Regression Explained', url: 'https://www.youtube.com/watch?v=nk2CQITm_eo', type: 'video' },
  { title: 'Regression — Scikit-learn', url: 'https://scikit-learn.org/stable/supervised_learning.html#supervised-learning', type: 'docs' },
  { title: 'Regression Tutorial', url: 'https://developers.google.com/machine-learning/crash-course/linear-regression', type: 'course' },
],

'classification-ml': [
  { title: 'Classification — Google ML Crash Course', url: 'https://developers.google.com/machine-learning/crash-course/classification', type: 'course' },
  { title: 'Classification Models — Scikit-learn', url: 'https://scikit-learn.org/stable/supervised_learning.html#supervised-learning', type: 'docs' },
  { title: 'Logistic Regression Explained', url: 'https://www.youtube.com/watch?v=yIYKR4sgzI8', type: 'video' },
],

'tree-models-ml': [
  { title: 'Decision Trees — Scikit-learn', url: 'https://scikit-learn.org/stable/modules/tree.html', type: 'docs' },
  { title: 'Random Forest Explained', url: 'https://www.youtube.com/watch?v=J4Wdy0Wc_xQ', type: 'video' },
  { title: 'Tree-Based Models', url: 'https://developers.google.com/machine-learning/decision-forests', type: 'course' },
],

'boosting-ml': [
  { title: 'Gradient Boosting — Scikit-learn', url: 'https://scikit-learn.org/stable/modules/ensemble.html#gradient-tree-boosting', type: 'docs' },
  { title: 'Boosting Algorithms Explained', url: 'https://www.youtube.com/watch?v=GM3CDQfQ4sw', type: 'video' },
  { title: 'Boosting Guide', url: 'https://machinelearningmastery.com/gentle-introduction-gradient-boosting-algorithm-machine-learning/', type: 'article' },
],

'xgboost-ml': [
  { title: 'XGBoost Documentation', url: 'https://xgboost.readthedocs.io/', type: 'docs' },
  { title: 'LightGBM Documentation', url: 'https://lightgbm.readthedocs.io/', type: 'docs' },
  { title: 'XGBoost Tutorial', url: 'https://www.kaggle.com/learn/intermediate-machine-learning', type: 'course' },
],

'svm-ml': [
  { title: 'SVM — Scikit-learn', url: 'https://scikit-learn.org/stable/modules/svm.html', type: 'docs' },
  { title: 'Support Vector Machines Explained', url: 'https://www.youtube.com/watch?v=efR1C6CvhmE', type: 'video' },
  { title: 'SVM Tutorial', url: 'https://www.ibm.com/topics/support-vector-machine', type: 'article' },
],

'clustering-ml': [
  { title: 'Clustering — Scikit-learn', url: 'https://scikit-learn.org/stable/modules/clustering.html', type: 'docs' },
  { title: 'K-Means Clustering Explained', url: 'https://www.youtube.com/watch?v=4b5d3muPQmA', type: 'video' },
  { title: 'Clustering in Machine Learning', url: 'https://developers.google.com/machine-learning/clustering', type: 'course' },
],

'dim-reduction-ml': [
  { title: 'PCA Explained', url: 'https://www.youtube.com/watch?v=FgakZw6K1QQ', type: 'video' },
  { title: 'Dimensionality Reduction — Scikit-learn', url: 'https://scikit-learn.org/stable/modules/decomposition.html', type: 'docs' },
  { title: 't-SNE and PCA Guide', url: 'https://towardsdatascience.com/an-introduction-to-t-sne-with-python-example-5a3a293108d1', type: 'article' },
],

'feature-eng-ml': [
  { title: 'Feature Engineering — Kaggle', url: 'https://www.kaggle.com/learn/feature-engineering', type: 'course' },
  { title: 'Feature Engineering for ML', url: 'https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/', type: 'book' },
  { title: 'Feature Engineering Guide', url: 'https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/', type: 'article' },
],

'feature-selection-ml': [
  { title: 'Feature Selection — Scikit-learn', url: 'https://scikit-learn.org/stable/modules/feature_selection.html', type: 'docs' },
  { title: 'Feature Selection Explained', url: 'https://www.youtube.com/watch?v=xlHk4okO8Ls', type: 'video' },
  { title: 'Feature Selection Techniques', url: 'https://machinelearningmastery.com/feature-selection-with-real-and-categorical-data/', type: 'article' },
],

'model-eval-ml': [
  { title: 'Model Evaluation — Scikit-learn', url: 'https://scikit-learn.org/stable/model_evaluation.html', type: 'docs' },
  { title: 'Precision Recall F1 Guide', url: 'https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall', type: 'article' },
  { title: 'Confusion Matrix Explained', url: 'https://www.youtube.com/watch?v=Kdsp6soqA7o', type: 'video' },
],

'cross-validation-ml': [
  { title: 'Cross Validation — Scikit-learn', url: 'https://scikit-learn.org/stable/modules/cross_validation.html', type: 'docs' },
  { title: 'Cross Validation Explained', url: 'https://www.youtube.com/watch?v=fSytzGwwBVw', type: 'video' },
  { title: 'K-Fold Validation Guide', url: 'https://machinelearningmastery.com/k-fold-cross-validation/', type: 'article' },
],

'hyperparameter-ml': [
  { title: 'Hyperparameter Tuning — Scikit-learn', url: 'https://scikit-learn.org/stable/modules/grid_search.html', type: 'docs' },
  { title: 'Optuna Documentation', url: 'https://optuna.org/', type: 'docs' },
  { title: 'Random Search vs Grid Search', url: 'https://www.youtube.com/watch?v=HdlDYng8g9s', type: 'video' },
],

'sklearn-ml': [
  { title: 'Scikit-learn Tutorials', url: 'https://scikit-learn.org/stable/tutorial/', type: 'docs' },
  { title: 'Scikit-learn User Guide', url: 'https://scikit-learn.org/stable/user_guide.html', type: 'docs' },
  { title: 'Machine Learning with Scikit-learn', url: 'https://www.kaggle.com/learn/intro-to-machine-learning', type: 'course' },
],

'checkpoint-ml-system': [
  { title: 'Machine Learning Engineering for Production', url: 'https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops', type: 'course' },
  { title: 'End-to-End ML Projects', url: 'https://github.com/ageron/handson-ml3', type: 'project' },
  { title: 'Awesome ML Projects', url: 'https://github.com/topics/machine-learning-project', type: 'github' },
],

'deep-learning-ml': [
  { title: 'Deep Learning Specialization', url: 'https://www.coursera.org/specializations/deep-learning', type: 'course' },
  { title: 'Deep Learning Book', url: 'https://www.deeplearningbook.org/', type: 'book' },
  { title: '3Blue1Brown Neural Networks', url: 'https://www.youtube.com/watch?v=aircAruvnKk', type: 'video' },
],

'neural-networks-ml': [
  { title: 'Neural Networks and Deep Learning', url: 'http://neuralnetworksanddeeplearning.com/', type: 'book' },
  { title: 'Neural Networks Explained', url: 'https://www.youtube.com/watch?v=bfmFfD2RIcg', type: 'video' },
  { title: 'PyTorch Neural Network Tutorial', url: 'https://pytorch.org/tutorials/beginner/blitz/neural_networks_tutorial.html', type: 'docs' },
],

'cnn-ml': [
  { title: 'CNN Explained — Stanford', url: 'https://cs231n.github.io/convolutional-networks/', type: 'course' },
  { title: 'Convolutional Neural Networks', url: 'https://www.youtube.com/watch?v=YRhxdVk_sIs', type: 'video' },
  { title: 'TensorFlow CNN Tutorial', url: 'https://www.tensorflow.org/tutorials/images/cnn', type: 'docs' },
],

'computer-vision-ml': [
  { title: 'OpenCV Tutorials', url: 'https://docs.opencv.org/master/d9/df8/tutorial_root.html', type: 'docs' },
  { title: 'Computer Vision Crash Course', url: 'https://www.youtube.com/watch?v=WQeoO7MI0Bs', type: 'video' },
  { title: 'CS231n Stanford', url: 'https://cs231n.stanford.edu/', type: 'course' },
],

'rnn-ml': [
  { title: 'RNN & LSTM Explained', url: 'https://colah.github.io/posts/2015-08-Understanding-LSTMs/', type: 'article' },
  { title: 'Sequence Models — DeepLearning.AI', url: 'https://www.coursera.org/learn/nlp-sequence-models', type: 'course' },
  { title: 'LSTM Tutorial', url: 'https://www.youtube.com/watch?v=YCzL96nL7j0', type: 'video' },
],

'nlp-ml': [
  { title: 'Hugging Face NLP Course', url: 'https://huggingface.co/learn/nlp-course/chapter1/1', type: 'course' },
  { title: 'Natural Language Processing Specialization', url: 'https://www.coursera.org/specializations/natural-language-processing', type: 'course' },
  { title: 'spaCy Documentation', url: 'https://spacy.io/usage', type: 'docs' },
],

'tensorflow-ml': [
  { title: 'TensorFlow Tutorials', url: 'https://www.tensorflow.org/tutorials', type: 'docs' },
  { title: 'TensorFlow Guide', url: 'https://www.tensorflow.org/guide', type: 'docs' },
  { title: 'TensorFlow in Practice', url: 'https://www.coursera.org/professional-certificates/tensorflow-in-practice', type: 'course' },
],

'pytorch-ml': [
  { title: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/', type: 'docs' },
  { title: 'Learn PyTorch', url: 'https://www.learnpytorch.io/', type: 'course' },
  { title: 'Official PyTorch Examples', url: 'https://github.com/pytorch/examples', type: 'github' },
],

'docker-ml': [
  { title: 'Docker Getting Started', url: 'https://docs.docker.com/get-started/', type: 'docs' },
  { title: 'Docker for ML', url: 'https://www.youtube.com/watch?v=fqMOX6JJhGo', type: 'video' },
  { title: 'Docker Deep Dive', url: 'https://docker-curriculum.com/', type: 'course' },
],

'deployment-ml': [
  { title: 'Deploy ML Models with FastAPI', url: 'https://www.youtube.com/watch?v=7t2alSnE2-I', type: 'video' },
  { title: 'MLflow Documentation', url: 'https://mlflow.org/docs/latest/index.html', type: 'docs' },
  { title: 'Introduction to ML in Production', url: 'https://www.coursera.org/learn/introduction-to-machine-learning-in-production', type: 'course' },
],

'cloud-ml': [
  { title: 'AWS Machine Learning', url: 'https://aws.amazon.com/machine-learning/', type: 'docs' },
  { title: 'Google Cloud ML', url: 'https://cloud.google.com/learn/training/machinelearning-ai', type: 'course' },
  { title: 'Azure ML Documentation', url: 'https://learn.microsoft.com/en-us/azure/machine-learning/', type: 'docs' },
],

'mlops-ml': [
  { title: 'Made With ML', url: 'https://madewithml.com/', type: 'course' },
  { title: 'Full Stack Deep Learning', url: 'https://fullstackdeeplearning.com/', type: 'course' },
  { title: 'MLOps Guide', url: 'https://neptune.ai/blog/mlops', type: 'article' },
],

'monitoring-ml': [
  { title: 'Evidently AI Docs', url: 'https://docs.evidentlyai.com/', type: 'docs' },
  { title: 'ML Monitoring Guide', url: 'https://neptune.ai/blog/ml-model-monitoring', type: 'article' },
  { title: 'Data Drift Explained', url: 'https://www.youtube.com/watch?v=tFfTludf0SU', type: 'video' },
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
  // ─── Git & Github ───
  'git-basics': [
    { title: 'Atlassian Git Tutorial: Basics', url: 'https://www.atlassian.com/git/tutorials/setting-up-a-repository', type: 'docs' },
    { title: 'Git Crash Course for Beginners', url: 'https://www.youtube.com/watch?v=8JJ101D3knE', type: 'video' },
    { title: 'How to Use Git & GitHub – Intro for Beginners', url: 'https://www.freecodecamp.org/news/introduction-to-git-and-github/', type: 'article' },
    { title: 'Practical Git and Git Workflows Guide', url: 'https://www.freecodecamp.org/news/practical-git-and-git-workflows/', type: 'article' },
  ],
  'git-branching': [
    { title: 'Learn Git Branching (Interactive Visualizer)', url: 'https://learngitbranching.js.org/', type: 'course' },
    { title: 'Atlassian: Using Branches', url: 'https://www.atlassian.com/git/tutorials/using-branches', type: 'docs' },
    { title: 'Git Branching Strategy Explained', url: 'https://www.youtube.com/watch?v=e2IbNHi4uCI', type: 'video' },
  ],
  'git-merging': [
    { title: 'Merging vs. Rebasing (Atlassian)', url: 'https://www.atlassian.com/git/tutorials/merging-vs-rebasing', type: 'docs' },
    { title: 'How to Resolve Merge Conflicts', url: 'https://www.youtube.com/watch?v=JtIX3HJKwfo', type: 'video' },
    { title: 'Git Branching - Rebasing (Official Docs)', url: 'https://git-scm.com/book/en/v2/Git-Branching-Rebasing', type: 'docs' },
  ],
  'git-remote': [
    { title: 'Working with Remotes', url: 'https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes', type: 'docs' },
    { title: 'Pushing and Pulling Data', url: 'https://www.youtube.com/watch?v=yXT1ElMEkW8', type: 'video' },
    { title: 'Understanding git fetch vs git pull', url: 'https://www.freecodecamp.org/news/git-fetch-vs-pull/', type: 'article' },
  ],
  'git-workflows': [
    { title: 'Comparing Git Workflows', url: 'https://www.atlassian.com/git/tutorials/comparing-workflows', type: 'docs' },
    { title: 'Understanding GitHub Flow', url: 'https://docs.github.com/en/get-started/using-github/github-flow', type: 'docs' },
    { title: 'GitFlow Workflow Tutorial', url: 'https://www.youtube.com/watch?v=aJnFGMclhU8', type: 'video' },
  ],
  'git-advanced': [
    { title: 'Git Stash Tutorial', url: 'https://www.atlassian.com/git/tutorials/saving-changes/git-stash', type: 'docs' },
    { title: 'The Git Cherry Pick Command (Guide)', url: 'https://www.freecodecamp.org/news/the-git-cherry-pick-command/', type: 'article' },
    { title: 'How to Use Cherry Pick & Avoid Duplicates', url: 'https://www.freecodecamp.org/news/git-cherry-pick-avoid-duplicate-commits/', type: 'article' },
    { title: 'Using Git Reflog to Restore Lost Commits', url: 'https://www.youtube.com/watch?v=LqA-qQ9d16Q', type: 'video' },
    { title: 'Undo anything with Git', url: 'https://blog.github.com/2015-06-08-how-to-undo-almost-anything-with-git/', type: 'article' },
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
  // update for frontend and backend path
  typescript: [
    { title: 'TypeScript Handbook (Official)', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', type: 'docs' },
    { title: 'TypeScript Crash Course', url: 'https://www.youtube.com/watch?v=BCg4U1FzODs', type: 'video' },
  ],
  nextjs: [
    { title: 'Next.js Official Documentation', url: 'https://nextjs.org/docs', type: 'docs' },
    { title: 'Next.js App Router Course', url: 'https://www.youtube.com/watch?v=vwSlYG7hFk0', type: 'video' },
  ],
  java: [
    { title: 'Java Programming Tutorial', url: 'https://dev.java/learn/', type: 'docs' },
    { title: 'Java Full Course for Beginners', url: 'https://www.youtube.com/watch?v=xk4_1vDrzzo', type: 'video' },
  ],
  'spring-boot': [
    { title: 'Spring Boot Official Guides', url: 'https://spring.io/guides', type: 'docs' },
    { title: 'Building REST services with Spring', url: 'https://spring.io/guides/tutorials/rest/', type: 'docs' },
    { title: 'Spring Boot Tutorial', url: 'https://www.youtube.com/watch?v=9SGDpanrc8U', type: 'video' },
  ],
  mysql: [
    { title: 'MySQL Tutorial for Developers', url: 'https://www.mysqltutorial.org/', type: 'docs' },
    { title: 'MySQL Crash Course', url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA', type: 'video' },
  ],
  'api-fetching': [
    { title: 'MDN — Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch', type: 'docs' },
    { title: 'Axios Crash Course', url: 'https://www.youtube.com/watch?v=6LyagkoRWYA', type: 'video' },
  ],
  'testing-backend': [
    { title: 'JUnit 5 User Guide', url: 'https://junit.org/junit5/docs/current/user-guide/', type: 'docs' },
    { title: 'Mockito Crash Course', url: 'https://www.youtube.com/watch?v=HSGWcq_2AAM', type: 'video' },
  ],
  'mongodb': [
    { title: 'MongoDB Official Basics', url: 'https://www.mongodb.com/basics', type: 'docs' },
    { title: 'MongoDB Crash Course', url: 'https://www.youtube.com/watch?v=ofme2o29ngU', type: 'video' },
  ],
  'kotlin': [
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
