import type { Component } from 'vue'
import {
  GitBranch,
  Code,
  FileCode,
  Palette,
  Database,
  Server,
  LayoutDashboard,
  Users,
  Globe,
  Mail,
  MapPin,
  Phone,
} from '@lucide/vue'
import { GitHub, LinkedIn, Twitter } from '@/icons/brandIcons'

export interface SocialLink {
  label: string
  href: string
  icon: Component
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
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

export interface ExperienceItem {
  id: string
  role: string
  company: string
  location: string
  period: string
  description: string
  achievements: string[]
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
  type: 'degree' | 'training' | 'course'
}

export interface Reference {
  name: string
  title: string
  company: string
  phone: string
  email: string
  relationship: string
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/sanpila', icon: GitHub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sanpila', icon: LinkedIn },
  { label: 'Twitter', href: 'https://x.com/sanpila', icon: Twitter },
  { label: 'Email', href: 'mailto:pilasan19@gmail.com', icon: Mail },
]

export const projects: Project[] = [
  {
    id: 'orkun-marketplace',
    title: 'Orkun Service Marketplace',
    description:
      'A two-sided local-services marketplace with a mobile mini app, admin dashboard, and landing website. Built as Product Manager/Frontend Developer, I led the product direction and built the customer mini app and admin web platform.',
    image: 'https://placehold.co/800x600/1e293b/ffffff?text=Orkun+Marketplace',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'REST API'],
    links: {
      live: 'https://orkun-app.com',
      github: 'https://github.com/sanpila/orkun',
    },
    certificate: '/certificates/orkun-project.pdf',
  },
  {
    id: 'umpay',
    title: 'UMPay Digital Wallet Platform',
    description:
      'A comprehensive digital payment ecosystem including admin portal, payment gateway checkout, customer wallet web app, and marketing landing site. Built as Product Manager and Frontend Developer across all four web products.',
    image: 'https://placehold.co/800x600/1e293b/ffffff?text=UMPay+Wallet',
    techStack: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'Element UI'],
    links: {
      live: 'https://umpay.com',
      github: 'https://github.com/sanpila/umpay',
    },
    certificate: '/certificates/umpay-project.pdf',
  },
  {
    id: 'ionecards',
    title: 'iOneCards E-Commerce & Loyalty',
    description:
      'A Cambodia-focused e-commerce and loyalty web application connecting customers with products, merchants, promotions, vouchers, and rewards. Built as a multilingual Nuxt.js single-page application with PWA support.',
    image: 'https://placehold.co/800x600/1e293b/ffffff?text=iOneCards',
    techStack: ['Nuxt.js 2', 'Vue.js', 'Vuex', 'Tailwind CSS', 'Bootstrap'],
    links: {
      live: 'https://ione-cards.com',
      github: 'https://github.com/sanpila/ionecards',
    },
  },
  {
    id: 'gorden-web',
    title: 'Gorden Web – Music & Audiobook Discovery',
    description:
      'A multilingual, responsive web platform for browsing music, artists, albums, audiobooks, and top charts. Built with Nuxt.js and Vue.js, connected to the Gorden/E-Play mobile ecosystem via deep links and QR codes.',
    image: 'https://placehold.co/800x600/1e293b/ffffff?text=Gorden+Web',
    techStack: ['Nuxt.js', 'Vue.js', 'Vuetify', 'Tailwind CSS', 'REST API'],
    links: {
      live: 'https://gorden.com',
      github: 'https://github.com/sanpila/gorden-web',
    },
  },
  {
    id: 'chatwoot',
    title: 'Chatwoot Customer Engagement',
    description:
      'An open-source, self-hosted customer engagement platform that centralizes messages from web chat, email, WhatsApp, social media, and APIs into a shared inbox. Contributed to the Vue.js frontend with real-time Action Cable integration.',
    image: 'https://placehold.co/800x600/1e293b/ffffff?text=Chatwoot',
    techStack: ['Vue.js', 'Ruby on Rails', 'Action Cable', 'Docker', 'TypeScript'],
    links: {
      live: 'https://chatwoot.org',
      github: 'https://github.com/sanpila/chatwoot',
    },
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: Code },
      { name: 'Vue.js', icon: Code },
      { name: 'Nuxt.js', icon: Code },
      { name: 'Next.js', icon: Code },
      { name: 'JavaScript', icon: FileCode },
      { name: 'TypeScript', icon: FileCode },
    ],
  },
  {
    title: 'UI Framework',
    skills: [
      { name: 'Tailwind CSS', icon: Palette },
      { name: 'Vuetify', icon: Palette },
      { name: 'Element UI', icon: Palette },
      { name: 'MUI', icon: Palette },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP', icon: Server },
      { name: 'Laravel', icon: Server },
      { name: 'MySQL', icon: Database },
      { name: 'Node.js', icon: Server },
      { name: 'REST APIs', icon: Server },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitLab', icon: GitBranch },
      { name: 'GitHub', icon: GitBranch },
      { name: 'Jira', icon: LayoutDashboard },
      { name: 'Docker', icon: Server },
    ],
  },
  {
    title: 'Methodologies',
    skills: [
      { name: 'Agile', icon: Users },
      { name: 'Scrum', icon: Users },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Khmer', icon: Globe },
      { name: 'English', icon: Globe },
    ],
  },
]

export const experiences: ExperienceItem[] = [
  {
    id: 'pm-fedev',
    role: 'Product Manager / Front-end Developer',
    company: 'Everlast & Apps Dev Co., Ltd',
    location: 'Phnom Penh, Cambodia',
    period: 'Jun 2022 — Present',
    description:
      'Led product direction for BusinessFlow (Orkun), a service marketplace connecting customers with verified local service providers. Built responsive web applications using Vue.js, Nuxt.js, and React.js. Spearheaded cross-functional collaboration between engineering, design, and operations teams.',
    achievements: [
      'Led end-to-end product lifecycle for Orkun marketplace – discovery, booking, vendor fulfillment, payment, and review – across customer, admin, and marketing platforms',
      'Developed and maintained dynamic web applications using Vue.js, Nuxt.js, and React.js with focus on performance, responsiveness, and scalability',
      'Conducted thorough testing, identified bugs, and performed regular maintenance to enhance application functionality and stability',
      'Applied SEO best practices to improve web visibility and traffic',
      'Managed product backlog, defined user stories, and aligned feature development with stakeholder needs',
      'Optimized team workflows using Jira (Agile task tracking) and GitLab (version control)',
    ],
  },
  {
    id: 'web-dev-ione',
    role: 'Web Developer',
    company: 'iOne Co., Ltd',
    location: 'Phnom Penh, Cambodia',
    period: 'Jan 2020 — May 2022',
    description:
      'Developed responsive web applications and e-commerce platforms. Worked extensively with Laravel, PHP, MySQL, Vue.js, Nuxt.js, and JavaScript. Also gained experience in Android development with Java and Kotlin.',
    achievements: [
      'Built Nuxt.js e-commerce and loyalty platform for iOneCards with multilingual (English/Khmer) support and PWA capabilities',
      'Designed and implemented custom web templates to meet client requirements, enhancing UX and project deliverables',
      'Applied SEO best practices and iterative user testing to improve website functionality and user experience',
      'Managed version control and project workflow using GitLab and Jira',
      'Collaborated with marketing and sales teams to align web features with business goals',
    ],
  },
  {
    id: 'web-dev-secondchance',
    role: 'Web Developer',
    company: 'Second Chance Co., Ltd',
    location: 'Phnom Penh, Cambodia',
    period: 'May 2018 — Dec 2019',
    description:
      'Built web applications using ASP.NET MVC, ASP.NET Core, C#, SQL, JavaScript, jQuery, Ajax, and Bootstrap. Worked on blockchain payment integration with MetaMask and MetaMask wallet integration.',
    achievements: [
      'Developed and maintained responsive web applications using ASP.NET MVC, ASP.NET Core, C#, and SQL Server',
      'Implemented blockchain transaction processing with MetaMask and MetaMask wallet for payment functionality',
      'Designed custom web templates enhancing user experience and project deliverables',
      'Applied SEO best practices and iterative testing to optimize website functionality',
      'Managed version control using GitLab for code quality and team collaboration',
    ],
  },
  {
    id: 'vr-developer',
    role: 'VR Product Developer',
    company: 'Lastmile Co., Ltd',
    location: 'Phnom Penh, Cambodia',
    period: 'Apr 2017 — Apr 2018',
    description:
      'Spearheaded end-to-end development of 2D/3D applications (Mobile/Windows) and Mixed Reality (VR) experiences. Led UI/UX design for immersive environments, creating intuitive interfaces and animations to enhance user engagement.',
    achievements: [
      'Led full lifecycle development of 2D/3D applications for Mobile and Windows platforms',
      'Designed UI/UX for immersive VR environments with intuitive interfaces and animations',
      'Optimized performance through lightweight packaging, profiling, and iterative testing (frame rate optimization, asset compression)',
      'Conducted research on new technologies related to real estate VR applications',
    ],
  },
  {
    id: 'ecommerce-freelance',
    role: 'E-Commerce & Digital Product Development',
    company: 'Not on University',
    location: 'Phnom Penh, Cambodia',
    period: 'Sep 2016 — Sep 2016',
    description:
      'Led end-to-end development of Angkor Color Construction online shop and an exhibition website. Designed customer-centric e-commerce platform to drive sales and user engagement.',
    achievements: [
      'Led end-to-end development of online e-commerce platform for Angkor Color Construction',
      'Built and optimized exhibition website to showcase products, improve brand visibility, and generate leads',
      'Collaborated with marketing and sales teams to align web features with business objectives',
    ],
  },
]

export const contactInfo: ContactInfo[] = [
  { label: 'Email', value: 'pilasan19@gmail.com', href: 'mailto:pilasan19@gmail.com', icon: Mail },
  { label: 'Location', value: 'Chamkar, Russia Keo, Phnom Penh, Cambodia', icon: MapPin },
  { label: 'Phone', value: '0856 421 82', href: 'tel:+85585642182', icon: Phone },
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
    issuer: 'Pannasastra University of Cambodia',
    date: '2016',
    image: '/certificates/class-monitor.jpg',
  },
  {
    id: 'outstanding-student',
    title: 'Outstanding Student Award',
    issuer: 'Norton University',
    date: '2013',
    image: '/certificates/outstanding.jpg',
  },
]

export const personalInfo = {
  name: 'San Pila',
  title: 'Product Owner / Front-end Developer',
  tagline: 'Building Scalable Web Applications & Digital Products',
  bio: 'I build scalable, performant web applications using Vue.js, React, and TypeScript. As a Product Owner and Front-end Developer, I bridge engineering and business to deliver user-focused digital products.',
  bioLong:
    "I'm a Product Owner and Front-end Developer based in Phnom Penh, Cambodia, with over 6 years of experience building web applications for fintech platforms and digital marketplaces. My expertise spans Vue.js, React, Nuxt.js, TypeScript, and Tailwind CSS, with a strong focus on performance, accessibility, and cross-functional product delivery.",
  email: 'pilasan19@gmail.com',
}

export const productSkills: ProductSkill[] = [
  {
    id: 'strategic-thinking',
    name: 'Strategic Thinking & Vision',
    level: 80,
    description: 'Defining product vision, roadmap priorities, and aligning feature development with business goals',
  },
  {
    id: 'communication',
    name: 'Communication & Collaboration',
    level: 80,
    description: 'Cross-functional teamwork, stakeholder alignment, and clear technical/product communication',
  },
  {
    id: 'documentary',
    name: 'Documentation',
    level: 80,
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
    degree: 'Computer Science Bachelor Degree',
    institution: 'Pannasastra University of Cambodia (PUC)',
    period: '2015 — 2017',
    description: 'Also took English short courses.',
    type: 'degree',
  },
  {
    id: 'norton',
    degree: 'Science, Also Outstanding student, class monitor',
    institution: 'Norton University',
    period: '2012 — 2016',
    type: 'degree',
  },
  {
    id: 'kampong-trabek',
    degree: 'Science',
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

export const reference: Reference = {
  name: 'Sokneang Ty',
  title: 'Production Manager / UXUI Lead',
  company: 'Everlast & Apps Dev Co., Ltd',
  phone: '+855 12 789 710',
  email: 'sokneang0110@gmail.com',
  relationship: 'Former colleague and direct report',
}
