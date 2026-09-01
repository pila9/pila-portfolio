import type { Component } from 'vue'
import {
  GitBranch,
  Code,
  FileCode,
  Palette,
  Database,
  Server,
  Hash,
  Cloud,
  GitCommit,
  GitPullRequest,
  LayoutDashboard,
  Layers,
  Zap,
  Shield,
  Users,
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

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/johndoe', icon: GitHub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/johndoe', icon: LinkedIn },
  { label: 'Twitter', href: 'https://x.com/johndoe', icon: Twitter },
  { label: 'Email', href: 'mailto:john.doe@example.com', icon: Mail },
]

export const projects: Project[] = [
  {
    id: 'e-commerce',
    title: 'ShopVue E-Commerce',
    description:
      'A full-featured e-commerce platform built with Vue 3, featuring real-time cart updates, Stripe payment integration, and a responsive product catalog.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
    techStack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Node.js'],
    links: {
      live: 'https://shopvue-demo.vercel.app',
      github: 'https://github.com/johndoe/shopvue',
    },
  },
  {
    id: 'taskflow',
    title: 'TaskFlow Dashboard',
    description:
      'A collaborative task management dashboard with drag-and-drop Kanban boards, real-time team collaboration, and progress analytics.',
    image:
      'https://images.unsplash.com/photo-1507668604237-dcdda5d76c86?w=800&h=600&fit=crop',
    techStack: ['Vue 3', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Firebase'],
    links: {
      live: 'https://taskflow-demo.vercel.app',
      github: 'https://github.com/johndoe/taskflow',
    },
  },
  {
    id: 'readwise',
    title: 'ReadWise Mobile Reader',
    description:
      'A progressive web app for reading and saving articles offline with synced bookmarks, reading progress, and a clean distraction-free interface.',
    image:
      'https://images.unsplash.com/photo-1481627833968-3847b6f51c8c?w=800&h=600&fit=crop',
    techStack: ['Vue 3', 'PWA', 'Tailwind CSS', 'IndexedDB', 'TypeScript'],
    links: {
      live: 'https://readwise-demo.vercel.app',
      github: 'https://github.com/johndoe/readwise',
    },
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Vue.js', icon: Code },
      { name: 'TypeScript', icon: FileCode },
      { name: 'Tailwind CSS', icon: Palette },
      { name: 'JavaScript', icon: Code },
      { name: 'HTML5', icon: FileCode },
      { name: 'CSS3', icon: Palette },
      { name: 'React', icon: Code },
      { name: 'State Management', icon: Layers },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Express', icon: Server },
      { name: 'REST APIs', icon: GitPullRequest },
      { name: 'GraphQL', icon: Hash },
      { name: 'PostgreSQL', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'Redis', icon: Database },
      { name: 'Serverless', icon: Cloud },
    ],
  },
  {
    title: 'Tools & Methods',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'Vite', icon: Zap },
      { name: 'Vitest', icon: Shield },
      { name: 'CI/CD', icon: GitCommit },
      { name: 'Docker', icon: LayoutDashboard },
      { name: 'Figma', icon: Palette },
      { name: 'TDD', icon: GitPullRequest },
      { name: 'Agile', icon: Users },
    ],
  },
]

export const experiences: ExperienceItem[] = [
  {
    id: 'senior-dev',
    role: 'Senior Frontend Engineer',
    company: 'TechVision Labs',
    location: 'San Francisco, CA',
    period: 'Mar 2022 — Present',
    description:
      'Led a team of 6 frontend engineers building a design system used across 15+ products. Spearheaded migration from Vue 2 to Vue 3, improving runtime performance by 40%.',
    achievements: [
      'Built a component library adopted across 15+ products, reducing dev time by 30%',
      'Migrated Vue 2 codebase to Vue 3 + Composition API, improving first-page load by 40%',
      'Implemented automated accessibility testing pipeline, achieving WCAG 2.1 AA compliance',
      'Mentored 8 junior engineers and introduced code review standards',
    ],
  },
  {
    id: 'mid-dev',
    role: 'Frontend Engineer',
    company: 'CloudNova Solutions',
    location: 'Seattle, WA',
    period: 'Jun 2020 — Feb 2022',
    description:
      'Developed scalable dashboards for enterprise clients using Vue, TypeScript, and D3.js. Collaborated closely with product and design teams to ship features rapidly.',
    achievements: [
      'Built real-time analytics dashboards serving 500K+ monthly active users',
      'Optimized rendering performance for data-heavy visualizations using virtual scrolling',
      'Reduced bundle size by 35% through code splitting and lazy loading strategies',
      'Implemented comprehensive unit and E2E test coverage (90%+)',
    ],
  },
  {
    id: 'jr-dev',
    role: 'Junior Frontend Developer',
    company: 'StartUpXYZ',
    location: 'Austin, TX',
    period: 'Sep 2018 — May 2020',
    description:
      'Built and maintained responsive web applications using modern JavaScript frameworks. Worked closely with designers and backend engineers in an agile environment.',
    achievements: [
      'Developed 12+ responsive web apps shipped to production',
      'Implemented CI/CD pipelines reducing deploy time from 30min to 5min',
      'Contributed to open-source design system with 200+ stars on GitHub',
      'Achieved 95%+ Lighthouse performance scores across all projects',
    ],
  },
]

export const contactInfo: ContactInfo[] = [
  { label: 'Email', value: 'john.doe@example.com', href: 'mailto:john.doe@example.com', icon: Mail },
  { label: 'Location', value: 'San Francisco, CA, USA', icon: MapPin },
  { label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567', icon: Phone },
]

export const personalInfo = {
  name: 'John Doe',
  title: 'Senior Frontend Engineer',
  tagline: 'Crafting Accessible, Modern Web Applications',
  bio: 'I build accessible, performant, and modern web applications using Vue.js, TypeScript, and Tailwind CSS. With 6+ years of experience, I specialize in creating scalable frontend architectures and delightful user experiences.',
  bioLong:
    "I'm a Senior Frontend Engineer based in San Francisco with over 6 years of experience building web applications for startups and enterprise clients. My expertise spans Vue.js, TypeScript, and modern CSS frameworks, with a strong focus on accessibility and performance.",
  email: 'john.doe@example.com',
}
