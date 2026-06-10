export const heroLogos = [
  "Vercel",
  "Stripe",
  "Linear",
  "Notion",
  "Figma",
  "Supabase",
  "Langchain",
  "OpenAI",
  "Replicate",
  "Hugging Face",
];

export const navLinks = [
  { name: "PRODUCTS", href: "#features", hasDropdown: true },
  { name: "SOLUTIONS", href: "#solutions", hasDropdown: true },
  { name: "TOOLKITS", href: "#toolkits" },
  { name: "BLOG", href: "#blog" },
  { name: "DOCS", href: "#docs" },
];

export const steps = [
  { id: "01", eyebrow: "Prompt to executable plan", title: "Describe the outcome.", body: "Write what you want shipped in plain language. Moonshift turns the prompt into requirements, constraints, flows, data, gates, and a build plan you can approve.", icon: "MousePointer2" },
  { id: "02", eyebrow: "Autonomy begins", title: "Approve once. Watch it build.", body: "Agents fan out across frontend, backend, tests, deploy, copy, and release work. Every phase streams progress so you are watching the launch, not managing tickets.", icon: "Network" },
  { id: "03", eyebrow: "Production-ready output", title: "Wake up launched.", body: "A deployed URL, repository, tests, release notes, and launch assets are prepared together. The product ships with the operational pieces already connected.", icon: "Rocket" },
  { id: "04", eyebrow: "Clean handoff", title: "Own the stack afterwards.", body: "Code, infrastructure, docs, and decisions stay transparent. Moonshift logs the handoff so your team can extend the product without reverse engineering the build.", icon: "GitBranch" },
];

export const agents = [
  { icon: "Brain", label: "PLANNING", name: "Planning Agent", status: "Active", description: "Architects the entire application structure and defines the technical stack." },
  { icon: "Database", label: "DATA LAYER", name: "Database Agent", status: "Active", description: "Designs schemas, writes migrations, and manages the data layer." },
  { icon: "Code2", label: "BACKEND", name: "Backend Agent", status: "Active", description: "Builds APIs, authentication, and core business logic." },
  { icon: "Layout", label: "FRONTEND", name: "Frontend Agent", status: "Active", description: "Creates responsive UI components and connects to APIs." },
  { icon: "TestTube2", label: "QA", name: "Testing Agent", status: "Active", description: "Validates functionality end-to-end with automated test suites." },
  { icon: "ShieldCheck", label: "SECURITY", name: "Security Agent", status: "Active", description: "Scans for vulnerabilities and ensures secure defaults." },
  { icon: "Rocket", label: "DEVOPS", name: "Deployment Agent", status: "Active", description: "Configures CI/CD and deploys to production infrastructure." },
  { icon: "Megaphone", label: "GROWTH", name: "Marketing Agent", status: "Standby", description: "Generates promotional content and SEO metadata." },
  { icon: "Bug", label: "MAINTENANCE", name: "Issue Resolution", status: "Standby", description: "Monitors logs, fixes bugs, and handles incidents automatically." },
];

export const workflowSteps = [
  { title: "Idea Submission", desc: "Describe your application in plain text" },
  { title: "Planning & Architecture", desc: "AI designs the system architecture" },
  { title: "Database Design", desc: "Schema and data models created" },
  { title: "Backend Development", desc: "APIs and business logic built" },
  { title: "Frontend Development", desc: "Responsive UI components generated" },
  { title: "Testing", desc: "Automated test suites executed" },
  { title: "Security Review", desc: "Vulnerability scanning and fixes" },
  { title: "Deployment", desc: "Deployed to production infrastructure" },
  { title: "Launch Assets", desc: "Marketing materials generated" },
  { title: "Product Delivery", desc: "Your application is live and ready" },
];

export const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring the platform",
    features: [
      "Limited application generations",
      "Basic deployment",
      "Access to core platform features",
      "Community support",
      "Public build logs",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For serious developers and startups",
    features: [
      "Increased generation limits",
      "Faster build times",
      "Advanced deployment features",
      "Priority processing",
      "Additional agent capabilities",
      "Custom domains",
      "Email support",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$149",
    period: "/month",
    description: "For teams building together",
    features: [
      "Collaborative workflows",
      "Shared projects",
      "Team management",
      "Enterprise-level limits",
      "Advanced deployment controls",
      "SSO & SAML",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const faqs = [
  {
    question: "What does Moonshift build?",
    answer: "Moonshift can build full-stack web applications including frontend interfaces, backend APIs, databases, authentication systems, and business logic. It supports modern frameworks like React, Next.js, Node.js, and various databases.",
  },
  {
    question: "How long does deployment take?",
    answer: "Most applications are deployed within 5 minutes. Complex applications with multiple integrations may take up to 15 minutes. The entire process from prompt to live URL is automated.",
  },
  {
    question: "Who owns the generated code?",
    answer: "You own everything. All generated source code, databases, and infrastructure belong entirely to you. Moonshift acts as your development team, but you retain full ownership.",
  },
  {
    question: "Can I export my project?",
    answer: "Yes, you can export your entire project at any time. We provide Git repository access, database dumps, and infrastructure as code configurations for complete portability.",
  },
  {
    question: "Is there vendor lock-in?",
    answer: "No. Moonshift is designed to be vendor-lock-in free. You can continue development independently, host elsewhere, or modify the generated code however you like.",
  },
  {
    question: "Which technologies are supported?",
    answer: "Moonshift supports React, Next.js, Vue, Node.js, Python, PostgreSQL, MongoDB, Redis, Prisma, Tailwind CSS, and many more. We're constantly adding new technologies.",
  },
  {
    question: "How does deployment work?",
    answer: "Applications are automatically containerized and deployed to production infrastructure. You can use Moonshift's managed infrastructure or connect your own cloud providers.",
  },
  {
    question: "What happens after cancellation?",
    answer: "Your deployed applications remain active until the end of your billing period. After that, you can export all your code and data. We provide a 30-day grace period for data retrieval.",
  },
];

export const footerLinks = {
  PRODUCT: [
    { name: "Features", href: "#features" },
    { name: "Showcase", href: "#showcase" },
    { name: "Pricing", href: "#pricing" },
    { name: "Changelog", href: "#changelog" },
  ],
  RESOURCES: [
    { name: "Documentation", href: "#docs" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "#blog" },
    { name: "Community", href: "#community" },
  ],
  COMPANY: [
    { name: "About", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
    { name: "Press", href: "#press" },
  ],
  LEGAL: [
    { name: "Terms", href: "#terms" },
    { name: "Privacy", href: "#privacy" },
    { name: "Cookies", href: "#cookies" },
  ],
};

export const socialLinks = [
  { icon: "Globe", href: "#", label: "Website" },
  { icon: "MessageCircle", href: "#", label: "Community" },
  { icon: "ExternalLink", href: "#", label: "External" },
  { icon: "Mail", href: "#", label: "Email" },
];
