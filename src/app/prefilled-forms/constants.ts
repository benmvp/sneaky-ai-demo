export const INTEREST_OPTIONS = [
  '.NET',
  'Accessibility',
  'Architecture & Design Patterns',
  'Artificial Intelligence',
  'Cloud Computing',
  'Data Science',
  'Databases',
  'DevOps',
  'Documentation',
  'E-commerce',
  'Go',
  'HTML & CSS',
  'Human Intelligence',
  'Internet of Things',
  'Java & JVM languages',
  'JavaScript',
  'Mobile',
  'Networks',
  'Performance',
  'PHP',
  'Python',
  'Security',
  'Startup',
  'Tests & Quality',
  'UX & UI',
] as const

export const PAST_TALKS = [
  'Unlocking the Power of Serverless Computing on AWS (2022)', // Cloud Computing
  'Kubernetes: From Zero to Production Hero with .NET (2023)', // .NET, Kubernetes
  'The Future of AI: Trends and Predictions in 2024 (2024)', // Artificial Intelligence
  'Machine Learning for Mortals: Practical Applications with Python (2023)', // Python, Machine Learning
  'Building Scalable Web Apps with React and Node.js (2022)', // JavaScript, Architecture
  'Mastering DevOps: Automate Everything! (2023)', // DevOps
  'The Art of Front-End Performance Optimization (2022)', // Performance, HTML & CSS
  'Data Science for Decision-Making with Real-World Data (2023)', // Data Science
  'Cybersecurity Essentials for Developers (2022)', // Security
  'UI/UX Design for Accessible Web Applications (2023)', // UX & UI, Accessibility
  'Deep Dive into GraphQL APIs with Java (2022)', // Java & JVM languages, APIs
  'Building Microservices with Go (2023)', // Go
  'The Power of Progressive Web Apps (PWAs) (2022)', // JavaScript, Mobile
  'Cloud Native Architectures: Best Practices (2023)', // Cloud Computing, Architecture
  'Revolutionizing E-commerce with Headless Architectures (2022)', // E-commerce, Architecture
  'Mastering TypeScript: Beyond the Basics (2023)', // JavaScript (TypeScript)
  'The Joy of Functional Programming in .NET (2022)', // .NET
  'Building Accessible Web Applications with ARIA and WCAG (2023)', // Accessibility
  'Blockchain Development for Beginners (2022)', // (Removed - no direct interest match)
  'The Metaverse: Opportunities and Challenges for Developers (2023)', // (Removed - no direct interest match)
  'Human-Centered AI: Designing for Ethical Interactions (2022)', // Human Intelligence, AI
  'Building Smart Home Applications with IoT (2023)', // Internet of Things
  'From Monolith to Microservices: A Migration Journey (2022)', // Architecture & Design Patterns
  'Writing Effective Technical Documentation (2023)', // Documentation
  'NoSQL Databases: Choosing the Right Tool for the Job (2022)', // Databases
  'Scaling Databases for High-Traffic Applications (2023)', // Databases, Performance
  'PHP in 2024: Modern Frameworks and Best Practices (2024)', //PHP
  'Network Programming Fundamentals for Developers (2022)', // Networks
  'Building a Successful Tech Startup: From Idea to Exit (2023)', // Startup
  'Automated Testing Strategies for Reliable Software (2022)', // Tests & Quality
  'Mobile App Development with React Native (2023)', // Mobile, JavaScript
  'The Mobile-First Mindset: Designing for Small Screens (2022)', //Mobile
  'Performance Tuning for Java Applications (2023)', // Java & JVM Languages, Performance
  'Secure Coding Practices for Web Developers (2022)', // Security
  'Introduction to Quantum Computing (2024)', // Removed, no direct interest
  'The Art of Code Review (2023)', //Tests & Quality
  'From Developer to Architect: A Career Path (2022)', //Architecture
  'Low-Code/No-Code: Friend or Foe to Developers? (2024)', // No direct match, added for variety
  'Edge Computing with Cloudflare Workers (2023)', // Cloud Computing
  'Building Blazingly Fast APIs with Rust and Actix (2024)', //Added for Performance (removed Rust focus)
  'The Future of Documentation is Interactive (2023)', //Documentation
  'E-commerce Security Best Practices (2024)', //E-commerce, security
  'UX for Developers (2024)', // UX & UI
  'The Power of Community: Networking for Developers (2022)', //Networks
  'Containers & Serverless, Friends or Foes? (2024)', //DevOps, Cloud
  'Data Visualization with D3.js (2024)', //Data Science, JavaScript
  'AI-Powered Testing: The Next Frontier (2024)', //AI, Tests & Quality
] as const

export const SPEAKERS = [
  {
    bio: 'Dr. Sharma is a leading expert in applying machine learning techniques to real-world business problems. She has over 10 years of experience in data science and has published numerous papers in top-tier conferences. She is passionate about making data science accessible to everyone.',
    expertise: [
      'Data Science',
      'Machine Learning',
      'Python',
      'Artificial Intelligence',
    ],
    name: 'Dr. Anya Sharma',
    title: 'Principal Data Scientist, Data Insights Inc.',
  },
  {
    bio: 'David is a seasoned cloud architect with extensive experience designing and implementing scalable and resilient cloud solutions. He is a certified Kubernetes administrator and a strong advocate for DevOps best practices. He specializes in helping companies migrate to the cloud and modernize their applications.',
    expertise: [
      'Cloud Computing',
      'DevOps',
      'Kubernetes',
      '.NET',
      'Architecture & Design Patterns',
    ],
    name: 'David Lee',
    title: 'Senior Cloud Architect, Cloud Solutions Group',
  },
  {
    bio: 'Maria is a passionate advocate for user-centered design. She has a deep understanding of accessibility principles and has led numerous projects to create inclusive and user-friendly digital experiences.  She believes in the power of design to make technology accessible to everyone.',
    expertise: [
      'UX & UI',
      'Accessibility',
      'User Research',
      'Design Thinking',
      'HTML & CSS',
    ],
    name: 'Maria Rodriguez',
    title: 'UX/UI Design Lead, Creative Design Studio',
  },
  {
    bio: 'John is a highly skilled front-end developer with a focus on building high-performance web applications. He is an expert in React and Node.js and is constantly exploring new technologies and techniques to improve the user experience.',
    expertise: [
      'JavaScript',
      'React',
      'Node.js',
      'Performance',
      'Front-End Development',
    ],
    name: 'John Smith',
    title: 'Software Engineer, Acme Corp',
  },
  {
    bio: 'Sarah is a cybersecurity expert with a mission to make the digital world safer. She has extensive experience in penetration testing, vulnerability assessment, and security architecture. She is passionate about educating developers and organizations about security best practices.',
    expertise: [
      'Security',
      'Cybersecurity',
      'Network Security',
      'Ethical Hacking',
      'Cloud Computing',
    ],
    name: 'Sarah Chen',
    title: 'Security Consultant, SecureTech Solutions',
  },
  {
    bio: 'Michael is a DevOps evangelist who believes in automating everything. He has a proven track record of implementing successful CI/CD pipelines and helping companies adopt DevOps practices.  He is an expert in infrastructure-as-code and cloud automation.',
    expertise: [
      'DevOps',
      'Automation',
      'CI/CD',
      'Cloud Computing',
      'Infrastructure as Code',
    ],
    name: 'Michael Brown',
    title: 'DevOps Engineer, Automation Experts',
  },
  {
    bio: 'Emily is a software architect with a passion for designing scalable and maintainable systems.  She has extensive experience with microservices architectures and cloud-native technologies. She is a strong advocate for clean code and design principles.',
    expertise: [
      'Architecture & Design Patterns',
      'Microservices',
      'Cloud Computing',
      '.NET',
      'Java & JVM languages',
    ],
    name: 'Emily Wilson',
    title: 'Lead Architect, Innovative Solutions Inc.',
  },
  {
    bio: 'Kevin is a database expert with over 15 years of experience managing and optimizing large-scale databases. He is proficient in both SQL and NoSQL technologies and is passionate about data integrity and performance.',
    expertise: ['Databases', 'SQL', 'NoSQL', 'Data Modeling', 'Performance'],
    name: 'Kevin Davis',
    title: 'Database Administrator, Data Management Co.',
  },
  {
    bio: 'Jessica is a skilled technical writer who believes that clear and concise documentation is essential for successful software projects. She has experience creating a wide range of technical documentation, including API documentation, user guides, and tutorials.',
    expertise: [
      'Documentation',
      'Technical Writing',
      'API Documentation',
      'User Guides',
      'Content Strategy',
    ],
    name: 'Jessica Garcia',
    title: 'Technical Writer, TechDocs Ltd.',
  },
  {
    bio: 'Alex is a serial entrepreneur with a passion for building innovative products and companies. He has founded and led multiple successful startups and is a frequent speaker on topics related to entrepreneurship and technology.',
    expertise: [
      'Startup',
      'Entrepreneurship',
      'Product Management',
      'Business Strategy',
      'E-commerce',
    ],
    name: 'Alex Patel',
    title: 'Founder & CEO, InnovateNow',
  },
  {
    bio: 'Sophia is a highly experienced mobile developer with expertise in both iOS and Android platforms. She is proficient in React Native and Swift and has a strong track record of building high-quality mobile applications.',
    expertise: ['Mobile', 'iOS', 'Android', 'React Native', 'Swift'],
    name: 'Sophia Kim',
    title: 'Senior Mobile Developer, MobileMasters',
  },
  {
    bio: 'Omar is a certified network engineer with extensive experience designing, implementing, and managing complex network infrastructures. He is an expert in network security and cloud networking.',
    expertise: [
      'Networks',
      'Network Security',
      'Cloud Networking',
      'Cisco',
      'Juniper',
    ],
    name: 'Omar Rodriguez',
    title: 'Network Engineer, NetConnect Solutions',
  },
  {
    bio: 'Chloe is a versatile full-stack developer with a passion for building user-friendly and efficient web applications. She is proficient in a wide range of technologies, including JavaScript, Python, and various database systems.',
    expertise: [
      'JavaScript',
      'Python',
      'HTML & CSS',
      'Databases',
      'Full-Stack Development',
    ],
    name: 'Chloe Dubois',
    title: 'Full-Stack Developer, WebWorks Inc.',
  },
  {
    bio: 'Ethan is a dedicated QA lead with a strong focus on ensuring software quality through rigorous testing and automation. He is a champion of test-driven development and has extensive experience in implementing effective QA processes.',
    expertise: [
      'Tests & Quality',
      'Automation Testing',
      'Test-Driven Development',
      'Performance Testing',
      'QA Processes',
    ],
    name: 'Ethan Lee',
    title: 'QA Lead, QualityFirst Software',
  },
  {
    bio: 'Isabella is an IoT expert who is passionate about connecting the physical and digital worlds. She has experience developing a wide range of IoT solutions, from smart home devices to industrial sensors.',
    expertise: [
      'Internet of Things',
      'Embedded Systems',
      'Sensors',
      'Cloud Integration',
      'Arduino',
    ],
    name: 'Isabella Martinez',
    title: 'IoT Specialist, SmartThings Co.',
  },
  {
    bio: "Liam is a highly skilled Go developer with a focus on building high-performance, scalable microservices. He is an expert in Go's concurrency features and has a deep understanding of distributed systems.",
    expertise: [
      'Go',
      'Microservices',
      'Concurrency',
      'Distributed Systems',
      'Backend Development',
    ],
    name: 'Liam Nguyen',
    title: 'Go Developer, GoFast Solutions',
  },
  {
    bio: 'Olivia is an experienced PHP developer with expertise in building dynamic websites and web applications. She is proficient in popular PHP frameworks such as Laravel and Symfony.',
    expertise: ['PHP', 'Laravel', 'Symfony', 'WordPress', 'Web Development'],
    name: 'Olivia Brown',
    title: 'PHP Developer, WebSolutions Inc.',
  },
  {
    bio: 'Noah is a passionate Python developer with experience in building web applications, data analysis tools, and machine learning models. He is a strong advocate for the Python community.',
    expertise: [
      'Python',
      'Django',
      'Flask',
      'Data Analysis',
      'Web Development',
    ],
    name: 'Noah Garcia',
    title: 'Python Developer, Pythonistas United',
  },
  {
    bio: 'Ava researches how humans interact with technology and designs AI systems that are intuitive, user-friendly, and ethically sound. She bridges the gap between technical development and human needs.',
    expertise: [
      'Human Intelligence',
      'Human-Computer Interaction',
      'UX Research',
      'Cognitive Science',
      'Artificial Intelligence',
    ],
    name: 'Ava Wilson',
    title: 'Human-Computer Interaction Researcher, HCI Labs',
  },
  {
    bio: 'Jackson is a solutions architect specializing in cloud technologies. He helps businesses migrate to the cloud and optimize their cloud infrastructure for performance, cost, and security.',
    expertise: [
      'Cloud Computing',
      'AWS',
      'Azure',
      'Google Cloud',
      'Serverless',
    ],
    name: 'Jackson Davis',
    title: 'Solutions Architect, CloudFirst Consulting',
  },
  {
    bio: 'Mia is dedicated to making the web accessible to everyone. She consults on accessibility best practices and helps developers build inclusive digital experiences that meet WCAG guidelines.',
    expertise: [
      'Accessibility',
      'WCAG',
      'ARIA',
      'Inclusive Design',
      'Web Development',
    ],
    name: 'Mia Rodriguez',
    title: 'Accessibility Specialist, AccessForAll',
  },
  {
    bio: 'Benjamin helps businesses build and grow their online stores. He has extensive experience with various e-commerce platforms and digital marketing strategies.',
    expertise: [
      'E-commerce',
      'Shopify',
      'WooCommerce',
      'Magento',
      'Digital Marketing',
    ],
    name: 'Benjamin Lee',
    title: 'E-commerce Consultant, ShopSmart Solutions',
  },
  {
    bio: 'Harper is a recognized Java Champion and independent consultant with deep expertise in Java and related technologies. She helps companies build robust and scalable Java applications.',
    expertise: [
      'Java & JVM languages',
      'Spring Framework',
      'Microservices',
      'Performance Tuning',
      'Architecture & Design Patterns',
    ],
    name: 'Harper Chen',
    title: 'Java Champion, Independent Consultant',
  },
  {
    bio: 'Lucas is a .NET architect with a focus on building enterprise-grade applications using Microsoft technologies. He is an expert in Azure and microservices architecture.',
    expertise: ['.NET', 'C#', 'ASP.NET', 'Azure', 'Microservices'],
    name: 'Lucas Brown',
    title: '.NET Architect, Enterprise Solutions',
  },
  {
    bio: 'Amelia helps organizations communicate data effectively through compelling visualizations. She is an expert in D3.js and other data visualization tools.',
    expertise: [
      'Data Science',
      'Data Visualization',
      'D3.js',
      'Tableau',
      'Python',
    ],
    name: 'Amelia Garcia',
    title: 'Data Visualization Specialist, DataViz Experts',
  },
  {
    bio: 'Elijah helps companies streamline their development processes and improve their cloud infrastructure through DevOps best practices.',
    expertise: [
      'DevOps',
      'Cloud Computing',
      'Automation',
      'Infrastructure as Code',
      'Kubernetes',
    ],
    name: 'Elijah Wilson',
    title: 'DevOps Consultant, CloudOps Solutions',
  },
  {
    bio: 'Abigail is an experienced frontend architect and a mentor to many frontend developers. She specializes in building complex and performant web applications using modern JavaScript frameworks.',
    expertise: [
      'JavaScript',
      'React',
      'Angular',
      'Vue.js',
      'Performance',
      'HTML & CSS',
    ],
    name: 'Abigail Martinez',
    title: 'Frontend Architect, Frontend Masters',
  },
  {
    bio: 'James designs and implements robust and scalable database solutions for various industries.  He is skilled in both relational and NoSQL databases.',
    expertise: [
      'Databases',
      'SQL Server',
      'PostgreSQL',
      'MongoDB',
      'Database Design',
    ],
    name: 'James Anderson',
    title: 'Database Architect, DataScale Solutions',
  },
  {
    bio: 'Sofia works to ensure that AI is developed and used in a responsible and ethical manner. She researches the societal impact of AI and advocates for policies that promote fairness and transparency.',
    expertise: [
      'Artificial Intelligence',
      'Ethics',
      'Responsible AI',
      'Machine Learning',
      'Human Intelligence',
    ],
    name: 'Sofia Thomas',
    title: 'AI Ethicist, Responsible AI Institute',
  },
  {
    bio: 'Alexander is a highly proficient software engineer specializing in modern web technologies, with a strong emphasis on creating scalable and maintainable applications using JavaScript, TypeScript, Node.js, and React.',
    expertise: [
      'JavaScript',
      'TypeScript',
      'Node.js',
      'React',
      'Software Architecture',
    ],
    name: 'Alexander Jackson',
    title: 'Senior Software Engineer, InnovateTech',
  },
]

export const SESSIONS = [
  {
    description:
      'Explore advanced use cases and architectural patterns for serverless applications, including event-driven architectures and state management.',
    keywords: [
      'Serverless',
      'Cloud Computing',
      'Architecture',
      'AWS Lambda',
      'Azure Functions',
      'Google Cloud Functions',
    ],
    level: 'Intermediate',
    speakers: ['David Lee'],
    title: 'Serverless Architectures: Beyond the Basics',
    track: 'Cloud Computing',
  },
  {
    description:
      'Learn how to scale Kubernetes clusters to handle large, complex applications and high traffic volumes.',
    keywords: [
      'Kubernetes',
      'DevOps',
      'Scaling',
      'Enterprise',
      '.NET',
      'Containers',
    ],
    level: 'Advanced',
    speakers: ['Michael Brown', 'Elijah Wilson'],
    title: 'Scaling Kubernetes for Enterprise Workloads',
    track: 'DevOps',
  },
  {
    description:
      'A hands-on workshop covering the fundamentals of building and training machine learning models using TensorFlow and Keras.',
    keywords: [
      'Machine Learning',
      'TensorFlow',
      'Keras',
      'Python',
      'Artificial Intelligence',
      'Deep Learning',
    ],
    level: 'Intermediate',
    speakers: ['Dr. Anya Sharma', 'Noah Garcia'],
    title: 'Practical Machine Learning with TensorFlow and Keras',
    track: 'Artificial Intelligence',
  },
  {
    description:
      'Learn techniques for optimizing the performance of React applications, including code splitting, lazy loading, and memoization.',
    keywords: [
      'React',
      'JavaScript',
      'Performance',
      'Front-End Development',
      'HTML & CSS',
    ],
    level: 'Intermediate',
    speakers: ['John Smith', 'Abigail Martinez'],
    title: 'Building High-Performance React Applications',
    track: 'JavaScript',
  },
  {
    description:
      'A comprehensive overview of modern web security threats and best practices for protecting your applications and users.',
    keywords: [
      'Security',
      'Web Security',
      'Cybersecurity',
      'OWASP',
      'Authentication',
      'Authorization',
    ],
    level: 'Intermediate',
    speakers: ['Sarah Chen', 'Benjamin Lee'],
    title: 'Modern Web Security Best Practices',
    track: 'Security',
  },
  {
    description:
      'Learn how to use Terraform to define and manage your infrastructure as code, enabling automation and reproducibility.',
    keywords: [
      'DevOps',
      'Terraform',
      'Infrastructure as Code',
      'Automation',
      'Cloud Computing',
    ],
    level: 'Intermediate',
    speakers: ['Michael Brown', 'Elijah Wilson'],
    title: 'Automating Your Infrastructure with Terraform',
    track: 'DevOps',
  },
  {
    description:
      'Learn how to design and develop web applications that are accessible to users with disabilities, following WCAG guidelines.',
    keywords: [
      'Accessibility',
      'WCAG',
      'ARIA',
      'Inclusive Design',
      'UX & UI',
      'HTML & CSS',
    ],
    level: 'Beginner',
    speakers: ['Maria Rodriguez', 'Mia Rodriguez'],
    title: 'Designing for Accessibility: Creating Inclusive Web Experiences',
    track: 'Accessibility',
  },
  {
    description:
      'Explore the benefits of GraphQL and learn how to design and build efficient and flexible APIs.',
    keywords: [
      'GraphQL',
      'API',
      'REST',
      'Backend Development',
      'Java & JVM languages',
    ],
    level: 'Intermediate',
    speakers: ['Emily Wilson', 'Jessica Garcia'],
    title: 'GraphQL: A Modern Approach to API Development',
    track: 'API',
  },
  {
    description:
      'Learn how to design, build, and deploy microservices using the Go programming language.',
    keywords: [
      'Go',
      'Microservices',
      'Architecture & Design Patterns',
      'Distributed Systems',
      'Backend Development',
    ],
    level: 'Intermediate',
    speakers: ['Liam Nguyen'],
    title: 'Microservices Architectures with Go',
    track: 'Go',
  },
  {
    description:
      'Discover how to create Progressive Web Apps (PWAs) that offer a native app-like experience using modern JavaScript frameworks.',
    keywords: ['PWA', 'JavaScript', 'React', 'Angular', 'Vue.js', 'Mobile'],
    level: 'Intermediate',
    speakers: ['John Smith', 'Chloe Dubois'],
    title: 'Building PWAs with Modern JavaScript Frameworks',
    track: 'JavaScript',
  },
  {
    description:
      'Learn practical techniques to analyze and derive insights from data, and how to present it clearly to stakeholders.',
    keywords: [
      'Data Science',
      'Python',
      'Data Analysis',
      'Data Visualization',
      'Pandas',
    ],
    level: 'Intermediate',
    speakers: ['Dr. Anya Sharma'],
    title: 'Data-Driven Decision Making with Python',
    track: 'Data Science',
  },
  {
    description:
      'Build robust RESTful APIs with ASP.NET Core, utilizing modern design patterns.',
    keywords: ['.NET', 'C#', 'ASP.NET', 'API', 'REST'],
    level: 'Intermediate',
    speakers: ['Lucas Brown'],
    title: 'Building RESTful APIs with .NET',
    track: '.NET',
  },
  {
    description:
      'Deep dive into asynchronous JavaScript, learning to write clean and efficient code with async/await.',
    keywords: [
      'JavaScript',
      'Async/Await',
      'Promises',
      'Concurrency',
      'Front-End Development',
    ],
    level: 'Intermediate',
    speakers: ['John Smith', 'Alexander Jackson'],
    title: 'Mastering Async and Await in JavaScript',
    track: 'JavaScript',
  },
  {
    description:
      'Explore security vulnerabilities in IoT devices and learn how to mitigate risks.',
    keywords: [
      'Internet of Things',
      'Security',
      'Embedded Systems',
      'Cybersecurity',
      'IoT Security',
    ],
    level: 'Intermediate',
    speakers: ['Isabella Martinez', 'Sarah Chen'],
    title: 'IoT Security: Protecting Connected Devices',
    track: 'Internet of Things',
  },
  {
    description:
      'Learn how to communicate complex technical concepts effectively to both technical and non-technical audiences.',
    keywords: [
      'Documentation',
      'Technical Writing',
      'Communication',
      'Presentation Skills',
    ],
    level: 'Beginner',
    speakers: ['Jessica Garcia'],
    title: 'The Power of Technical Storytelling',
    track: 'Documentation',
  },
  {
    description:
      'Go beyond basic SQL and learn advanced querying techniques for complex data analysis.',
    keywords: [
      'Databases',
      'SQL',
      'Data Analysis',
      'Query Optimization',
      'Performance',
    ],
    level: 'Advanced',
    speakers: ['Kevin Davis', 'James Anderson'],
    title: 'Advanced SQL Techniques for Data Analysis',
    track: 'Databases',
  },
  {
    description:
      'Learn best practices for building e-commerce platforms that can handle high traffic and large product catalogs.',
    keywords: [
      'E-commerce',
      'Scalability',
      'Performance',
      'Architecture',
      'Shopify',
      'Databases',
    ],
    level: 'Intermediate',
    speakers: ['Benjamin Lee'],
    title: 'Building Scalable E-commerce Platforms',
    track: 'E-commerce',
  },
  {
    description:
      'Understand the networking concepts essential for deploying and managing applications in the cloud.',
    keywords: [
      'Networks',
      'Cloud Computing',
      'Networking Fundamentals',
      'TCP/IP',
      'Virtual Networks',
    ],
    level: 'Beginner',
    speakers: ['Omar Rodriguez'],
    title: 'Network Fundamentals for Cloud Developers',
    track: 'Networks',
  },
  {
    description:
      'A practical guide to launching a tech startup, covering everything from ideation to funding.',
    keywords: [
      'Startup',
      'Entrepreneurship',
      'Funding',
      'Product Development',
      'Business Strategy',
    ],
    level: 'Beginner',
    speakers: ['Alex Patel'],
    title: 'Bootstrapping Your Tech Startup',
    track: 'Startup',
  },
  {
    description:
      'Learn how to apply Test-Driven Development (TDD) principles to write cleaner, more reliable code.',
    keywords: [
      'Tests & Quality',
      'Test-Driven Development',
      'TDD',
      'Unit Testing',
      'Software Development',
    ],
    level: 'Intermediate',
    speakers: ['Ethan Lee', 'Alexander Jackson'],
    title: 'Test-Driven Development (TDD) in Practice',
    track: 'Tests & Quality',
  },
  {
    description:
      'Explore design principles for building AI systems that prioritize user needs and ethical considerations.',
    keywords: [
      'Human Intelligence',
      'AI',
      'UX & UI',
      'Design Thinking',
      'Ethics',
    ],
    level: 'Intermediate',
    speakers: ['Ava Wilson', 'Sofia Thomas'],
    title: 'Human-Centered Design for AI Products',
    track: 'Human Intelligence',
  },
  {
    description:
      'Learn how to use CSS Grid and Flexbox to create complex and responsive layouts with ease.',
    keywords: [
      'HTML & CSS',
      'CSS Grid',
      'Flexbox',
      'Web Design',
      'Front-End Development',
    ],
    level: 'Intermediate',
    speakers: ['Maria Rodriguez', 'Abigail Martinez'],
    title: 'Mastering CSS Grid and Flexbox',
    track: 'HTML & CSS',
  },
  {
    description:
      "Explore the depths of Java's concurrency utilities and build highly performant multithreaded applications.",
    keywords: ['Java & JVM languages', 'concurrency', 'multithreading'],
    level: 'Advanced',
    speakers: ['Harper Chen'],
    title: 'Advanced Techniques in Java Concurrency',
    track: 'Java & JVM languages',
  },
  {
    description: 'Learn how to use PHP to work with relational databases.',
    keywords: ['PHP', 'Databases', 'MySQL', 'SQL'],
    level: 'Intermediate',
    speakers: ['Olivia Brown'],
    title: 'PHP and MySQL Database Connectivity',
    track: 'PHP',
  },
  {
    description: 'Discover how AI can help write code more efficiently.',
    keywords: [
      'Artificial Intelligence',
      'Machine Learning',
      'Developer Tools',
    ],
    level: 'Beginner',
    speakers: ['Dr. Anya Sharma'],
    title: 'AI-Powered Code Completion Tools',
    track: 'Artificial Intelligence',
  },
  {
    description:
      'Get started with web accessibility guidelines and best practices, making your websites inclusive for everyone.',
    keywords: [
      'Accessibility',
      'WCAG',
      'ARIA',
      'Inclusive Design',
      'Web Development',
    ],
    level: 'Beginner',
    speakers: ['Mia Rodriguez'],
    title: 'Introduction to Web Accessibility',
    track: 'Accessibility',
  },
  {
    description:
      'An introduction to key concepts in network security, including firewalls, VPNs, and intrusion detection systems.',
    keywords: ['Networks', 'Security'],
    level: 'Beginner',
    speakers: ['Omar Rodriguez', 'Sarah Chen'],
    title: 'The Fundamentals of Network Security',
    track: 'Networks',
  },
  {
    description: 'Learn how to make mobile apps.',
    keywords: ['Mobile', 'mobile development'],
    level: 'Beginner',
    speakers: ['Sophia Kim'],
    title: 'Getting Started with Mobile Development',
    track: 'Mobile',
  },
  {
    description: 'Learn how to reach a wider audience through your writing.',
    keywords: ['Documentation', 'blog posts'],
    level: 'Beginner',
    speakers: ['Jessica Garcia'],
    title: 'Writing Technical Blog Posts',
    track: 'Documentation',
  },
  {
    description: 'Learn how to create microservices in .NET',
    keywords: ['.NET', 'Microservices'],
    level: 'Intermediate',
    speakers: ['Lucas Brown', 'Emily Wilson'],
    title: 'Building Microservices in .NET',
    track: '.NET',
  },
]
