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
    live: "https://unihub-git-main-mevs-me.vercel.app",
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
  {
    id: "enviromenthub",
    title: "EnvironmentHub (TerraLensHub)",
    description:
      "Place-intelligence platform for Nigeria — 10-category location scores (safety, healthcare, climate, business, infrastructure, environment, transport, education, economy, tourism), a Personal Decision Assistant that re-weights scores by intent, and ethical, people-never-profiled environmental & government intelligence. Live at enviromenthub-tvuv.vercel.app.",
    technologies: ["React 19", "TypeScript", "TanStack Router/Start", "Tailwind CSS", "Vite", "OpenStreetMap", "Web Speech API", "Vercel"],
    features: [
      "10-category location scoring (0-100) with overall weighted score and plain-language What/Why/What-to-do explanations",
      "Ask Hub / Discover — natural-language & voice input (Tap to speak), intent-aware Personal Decision Assistant that re-weights the same 10 scores by goal (business, health, live, etc.)",
      "Rich location pages (Wuse 2, Sabon Gari, Ikeja, Enugu, Port Harcourt) with OpenStreetMap, weather/air/water/flood/green-cover/waste key facts, category scores, and transparent source + date + verified/estimated/community labels",
      "Compare up to 3 locations side-by-side — category profile overlay, score-by-category table, key facts (population, hospitals, schools, businesses, cost, rent, 4G/5G) with share link, CSV export & print/PDF",
      "Government Intelligence Dashboard — aggregated-only monitoring (5 locations, 11 flagged areas, 2,376 reports) with national map, flagged areas, incident trends (last 6 months) & breakdown by type",
      "Offline-friendly issue reporting (Infrastructure/Environment/Safety/Healthcare/Transportation + description, queued locally & sent when online), Saved locations, alerts, and demo-data transparency banner",
      "Multilingual (English, Hausa, Yorùbá, Igbo, Pidgin) + voice + read-aloud, Easy Mode, 8 quick-action cards (Check a Place, Healthcare, Route, Business, Live, Environment, Emergency, Ask)",
      "Mobile-first, accessible UI with sticky header, bottom nav, and fast edge delivery on Vercel",
    ],
    image: "/images/project-enviromenthub.png",
    live: "https://enviromenthub-tvuv.vercel.app/",
    category: "Sustainability",
    featured: true,
    caseStudy: {
      summary:
        "EnvironmentHub (branded TerraLensHub in-app) is a Nigerian place-intelligence platform — not a volunteer-event network. It answers 'What do you want to know about this place?' with 10 scored categories, a goal-aware assistant that re-weights those same scores, rich location dossiers, side-by-side comparison, and a government dashboard for aggregated environmental & incident patterns — ethically built to analyse places, never people, with every datapoint sourced and dated.",
      overview: [
        {
          label: "What it is",
          text: "EnvironmentHub / TerraLensHub — a place-intelligence web app (live at https://enviromenthub-tvuv.vercel.app/) that turns dispersed geographic, environmental and public-service data into a single 0–100 score per location across 10 categories, plus an Overall Environment Score weighted across all 10.",
        },
        {
          label: "What it does",
          text: "Lets anyone search or speak a question (voice input + 5 languages + read-aloud), get an intent-aware answer via the Personal Decision Assistant (same data, different weights for health vs business vs live vs emergency), drill into a location dossier (OpenStreetMap + 10 category explanations + key facts + weather/air/flood + sources), compare 2–3 places side-by-side, monitor flagged areas on a government map, and file offline-queued issue reports (2000 chars, Infrastructure/Environment/Safety/Healthcare/Transportation).",
        },
        {
          label: "Who it is for",
          text: "Residents deciding where to live/work/open a shop, visitors checking safety/weather/healthcare/emergency help, businesses scouting opportunity, and government/planning teams needing aggregated, non-personal environmental intelligence — designed for low-literacy, multilingual, mobile-first use in Nigeria.",
        },
        {
          label: "Main purpose",
          text: "To make Nigerian location decisions explainable and ethical: one hub where any place (e.g., Wuse 2 78/100, Ikeja 74/100, Sabon Gari 61/100) can be understood before you decide — with plain language, verified sources, and explicit 'places, never people' guarantees.",
        },
        {
          label: "Problem it addresses",
          text: "Location information is scattered across maps, stats, rumours and search results; scores (if any) are opaque, not comparable, not localised, and often profile people. Non-English speakers and low-connectivity users are excluded, and government teams lack an aggregated, map-based view of flood, waste, air, fire, water and transport patterns.",
        },
      ],
      why: [
        "Choosing a neighbourhood in Nigeria — to live, open a shop, find a hospital, or route through flood season — forces people to stitch together maps, word-of-mouth, outdated PDFs and generic search answers that never explain why they recommend a place.",
        "Existing tools either give raw data without interpretation, or give a single opaque rank with no source, no date, and no ethical boundary — risking proxy discrimination and criminal prediction. Hausa, Yorùbá, Igbo and Pidgin speakers, and voice-first users, are rarely served.",
        "For government, there is no single pane showing which of the 5 monitored locations has rising fire incidents (+83% market fires in Sabon Gari, +100% in Port Harcourt), flood risk (+15% Ikeja, +12% Wuse 2), soot pollution (+21% Port Harcourt) or waste accumulation (+19% Sabon Gari) — all based on aggregated counts, not profiles.",
        "The opportunity was to build a hub that scores every place the same 10 ways (public safety, healthcare, weather & climate, business potential, infrastructure, environment, transportation, education, economic activity, tourism), re-weights them transparently for the user's actual goal, explains every score in simple words with source + date + verified/estimated tag, speaks the user's language, works offline for reports, and visualises comparison and national patterns ethically.",
      ],
      opportunity:
        "A single ethical place-intelligence hub: one 10-category scoring engine, one intent-aware assistant (re-weights — doesn't rewrite — data), rich dossiers, true side-by-side compare, and a government monitoring map — all in plain language, 5 languages + voice, with transparent, dated sources and people-never-profiled guarantees.",
      problems: [
        {
          title: "Scattered, uninterpretable place data",
          description:
            "Population, hospitals/clinics, schools, businesses, cost-of-living, rent, 4G/5G, weather, AQI, water, flood, green cover and waste live in separate registries, PDFs and map extracts with no common score or plain explanation.",
          consequence:
            "People make high-stakes decisions (where to live, where to open a shop, which hospital to go to) on rumour and guesswork; comparisons between Wuse 2, Ikeja and Sabon Gari are manual and error-prone.",
        },
        {
          title: "Opaque, risky scoring and people-profiling",
          description:
            "Most scoring is a black box, uses proxies like demographics or social media, and can be used to label or target individuals.",
          consequence:
            "Loss of trust, ethical harm, and decisions that discriminate by appearance/ethnicity/neighbourhood — explicitly forbidden by the project's own ethics but common in the market.",
        },
        {
          title: "Language, literacy and access exclusion",
          description:
            "English-only, jargon-heavy, desktop-only tools with no voice, no read-aloud and no offline handling ignore Hausa/Yorùbá/Igbo/Pidgin speakers, low-literacy users and low-connectivity field reporting.",
          consequence:
            "The people most affected by flood, waste and healthcare gaps are the least able to use the tool that could help them.",
        },
        {
          title: "No comparable or operational view",
          description:
            "No side-by-side compare with share/CSV/print, and no aggregated government view of flagged areas, incident trends (last 6 months, Q2 vs Q1) and breakdowns by type across 5 locations.",
          consequence:
            "Businesses and planners cannot justify a choice or prioritize interventions (e.g., drainage on Aminu Kano corridor, waste frequency in Sabon Gari, signal timing in Wuse 2).",
        },
      ],
      solutions: [
        {
          problem: "Scattered, uninterpretable place data",
          solution:
            "Unified 10-category model (0–100 each, with Strong 72–100 / Workable 55–71 / At-risk 0–54 bands) + Overall weighted score; every category page cites underlying data (e.g., '24 facilities including 3 general hospitals', '≈9,400 businesses, 92% 4G/5G, ₦2.8M rent, 18% green cover') with source + date + status (verified/estimated/community). Location dossier bundles map, plain summary ('What this means / What you can do'), key facts, category why-explanations, and live environment block (Weather/Air/Water/Flood).",
          result:
            "A Wuse 2 dossier (78/100) reads in seconds on mobile: 'Good overall — strong business/healthcare/infrastructure, environment held back by congestion & drainage flash-points' with a drill-down to 10 explained scores — all figures flagged as simulated sample data in demo.",
        },
        {
          problem: "Opaque, risky scoring and people-profiling",
          solution:
            "Personal Decision Assistant keeps underlying data fixed and only re-weights the 10 scores by intent; methodology page documents weighting, bands and ethical rules (places never people, no criminal prediction, no proxy discrimination — appearance/ethnicity/demographics never inputs, aggregated verified incident counts only, AI explains itself with plain-language citations).",
          result:
            "Same location scores differently for 'open a small shop' vs 'find malaria treatment' — transparently, without profiling — auditable via /about Methodology & ethics.",
        },
        {
          problem: "Language, literacy and access exclusion",
          solution:
            "5-language switcher (English/Hausa/Yorùbá/Igbo/Pidgin) + voice input ('Tap to speak' 56px mic button) + read-aloud, Easy Mode, simple-words cards, 8 intent tiles (Check a Place, Healthcare, Route, Business, Live, Environment, Emergency, Ask), bottom nav for mobile, offline-queued reporting (max 2000 chars, Category + Description) and offline-aware UI.",
          result:
            "A market trader can speak in Pidgin, hear the answer read aloud, and file a flood/waste report offline that sends when back online — no technical terms required.",
        },
        {
          problem: "No comparable or operational view",
          solution:
            "Compare up to 3 locations (e.g., Wuse 2 vs Ikeja) with overlaid category profile, score-by-category table (best highlighted), key-facts table, share link, Export CSV and Print/PDF; Government Intelligence Dashboard with OpenStreetMap pins coloured by severity, 5 monitored locations / 11 flagged / 4 critical / 2,376 reports, flagged-areas list, 6-month trend chart and Q2-vs-Q1 breakdown (theft/burglary/traffic/fire/robbery).",
          result:
            "A founder can compare Wuse 2 (Business 88, Infrastructure 82) vs Ikeja (Business 90, Economy 92) in one view and share it; a planner can spot '+83% market fires Sabon Gari' and prioritise wiring inspections before peak rains.",
        },
      ],
      howWeSolvedIt: [
        "Visited the live deployment at https://enviromenthub-tvuv.vercel.app/ and mapped the real product: TerraLensHub — header nav Home/Ask/Compare/Government/How it works/Saved, hero 'What do you want to know?' with search + Scan + voice, 8 quick-action cards, 'Try an example place' grid (Wuse 2 78, Sabon Gari 61, Ikeja 74, Enugu 69, Port Harcourt 66), location dossiers, discover/ask flow, compare, government dashboard and about/methodology.",
        "Modelled the 10 scored categories as the core domain (public safety, healthcare, weather & climate, business, infrastructure, environment, transportation, education, economic activity, tourism) with per-category 0–100, banding, plain summary, and source+date+status. Overall score is weighted across 10; the Personal Decision Assistant re-weights — never rewrites — those scores by goal, keeping data fixed and explanation auditable.",
        "Built the frontend as a modern React + TypeScript + Vite + Tailwind app with TanStack Router/Start (seen in streaming SSR barrier + preloads), OpenStreetMap embeds (pan/zoom, coordinates like 9.076°N 7.469°E), Web Speech API voice input, and Radix/shadcn patterns; deployed on Vercel with edge delivery, modulepreload chunks (locations, voice-input, score-bar, etc.) and fast previews — exactly as the live HTML shows.",
        "Implemented the IA for trust and speed: sticky header + mobile bottom nav, language selector + Easy Mode, How Hub Helps You explainer (Simple words / Your language / Verified sources), demo disclaimer ('All figures simulated sample data'), transparent methodology page, saved/favorites + alerts, and a reporting form that queues locally when offline — the previous 'volunteer clean-up' narrative in the portfolio was incorrect and is now replaced by this faithful description.",
      ],
      architecture: [
        {
          title: "Intent-reweighted scoring engine (10 categories)",
          description:
            "Single source of truth: 10 × 0–100 scores + Overall weighted score. The assistant layer applies goal-specific weights (business leans on economy/infra/transport; health leans on healthcare/environment/climate) without mutating raw data. Bands Strong/Workable/At-risk and plain-language 'What it means / What you can do' are derived, not hard-coded.",
        },
        {
          title: "Ethical-by-design, explainable reporting",
          description:
            "Every score ships with a 'why' citing aggregated data only (e.g., 'Theft -10%, traffic +9%, 24 facilities'), source family (NBS, emergency feed, OSM extract, met service, EPA, telecom registry) and date + verified/estimated/community badge. Rules: places never people, no criminal prediction, no proxy discrimination, no social-media targeting.",
        },
        {
          title: "Location-centric content graph",
          description:
            "Locations are first-class entities (Wuse 2, Ikeja, Sabon Gari, Enugu, Port Harcourt) with relations to category scores, key facts (population, hospitals, schools, businesses, cost, rent, coverage), environment hazards, insights (/insight/:slug/:category), compare selections, and government flags — enabling discover, dossier, compare and map from one graph.",
        },
        {
          title: "Accessible, voice-first, offline-tolerant frontend",
          description:
            "React 19 + TypeScript + TanStack Router/Start (SSR streaming) + Tailwind + Vite, OpenStreetMap, Web Speech API, local queue for reports, 5-language i18n with read-aloud, responsive header + bottom nav, and Vercel edge deployment with chunked preloads — designed for phones, weak connectivity and field use.",
        },
      ],
      techStack: [
        { label: "Frontend", items: ["React 19", "TypeScript", "Vite", "TanStack Router / TanStack Start (SSR streaming)"] },
        { label: "Styling & UI", items: ["Tailwind CSS v4", "Radix UI / shadcn", "Lucide Icons", "Framer Motion"] },
        { label: "Maps & Voice", items: ["OpenStreetMap embeds", "Web Speech API (voice input + read-aloud)"] },
        { label: "Infrastructure", items: ["Vercel (edge, previews, modulepreload chunks)", "PWA manifest"] },
        { label: "Data (demo, flagged as simulated)", items: ["NBS population/economy/cost", "State emergency feeds (flood/fire)", "OSM POI extracts (hospitals/schools/roads)", "Met services (weather/climate)", "EPA (air/water/waste)", "Telecom coverage registry"] },
      ],
      challenges: [
        {
          title: "Making 10 scores comparable and explainable",
          description:
            "10 numbers alone overwhelm users; without plain language, banding and sourced 'why', the Overall score feels like a black box and can't be compared across Wuse 2 vs Ikeja vs Port Harcourt.",
        },
        {
          title: "Intent without profiling",
          description:
            "Re-weighting for 'open a shop' vs 'find malaria treatment' must be transparent and must not let demographics or social data leak in as proxies.",
        },
        {
          title: "Five languages + voice + low connectivity",
          description:
            "Hausa/Yorùbá/Igbo/Pidgin plus voice/read-aloud and offline reporting had to work on phones with patchy data, without bloating the bundle.",
        },
        {
          title: "From dossier to decision: compare & government ops",
          description:
            "Users need to justify a choice (share/CSV/print) and ops teams need a national map of flagged versus stable areas — both from the same dataset, aggregated-only, with trend and breakdown clarity.",
        },
      ],
      overcoming: [
        {
          challenge: "10 scores explainability",
          how: "Banded Overall (72+ Strong / 55-71 Workable / 0-54 At risk), per-category plain summaries ('Most services okay' / 'Mixed — check details' / 'Be careful — needs attention'), why-cards citing counts & trends, and source+date badges; Compare overlays profiles and highlights best-per-row so the eye catches the trade-off instantly.",
        },
        {
          challenge: "Intent without profiling",
          how: "Kept raw scores immutable; the Personal Decision Assistant only changes category weights per goal and documents it on /about (same data, different weights). Enforced ethical guardrails in copy and access: aggregated incident counts only, demographics/social never inputs, and an AI-explains-itself requirement for every score.",
        },
        {
          challenge: "Languages / voice / offline",
          how: "Lightweight i18n switcher + Web Speech API with 56px tap target, read-aloud toggle, Easy Mode for simple-words UI, and a report queue that stores Infrastructure/Environment/Safety/Healthcare/Transportation + Description locally and flushes when online — keeping the field flow to Category + Description (10–2000 chars).",
        },
        {
          challenge: "Compare & government ops",
          how: "Compare holds up to 3 locations in state, derives overlay + tables + key facts from the same location records, and offers Copy link / Export CSV / Print-PDF; Government dashboard colours OSM pins by most-severe flag, lists 11 flagged areas with priority (high/medium) and next action, and charts 6-month aggregated incident trends + Q2-vs-Q1 breakdown — all clearly marked as place patterns, never people.",
        },
      ],
      results: [
        "Live, faithful place-intelligence hub at https://enviromenthub-tvuv.vercel.app/ with 5 example Nigerian locations (78 Wuse 2 down to 61 Sabon Gari) each fully explainable across 10 categories, with map, key facts and dated sources.",
        "Goal-aware discovery: Ask Hub understands natural language or voice ('Where can I find a hospital?', 'Is this place good for my family?') and re-weights the same scores transparently, cited on the methodology page.",
        "True comparability and operability: side-by-side compare with share/CSV/print and a government map that surfaces 11 flagged areas, 4 critical alerts and Q2-vs-Q1 incident deltas for planning — all aggregated-only.",
        "Inclusive access: 5 languages + voice + read-aloud + offline-queued reporting + mobile bottom nav, with every figure explicitly marked 'simulated sample data — do not use for real decisions' to preserve trust in demo mode.",
      ],
      lessons: [
        "One scoring model + re-weighting beats N separate models: keep raw 10 scores fixed, vary only weights by intent — it preserves auditability and lets you prove 'places, never people'.",
        "Explainability is the feature: band + plain sentence + source/date + status (verified/estimated/community) matters more than the number itself; without it, even a 78/100 is noise.",
        "Voice + language + offline are not nice-to-haves for place tools in Nigeria — they determine whether the people most at risk can actually file a flood/waste report or choose a clinic.",
        "Map + compare + flagged list are the same data at three zoom levels (dossier → comparison → national ops); modelling locations as the central entity keeps them consistent without duplication.",
        "Marking demo data as simulated — everywhere (cards, tables, footer, about) — is what lets you ship realistic UX without misleading users or planners.",
      ],
    },
  },
  {
    id: "collectnaija",
    title: "CollectNaija",
    description:
      "The receivables workspace for ambitious Nigerian businesses — track customers, invoices, outstanding balances and payments in one calm workspace while automating respectful payment reminders. Live at debt-collector-theta.vercel.app.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "REST API", "Paystack", "Vercel"],
    features: [
      "Customer management with profiles, payment history, preferred language (en/ha/yo/ig/pcm) and full conversation timeline",
      "Invoicing with server-calculated balances, items, discounts, tax and Paystack-verified payments — never trusted from the frontend",
      "Automated gentle reminders via WhatsApp/SMS with comms rules, scheduling, and opt-out handling",
      "Dashboard with total outstanding, due today, overdue, collected this month and 7-day cashflow + search across customers, invoices and payments",
      "Role-based access (Owner, Admin, Collection Manager) with org-isolated, auditable actions and audit log + CSV/PDF reports",
      "NGN by default (Africa/Lagos timezone) with USD/EUR/GBP support, JWT auth, and clear metered AI & messaging usage",
      "Pricing that scales — Free (50 customers) to Enterprise (10,000+), with 14-day trial, coupon support (WELCOME50) and Vercel edge delivery",
    ],
    image: "/images/project-collectnaija.jpg",
    live: "https://debt-collector-theta.vercel.app/",
    category: "FinTech",
    featured: true,
    caseStudy: {
      summary:
        "CollectNaija (live at debt-collector-theta.vercel.app — branded 'Collect what you're owed. Stay in control.') is a receivables workspace for Nigerian businesses that replaces spreadsheets and manual chasing with a single calm workspace for customers, invoices, payments, and automated, respectful reminders — where every amount is calculated on the server and every payment is verified by the provider.",
      overview: [
        {
          label: "What it is",
          text: "CollectNaija — a receivables workspace (live at https://debt-collector-theta.vercel.app/) that gives ambitious businesses one place to add customers, issue invoices, track outstanding vs overdue balances, record payments, and automate gentle follow-ups.",
        },
        {
          label: "What it does",
          text: "Lets a team search customers/invoices/payments, see in seconds who owes what and when they promised to pay, send WhatsApp/SMS reminders on schedule (with language preference per customer), record Paystack-verified payments, issue receipts, and watch cashflow update live — with dashboard, reports, audit log and CSV/PDF export.",
        },
        {
          label: "Who it is for",
          text: "Nigerian SMEs and growing businesses (and their Owner/Admin/Collection Manager team) that extend credit and need to get paid on time — Nigeria-first, built to scale globally, with NGN/Africa/Lagos defaults and USD/EUR/GBP support.",
        },
        {
          label: "Main purpose",
          text: "To stop chasing payments: give the team a single workspace where every balance is server-calculated, every payment comes from the provider, and next steps are obvious — so cash comes in faster with respect for every customer.",
        },
        {
          label: "Problem it addresses",
          text: "Receivables live in chats, books and memory; balances are recomputed in the browser, payments are marked 'successful' from a button, and reminders are manual — so teams lose track, balances drift, and customers get chased inconsistently.",
        },
      ],
      why: [
        "Getting paid is the part of running a business that feels most like chasing. An invoice goes out, a promise is made, and then the work becomes reminders — calls, messages, revisits — with no shared view of who owes what or what to do next.",
        "For many Nigerian businesses the tools at hand are a customer book, a spreadsheet invoice, and a phone. Balances are calculated wherever they are displayed, payments are confirmed by the person who tapped the button, and the history of a customer lives in chat scroll.",
        "When the team grows — Owner, Admin, Collection Manager — the problem multiplies. One person knows the promise date, another holds the receipt, and nobody sees the trend: how much is outstanding vs overdue, or whether collections this week are on track.",
        "The opportunity was to build a workspace that treats receivables as a first-class domain: customers with profiles and language preference, invoices with server-truth balances, provider-verified payments, and scheduled, respectful reminders — all org-isolated, auditable, and explainable before anyone asks.",
      ],
      opportunity:
        "A single receivables workspace where every balance is calculated on the server, every payment is verified by Paystack (not the frontend), and every reminder respects the customer's preferred language — with Owner/Admin/Collection Manager roles and an audit trail accountants will trust.",
      problems: [
        {
          title: "Balances that drift",
          description:
            "When totals and outstanding balances are computed in the browser, two screens can show two numbers and nobody knows which is true.",
          consequence:
            "Teams lose trust in the system and fall back to manual books — the tool becomes shelfware.",
        },
        {
          title: "Payments trusted from the button",
          description:
            "Marking a payment 'successful' because the frontend said so invites fraud and reconciliation errors.",
          consequence:
            "Accounts look paid when money never moved, or disputes take days to untangle.",
        },
        {
          title: "Manual, inconsistent reminders",
          description:
            "Follow-ups depend on who remembers, in what language, on which channel — WhatsApp, SMS, or call — with no schedule or audit.",
          consequence:
            "Customers are chased unevenly, some over-contacted and others forgotten, and no one can prove what was sent when.",
        },
        {
          title: "No shared receivables view",
          description:
            "Outstanding vs overdue, collected this month, due today, and 7-day cashflow live in separate notes or heads, not in one dashboard with search, reports and export.",
          consequence:
            "The business cannot answer 'how much are we owed and what is next?' without a meeting and a spreadsheet.",
        },
      ],
      solutions: [
        {
          problem: "Balances that drift",
          solution:
            "Every balance — total invoiced, amount paid, balance, outstanding, overdue — is calculated on the server and exposed via /invoices and /customers; the frontend renders what the server says, never what it computes.",
          result:
            "All portals show one truth, and the footer line holds: 'Every amount is calculated on the server.'",
        },
        {
          problem: "Payments trusted from the button",
          solution:
            "Payments run through Paystack; the backend verifies via provider before a payment is stored as successful, with idempotency keys and provider_ref — 'No payment is marked successful from the frontend alone.'",
          result:
            "Receipts, collections and cashflow reflect provider truth, not UI optimism.",
        },
        {
          problem: "Manual, inconsistent reminders",
          solution:
            "Comms rules engine (/comms/rules, /comms/events) schedules WhatsApp/SMS per customer with status (scheduled/sent), channel, scheduled_for/sent_at, language-aware templates (en/ha/yo/ig/pcm), and opt-out archiving; rules can be created, patched, deleted and run-all from the UI.",
          result:
            "A '12 days overdue • WhatsApp reminder ready' customer gets the right message in the right language at the right time — and it is logged.",
        },
        {
          problem: "No shared receivables view",
          solution:
            "Dashboard aggregates totalOutstanding, dueToday, overdue, collectedThisMonth, invoiceCount, customerCount, paymentCount and a 7-day cashflow series; plus full customer/invoice/payment search, reports (outstanding vs overdue, collections by week), audit log (/audit/logs), and CSV/PDF export under RBAC (Owner/Admin/Collection Manager, org-isolated).",
          result:
            "The team opens one screen and knows next steps without asking anyone.",
        },
      ],
      howWeSolvedIt: [
        "Visited the live deployment at https://debt-collector-theta.vercel.app/ and mapped the real product: header 'CollectNaija • The receivables workspace for ambitious businesses', hero 'Stop chasing payments. Start collecting with confidence.', metrics 'Collected this month ₦1.2M • 18 payments', cards for customers/invoices/payments/reminders/reports/roles, pricing with 5 plans, and footer 'Helping Nigerian businesses get paid on time.'",
        "Modelled receivables as the domain: customers (customer_code, name, phone, outstanding, overdue, preferred_language, language_history), invoices (invoice_number, customer, items with qty/unit_price_minor, subtotal/discount/tax/total/balance, currency, status, due_date), payments (invoice, amount, provider, provider_ref, status, created_at) and comms events (channel, status, sent_at, scheduled_for) — all fetched via a typed REST client with JWT (cn_token/cn_refresh) and X-Org-Language headers.",
        "Built the frontend as a React + TypeScript + Vite + Tailwind app (vendor + ui chunks, modulepreload, Vercel edge). Implemented auth (login/signup with JWT decode for org), customers (list/search/bulk import/CRUD), invoices (create with idempotency key, detail), payments (create verified), reminders (rules CRUD + run), reports/charts, settings/languages (dashboard vs customer language, 5 supported codes, auto_detect/use_fallback), billing/pricing with Paystack authorization_url flow, and audit logs — matching the JS bundles seen live (Landing, Login, Signup, Dashboard, Customers, Invoices, Payments, Reminders, Reports, Pricing, Billing, etc.).",
        "Implemented the pricing IA for trust and conversion: 5 plans (free/starter/business/professional/enterprise) sorted by slug, each showing ₦ price/month, 4 limits and 5 feature slugs, 'Most chosen' on Business, trial banner '14-day trial on Starter & Business', coupon input (WELCOME50 → 50% off), and a footer promise that server-calculated balances, audit log, timezone and currency are included on every plan while AI & messaging is metered and shown before charge.",
      ],
      architecture: [
        {
          title: "Server-truth receivables domain",
          description:
            "Customers, invoices and payments are first-class entities with balances derived server-side; search, dashboard aggregates and reports all read the same API, so 'outstanding vs overdue' is a query result, not a UI calculation.",
        },
        {
          title: "Provider-verified payments",
          description:
            "Paystack is the source of truth: POST /payments with idempotency key, provider=manual/paystack, and provider_ref; frontend never sets status to successful alone — verification is backend-only, with receipts and cashflow downstream.",
        },
        {
          title: "Rules-based comms engine",
          description:
            "Declarative comms rules (/comms/rules CRUD + /run, /run-all) drive comms events (/comms/events by invoice/customer/channel), separating policy ('when to remind') from execution ('what was sent when') and respecting opt-out and language preference.",
        },
        {
          title: "Org-isolated, auditable workspace with i18n",
          description:
            "JWT auth (cn_token/cn_refresh, X-Org-Language, Accept-Language), per-org isolation (cn_org_id from /organizations), role checks (Owner/Admin/Collection Manager), audit logs, and 5-language support (en/ha/yo/ig/pcm + pcm) with dashboard vs customer language keys and auto-detect/fallback modes — deployed on Vercel with edge chunks and modulepreload.",
        },
      ],
      techStack: [
        { label: "Frontend", items: ["React", "TypeScript", "Vite"] },
        { label: "Styling & UI", items: ["Tailwind CSS", "Radix/shadcn patterns", "Lucide Icons"] },
        { label: "Routing & State", items: ["React Router (vendor chunk)", "REST client with JWT (cn_token/cn_refresh)"] },
        { label: "Payments & Comms", items: ["Paystack (provider-verified payments, idempotency)", "WhatsApp/SMS comms rules & events"] },
        { label: "Infrastructure", items: ["Vercel (edge, previews, modulepreload)", "REST API (organizations/customers/invoices/payments/comms/audit/languages)", "Africa/Lagos • NGN default"] },
      ],
      challenges: [
        {
          title: "Keeping balances honest",
          description:
            "Two screens recomputing balances locally will diverge; the dashboard, invoice detail and customer overdue must agree without client-side arithmetic.",
        },
        {
          title: "Verifying payments without trusting the button",
          description:
            "A fast UI still needs to wait for the provider; marking success from the click feels instant but breaks reconciliation.",
        },
        {
          title: "Respectful, language-aware reminders at scale",
          description:
            "From 50 to 10,000 customers, reminders must schedule correctly, respect opt-out, and speak the customer's preferred language (Hausa/Yorùbá/Igbo/Pidgin/English) — not the operator's.",
        },
        {
          title: "Pricing that explains itself",
          description:
            "Five plans with limits, features, trial, coupon and metered AI/messaging need to be comparable without a sales call, while reassuring that core receivables truth is included on every plan.",
        },
      ],
      overcoming: [
        {
          challenge: "Honest balances",
          how: "Made the API the calculator: totals, paid and balance come as numbers from the server (balance/total as Number(...)), and dashboard aggregates (totalOutstanding, dueToday, overdue, collectedThisMonth) reduce over the same invoice/payment results the tables show — so equality is structural, not coincidental.",
        },
        {
          challenge: "Verified payments",
          how: "POST /payments carries X-Idempotency-Key and provider info; the UI shows 'Each payment is verified by the provider — status comes from the backend, never the button' and only reflects status after the server confirms it, with provider_ref as the receipt anchor.",
        },
        {
          challenge: "Respectful reminders at scale",
          how: "Modelled comms as rules → events (not ad-hoc sends): rules store channel/schedule/policy, events store per-invoice/customer send with status and timestamps; customer preferred_language + language_history travel with the customer, and opt_out archives them — so Hausa or Pidgin templates run automatically and history proves what was sent.",
        },
        {
          challenge: "Explainable pricing",
          how: "Sorted plans by slug (free→starter→business→professional→enterprise), rendered price as ₦ with /month, limits as 'Unlimited/Not included' or counts, features as slug→human labels, highlighted Business as 'Most chosen', and added the promise footer 'All plans include: Invoices, payments, receipts, audit log, Africa/Lagos & NGN' plus 'AI & messaging is metered and shown before you pay' — trial and coupon (WELCOME50) are inline, not hidden.",
        },
      ],
      results: [
        "Live receivables workspace at https://debt-collector-theta.vercel.app/ with hero, dashboard, customers, invoices, payments, reminders, reports, settings, languages, pricing and billing — all wired to a JWT + org-isolated REST API with server-calculated balances.",
        "Provider-verified payment flow via Paystack with idempotency and receipting, so collections and 7-day cashflow reflect money moved, not buttons tapped.",
        "Rules-based, language-aware reminders (5 languages + auto_detect/use_fallback) with scheduling, WhatsApp/SMS channels, opt-out and full event history — replacing manual chasing with an auditable timeline per customer.",
        "Org-isolated RBAC (Owner/Admin/Collection Manager), search across customers/invoices/payments, dashboard aggregates, reports with CSV/PDF and audit log, plus a pricing page that scales from 50 to 10,000 customers with trial and coupon — Nigeria-first with global currency readiness.",
      ],
      lessons: [
        "Server-truth is the product: moving balance arithmetic to the API removes the most expensive bug in receivables — two different numbers for the same invoice.",
        "Never trust the button for money: provider verification plus idempotency turns 'Payment received' from a UI event into an accounting fact.",
        "Reminders are a rules engine, not a send button: separating policy from events keeps follow-ups consistent, auditable and respectful — especially when language preference matters.",
        "Language is a domain field, not a UI toggle: storing preferred_language and history on the customer, plus dashboard vs customer language keys, lets Hausa/Pidgin customers hear the right message without operator effort.",
        "Pricing should be as explainable as the dashboard: showing limits, features, trial and metered usage inline — with core guarantees ('Every amount is calculated on the server') on every plan — builds trust faster than a sales call.",
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
