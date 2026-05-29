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
