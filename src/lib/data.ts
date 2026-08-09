import {
  Code2,
  Database,
  GitBranch,
  Globe,
  Layout,
  Server,
  Settings,
  Shield,
  Smartphone,
  Terminal,
  type LucideIcon,
} from "lucide-react";

export const personalInfo = {
  name: "Alkama Umar Liman",
  title: "Python Django Backend Developer",
  subtitle: "Building secure, scalable, and modern web applications.",
  location: "Nigeria",
  email: "alkamaumarliman@gmail.com",
  phone: "+234 800 000 0000",
  whatsapp: "+234 800 000 0000",
  github: "https://github.com/alkama2022",
  linkedin: "https://linkedin.com/in/alkamaumarliman",
  resumeUrl: "/resume.pdf",
  bio: `I am a dedicated Python Django Backend Developer and Information Technology student based in Nigeria. I specialize in building secure, scalable, and modern web applications using Python, Django, Django REST Framework, and PostgreSQL. With a strong foundation in software engineering, database systems, and system analysis, I am passionate about solving real-world problems through clean code and thoughtful architecture. I am actively seeking opportunities to grow my skills, contribute to meaningful projects, and collaborate with teams that value innovation and quality.`,
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "GitHub", href: personalInfo.github, icon: "Github" },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: "Linkedin" },
];

export interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90, icon: Terminal },
      { name: "JavaScript", level: 75, icon: Code2 },
      { name: "TypeScript", level: 70, icon: Code2 },
      { name: "SQL", level: 80, icon: Database },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Django", level: 92, icon: Server },
      { name: "Django REST Framework", level: 88, icon: Server },
      { name: "REST APIs", level: 85, icon: Globe },
      { name: "JWT Authentication", level: 80, icon: Shield },
      { name: "PostgreSQL", level: 82, icon: Database },
      { name: "MySQL", level: 70, icon: Database },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 78, icon: Layout },
      { name: "Tailwind CSS", level: 85, icon: Layout },
      { name: "HTML5", level: 90, icon: Globe },
      { name: "CSS3", level: 85, icon: Globe },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: 85, icon: GitBranch },
      { name: "GitHub", level: 88, icon: GitBranch },
      { name: "VS Code", level: 90, icon: Code2 },
      { name: "Postman", level: 80, icon: Smartphone },
      { name: "Docker", level: 55, icon: Settings },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  github: string;
  live: string;
  category: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "vetlink",
    title: "VetLink",
    description:
      "A digital veterinary and agriculture platform that connects farmers, veterinarians, clinics, and laboratories through animal health management, disease reporting, and agricultural solutions.",
    technologies: ["Django", "Django REST Framework", "React", "Vite"],
    features: [
      "Farmer and veterinarian accounts",
      "Animal patient and health records",
      "Clinic, laboratory, and inventory management",
      "Appointments, billing, and disease reporting",
    ],
    image: "/images/project-vetlink.jpg",
    github: "https://github.com/alkama2022/vetlink",
    live: "https://alkama2022-vetlinkfrontendkano.vercel.app/",
    category: "Web",
    featured: true,
  },
  {
    id: "tyrehub-automobile",
    title: "TyreHub",
    description:
      "A full-featured e-commerce and inventory management system for automobile tyre shops. It includes product catalog, shopping cart, order management, and an admin dashboard for inventory control.",
    technologies: ["Django", "Django REST Framework", "PostgreSQL", "React", "Tailwind CSS"],
    features: [
      "Inventory management",
      "Product catalog with search",
      "Shopping cart and checkout",
      "Order tracking",
      "Authentication and admin dashboard",
    ],
    image: "/images/project-tyrehub.jpg",
    github: "https://github.com/alkama2022/TyreHub",
    live: "https://alkama-sage.vercel.app/",
    category: "E-Commerce",
    featured: true,
  },
];

export const allTechnologies = Array.from(new Set(projects.flatMap((p) => p.technologies))).sort();

export const allCategories = Array.from(new Set(projects.map((p) => p.category))).sort();

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  type: "work" | "training" | "project" | "open-source";
}

export const experience: ExperienceItem[] = [
  {
    id: "siwes-training",
    period: "2024",
    title: "SIWES Industrial Training",
    organization: "IT Company / Institution",
    description:
      "Completed industrial training focused on software development, database management, and real-world project exposure. Gained hands-on experience with backend systems and collaborative development workflows.",
    type: "training",
  },
  {
    id: "academic-projects",
    period: "2023 — Present",
    title: "Academic Projects",
    organization: "University",
    description:
      "Built multiple academic projects covering operating systems, networking, database systems, software engineering, and system analysis and design. Applied theoretical knowledge to practical software solutions.",
    type: "project",
  },
  {
    id: "freelance-projects",
    period: "2023 — Present",
    title: "Freelance Projects",
    organization: "Self-employed",
    description:
      "Developed backend systems and APIs for small businesses and clients. Delivered solutions for inventory management, e-commerce, and data-driven applications using Django and PostgreSQL.",
    type: "work",
  },
  {
    id: "open-source",
    period: "Ongoing",
    title: "Open Source Contributions",
    organization: "GitHub",
    description:
      "Actively contributing to open-source Django and Python projects. Engaging with the community through issue reporting, documentation improvements, and small feature contributions.",
    type: "open-source",
  },
];

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  coursework: string[];
}

export const education: EducationItem[] = [
  {
    id: "bsc-it",
    degree: "B.Sc. Information Technology",
    institution: "University in Nigeria",
    period: "2022 — Present",
    description:
      "Pursuing a Bachelor of Science in Information Technology with a focus on software engineering, backend development, and database systems.",
    coursework: [
      "Operating Systems",
      "Networking",
      "Database Systems",
      "Software Engineering",
      "System Analysis and Design",
    ],
  },
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: "completed" | "in-progress" | "planned";
}

export const certifications: Certification[] = [
  {
    id: "python-cert",
    title: "Python for Backend Development",
    issuer: "Planned / In Progress",
    date: "2025",
    status: "planned",
  },
  {
    id: "django-cert",
    title: "Django Web Development Certification",
    issuer: "Planned / In Progress",
    date: "2025",
    status: "planned",
  },
  {
    id: "postgres-cert",
    title: "PostgreSQL Database Fundamentals",
    issuer: "Planned / In Progress",
    date: "2025",
    status: "planned",
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Alkama is a dedicated backend developer with a strong grasp of Django and database design. He delivers clean, well-structured code and is always eager to learn.",
    author: "Future Client / Colleague",
    role: "Software Engineer",
    avatar: "",
  },
  {
    id: "testimonial-2",
    quote:
      "Working with Alkama was a great experience. His attention to detail and problem-solving skills made our project successful.",
    author: "Future Client / Mentor",
    role: "Project Manager",
    avatar: "",
  },
  {
    id: "testimonial-3",
    quote:
      "A talented developer who combines technical skills with a strong work ethic. I highly recommend him for backend and full-stack projects.",
    author: "Future Colleague",
    role: "Tech Lead",
    avatar: "",
  },
];

export interface GitHubStat {
  label: string;
  value: string;
  color: string;
}

export const githubStats: GitHubStat[] = [
  { label: "Public Repositories", value: "15+", color: "#3b82f6" },
  { label: "Total Contributions", value: "200+", color: "#e85d3a" },
  { label: "Primary Language", value: "Python", color: "#fbbf24" },
  { label: "Open Source PRs", value: "10+", color: "#10b981" },
];

export const githubLanguages = [
  { name: "Python", value: 60, color: "#3b82f6" },
  { name: "TypeScript", value: 20, color: "#e85d3a" },
  { name: "JavaScript", value: 10, color: "#fbbf24" },
  { name: "HTML/CSS", value: 8, color: "#10b981" },
  { name: "SQL", value: 2, color: "#8b5cf6" },
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Getting Started with Django REST Framework",
    excerpt:
      "A beginner-friendly guide to building RESTful APIs with Django REST Framework, serializers, viewsets, and routers.",
    date: "2025-06-15",
    readTime: "6 min read",
    tags: ["Django", "API", "Backend"],
    slug: "getting-started-with-django-rest-framework",
  },
  {
    id: "blog-2",
    title: "Building Secure APIs with JWT Authentication",
    excerpt:
      "Learn how to implement JWT authentication in your Django API to protect endpoints and manage user sessions securely.",
    date: "2025-06-01",
    readTime: "8 min read",
    tags: ["JWT", "Security", "Django"],
    slug: "building-secure-apis-with-jwt-authentication",
  },
  {
    id: "blog-3",
    title: "Database Design Tips for Django Developers",
    excerpt:
      "Best practices for designing relational databases with Django and PostgreSQL, from normalization to indexing.",
    date: "2025-05-20",
    readTime: "7 min read",
    tags: ["PostgreSQL", "Database", "Django"],
    slug: "database-design-tips-for-django-developers",
  },
];

export const careerGoals = [
  "Build production-grade backend systems that solve real-world problems",
  "Contribute to open-source projects and the global developer community",
  "Grow into a senior backend engineer and technical lead",
  "Mentor aspiring developers from Nigeria and beyond",
  "Master cloud infrastructure, DevOps, and system design",
];
