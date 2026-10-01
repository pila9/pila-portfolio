import type { Component } from 'vue'
import {
  Code,
  Server,
  Package,
  Mail,
  MapPin,
  Phone,
  Network,
  Wifi,
  Send,
  FolderGit2,
  Repeat,
  Languages,
  RefreshCw,
} from '@lucide/vue'

import {
  GitHub,
  LinkedIn,
  Telegram,
  Twitter,
  ReactIcon,
  VueIcon,
  NuxtIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  TailwindIcon,
  VuetifyIcon,
  ElementIcon,
  MuiIcon,
  BootstrapIcon,
  PhpIcon,
  LaravelIcon,
  NodeIcon,
  CSharpIcon,
  DotNetIcon,
  JiraIcon,
  GitLabIcon,
  DockerIcon,
  NginxIcon,
  PostmanIcon,
  MySqlIcon,
  SqlServerIcon,
  PusherIcon,
  ChatGptIcon,
  CopilotIcon,
  ClaudeIcon,
  GeminiIcon,
  KiloCodeIcon,
  CodexIcon,
  PerplexityIcon,
  StitchIcon,
  PythonIcon,
  SwaggerIcon
} from '@/icons/brandIcons'

export interface SocialLink {
  label: string
  href: string
  icon: Component
}

export interface Role {
  id: string
  title: string
  description: string
  icon: Component
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  image?: string
  techStack: string[]
  privacy?: boolean
  buttonText?: string
  links: {
    live?: string
    github?: string
  }
  certificate?: string
}

export interface Skill {
  name: string
  icon: Component
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface ContactInfo {
  label: string
  value: string
  href?: string
  icon: Component
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  image: string
  pdf?: string
}

export interface ProductSkill {
  id: string
  name: string
  level: number
  description: string
}

export interface EducationItem {
  id: string
  degree: string
  institution: string
  period: string
  description?: string
  achievements?: string[]
  type: 'degree' | 'training' | 'course' | 'high-school'
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/sanpila', icon: GitHub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sanpila', icon: LinkedIn },
  { label: 'Twitter', href: 'https://x.com/sanpila', icon: Twitter },
  { label: 'Email', href: 'mailto:pilasan19@gmail.com', icon: Mail },
]

export const roles: Role[] = [
  {
    id: 'product-owner',
    title: 'Product Owner',
    description:
      'Developed and maintained dynamic, responsive web applications using Vue.js, Nuxt.js, and React.js, with a focus on performance, scalability, and user experience. Translated business and user needs into clear product requirements, user stories, and acceptance criteria. Drove product vision and strategy, including roadmap planning, backlog management, and feature prioritization based on stakeholder and user needs. Managed and prioritized the Product Backlog and coordinated end-to-end product delivery through Agile/Scrum sprints. Collaborated with stakeholders, UI/UX designers, developers, QA, and technical teams to deliver high-quality product features. Conducted testing, debugging, maintenance, and performance optimization to improve application quality, stability, and usability. Integrated web applications with REST APIs and coordinated server integration and product deployments. Used Jira and GitLab for Agile task management, collaboration, version control, and development workflows. Collected user feedback, monitored product performance and KPIs, and continuously improved features based on data and user needs. Applied SEO best practices to improve website visibility, usability, and traffic. Participated in stakeholder meetings, providing both product and technical insights to support decision-making and product direction.',
    icon: Package,
  },
  {
    id: 'frontend-developer',
    title: 'Front-end Developer',
    description:
      'Develop and maintain responsive, user-friendly web applications using React.js, JavaScript, HTML, and CSS. Build reusable and scalable UI components based on UI/UX designs and business requirements. Integrate REST APIs and work with backend teams to deliver functional web applications. Optimize application performance, usability, responsiveness, and cross-browser compatibility. Troubleshoot, debug, and fix frontend issues to ensure application quality and stability. Collaborate with Product, UI/UX, Backend, and QA teams throughout the development lifecycle.',
    icon: Code,
  },
  {
    id: 'web-developer',
    title: 'Web Developer',
    description:
      'Develop, maintain, and enhance responsive and user-friendly websites and web applications. Build web interfaces using HTML, CSS, JavaScript, React.js, and other web technologies. Integrate REST APIs and work with backend services to deliver functional web solutions. Translate business and UI/UX requirements into practical web solutions. Troubleshoot, debug, and resolve technical issues to ensure website performance and stability. Optimize websites for performance, responsiveness, usability, and cross-browser compatibility. Collaborate with UI/UX, Product, Backend, QA, and other teams throughout the development lifecycle.',
    icon: Server,
  },
]

export const techTags = [
  'Vue.js',
  'React.js',
  'Nuxt.js',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Node.js',
  'Laravel',
  'MySQL',
  'Git',
]

export const resumeUrl = '/San-Pila-CV.pdf'

export const projects: Project[] = [
  {
    id: 'umpay-admin',
    title: 'UMPay Admin Web',
    subtitle: 'Digital Wallet Operations Portal',
    description:
      'A secure, role-based operations portal for managing the UMPay digital wallet and payment ecosystem. It provides an analytics dashboard for member growth, transaction volume, balances, online activity, and top currencies; detailed user and merchant administration; KYC verification; deposits, withdrawals, payment methods, gateway orders, callback tracking, and exchange rates. Teams can also manage fee reports and Excel/PDF exports, promotions, vouchers, agents, banners, card settings, and operational appeals. Security includes role-based permissions, JWT authentication, Google 2FA, reCAPTCHA, and activity controls, with English, Thai, Chinese, Japanese, and Malay support.',
    image: '/projects/umpay-admin.png',
    techStack: ['Vue.js 2', 'Vue Router', 'Vuex', 'Element UI', 'Axios', 'ApexCharts', 'Vue I18n', 'Laravel 8 REST APIs'],
    privacy: true,
    links: {},
    certificate: '/certificates/umpay-project.pdf',
  },
  {
    id: 'umpay-gateway',
    title: 'UMPay Payment Gateway Web',
    subtitle: 'Digital Wallet Checkout Portal',
    description:
      'A customer-facing checkout portal for completing payments through the UMPay mobile wallet. It securely retrieves merchant order details and presents a QR code or mobile deep link, showing the amount, currency, merchant, product, purchase-order number, and payment-expiry countdown. The responsive desktop and mobile experience includes live payment-status updates via Pusher, success, failure, expired, and service-unavailable states, detailed digital receipts with invoice/reference information, merchant redirects after completion, and receipt image downloads and sharing.',
    image: 'https://placehold.co/800x600/1e293b/ffffff?text=UMPay+Gateway',
    techStack: ['React 18', 'TypeScript', 'React Router', 'Tailwind CSS', 'QRCode React', 'Pusher', 'Webpack', 'Internal API/i18n'],
    privacy: true,
    links: {
      live: 'https://gateway.umpay.io',
      github: 'https://github.com/sanpila/umpay-gateway',
    },
    certificate: '/certificates/umpay-project.pdf',
  },
  {
    id: 'umpay-web',
    title: 'UMPay Web',
    subtitle: 'Digital Wallet Customer App',
    description:
      'The customer-facing web application for the UMPay digital wallet, enabling users to manage funds, make payments, transfer money, and access wallet services from a responsive browser interface. It includes secure registration, password recovery, PIN setup, and two-factor authentication; balances, bills, transaction records, and real-time notifications; deposit and withdrawal flows with fees, status tracking, and receipts; wallet-to-wallet, bank, UnionPay, and Alipay transfers; QR-code generation and scanning; currency exchange and multi-currency wallets; KYC and membership access; UMPay card management; vouchers, payment-account settings, customer service, and multilingual support.',
    image: 'https://placehold.co/800x600/1e293b/ffffff?text=UMPay+Web',
    techStack: ['React 18', 'TypeScript', 'React Router', 'Tailwind CSS', 'Pusher', 'QR-code Libraries', 'Recharts', 'Webpack', 'Internal REST API/i18n/UI'],
    privacy: true,
    links: {
      live: 'https://web.umpay.me/login',
      github: 'https://github.com/sanpila/umpay-web',
    },
    certificate: '/certificates/umpay-project.pdf',
  },
  {
    id: 'umpay-landing',
    title: 'UMPay Landing Web',
    subtitle: 'Digital Wallet Marketing Website',
    description:
      'The public marketing website for the UMPay digital wallet platform, introducing the product, explaining core financial services, and guiding visitors to register or download the mobile app. Its responsive product pages, visual walkthroughs, video tutorials, and FAQs cover wallet, payment, security, and transaction-management features, alongside dedicated pages for deposits, withdrawals, transfers, and buying/selling. The site also provides social and customer-support access, country and currency availability, English, Thai, and Chinese languages, and localized Terms & Conditions, Privacy Policy, and AML policies.',
    image: '/projects/umpay-landing.png',
    techStack: ['React 18', 'TypeScript', 'React Router', 'Tailwind CSS', 'Webpack', 'Internal UI/API/i18n'],
    links: {
      live: 'https://www.umpay.me/',
      github: 'https://github.com/sanpila/umpay-landing',
    },
    certificate: '/certificates/umpay-project.pdf',
  },
  {
    id: 'orkun-admin',
    title: 'Orkun Admin Web',
    subtitle: 'Marketplace Operations Dashboard',
    description:
      'A centralized, responsive back-office platform for managing a service marketplace. Operations teams can monitor date-based order and payment analytics; manage vendors, KYC reviews, and service assignments; review client profiles, addresses, cancellations, and support cases; and oversee the full order lifecycle, payment reviews, refunds, and printable records. It also manages the service catalogue, categories, attributes, recommendations, banners, announcements, discounts, promo codes, tax/VAT, currencies, payment percentages, app versions, role-based access, audit logs, real-time admin notifications, and multilingual content.',
    image: '/projects/orkun-admin.svg',
    techStack: ['Next.js', 'React', 'Material UI', 'Redux Toolkit', 'Axios', 'Charting Tools', 'Laravel Admin API'],
    privacy: true,
    links: {},
    certificate: '/certificates/orkun-project.pdf',
  },
  {
    id: 'orkun-mini-app',
    title: 'Orkun Mini App Web',
    subtitle: 'Customer Booking Application',
    description:
      'A mobile-first customer application for discovering, booking, and tracking on-demand services inside a host mobile environment. Customers can browse promotional banners, categories, top services, and service details; search and save favourites; book services with options, quantities, personal details, and address selection; and manage saved addresses with map and current-location support. It provides real-time order-progress tracking, booking and payment histories, notifications, in-order vendor contact, and web-to-native bridge controls for location, navigation, and closing the embedded experience.',
    image: '/projects/orkun-mini-app.png',
    techStack: ['React', 'TypeScript', 'React Router', 'Tailwind CSS', 'Pusher', 'Webpack', 'REST API'],
    buttonText: 'Available on ABA App',
    links: {
      live: 'https://orkun-app.com',
      github: 'https://github.com/sanpila/orkun-mini-app',
    },
    certificate: '/certificates/orkun-project.pdf',
  },
  {
    id: 'orkun-landing',
    title: 'Orkun Landing Web',
    subtitle: 'Home-Service Marketplace Website',
    description:
      'The public-facing website for Orkun, a Cambodia-based home-service marketplace connecting customers with trusted local providers. It explains how to find, compare, and book services such as cleaning, repairs, moving, air-conditioner servicing, and photography. The site highlights scheduled bookings, certified vendors, direct communication, secure deposits, real-time updates, and customer support, with app screenshots and download calls to action. It also includes the company mission and vision, contact information, privacy policy, terms and conditions, search and social metadata, a sitemap, and responsive layouts for desktop and mobile.',
    image: '/projects/orkun-landing.png',
    techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'Swiper', 'Font Awesome'],
    links: {
      live: 'https://orkun.app/',
    },
    certificate: '/certificates/orkun-project.pdf',
  },
  {
    id: 'gorden-web',
    title: 'Gorden Web',
    subtitle: 'Music & Audiobook Discovery',
    description:
      'A multilingual, responsive digital-entertainment platform for discovering music, artists, albums, top charts, new releases, and audiobooks, seamlessly connected with the Gorden/E-Play mobile ecosystem. Its large media catalogue is easy to explore across countries, genres, and content types. Users can search songs, artists, albums, and audiobooks; view detailed content pages; play audio; create collections; and share or continue content through QR codes and mobile deep links. It supports more than 30 languages and is deployed as a Dockerized static site with Nginx.',
    image: 'https://placehold.co/800x600/1e293b/ffffff?text=Gorden+Web',
    techStack: ['Nuxt.js', 'Vue.js', 'Vuetify', 'Vuex', 'REST API', 'Docker', 'Nginx'],
    privacy: true,
    links: {
      live: 'https://gorden.com',
      github: 'https://github.com/sanpila/gorden-web',
    },
  },
  {
    id: 'voting-admin',
    title: 'Voting Admin Web',
    subtitle: 'Voting & Prediction Operations Dashboard',
    description:
      'A secure operations dashboard for managing a voting and prediction platform. Administrators can oversee the complete topic lifecycle—from preview and publishing through active voting, closing, settlement, and deletion—while monitoring user activity and financial game data. It includes role-based access, account and user management, report and appeal moderation, blacklists, maintenance controls, configurable whitelists, categories, tags, countries, languages, announcements, game settings, and payment/channel limits. Financial operations cover user bets, income, commissions, service fees, cashback, wallet balances, and balance adjustments in a scalable, multi-currency system with secure authentication and audit-friendly controls.',
    image: 'https://placehold.co/800x600/1e293b/ffffff?text=Voting+Admin',
    techStack: ['React', 'TypeScript', 'Material UI', 'Node.js', 'TypeScript API', 'Multi-currency'],
    privacy: true,
    links: {},
    certificate: '/certificates/voting-music.pdf',
  },
  {
    id: 'ofl-admin',
    title: 'OFL Admin Web',
    subtitle: 'Payments & Card Services Operations Platform',
    description:
      'A back-office platform for managing BusinessFlow digital-payment and card-services operations. It gives teams a centralized workspace to oversee users, KYC applications, issued-card requests, card stock, transactions, fees, currencies, content, and platform settings. Key capabilities include role-based access, secure administrator account controls, customer and KYC review workflows, card applications and transaction management, transaction-history reporting, configurable spending limits and fees, multilingual settings, announcements, banners, and maintenance-mode controls. Its modular, permission-aware design keeps day-to-day financial workflows secure, clear, and manageable.',
    image: 'https://placehold.co/800x600/1e293b/ffffff?text=OFL+Admin',
    techStack: ['React', 'TypeScript', 'React Router', 'Material UI', 'Tailwind CSS', 'Recharts', 'Webpack'],
    privacy: true,
    links: {},
  },
  {
    id: 'chatwoot',
    title: 'Chatwoot Customer Engagement',
    subtitle: 'Open-Source Support Platform',
    description:
      'An open-source, self-hosted customer engagement platform that centralizes messages from web chat, email, WhatsApp, social media, and APIs into a shared inbox. Contributed to the Vue.js frontend with real-time Action Cable integration, deployed with Docker on DigitalOcean/Kubernetes.',
    image: 'https://placehold.co/800x600/1e293b/ffffff?text=Chatwoot',
    techStack: ['Vue.js', 'Ruby on Rails', 'Action Cable', 'Docker', 'TypeScript'],
    privacy: true,
    links: {},
  },
  {
    id: 'ionecards',
    title: 'iOneCards E-Commerce Platform',
    subtitle: 'E-Commerce Platform',
    description:
      'A Cambodia-focused e-commerce platform that connects customers with products, merchants, promotions, vouchers, and rewards. Customers can browse multi-merchant catalogues and stores, discover flash deals and popular products, save items, manage a cart, apply coupons, and complete single-product or multi-merchant orders through ABA Pay, cards, Wing, and Pi Pay, including full and down payments. Account features include authentication with Apple sign-in, order history, reward points, saved products, messages, reviews, followed merchants, profile updates, and help-centre support. The mobile-responsive, PWA-ready experience supports English and Khmer, analytics, and lazy-loaded media.',
    image: '/projects/ionecards.png',
    techStack: ['Nuxt.js 2', 'Vue.js', 'Vuex', 'Axios', 'Bootstrap', 'Vue I18n', 'PWA', 'JWT Authentication', 'iOneCards API'],
    links: {
      live: 'https://www.ionecards.com/',
      github: '',
    },
  },
  {
    id: 'ionecloud',
    title: 'iOneCloud',
    subtitle: 'Cloud Computing & Tech Solutions',
    description:
      'iOneCloud is Cambodia\'s premier cloud service provider, part of the iOne Group. It offers elastic cloud computing products including Elastic Cloud Server (ECS), Elastic IP Address (EIP), Cloud Server Backup Service (CSBS), Elastic Volume Service (EVS), Virtual Private Cloud (VPC), Virtual Firewall (vFW), Security Groups, and Virtual Private Network (VPN). Technology solutions include iOneGPT AI chatbot, SAP ERP hosting, DBaaS, and cPanel web hosting, serving enterprise customers with secure, reliable cloud infrastructure.',
    image: '/projects/ionecloud.png',
    techStack: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    links: {
      live: 'https://ionecloud.com.kh/',
    },
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: ReactIcon },
      { name: 'Vue.js', icon: VueIcon },
      { name: 'Nuxt.js', icon: NuxtIcon },
      { name: 'JavaScript', icon: JavaScriptIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
    ],
  },
  {
    title: 'UI Framework',
    skills: [
      { name: 'TailwindCSS', icon: TailwindIcon },
      { name: 'Vuetify', icon: VuetifyIcon },
      { name: 'Element UI', icon: ElementIcon },
      { name: 'MUI', icon: MuiIcon },
      { name: 'Bootstrap', icon: BootstrapIcon },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP', icon: PhpIcon },
      { name: 'Laravel', icon: LaravelIcon },
      { name: 'Node.js', icon: NodeIcon },
      { name: 'REST APIs', icon: Network },
      { name: 'C#', icon: CSharpIcon },
      { name: 'ASP.NET Core', icon: DotNetIcon },
      { name: 'ASP.NET MVC', icon: DotNetIcon },
      { name: 'Python', icon: PythonIcon },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Jira', icon: JiraIcon },
      { name: 'GitLab', icon: GitLabIcon },
      { name: 'GitHub', icon: GitHub },
      { name: 'Jump Server', icon: Network },
      { name: 'Docker', icon: DockerIcon },
      { name: 'Nginx', icon: NginxIcon },
      { name: 'CI/CD', icon: RefreshCw },
      {name: 'Postman', icon: PostmanIcon },
      { name: 'Swagger', icon: SwaggerIcon },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: MySqlIcon },
      { name: 'SQL Server', icon: SqlServerIcon },
      { name: 'PostgreSQL', icon: Server },
      { name: 'MongoDB', icon: Server },
    ],
  },
  {
    title: 'Messaging & Distributed Systems',
    skills: [
      { name: 'WebSocket', icon: Wifi },
      { name: 'XMPP', icon: Send },
      { name: 'Pusher', icon: PusherIcon },
      { name: 'Microservices', icon: Network },
      { name: 'Monorepo', icon: FolderGit2 },
    ],
  },
  {
    title: 'Methodologies',
    skills: [
      { name: 'Agile', icon: Repeat },
      { name: 'Scrum', icon: Repeat },
    ],
  },
  {
    title: 'AI Tools',
    skills: [
      { name: 'ChatGPT', icon: ChatGptIcon },
      { name: 'GitHub Copilot', icon: CopilotIcon },
      { name: 'Claude', icon: ClaudeIcon },
      { name: 'Gemini', icon: GeminiIcon },
      { name: 'Kilo Code', icon: KiloCodeIcon },
      { name: 'Codex', icon: CodexIcon },
      { name: 'perplexity.ai', icon: PerplexityIcon },
      { name: 'stitch.ai', icon: StitchIcon },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Khmer', icon: Languages },
      { name: 'English', icon: Languages },
    ],
  },
]

// Updated Interface supporting nested achievements
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  achievements: (string | { title: string; items: string[] })[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'pm-fedev',
    role: 'Product Owner and Front-end Developer',
    company: 'Everlast & Apps Dev Co., Ltd',
    location: 'Phnom Penh, Cambodia',
    period: 'Jun 2022 — Present',
    description: '',
    achievements: [
      {
        title: 'Product Owner Responsibilities',
        items: [
          'Worked with stakeholders to understand business needs and requirements.',
          'Turned business requirements into user stories, acceptance criteria, and clear tasks for the development team.',
          'Managed and prioritized the product backlog based on business needs and user priorities.',
          'Helped plan the product roadmap, features, and delivery timelines.',
          'Worked closely with developers, UI/UX designers, QA, and stakeholders to deliver product features.',
          'Used Jira for backlog, sprint, task, and project management and GitLab for version control and development collaboration.',
          'Supported UAT and product testing, collected user feedback, and identified improvements.',
          'Communicated with the development team to clarify requirements and handle changes during development.',
          'Followed up on development progress, issues, and releases to support successful delivery.',
          'Monitored product performance and feedback to identify opportunities for improvement.',
        ],
      },
      {
        title: 'Frontend Developer Responsibilities',
        items: [
          'Developed and maintained responsive web applications using Vue.js, Nuxt.js, React.js, JavaScript, and TypeScript.',
          'Worked on several admin-side projects, developing frontend interfaces based directly on business requirements.',
          'Translated business requirements into practical website layouts, user interfaces, and frontend features, including projects without a dedicated UI/UX designer.',
          'Developed reusable UI components and implemented responsive designs for different screen sizes[cite: 9].',
          'Integrated REST APIs and real-time data using WebSockets and Pusher.',
          'Worked directly with stakeholders to understand feedback and adjust features and interfaces based on business needs.',
          'Troubleshot and debugged frontend issues and optimized applications for performance, usability, stability, and cross-browser compatibility.',
          'Applied SEO and web performance best practices to improve website visibility, performance, and user experience.',
          'Used Git/GitLab for version control and collaborative development.',
        ],
      },
    ],
  },
  {
    id: 'web-dev-ione',
    role: 'Web Developer',
    company: 'iOne Co., Ltd',
    location: 'Phnom Penh, Cambodia',
    period: 'Jan 2020 — May 2022',
    description: '',
    achievements: [
      {
        title: 'Web Developer Responsibilities',
        items: [
          'Built, designed, developed, and modified responsive web applications with Laravel, PHP, MySQL, JavaScript, jQuery, Ajax, HTML/CSS3, Bootstrap, and Nuxt.js',
          'Developed the Nuxt.js iOneCards e-commerce platform, integrating REST APIs',
          'Designed and implemented custom web templates and user interfaces based on business requirements and e-commerce needs, working without a dedicated UI/UX designer.',
          'Translated business and client requirements into practical web layouts and functional features.',
          'Analyzed and designed databases to support application requirements and reliable data operations.',
          'Conducted frontend testing and quality checks independently, identified bugs and errors, and implemented fixes without a dedicated QA team.',
          'Improved website functionality and user experience through iterative feedback, user testing, and bug resolution',
          'Applied SEO best practices to improve web visibility and performance.',
          'Collected user feedback, monitored product performance and KPIs, and continuously improved features based on data and user needs.',
          'Used GitLab for version control, code quality, and collaboration, and Jira for task tracking, project management, and workflow optimization',
        ],
      },
      {
        title: 'Android Developer Responsibilities',
        items: [
          'Developed and maintained the iOneCards Android application using Java and Kotlin.',
          'Designed and implemented application updates and new features based on project requirements.',
          'Tested Android applications independently, identified bugs and errors, and implemented fixes.',
          'Troubleshot and debugged Android application issues to improve stability and user experience.',
          'Worked on Android application development, maintenance, and continuous improvements.',
        ],
      },
    ],
  },
  {
    id: 'web-dev-secondchance',
    role: 'Web Developer',
    company: 'Second Chance Co., Ltd',
    location: 'Phnom Penh, Cambodia',
    period: 'May 2018 — Dec 2019',
    description: ' ',
    achievements: [
      {
        title: 'Web Developer Responsibilities',
        items: [
          'Developed and maintained web applications with ASP.NET MVC, ASP.NET Core, C#, SQL, JavaScript, jQuery, Ajax, and Bootstrap',
          'Designed and developed custom web templates and user interfaces based on project requirements, working without a dedicated UI/UX designer.',
          'Created custom web templates to meet project requirements and improve user experience',
          'Maintained and improved website functionality through iterative feedback and user testing',
          'Tested web applications, identified bugs and errors, and delivered fixes to improve stability',
        ],
      },
      {
        title: 'Blockchain & Web3 Integration',
        items: [
          'Implemented blockchain payment transactions using MetaMask and MyEtherWallet',
          'Contributed to blockchain projects, attended an Intel IoT workshop in Malaysia, and interviewed candidates',
        ],
      },
      {
        title: 'DevOps & Deployment',
        items: [
          'Used GitLab for version control, code quality, and collaboration; optimized workflows.',
          'Utilize GitLab for version control and project management, maintaining code quality and collaboration.',
          'Oversee project deployment to the server, ensuring seamless integration and operation.',
        ],
      },
    ],
  },
  {
    id: 'vr-developer',
    role: 'VR Product Developer',
    company: 'Lastmile Co., Ltd',
    location: 'Phnom Penh, Cambodia',
    period: 'Apr 2017 — Apr 2018',
    description: '',
    achievements: [
      {
        title: 'VR/MR Development & Engineering',
        items: [
          'Spearheaded the end-to-end development of 2D/3D applications for Mobile and Windows platforms and Mixed Reality (VR) experiences using Unreal Engine, aligning technical solutions with user needs and business objectives.',
          'Researched and implemented new Unreal Engine functions and technologies to support project development and improve application capabilities.',
        ],
      },
      {
        title: 'UI/UX Design for Immersive Experiences',
        items: [
          'Led UI/UX design for immersive environments, creating intuitive 2D/3D interfaces, interactive experiences, and animations to improve usability and user engagement.',
        ],
      },
      {
        title: 'Performance Optimization',
        items: [
          'Optimized application performance through lightweight packaging, performance profiling, asset compression, and iterative testing, including frame-rate optimization and resource management.',
        ],
      },
      {
        title: 'Research & Stakeholder Collaboration',
        items: [
          'Researched and learned new technologies, features, and solutions related to real estate, identifying opportunities to improve visualization, interaction, and digital experiences.',
          'Collaborated with stakeholders to understand business requirements and user needs, translating them into practical features and immersive product experiences.',
        ],
      },
    ],
  },
  {
    id: 'ecommerce-freelance',
    role: 'Freelance Web Developer',
    company: 'Norton University',
    location: 'Phnom Penh, Cambodia',
    period: 'Sep 2016 — Sep 2016',
    description: ' ',
    achievements: [
      {
        title: 'E-Commerce Website Development',
        items: [
          'Developed an e-commerce website project for exhibition and school demonstration, based on a construction company concept.',
          'Built product pages and shopping features to demonstrate the online store concept.',
        ],
      },
      {
        title: 'Technologies',
        items: [
          'ASP.NET MVC, C#, SQL, JavaScript, jQuery, Ajax, and Bootstrap',
        ],
      },
    ],
  },
  {
    id: 'game-freelance',
    role: 'Freelance Game Developer',
    company: 'Norton University',
    location: 'Phnom Penh, Cambodia',
    period: 'Oct 2015 — Oct 2015',
    description: ' ',
    achievements: [
      {
        title: 'Game Development',
        items: [
          'Developed an Image Puzzle Game Android app for a school exhibition and project demonstration.',
          'Designed the game interface and implemented interactive puzzle features.',
        ],
      },
      {
        title: 'Technologies',
        items: [
          'Java, Android SDK',
        ],
      },
    ],
  },
];
export const contactInfo: ContactInfo[] = [
  { label: 'Email', value: 'pilasan19@gmail.com', href: 'mailto:pilasan19@gmail.com', icon: Mail },
  { label: 'Phone', value: '0856 421 82', href: 'tel:+85585642182', icon: Phone },
  { label: 'Telegram', value: 'Pila Sann', href: 'https://t.me/pilasan19', icon: Telegram },
  { label: 'LinkedIn', value: 'pila San', href: 'https://linkedin.com/in/sanpila', icon: LinkedIn },
  { label: 'Location', value: 'Chrang ChamresII,Russey Keo, Phnom Penh', icon: MapPin },
]

export const certificates: Certificate[] = [
  {
    id: 'scrum-master',
    title: 'Agile Scrum Master',
    issuer: 'Online Course',
    date: 'Feb 2024',
    image: '/certificates/scrum-master.jpg',
  },
  {
    id: 'product-management',
    title: 'Project Management',
    issuer: 'Sunrise Institute of Technology',
    date: 'Aug 2023',
    image: '/certificates/pm.jpg',
  },
  {
    id: 'practical-leadership',
    title: 'Practical Leadership Skills',
    issuer: 'Online Course',
    date: 'Dec 2024',
    image: '/certificates/leadership.jpg',
  },
  {
    id: 'class-monitor',
    title: 'Outstanding Class Monitor',
    issuer: 'Norton University',
    date: '2015-2016',
    image: '/certificates/class-monitor.jpg',
  },
  {
    id: 'outstanding-student',
    title: 'Outstanding Student Award',
    issuer: 'Norton University',
    date: '2015-2016',
    image: '/certificates/outstanding.jpg',
  },
]

export const personalInfo = {
  name: 'San Pila',
  title: 'Product Owner | Front-end Developer | Web Developer',
  tagline: 'Transforming Business & User Needs Into Digital Products',
  bio: '',
  bioLong: `Experienced in product management, product development, frontend development, and web applications. Skilled in translating business and user needs into clear product requirements, user stories, acceptance criteria, roadmaps, and prioritized backlogs. Experienced in Agile/Scrum, stakeholder collaboration, product testing, UAT, and continuous product improvement.

Strong hands-on technical experience with Vue.js, Nuxt.js, React.js, JavaScript, TypeScript, API integration, and responsive web application development, enabling effective collaboration between business and engineering teams. Experienced in supporting digital products throughout the full product lifecycle, from requirements and planning through development, testing, deployment, and continuous improvement.`,
  profileImage: '/personalInfo/profileImage.png',
}

export const productSkills: ProductSkill[] = [
  {
    id: 'strategic-thinking',
    name: 'Strategic Thinking & Vision',
    level: 70,
    description: 'Defining product vision, roadmap priorities, and aligning feature development with business goals',
  },
  {
    id: 'communication',
    name: 'Communication & Collaboration',
    level: 70,
    description: 'Cross-functional teamwork, stakeholder alignment, and clear technical/product communication',
  },
  {
    id: 'documentary',
    name: 'Documentation',
    level: 60,
    description: 'User stories, acceptance criteria, project documentation, and process standardization',
  },
  {
    id: 'research',
    name: 'Research & Analysis',
    level: 80,
    description: 'Market research, user analysis, feature iteration, and data-driven product decisions',
  },
]

export const education: EducationItem[] = [
  {
    id: 'pannasastra',
    degree: 'English short courses',
    institution: 'Pannasastra University of Cambodia (PUC)',
    period: '2015 — 2017',
    type: 'degree',
  },
  {
    id: 'norton',
    degree: 'Computer Science Bachelor Degree',
    institution: 'Norton University',
    period: '2012 — 2016',
    description: 'Also Outstanding student, class monitor',
    type: 'degree',
  },
  {
    id: 'kampong-trabek',
    degree: 'Science | Highschool',
    institution: 'Kampong Trabek High School',
    period: '2009 — 2012',
    type: 'degree',
  },
  {
    id: 'ms-sql',
    degree: 'Microsoft Visual C# Crystal Report & SQL Server',
    institution: 'Vocation Training Center',
    period: 'Jan 2016 — Apr 2016',
    type: 'training',
  },
  {
    id: 'project-management',
    degree: 'Project Management',
    institution: 'Sunrise Institute of Technology',
    period: 'Aug 2023',
    type: 'course',
  },
  {
    id: 'methodology',
    degree: 'Methodology And Application',
    institution: 'Online Course',
    period: 'Apr 2024',
    type: 'course',
  },
  {
    id: 'practical-leadership',
    degree: 'Practical Leadership Skills',
    institution: 'Online Course',
    period: 'Dec 2024',
    type: 'course',
  },
  {
    id: 'agile-scrum-master',
    degree: 'Agile Scrum Master',
    institution: 'Online Course',
    period: 'Feb 2024',
    type: 'course',
  },
]
