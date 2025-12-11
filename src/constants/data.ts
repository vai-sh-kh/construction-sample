// All text content and data for the Arkonex Construction website

export const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Sustainability", href: "#" },
  { label: "Careers", href: "#" },
];

export const STATS = [
  { value: "200+", label: "Projects Done" },
  { value: "15+", label: "Years Exp." },
  { value: "99%", label: "Happy Clients" },
];

export const SERVICES = [
  { title: "Construction Planning", active: false },
  { title: "Structural Renovations", active: true, count: "03" },
  { title: "General Contracting", active: false },
  { title: "Design & Build Services", active: false },
  { title: "Site Oversight & Quality", active: false },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Urban Mixed-Use Complex in Surabaya",
    description: "A modern development combining commercial and residential spaces with sustainable features.",
    tags: ["Mixed Use", "Completed"],
    isNew: false,
    imageKey: "surabaya" as const,
  },
  {
    id: 2,
    title: "Healthcare Facility Expansion in Yogyakarta",
    description: "Upgrading hospital infrastructure to improve patient capacity and operational efficiency.",
    tags: ["Healthcare", "Ongoing"],
    isNew: false,
    imageKey: "yogyakarta" as const,
  },
  {
    id: 3,
    title: "Eco-Friendly Housing Project in Bali",
    description: "A cluster of energy-efficient homes built with local materials and green construction methods.",
    tags: ["Green Build", "Residential"],
    isNew: true,
    imageKey: "bali" as const,
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Jacob M. Arthur",
    role: "Founder & Strategist",
    imageKey: "jacob" as const,
  },
  {
    id: 2,
    name: "Esther M. Howard",
    role: "Head of Engineering",
    imageKey: "esther" as const,
  },
  {
    id: 3,
    name: "Jenny R. Wilson",
    role: "Quality Assurance",
    imageKey: "jenny" as const,
  },
  {
    id: 4,
    name: "Robert Fox",
    role: "Site Supervisor",
    imageKey: "robert" as const,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Samuel T.",
    role: "Property Developer",
    quote: "Their attention to detail and commitment to our vision truly set them apart. The project was completed on time, on budget, and beyond expectations.",
    imageKey: "samuel" as const,
  },
];

export const FAQS = [
  {
    id: 1,
    question: "What types of projects do you specialize in?",
    answer: "We work on residential, commercial, industrial, and infrastructure projects — tailored to your needs. Our expertise spans from high-rise buildings to eco-friendly housing complexes.",
    isOpen: true,
  },
  {
    id: 2,
    question: "How do I get started with a project?",
    answer: "Simply reach out through our contact form or give us a call. We'll schedule a consultation to discuss your vision, timeline, and budget.",
    isOpen: false,
  },
  {
    id: 3,
    question: "Are your projects delivered on time and within budget?",
    answer: "Yes, we pride ourselves on meeting deadlines and staying within budget. Our project management approach ensures transparent communication throughout.",
    isOpen: false,
  },
  {
    id: 4,
    question: "Do you handle permits and compliance?",
    answer: "Absolutely. We manage all permits, inspections, and regulatory compliance so you can focus on what matters most.",
    isOpen: false,
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "5 Ways Technology is Transforming Modern Construction",
    description: "Discover how digital tools, automation, and smart materials are changing the way we build, creating safer and more efficient sites.",
    category: "Technology",
    date: "Oct 24, 2023",
    readTime: "5 min read",
    imageKey: "technology" as const,
    featured: true,
  },
  {
    id: 2,
    title: "Inside Our Latest Commercial Project in Jakarta",
    description: "A behind-the-scenes look at how we delivered impact and efficiency in the heart of the city.",
    category: "Projects",
    date: "Sep 12, 2023",
    readTime: "4 min read",
    imageKey: "jakarta" as const,
    featured: false,
  },
  {
    id: 3,
    title: "Why Sustainable Building Matters More Than Ever",
    description: "Learn how eco-conscious design is becoming essential in today's landscape and regulatory environment.",
    category: "Sustainability",
    date: "Aug 28, 2023",
    readTime: "6 min read",
    imageKey: "sustainable" as const,
    featured: false,
  },
  {
    id: 4,
    title: "From Blueprint to Reality: Managing Complex Projects",
    description: "An inside look at our step-by-step process for delivering successful large-scale builds on time.",
    category: "Management",
    date: "Jul 15, 2023",
    readTime: "7 min read",
    imageKey: "management" as const,
    featured: false,
  },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "News & Media", href: "#" },
  ],
  services: [
    { label: "Construction", href: "#" },
    { label: "Renovation", href: "#" },
    { label: "Architecture", href: "#" },
    { label: "Project Planning", href: "#" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
  contact: [
    { label: "support@arkonex.com", href: "mailto:support@arkonex.com" },
    { label: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { label: "123 Construction Blvd, NY", href: "#" },
  ],
};

