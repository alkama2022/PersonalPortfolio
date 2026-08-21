import {
  AppWindow,
  Boxes,
  Braces,
  Code2,
  Database,
  DatabaseZap,
  GitBranch,
  Globe,
  Layout,
  LayoutDashboard,
  Lightbulb,
  Layers,
  Rocket,
  Server,
  Settings,
  Shield,
  Smartphone,
  Terminal,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const personalInfo = {
  name: "Alkama Umar Liman",
  title: "Backend & Desktop Developer",
  subtitle: "Building secure, scalable web and desktop applications.",
  location: "Nigeria",
  email: "alkalineumarliman@gmail.com",
  phone: "+234 816 098 3789",
  whatsapp: "+234 812 657 3474",
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
  { label: "Services", href: "/#services" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "GitHub", href: personalInfo.github, icon: "Github" },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: "Linkedin" },
];

export const siteUrl = "https://personal-portfolio-mevs-me.vercel.app";

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
  {
    title: "Desktop Development",
    skills: [
      { name: "C#", level: 70, icon: Braces },
      { name: ".NET", level: 65, icon: Boxes },
      { name: "WPF", level: 60, icon: AppWindow },
      { name: "MVVM", level: 60, icon: Workflow },
      { name: "Entity Framework Core", level: 65, icon: DatabaseZap },
      { name: "SQL Server", level: 70, icon: Database },
    ],
  },
];

export interface Service {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  interestSubject: string;
}

export const services: Service[] = [
  {
    id: "custom-web-app",
    name: "Custom Web App",
    price: "$1,500 – $3,000",
    description:
      "Complete custom web applications built with Django and React, including authentication, database integration, APIs, responsive interfaces, and production deployment.",
    features: [
      "Django",
      "React",
      "Authentication",
      "Database",
      "REST APIs",
      "Responsive UI",
      "Deployment",
    ],
    icon: AppWindow,
    interestSubject: "I'm interested in a Custom Web App.",
  },
  {
    id: "api-development",
    name: "API Development",
    price: "$500 – $1,200",
    description:
      "Secure and scalable REST APIs for web and mobile applications, built with Django REST Framework and designed for reliable frontend integration.",
    features: [
      "Django REST Framework",
      "REST APIs",
      "Authentication",
      "Permissions",
      "Database integration",
      "API documentation",
      "Production deployment",
    ],
    icon: Globe,
    interestSubject: "I'm interested in API Development.",
  },
  {
    id: "admin-dashboard",
    name: "Admin Dashboard",
    price: "$800 – $2,000",
    description:
      "Professional admin dashboards for managing data, users, business operations, analytics, and CRUD workflows.",
    features: [
      "Data management",
      "Charts",
      "Analytics",
      "CRUD",
      "Authentication",
      "Role-based permissions",
      "Responsive dashboard",
    ],
    icon: LayoutDashboard,
    interestSubject: "I'm interested in an Admin Dashboard.",
  },
];

export interface WhyWorkWithMeItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyWorkWithMe: WhyWorkWithMeItem[] = [
  {
    title: "Full-Stack Development",
    description: "Frontend and backend development under one workflow.",
    icon: Layers,
  },
  {
    title: "API-First Architecture",
    description: "Clean APIs designed for reliable integrations.",
    icon: Workflow,
  },
  {
    title: "Production Ready",
    description: "Deployment, security, and performance considered from the beginning.",
    icon: Rocket,
  },
  {
    title: "Problem Solving",
    description: "Focus on solving the actual business problem, not just writing code.",
    icon: Lightbulb,
  },
  {
    title: "Maintainable Code",
    description: "Clean and scalable architecture that can grow with the project.",
    icon: Braces,
  },
];

export interface CaseStudyOverviewItem {
  label: string;
  text: string;
}

export interface CaseStudyProblem {
  title: string;
  description: string;
  consequence: string;
}

export interface CaseStudySolution {
  problem: string;
  solution: string;
  result: string;
}

export interface ArchitectureItem {
  title: string;
  description: string;
}

export interface TechStackGroup {
  label: string;
  items: string[];
}

export interface CaseStudyChallenge {
  title: string;
  description: string;
}

export interface OvercomingItem {
  challenge: string;
  how: string;
}

export interface CaseStudy {
  summary: string;
  overview: CaseStudyOverviewItem[];
  why: string[];
  opportunity: string;
  problems: CaseStudyProblem[];
  solutions: CaseStudySolution[];
  howWeSolvedIt: string[];
  architecture: ArchitectureItem[];
  techStack: TechStackGroup[];
  challenges: CaseStudyChallenge[];
  overcoming: OvercomingItem[];
  results: string[];
  lessons: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  live: string;
  category: string;
  featured: boolean;
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  {
    id: "vetlink",
    title: "VetLink",
    description:
      "A digital veterinary and agriculture platform that connects farmers, veterinarians, clinics, and laboratories through animal health management, disease reporting, and agricultural solutions.",
    technologies: ["Django", "Django REST Framework", "React", "Vite"],
    features: [
      "Role-based portals for farmers, clinics, laboratories, and government officers",
      "Animal patient and health records",
      "Guided disease reporting with GPS location and photo evidence",
      "Clinic, laboratory, and inventory management",
      "Appointments, billing, and disease reporting",
      "WhatsApp and Hausa reporting channel for farmers",
      "Escalation chain from field report to state outbreak response",
    ],
    image: "/images/project-vetlink.jpg",
    live: "https://alkama2022-vetlinkfrontendkano.vercel.app/",
    category: "Web",
    featured: true,
    caseStudy: {
      summary:
        "VetLink is a digital veterinary and agriculture platform that connects farmers, veterinarians, clinics, laboratories, and government surveillance officers through animal health management, disease reporting, and agricultural solutions.",
      overview: [
        {
          label: "What it is",
          text: "VetLink is a digital veterinary and agriculture platform that connects farmers, veterinarians, veterinary clinics, diagnostic laboratories, and government surveillance officers on a single network for animal health management, disease reporting, and agricultural support.",
        },
        {
          label: "What it does",
          text: "It gives every stakeholder a dedicated portal: farmers track their herds and report sick or dead animals, clinics manage patients, appointments, drug stock and billing, laboratories run samples and publish confirmed results, and government officers monitor outbreak hotspots and trends on a live dashboard.",
        },
        {
          label: "Who it is for",
          text: "Farmers and livestock keepers, veterinarians and veterinary clinics, diagnostic laboratories, and government animal health surveillance officers.",
        },
        {
          label: "Main purpose",
          text: "To centralize animal health management and shorten the time between a disease being spotted in the field and an outbreak being confirmed and responded to.",
        },
        {
          label: "Problem it addresses",
          text: "Fragmented animal health records and slow, paper-based disease reporting that delay outbreak response and leave livestock owners without a reliable digital channel to veterinary care.",
        },
      ],
      why: [
        "VetLink was born from a simple observation: the people closest to animal health problems — farmers in the field — are the ones least connected to the system that responds to them.",
        "In many agricultural regions, when livestock falls sick the first step is still a phone call or word of mouth. Disease signs are described verbally, records are kept on paper or not at all, and by the time a case reaches a veterinarian or a government officer, valuable time has already passed.",
        "For an agricultural hub like Kano State, this matters. A single undetected outbreak can spread through herds and markets before anyone sees a pattern. Farmers, clinics, laboratories, and surveillance officers each held a piece of the picture, but nothing connected them.",
        "The opportunity was to build that connection: one reporting backbone that farmers can actually use in the field — on a phone, on a weak network — and that officers, clinics, and laboratories can rely on for accurate, structured data.",
      ],
      opportunity:
        "Turning scattered observations into a structured escalation chain: field report → clinic triage → laboratory confirmation → state outbreak response.",
      problems: [
        {
          title: "Slow outbreak detection",
          description:
            "Disease reports travelled by phone calls and word of mouth, and were often incomplete — no species, signs, counts, or location.",
          consequence:
            "Response teams learned about outbreaks late, when they had already spread through herds and markets.",
        },
        {
          title: "Fragmented animal health records",
          description:
            "Clinics, farmers, and laboratories kept separate paper or spreadsheet records with no shared patient history.",
          consequence:
            "A veterinarian treating an animal had no way to see its vaccination history, previous treatments, or lab results.",
        },
        {
          title: "No coordination between stakeholders",
          description:
            "Farmers, veterinarians, laboratories, and government officers had no shared workflow or common reporting format.",
          consequence:
            "Information had to be re-explained at every handoff, and government officers lacked reliable data for surveillance decisions.",
        },
        {
          title: "Rural connectivity and access barriers",
          description:
            "Heavy, desktop-oriented platforms were unusable in the field, and farmers without smartphones had no digital channel at all.",
          consequence:
            "Even where digital tools existed, they excluded the very people at the start of the reporting chain.",
        },
      ],
      solutions: [
        {
          problem: "Slow, incomplete disease reports",
          solution:
            "A guided disease reporting flow captures species, signs, counts, GPS location, and photo evidence in under 90 seconds, and routes it through a verified escalation chain.",
          result:
            "Surveillance officers see structured, location-aware reports instead of phone-call summaries, so confirmed cases trigger faster response.",
        },
        {
          problem: "Fragmented animal health records",
          solution:
            "Centralized patient records follow each animal across clinics and laboratories — consultations, treatments, vaccinations, and lab results live in one place.",
          result:
            "Any veterinarian or clinic with access sees the full health history instead of guessing from memory.",
        },
        {
          problem: "No coordination between stakeholders",
          solution:
            "Role-based portals (farmer, clinic, laboratory, government officer) share one data model and one reporting workflow, with a clear escalation chain between them.",
          result:
            "A single report can move from the field to the lab to the state dashboard without being re-entered.",
        },
        {
          problem: "Farmers excluded by technology barriers",
          solution:
            "A lightweight, mobile-first interface built for weak networks, plus a WhatsApp chatbot that lets farmers without smartphones report in Hausa or English.",
          result:
            "Reporting is no longer limited to people with smartphones and strong connectivity — the first link in the chain is included.",
        },
      ],
      howWeSolvedIt: [
        "VetLink is built as a client–server web application. The backend exposes a REST API organized around the platform's domain: accounts, animal patients, clinical records, inventory, appointments, billing, and disease reports. The frontend is a React application that consumes the API and renders one of several portal experiences depending on the signed-in user's role.",
        "The domain model was designed so that the same report can be viewed from different angles: a farmer submits it, a clinic triages it, a laboratory confirms it, and a government officer acts on it. Each report carries structured fields — species, signs, counts, GPS coordinates, and photo evidence — so the data stays useful at every stage of the escalation chain.",
        "Access control is enforced at the API level: every portal workspace is protected by role-based authentication, so farmers, clinic staff, laboratory staff, and government officers only see the resources their role requires. The frontend then adapts its navigation and screens to that role rather than relying on the client to keep data secure.",
        "Deployment keeps the frontend static and fast: the React application is deployed to Vercel, while the API is hosted as a separate service. This separation lets each layer scale and be updated independently.",
      ],
      architecture: [
        {
          title: "Role-based portal architecture",
          description:
            "One platform, four experiences — farmer, clinic, laboratory, and government officer — built on a shared API and data model.",
        },
        {
          title: "REST API backend",
          description:
            "Django REST Framework exposes typed endpoints for accounts, animal health records, appointments, inventory, billing, and disease reports.",
        },
        {
          title: "Disease report escalation chain",
          description:
            "Reports flow through a defined lifecycle — field report, clinic triage, laboratory confirmation, state response — with structured data at every step.",
        },
        {
          title: "Field-first frontend",
          description:
            "A lightweight React interface designed for phones and weak networks, with clear, task-focused screens per portal.",
        },
      ],
      techStack: [
        { label: "Frontend", items: ["React", "Vite"] },
        { label: "Backend", items: ["Django", "Django REST Framework"] },
        { label: "API & Access", items: ["REST", "Role-based authentication"] },
        { label: "Infrastructure", items: ["Vercel"] },
      ],
      challenges: [
        {
          title: "Designing a multi-role data model",
          description:
            "One domain had to serve four very different users — a farmer submitting a report, a clinic managing stock, a lab publishing results, and an officer watching an outbreak map.",
        },
        {
          title: "Modeling the disease report lifecycle",
          description:
            "A report needed to stay the same record across triage, confirmation, and response while different roles acted on it at different stages.",
        },
        {
          title: "Role-based access control",
          description:
            "Portal separation had to be enforced server-side so that role boundaries were about security, not just navigation.",
        },
        {
          title: "Designing for weak networks and basic phones",
          description:
            "The interface had to remain usable in rural field conditions — small screens, slow connections — and still provide a channel for farmers without smartphones.",
        },
      ],
      overcoming: [
        {
          challenge: "Multi-role data model",
          how: "The platform was modeled around shared domain entities — patients, reports, organizations, appointments — rather than per-portal tables. Portals became views over the same data, which kept records consistent and avoided building four separate systems.",
        },
        {
          challenge: "Disease report lifecycle",
          how: "Each report was given an explicit status that moved it through the escalation chain. State transitions were handled in the backend, so a report's history stayed authoritative no matter which portal touched it.",
        },
        {
          challenge: "Role-based access control",
          how: "Permissions were enforced in the API layer, with the frontend treating role as a presentation concern. Even if a client requested data it should not see, the server would reject it.",
        },
        {
          challenge: "Rural connectivity",
          how: "Screens were kept deliberately lean — minimal assets and task-focused flows — and a WhatsApp chatbot in Hausa and English gave farmers without smartphones a reporting path through a channel they already used.",
        },
      ],
      results: [
        "One reporting backbone that links farmers, clinics, laboratories, and government officers, replacing fragmented phone-call and paper workflows.",
        "Structured, location-aware disease data that lets officers spot and verify potential outbreaks earlier than informal reporting allowed.",
        "Centralized animal health records, so veterinary care decisions are based on history rather than memory.",
        "A reporting channel that includes farmers without smartphones, extending coverage to the very start of the reporting chain.",
      ],
      lessons: [
        "Modeling the platform around shared domain entities — not per-portal systems — was the decision that kept four user types consistent.",
        "Access control belongs in the API. The frontend should adapt to a role; the server should enforce it.",
        "A report's lifecycle is a state machine. Making transitions explicit in the backend kept the escalation chain trustworthy.",
        "Field-first design is a feature: lightweight screens and alternative channels like WhatsApp matter as much as the core dashboard.",
        "Deploying frontend and API independently made iteration faster and kept each layer's failure domain separate.",
      ],
    },
  },
  {
    id: "tyrehub-automobile",
    title: "TyreHub",
    description:
      "A full-featured e-commerce and inventory management system for automobile tyre shops. It includes product catalog, shopping cart, order management, and an admin dashboard for inventory control.",
    technologies: ["Django", "Django REST Framework", "PostgreSQL", "React", "Tailwind CSS"],
    features: [
      "Inventory management with real-time stock levels",
      "Product catalog with search and size filtering",
      "Shopping cart and checkout",
      "Order tracking",
      "Authentication and admin dashboard",
    ],
    image: "/images/project-tyrehub.jpg",
    live: "https://alkama-sage.vercel.app/",
    category: "E-Commerce",
    featured: true,
    caseStudy: {
      summary:
        "TyreHub is a full-featured e-commerce and inventory management system for automobile tyre shops, combining a customer-facing storefront with an admin dashboard for inventory control.",
      overview: [
        {
          label: "What it is",
          text: "TyreHub is a full-featured e-commerce and inventory management system built for automobile tyre shops.",
        },
        {
          label: "What it does",
          text: "It combines a customer-facing storefront — product catalog, search, shopping cart, and checkout — with a shop-side dashboard for inventory control, stock management, and order handling.",
        },
        {
          label: "Who it is for",
          text: "Tyre shop owners and staff who need to manage stock and orders, and customers who want to browse tyres by brand and size and place orders online.",
        },
        {
          label: "Main purpose",
          text: "To give a tyre shop a single system for running its business: accurate stock, an online store, and a clear view of orders — instead of paper records and phone orders.",
        },
        {
          label: "Problem it addresses",
          text: "Manual stock records and phone-based ordering make it hard to keep inventory accurate, avoid overselling, and give customers a modern buying experience.",
        },
      ],
      why: [
        "The idea came from watching how a tyre shop actually runs: a wall of paper invoices, a stock book nobody fully trusts, and orders taken over the phone and written on scraps of paper.",
        "A tyre shop sells the same product in dozens of sizes and brands, so stock is easy to lose track of. When a customer asks 'do you have this size?', the answer depends on someone walking to the shelf — and the shelf can be wrong.",
        "Customers also increasingly expect to browse and order from their phone. Without an online catalog, the shop was invisible outside its physical location, and every order required a phone call, a visit, or a message.",
        "The opportunity was to build the missing system: a public storefront backed by real inventory data, with an admin dashboard that keeps stock honest and orders organized.",
      ],
      opportunity:
        "To replace guesswork with data — every product, size, and stock level visible to both the shop and its customers, with orders flowing through one system.",
      problems: [
        {
          title: "Inaccurate stock records",
          description:
            "Inventory was tracked manually, so stock levels drifted from reality between physical counts.",
          consequence:
            "The shop risked overselling tyres it did not have and holding stock it thought it had sold — losing money either way.",
        },
        {
          title: "No online presence for the catalog",
          description:
            "Customers had no way to browse brands, sizes, and availability without calling or visiting.",
          consequence:
            "The shop missed customers who searched online first, and staff fielded constant stock-check calls.",
        },
        {
          title: "Phone-and-paper order handling",
          description:
            "Orders were recorded on paper or in chat messages, with no structured order record or status.",
          consequence:
            "Orders were misremembered and hard to track, and customers had no way to follow their order.",
        },
        {
          title: "No visibility for the shop owner",
          description:
            "The owner had no dashboard showing what was in stock, what had sold, and what needed reordering.",
          consequence: "Purchasing and pricing decisions were made without reliable data.",
        },
      ],
      solutions: [
        {
          problem: "Inaccurate stock records",
          solution:
            "Every product is stored with real stock levels in a database, and inventory is updated through the admin dashboard and the ordering flow.",
          result:
            "Stock numbers reflect what actually happened in the system, and the shop can see exactly what remains on hand.",
        },
        {
          problem: "No online catalog",
          solution:
            "A product catalog with search and size filtering lets customers browse the shop's tyres from any device.",
          result:
            "The shop is reachable beyond its physical location, and customers can find the right tyre size before contacting the shop.",
        },
        {
          problem: "Phone-and-paper order handling",
          solution:
            "A shopping cart and checkout flow create structured orders, and order tracking lets both shop and customer see where an order stands.",
          result:
            "Orders have a reliable record from placement to dispatch, replacing scraps of paper.",
        },
        {
          problem: "No owner visibility",
          solution:
            "An admin dashboard centralizes inventory and order management behind authenticated access.",
          result:
            "The shop owner gets a single view of stock, orders, and sales activity to support buying and pricing decisions.",
        },
      ],
      howWeSolvedIt: [
        "TyreHub is built as a full-stack web application. The backend is a Django REST Framework API backed by PostgreSQL, and the frontend is a React application styled with Tailwind CSS.",
        "The data model centers on products — tyres with brand, size, and price attributes — plus the entities that flow around them: customers, orders, order items, and stock levels. Stock is tied directly to the catalog, so the storefront always reads from the same data the shop manages.",
        "Authentication protects the admin side of the application, keeping inventory and order management behind a sign-in boundary while the public catalog stays open. The API enforces the difference between customer-facing and shop-facing actions.",
        "The frontend was built as a responsive storefront: catalog browsing, cart, and checkout for customers, with a separate dashboard experience for staff. The application is deployed on Vercel.",
      ],
      architecture: [
        {
          title: "Product-centric data model",
          description:
            "Products with brand, size, and price attributes sit at the center, with orders and stock levels referencing the same catalog records.",
        },
        {
          title: "REST API backend",
          description:
            "Django REST Framework exposes the catalog, cart, checkout, and inventory management as a typed API backed by PostgreSQL.",
        },
        {
          title: "Customer vs. staff separation",
          description:
            "A public storefront for customers and an authenticated admin dashboard for shop staff, both reading from the same API and database.",
        },
        {
          title: "Responsive storefront",
          description:
            "A React and Tailwind CSS frontend that works on desktop and mobile, deployed on Vercel.",
        },
      ],
      techStack: [
        { label: "Frontend", items: ["React", "Tailwind CSS"] },
        { label: "Backend", items: ["Django", "Django REST Framework"] },
        { label: "Database", items: ["PostgreSQL"] },
        { label: "Infrastructure", items: ["Vercel"] },
      ],
      challenges: [
        {
          title: "Keeping stock accurate through orders",
          description:
            "Every checkout changes inventory, and the stock level customers see must match the stock the shop can actually fulfill.",
        },
        {
          title: "Data modeling for a size-heavy catalog",
          description:
            "Tyres are the same product in many sizes and brands, so the catalog needed a structure that supported filtering without duplicating records.",
        },
        {
          title: "Separating customer and staff experiences",
          description:
            "The storefront and the admin dashboard had to coexist in one application without leaking staff-only capabilities to customers.",
        },
        {
          title: "Cart and checkout flow",
          description:
            "The cart had to behave predictably across the browse → add → checkout journey and produce a clean, structured order.",
        },
      ],
      overcoming: [
        {
          challenge: "Stock accuracy through orders",
          how: "Inventory was updated through the same API calls that create orders, so a checkout either succeeds with stock deducted or fails cleanly. Stock displayed to customers is read live from the same records the shop manages.",
        },
        {
          challenge: "Size-heavy catalog",
          how: "Products were modeled with explicit attributes such as brand and size rather than one record per shelf item, so filtering and search stay cheap and the catalog stays maintainable.",
        },
        {
          challenge: "Customer vs. staff separation",
          how: "The boundary was enforced server-side: customer-facing endpoints expose catalog and ordering, while inventory and order-management endpoints require an authenticated staff session.",
        },
        {
          challenge: "Cart and checkout",
          how: "The cart was built as a stateful flow on the frontend that submits a structured order to the API at checkout, giving the shop a consistent order record and the customer clear confirmation.",
        },
      ],
      results: [
        "A single system where the catalog, stock, and orders share one source of truth, removing the guesswork from 'do we have this size?'.",
        "Customers can browse, compare, and order tyres online instead of phoning or visiting to check availability.",
        "Structured orders with status visibility, reducing lost or misremembered phone-and-paper orders.",
        "An owner-facing dashboard that turns inventory and sales activity into information the shop can act on.",
      ],
      lessons: [
        "Stock is a business-critical number: keep it in the database and update it in the same operation as the order.",
        "Model the catalog by product attributes such as brand and size early — retrofitting it later is far more painful.",
        "Separating public and authenticated surfaces at the API level keeps the storefront fast and the shop data safe.",
        "An e-commerce flow is only as good as its failure handling — checkout must either fully succeed or cleanly fail.",
      ],
    },
  },
  {
    id: "legal-platform",
    title: "Legal Platform",
    description:
      "A modern legal technology platform designed to help lawyers and legal professionals manage legal cases, clients, documents, hearings, and related workflows through a centralized, secure web interface.",
    technologies: ["React", "TypeScript", "TanStack Router", "Tailwind CSS", "shadcn/ui"],
    features: [
      "Secure counsel sign-in portal with automatic session expiry",
      "Case and hearing management",
      "Client records and court documents",
      "Case outcomes and practice metrics",
      "Privileged, access-logged workspace",
    ],
    image: "/images/project-legal.jpg",
    live: "https://lawyer-one.vercel.app/",
    category: "Legal Tech",
    featured: true,
    caseStudy: {
      summary:
        "A modern legal technology platform that gives lawyers and legal professionals a centralized, secure web workspace for managing cases, clients, documents, hearings, and case outcomes.",
      overview: [
        {
          label: "What it is",
          text: "The Legal Platform is a modern legal technology application for lawyers and legal professionals to manage the day-to-day work of a practice: cases, clients, hearings, court documents, and case outcomes, all in one centralized web interface.",
        },
        {
          label: "What it does",
          text: "Counsel sign in to a private workspace where they can track matters, keep client and court documents organized, stay on top of upcoming hearings, and review practice-level outcomes and metrics.",
        },
        {
          label: "Who it is for",
          text: "Lawyers, counsel, and legal professionals who need a structured, secure place to manage cases and court activity.",
        },
        {
          label: "Main purpose",
          text: "To replace scattered case information with a single privileged workspace that gives counsel the answers they need — upcoming hearings, case status, documents — before they reach the courtroom.",
        },
        {
          label: "Problem it addresses",
          text: "Legal work is information-heavy, and when case files live in folders, spreadsheets, and email, important details and deadlines get lost.",
        },
      ],
      why: [
        "Legal practice runs on information: who the client is, what the matter is, when the hearing is, and what happened at the last one. None of that is useful if it takes an hour to find.",
        "Lawyers juggle many matters at once, and the details that matter — hearing dates, filing deadlines, case status — are often scattered across paper files, spreadsheets, and email threads. The cost of a missed detail in legal work is high.",
        "General-purpose tools tend to treat case management as a calendar problem or a document problem, but not both. A practice needs a view that connects the client, the matter, the documents, and the court events together.",
        "The opportunity was to build a focused counsel portal: sign in securely, see what matters, and reach any case detail without digging through separate systems.",
      ],
      opportunity:
        "A single privileged workspace where counsel can organize and retrieve the complete record of their practice.",
      problems: [
        {
          title: "Case information scattered across tools",
          description:
            "Matters, clients, documents, and hearing dates lived in different places — folders, spreadsheets, emails.",
          consequence:
            "Finding the status of a matter or the next hearing date required manual digging, and details were easy to miss.",
        },
        {
          title: "Missed hearings and deadlines",
          description:
            "Without a structured view of upcoming court events, important dates depended on memory and personal notes.",
          consequence:
            "A missed hearing or deadline is costly in legal practice — for the client and the practice.",
        },
        {
          title: "No overview of practice outcomes",
          description:
            "Firms could not easily see how many matters were being tracked, how cases were resolving, or how the practice was performing.",
          consequence:
            "Strategic decisions about the practice were made without reliable information.",
        },
        {
          title: "Sensitive data needing real access control",
          description:
            "Legal data is privileged and confidential; any system holding it needs a serious approach to access, logging, and session security.",
          consequence:
            "A casual tool with weak session behavior would be a liability for a practice.",
        },
      ],
      solutions: [
        {
          problem: "Scattered case information",
          solution:
            "A centralized workspace organizes clients, matters, hearings, and court documents under one roof, with each case viewable as a whole.",
          result:
            "Counsel can reach the complete record of a matter in seconds instead of hunting across tools.",
        },
        {
          problem: "Missed hearings and deadlines",
          solution:
            "Hearing and case-event management keeps upcoming court activity structured and visible within each matter.",
          result: "Upcoming events are part of the workspace rather than living in personal notes.",
        },
        {
          problem: "No overview of outcomes",
          solution:
            "Case outcomes and practice metrics give counsel a dashboard-level view of matters tracked and how they are resolving.",
          result: "The practice gets a factual picture of its workload and results.",
        },
        {
          problem: "Sensitive data needing real access control",
          solution:
            "A secure counsel sign-in portal with automatic session expiry after inactivity and logged access treats the workspace as privileged.",
          result:
            "Sessions close themselves when left idle, and access behavior is recorded — appropriate for confidential legal data.",
        },
      ],
      howWeSolvedIt: [
        "The Legal Platform is a React and TypeScript single-page application, built with TanStack Router for navigation and Tailwind CSS with shadcn/ui for the design system. It is structured as a counsel portal: a sign-in boundary, then a workspace organized around matters.",
        "Routing was treated as part of the architecture. TanStack Router provides typed, type-safe routes, so navigation between clients, matters, hearings, and documents is predictable and refactor-safe — important in an information-dense application with many screens.",
        "The interface is organized around the way counsel actually work: a dashboard for practice metrics, matter views that tie clients and court documents together, and a hearing view that keeps upcoming events visible. The design system keeps dense legal data readable through consistent tables, cards, and status treatments.",
        "Because the workspace holds privileged information, the session experience was designed deliberately: automatic expiry after 45 minutes of inactivity, with access behavior logged. The application's data layer is structured so screens render from typed records, keeping the workspace consistent and testable.",
      ],
      architecture: [
        {
          title: "Typed single-page application",
          description:
            "React and TypeScript with TanStack Router for type-safe navigation across the portal's many screens.",
        },
        {
          title: "Portal pattern",
          description:
            "A secure sign-in boundary separates the public entry from the privileged workspace behind it.",
        },
        {
          title: "Design system",
          description:
            "Tailwind CSS and shadcn/ui components keep dense legal data consistent and readable across devices.",
        },
        {
          title: "Session security",
          description:
            "Automatic session expiry after 45 minutes of inactivity, with access logging for the privileged workspace.",
        },
      ],
      techStack: [
        { label: "Frontend", items: ["React", "TypeScript"] },
        { label: "Routing", items: ["TanStack Router"] },
        { label: "Styling", items: ["Tailwind CSS", "shadcn/ui"] },
        { label: "Infrastructure", items: ["Vercel"] },
      ],
      challenges: [
        {
          title: "Designing for information density",
          description:
            "Legal data is dense — many fields, long records, lots of matters — and the interface had to stay readable rather than overwhelming.",
        },
        {
          title: "Type-safe navigation across many screens",
          description:
            "The portal has several related areas — matters, clients, hearings, documents — and navigation between them had to stay correct as the app grew.",
        },
        {
          title: "Session security for privileged data",
          description:
            "Holding confidential legal data meant the sign-in and session behavior had to be strict — no long-lived sessions left open by accident.",
        },
        {
          title: "Consistent presentation of case status",
          description:
            "With matters in different states, the UI needed a consistent way to show status and outcomes without ambiguity.",
        },
      ],
      overcoming: [
        {
          challenge: "Information density",
          how: "The design system was built from shadcn/ui components with consistent tables, cards, and status treatments, and screens were organized around tasks — dashboard, matters, hearings, documents — so dense data is presented in structured, scannable layouts.",
        },
        {
          challenge: "Type-safe navigation",
          how: "TanStack Router's typed routes mean every link between clients, matters, hearings, and documents is checked at build time, keeping navigation correct as the portal's screen count grows.",
        },
        {
          challenge: "Session security",
          how: "The session was designed to expire automatically after 45 minutes of inactivity, and access to the workspace is logged — making the portal's security posture explicit rather than assumed.",
        },
        {
          challenge: "Case status presentation",
          how: "Outcomes and metrics are surfaced through consistent views tied to the same matter records, so 'what's happening in this matter' has one clear answer in the UI.",
        },
      ],
      results: [
        "Counsel get a single privileged workspace that connects clients, matters, hearings, documents, and outcomes.",
        "Upcoming court events are visible within the workflow instead of depending on memory and personal notes.",
        "Practice metrics give the firm a factual overview of matters tracked and case outcomes.",
        "Session auto-expiry and access logging make the portal appropriate for confidential legal data.",
      ],
      lessons: [
        "For information-dense applications, the design system is the product: consistent tables, cards, and status treatments make dense data usable.",
        "Type-safe routing pays off as a portal grows — navigation that cannot be wrong at runtime is a real maintenance win.",
        "Security UX matters: automatic session expiry is a product feature, not just a backend concern.",
        "Tying outcomes and metrics to the same records as the matters keeps the practice view honest.",
        "Frontend architecture — typed data, typed routes, a component system — is what makes a many-screen application maintainable.",
      ],
    },
  },
  {
    id: "unihub",
    title: "UniHub",
    description:
      "A university-focused platform designed to help students organize, manage, and collaborate on academic projects — from organizing work and resources to tracking progress and staying in sync with supervisors and teammates.",
    technologies: ["React", "TypeScript", "Django", "Django REST Framework", "PostgreSQL"],
    features: [
      "Structured project workspaces for organizing academic project work",
      "Centralized management of project resources, files, and references",
      "Progress tracking across project work items and deliverables",
      "Shared project views for collaboration with teammates and supervisors",
      "Secure authentication with membership-based access to projects",
      "A responsive workspace for desktop, laptop, tablet, and mobile",
    ],
    image: "/images/project-unihub.jpg",
    live: "https://unihub-mevs-me.vercel.app/",
    category: "EdTech",
    featured: true,
    caseStudy: {
      summary:
        "UniHub is a university-focused platform that helps students organize, manage, and collaborate on academic projects — a single structured workspace where project work, resources, progress, and communication live together.",
      overview: [
        {
          label: "What it is",
          text: "UniHub is a university-focused web platform designed to help students manage and work on their academic projects.",
        },
        {
          label: "What it does",
          text: "It gives students a structured workspace for organizing project work, managing resources, tracking progress, and collaborating with teammates and supervisors — instead of leaving those things spread across chats, email, and folders.",
        },
        {
          label: "Who it is for",
          text: "University students working on individual or group academic projects, along with the supervisors and teammates they collaborate with.",
        },
        {
          label: "Main purpose",
          text: "To give every academic project a single organized home — work, resources, progress, and communication — so students can focus on the project itself instead of managing the chaos around it.",
        },
        {
          label: "Problem it addresses",
          text: "Academic projects are information-heavy and collaborative, yet the tools students actually use — group chats, email, folders — have no structure for the project itself, so work, resources, and feedback get lost.",
        },
      ],
      why: [
        "UniHub came from an experience every university student knows: academic projects are where the real learning happens, and also where the most information gets lost.",
        "A single project spans ideas, research, documents, tasks, and deadlines, and in practice it lives across group chats, email, and folders. Teammates and supervisors each hold a different piece of the picture, and none of it sits in one organized place.",
        "The result is that students spend more time hunting for materials, reminding each other of tasks, and reconstructing what was decided than actually working on the project itself. Supervisors, meanwhile, can only see fragments of the work when they are asked about it.",
        "The opportunity was to build a dedicated home for academic project work: a platform that treats a project as a structured thing — with work, resources, progress, and collaboration attached to it — rather than leaving it scattered across generic tools.",
      ],
      opportunity:
        "A single structured workspace where every academic project has its work, resources, progress, and conversations organized in one place.",
      problems: [
        {
          title: "Organizing project work and resources",
          description:
            "Tasks, documents, and research materials live in different places — chats, email, folders, drives — with no structure tying them to the project.",
          consequence:
            "Students lose track of what needs to be done and where materials are, duplicating effort and re-finding resources.",
        },
        {
          title: "Disconnected collaboration with teammates and supervisors",
          description:
            "Coordination happens through separate conversations, with no shared view of the project for everyone involved.",
          consequence:
            "Teammates and supervisors are out of sync on progress, decisions, and next steps, and feedback is forgotten or misunderstood.",
        },
        {
          title: "Finding useful academic information",
          description:
            "Useful academic material — references, guidelines, past work — is not collected or organized around the project.",
          consequence:
            "Students struggle to find and reuse information that would help them make progress, and knowledge is lost when the project ends.",
        },
        {
          title: "No visibility into project progress",
          description:
            "There is no structured view of what has been done, what remains, and what is at risk of slipping.",
          consequence:
            "Deadlines are missed and problems are discovered late, close to submission, when there is little time to react.",
        },
      ],
      solutions: [
        {
          problem: "Scattered project work and resources",
          solution:
            "Each academic project lives in a structured workspace where work items, files, and references are attached to the project itself, in one place.",
          result:
            "Everything a project needs has a home, so nothing is lost or recreated and students know exactly where to look.",
        },
        {
          problem: "Disconnected collaboration",
          solution:
            "Shared project views keep teammates and supervisors on the same page, with updates and feedback attached to the project's record.",
          result:
            "Everyone involved sees the same state of the project, and feedback becomes part of the project's history instead of a lost message.",
        },
        {
          problem: "Hard-to-find academic information",
          solution:
            "Useful academic material is collected and organized within the platform, tied to the projects it belongs to so it can be found and reused.",
          result:
            "Students spend less time re-finding information and more time working, and knowledge survives the end of the project.",
        },
        {
          problem: "No visibility into progress",
          solution:
            "Progress is tracked against the project's structured work items, giving students, teammates, and supervisors a clear view of what is done and what remains.",
          result:
            "Deadlines are managed, and problems surface early — while there is still time to respond — instead of at submission.",
        },
      ],
      howWeSolvedIt: [
        "UniHub is built as a full-stack web application. The backend is a Django REST Framework API backed by PostgreSQL, and the frontend is a React and TypeScript application that consumes the API and renders the project workspace.",
        "The data model centers on the academic project itself. A project is a first-class entity that carries its work items, resources, and progress state, so everything that belongs to a project is tied to one record rather than spread across disconnected tables. This is what keeps the workspace coherent: organize the data, and the interface organizes itself.",
        "Authentication and access control are enforced at the API level. Students and supervisors sign in securely, and membership on a project determines who can view and update its work and resources. The frontend reflects what the server allows; it never decides access on its own.",
        "Deployment keeps the application fast and independently scalable: the React frontend is deployed to Vercel, while the Django API runs as a separate serverless function. The two layers can be updated and scaled independently, and static assets are served from the CDN.",
      ],
      architecture: [
        {
          title: "Project-centric data model",
          description:
            "Academic projects are first-class entities carrying their work items, resources, and progress, so everything belonging to a project is stored and retrieved together.",
        },
        {
          title: "REST API backend",
          description:
            "Django REST Framework exposes typed endpoints for authentication, projects, work items, resources, and progress, backed by PostgreSQL.",
        },
        {
          title: "Membership-based access control",
          description:
            "Secure authentication with project membership checks on every project-scoped endpoint, so only the students and supervisors involved can access a project's data.",
        },
        {
          title: "Full-stack web architecture",
          description:
            "A React and TypeScript frontend consumes the API and renders a responsive workspace, deployed on Vercel with the API as a separate serverless function.",
        },
      ],
      techStack: [
        { label: "Frontend", items: ["React", "TypeScript"] },
        { label: "Backend", items: ["Django", "Django REST Framework"] },
        { label: "Database", items: ["PostgreSQL"] },
        { label: "API & Access", items: ["REST", "JWT Authentication"] },
        { label: "Infrastructure", items: ["Vercel"] },
      ],
      challenges: [
        {
          title: "Modeling the project as a structured entity",
          description:
            "A project holds many kinds of information — work items, resources, progress, collaborators — and all of it had to live in one coherent structure that stays easy to query and update.",
        },
        {
          title: "Enforcing membership and access control",
          description:
            "Project data is shared but private: access had to be limited to the students and supervisors involved in each project, and that boundary had to hold server-side.",
        },
        {
          title: "Designing for organization and collaboration together",
          description:
            "The workspace had to help students organize work and resources while also keeping teammates and supervisors coordinated — without becoming a generic task tool.",
        },
        {
          title: "Keeping progress honest",
          description:
            "The progress everyone sees had to reflect what is actually happening in the project, not a manually maintained number that drifts from reality.",
        },
      ],
      overcoming: [
        {
          challenge: "Structured project model",
          how: "The schema was designed around the project as the root entity, with work items, resources, and membership as related records. Every part of a project is reachable through one record, which keeps queries and updates straightforward.",
        },
        {
          challenge: "Membership and access control",
          how: "Permissions were enforced in the API layer with JWT authentication and membership checks on every project-scoped endpoint. Even if a client asked for data it should not see, the server would reject it.",
        },
        {
          challenge: "Organization and collaboration in one workspace",
          how: "The interface was built around the project itself — a workspace view that brings work items, resources, and collaboration together — using a responsive component system consistent across the platform.",
        },
        {
          challenge: "Honest progress tracking",
          how: "Progress is derived from the project's structured work items, so the status shown to teammates and supervisors reflects the same underlying data everyone works against.",
        },
      ],
      results: [
        "Students get one organized home for every academic project — work, resources, and progress in a single structured workspace.",
        "Teammates and supervisors share the same view of a project, reducing miscommunication and keeping feedback attached to the project's record.",
        "Useful academic information is collected and organized around projects, so it can be found and reused instead of rediscovered.",
        "Progress is visible and trackable, so deadlines are managed and problems surface early rather than at submission time.",
      ],
      lessons: [
        "Modeling the project as the central entity — rather than building disconnected features for each tool students use — is what kept the platform coherent.",
        "Access control belongs in the API: JWT authentication and membership checks are the real boundary, and the frontend should only reflect it.",
        "Progress is only useful when it derives from real, structured work items; anything else is guesswork.",
        "A platform like this is only as good as how it organizes its data — structure is the product.",
        "Deploying the frontend and API independently keeps iteration fast and each layer's failure domain separate.",
      ],
    },
  },
];

export const allTechnologies = Array.from(new Set(projects.flatMap((p) => p.technologies))).sort();

export const marqueeTech = skillCategories.flatMap((category) =>
  category.skills.map((skill) => skill.name),
);

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
    date: "2026-08-02",
    readTime: "6 min read",
    tags: ["Django", "API", "Backend"],
    slug: "getting-started-with-django-rest-framework",
  },
  {
    id: "blog-2",
    title: "Building Secure APIs with JWT Authentication",
    excerpt:
      "Learn how to implement JWT authentication in your Django API to protect endpoints and manage user sessions securely.",
    date: "2026-07-18",
    readTime: "8 min read",
    tags: ["JWT", "Security", "Django"],
    slug: "building-secure-apis-with-jwt-authentication",
  },
  {
    id: "blog-3",
    title: "Database Design Tips for Django Developers",
    excerpt:
      "Best practices for designing relational databases with Django and PostgreSQL, from normalization to indexing.",
    date: "2026-06-27",
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
