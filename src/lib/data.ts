export const site = {
  name: "Hari Prasath S",
  title: "Backend Developer",
  tagline: "Backend Developer building reliable, scalable systems",
  email: "harisasindran@gmail.com",
  github: "https://github.com/Harshi-45",
  linkedin: "https://www.linkedin.com/in/hari-prasath-s-83b44b23a/",
  resumeUrl: "/resume.pdf",
  bio: "Backend Developer with 3 years of experience designing and building production systems using Java, Spring Boot, and microservices architecture. Comfortable across the full product lifecycle — API design, integration, deployment, and production support — with hands-on exposure to enterprise integration tooling and full-stack collaboration using React.js.",
};

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages & Frameworks",
    items: ["Java", "Spring Boot", "REST APIs", "React.js"],
  },
  {
    category: "Architecture",
    items: ["Microservices", "Integration", "Product Development"],
  },
  {
    category: "Data & Infra",
    items: ["PostgreSQL", "Docker", "Git", "GitHub"],
  },
  {
    category: "Platforms",
    items: ["Workato", "Production Support & Operations"],
  },
];

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  tech: string[];
  type: "Production Product" | "Client Project";
};

export const projects: Project[] = [
  {
    slug: "supply-chain-suite",
    name: "Supply Chain Suite — TMS / OMS / WMS",
    summary:
      "Backend services powering Transportation, Order, and Warehouse Management, integrated with Manhattan and SAP.",
    description:
      "Built and maintained backend services across a supply chain platform spanning Transportation Management (TMS), Order Management (OMS), and Warehouse Management (WMS), with integrations into Manhattan Associates and SAP for order and inventory data flow. TODO: add more detail on your specific contributions here.",
    tech: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "REST APIs"],
    type: "Production Product",
  },
  {
    slug: "rms",
    name: "RMS — Recruitment Management System",
    summary:
      "Production recruitment platform handling candidate and hiring workflows end-to-end.",
    description:
      "Contributed to RMS, a production recruitment management system used to manage candidate pipelines and hiring workflows. TODO: add more detail on your specific contributions here.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
    type: "Production Product",
  },
  {
    slug: "jpms",
    name: "JPMS",
    summary: "Production product — details to be added.",
    description:
      "TODO: describe what JPMS does, your role, and the impact of your work on it.",
    tech: ["Java", "Spring Boot"],
    type: "Production Product",
  },
  {
    slug: "cs-dispatch",
    name: "C&S — Dispatch",
    summary: "Client dispatch system project.",
    description:
      "Worked on a dispatch system for client C&S. TODO: describe the problem this solved and your specific contributions.",
    tech: ["Java", "Spring Boot", "REST APIs"],
    type: "Client Project",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Backend Developer",
    company: "TODO: Company Name",
    period: "TODO: e.g. 2023 — Present",
    points: [
      "Designed and built REST APIs and microservices using Java and Spring Boot for production systems.",
      "Worked across TMS, OMS, WMS, and recruitment platforms, integrating with third-party systems like Manhattan, SAP, and Workato.",
      "Owned production support and operational reliability for live services.",
    ],
  },
];
