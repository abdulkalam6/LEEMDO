/**
 * LEEMDO Project Cart — Mock Data
 * All project data for the marketplace
 */

const PROJECTS = [
  // ── Voice Campaigns ──────────────────────────────────────────
  {
    id: 1,
    title: "Mortgage & Loan Processing Campaign",
    category: "Voice",
    type: "voice",
    country: "US",
    flag: "🇺🇸",
    industry: "Finance",
    payout_type: "CPL",
    payout: "$18–$35 per Lead",
    icon: "🏠",
    badge: "badge-blue",
    featured: true,
    description: "High-quality inbound and outbound mortgage lead generation for a top-tier US lender. Agents will assist potential borrowers with pre-qualification, collect lead data, and transfer hot prospects to licensed loan officers.",
    requirements: {
      agents: "5–20 agents",
      experience: "6+ months mortgage or finance experience",
      tools: "Dialpad / Five9 CRM",
      shift: "8 AM – 8 PM EST (Mon–Fri)",
      compliance: "TCPA Compliant | NMLS awareness required"
    },
    tags: ["Inbound", "Outbound", "Finance", "CPL"],
    postedDate: "2026-04-01",
    applications: 12,
    active: true
  },
  {
    id: 2,
    title: "Medical Device Sales Campaign",
    category: "Voice",
    type: "voice",
    country: "US",
    flag: "🇺🇸",
    industry: "Healthcare",
    payout_type: "CPA",
    payout: "$45–$90 per Sale",
    icon: "🏥",
    badge: "badge-teal",
    featured: false,
    description: "B2C outbound campaign selling FDA-approved medical devices (glucose monitors, CPAP accessories) to Medicare-eligible patients. Top performers earn $90+ CPA with weekly bonuses.",
    requirements: {
      agents: "3–10 agents",
      experience: "Healthcare or medical background preferred",
      tools: "Ringcentral / Salesforce",
      shift: "9 AM – 6 PM CST",
      compliance: "HIPAA Compliant | Must sign BAA"
    },
    tags: ["Outbound", "Healthcare", "Medicare", "CPA"],
    postedDate: "2026-03-28",
    applications: 8,
    active: true
  },
  {
    id: 3,
    title: "MVA (Motor Vehicle Accident) Campaign",
    category: "Voice",
    type: "voice",
    country: "US",
    flag: "🇺🇸",
    industry: "Legal",
    payout_type: "CPL",
    payout: "$22–$55 per Qualified Lead",
    icon: "⚖️",
    badge: "badge-orange",
    featured: true,
    description: "Generate verified MVA leads for top personal injury law firms. Identify accident victims, confirm eligibility, and warm-transfer to legal intake specialists. High-demand campaign with consistent volume.",
    requirements: {
      agents: "2–15 agents",
      experience: "Legal intake or insurance experience preferred",
      tools: "VICIDial / GoAutodial",
      shift: "9 AM – 9 PM EST",
      compliance: "ABA Compliant | Lead verification required"
    },
    tags: ["Outbound", "Legal", "Accident", "CPL"],
    postedDate: "2026-03-25",
    applications: 19,
    active: true
  },
  {
    id: 4,
    title: "ACA Health Insurance (CPA / CPL)",
    category: "Voice",
    type: "voice",
    country: "US",
    flag: "🇺🇸",
    industry: "Insurance",
    payout_type: "CPA",
    payout: "$30–$70 per Enrollment",
    icon: "💊",
    badge: "badge-green",
    featured: false,
    description: "ACA Open Enrollment outbound campaign. Help uninsured Americans find affordable health coverage under the Affordable Care Act. Work directly with a licensed FMO. Flexible hours and scalable volume.",
    requirements: {
      agents: "5–30 agents",
      experience: "Health insurance or Medicare experience a plus",
      tools: "Healthcare.gov portal access provided",
      shift: "8 AM – 10 PM EST (weekends available)",
      compliance: "CMS Compliant | FFM Certified agents preferred"
    },
    tags: ["Outbound", "Health Insurance", "ACA", "CPA", "CPL"],
    postedDate: "2026-03-20",
    applications: 34,
    active: true
  },
  {
    id: 5,
    title: "Solar Appointment Setting (Residential)",
    category: "Voice",
    type: "voice",
    country: "US",
    flag: "🇺🇸",
    industry: "Energy",
    payout_type: "Commission",
    payout: "$25–$60 per Appointment",
    icon: "☀️",
    badge: "badge-orange",
    featured: true,
    description: "Set confirmed in-home solar consultations for premier US solar installers. Qualify homeowners by electricity bill, ownership, and roof age. High volume, consistent leads — green energy sector boom.",
    requirements: {
      agents: "5–25 agents",
      experience: "Appointment setting or solar background preferred",
      tools: "HubSpot / Calendly integration",
      shift: "10 AM – 8 PM Local Time",
      compliance: "TCPA Compliant | DNC scrubbing handled by client"
    },
    tags: ["Outbound", "Solar", "Energy", "Appointment Setting"],
    postedDate: "2026-04-02",
    applications: 21,
    active: true
  },
  {
    id: 6,
    title: "Home Insulation — UK Government Subsidy",
    category: "Voice",
    type: "voice",
    country: "UK",
    flag: "🇬🇧",
    industry: "Energy",
    payout_type: "CPL",
    payout: "£18–£40 per Lead",
    icon: "🏡",
    badge: "badge-green",
    featured: false,
    description: "Outbound campaign promoting UK Government ECO4 scheme grants for free home insulation and energy upgrades. Identify eligibility based on benefits, income, and property type. Huge national push.",
    requirements: {
      agents: "3–12 agents",
      experience: "UK market experience preferred",
      tools: "Zoho CRM / Vonage",
      shift: "9 AM – 7 PM GMT",
      compliance: "FCA / Ofgem Compliant | GDPR adhered"
    },
    tags: ["Outbound", "UK", "ECO4", "Government", "CPL"],
    postedDate: "2026-03-30",
    applications: 15,
    active: true
  },
  {
    id: 7,
    title: "Insurance Voice Campaign (UK)",
    category: "Voice",
    type: "voice",
    country: "UK",
    flag: "🇬🇧",
    industry: "Insurance",
    payout_type: "Commission",
    payout: "£22 per Policy + 15% Bonus",
    icon: "🛡️",
    badge: "badge-purple",
    featured: false,
    description: "Sell UK home, auto, and life insurance products from leading FCA-regulated brokers. Warm leads provided. High conversion rate due to pre-screened data. Competitive CPL and residual commission model.",
    requirements: {
      agents: "4–20 agents",
      experience: "UK insurance sales or FCA awareness",
      tools: "Proprietary CRM (training provided)",
      shift: "8 AM – 8 PM GMT",
      compliance: "FCA Regulated | Needs completed DPA form"
    },
    tags: ["Inbound", "UK", "Insurance", "Commission"],
    postedDate: "2026-03-15",
    applications: 9,
    active: true
  },
  {
    id: 8,
    title: "Medical Billing & Accounts Receivable (AR)",
    category: "Voice",
    type: "voice",
    country: "US",
    flag: "🇺🇸",
    industry: "Healthcare",
    payout_type: "Commission",
    payout: "8–12% of Collections",
    icon: "📋",
    badge: "badge-teal",
    featured: false,
    description: "Handle medical billing AR follow-ups with US insurance companies (UHC, BCBS, Aetna, Cigna). Work aging claims, appeal denials, and resubmit claims. Commission-based — high earning potential.",
    requirements: {
      agents: "2–8 agents",
      experience: "Medical billing / coding certification required",
      tools: "Kareo / AdvancedMD / Epic",
      shift: "8 AM – 5 PM EST",
      compliance: "HIPAA Certified agents only | NDA required"
    },
    tags: ["Inbound", "Healthcare", "Medical Billing", "AR"],
    postedDate: "2026-03-22",
    applications: 5,
    active: true
  },

  // ── Non-Voice Campaigns ──────────────────────────────────────
  {
    id: 9,
    title: "XML Data Processing & Conversion",
    category: "Non-Voice",
    type: "non-voice",
    country: "US",
    flag: "🇺🇸",
    industry: "Technology",
    payout_type: "Fixed",
    payout: "$0.015–$0.025 per Record",
    icon: "📊",
    badge: "badge-grey",
    featured: false,
    description: "Large-scale XML data processing project from a US publishing firm. Convert structured data files, validate schema compliance, and ensure clean data migration. High-volume recurring work — 2M+ records expected.",
    requirements: {
      agents: "2–5 data specialists",
      experience: "XML, XSLT, JSON knowledge required",
      tools: "oXygen XML / Altova MapForce",
      shift: "Flexible (deadline-based)",
      compliance: "NDA required | Data security audit passed"
    },
    tags: ["Data Processing", "XML", "Technology", "Fixed"],
    postedDate: "2026-04-01",
    applications: 7,
    active: true
  },
  {
    id: 10,
    title: "EPUB Conversion & Digital Publishing",
    category: "Non-Voice",
    type: "non-voice",
    country: "UK",
    flag: "🇬🇧",
    industry: "Publishing",
    payout_type: "Fixed",
    payout: "£2.50–£5.00 per Title",
    icon: "📚",
    badge: "badge-blue",
    featured: false,
    description: "Convert print-ready PDFs and Word documents into fully accessible EPUB3 format for major UK publishers. Handle metadata tagging, cover images, table of contents, and accessibility compliance (WCAG 2.1).",
    requirements: {
      agents: "2–4 specialists",
      experience: "EPUB/HTML5/CSS knowledge | DTP experience",
      tools: "Calibre / InDesign / Sigil",
      shift: "Flexible, project milestones",
      compliance: "GDPR | Author rights awareness required"
    },
    tags: ["Non-Voice", "EPUB", "Publishing", "Fixed"],
    postedDate: "2026-03-18",
    applications: 4,
    active: true
  },
  {
    id: 11,
    title: "Live Chat Customer Support — SaaS Product",
    category: "Non-Voice",
    type: "non-voice",
    country: "US",
    flag: "🇺🇸",
    industry: "Technology",
    payout_type: "Fixed",
    payout: "$5–$8 per Hour / Agent",
    icon: "💬",
    badge: "badge-teal",
    featured: true,
    description: "Provide white-label live chat support for a fast-growing US SaaS company. Handle technical queries, billing questions, onboarding assistance, and ticket escalation. Must maintain CSAT >90%.",
    requirements: {
      agents: "3–10 agents",
      experience: "Chat support experience | SaaS knowledge",
      tools: "Intercom / Zendesk",
      shift: "24/7 coverage (rotating shifts)",
      compliance: "SOC2 NDA required | GDPR aware"
    },
    tags: ["Chat Support", "Non-Voice", "SaaS", "24/7"],
    postedDate: "2026-04-03",
    applications: 26,
    active: true
  },

  // ── IT Projects ──────────────────────────────────────────────
  {
    id: 12,
    title: "AI Chatbot Integration for E-Retailer",
    category: "IT Projects",
    type: "it",
    country: "US",
    flag: "🇺🇸",
    industry: "Technology",
    payout_type: "Fixed",
    payout: "$12,000 – $25,000",
    icon: "🤖",
    badge: "badge-purple",
    featured: true,
    description: "Develop and integrate a custom AI-driven customer support chatbot for a large US-based e-commerce platform. Must handle multi-language support and integrate with Shopify/Zendesk API.",
    requirements: {
      developers: "2–3 senior devs",
      experience: "2+ years in LLM/AI development",
      tools: "OpenAI API / Python / Node.js",
      timeline: "3 months milestone-based",
      compliance: "SOC2 Audit | GDPR Data Encryption"
    },
    tags: ["AI", "Chatbot", "IT Projects", "Fixed"],
    postedDate: "2026-04-05",
    applications: 14,
    active: true
  },
  {
    id: 13,
    title: "Cloud Migration (AWS/Azure) for Fintech",
    category: "IT Projects",
    type: "it",
    country: "UK",
    flag: "🇬🇧",
    industry: "Finance",
    payout_type: "Fixed",
    payout: "£8,000 – £15,000",
    icon: "☁️",
    badge: "badge-blue",
    featured: false,
    description: "Leading a complete cloud migration for a UK fintech firm. Move legacy on-premise servers to AWS/Azure with zero downtime. Focus on security, scalability, and disaster recovery.",
    requirements: {
      architects: "1–2 Cloud Architects",
      experience: "AWS/Azure Certified Solutions Architect",
      tools: "Terraform / Kubernetes / Docker",
      timeline: "4–6 months",
      compliance: "FCA Compliant | ISO 27001"
    },
    tags: ["Cloud", "Migration", "DevOps", "IT Projects"],
    postedDate: "2026-04-02",
    applications: 6,
    active: true
  },
  {
    id: 14,
    title: "Cybersecurity Audit — Healthcare Network",
    category: "IT Projects",
    type: "it",
    country: "US",
    flag: "🇺🇸",
    industry: "Healthcare",
    payout_type: "Fixed",
    payout: "$15,000 per Audit",
    icon: "🛡️",
    badge: "badge-teal",
    featured: true,
    description: "Conduct a comprehensive cybersecurity audit for a regional healthcare provider network. Identify vulnerabilities, perform penetration testing, and provide HIPAA-compliant remediation strategy.",
    requirements: {
      auditors: "2–3 Certified Ethical Hackers",
      experience: "5+ years in Cybersecurity / Pen Testing",
      tools: "Nessus / Kali Linux / Burp Suite",
      timeline: "30-day intensive audit",
      compliance: "HIPAA Audit Standard | HITRUST aware"
    },
    tags: ["Cybersecurity", "Audit", "Healthcare", "HIPAA"],
    postedDate: "2026-03-29",
    applications: 11,
    active: true
  }
];

const CATEGORIES = [
  { id: "all",       label: "All Projects",  count: 14 },
  { id: "voice",     label: "Voice",         count: 8 },
  { id: "non-voice", label: "Non-Voice",     count: 3 },
  { id: "it",        label: "IT Projects",   count: 3 }
];

const COUNTRIES = [
  { id: "all", label: "All Countries" },
  { id: "US",  label: "🇺🇸 United States" },
  { id: "UK",  label: "🇬🇧 United Kingdom" }
];

const INDUSTRIES = [
  { id: "all",         label: "All Industries" },
  { id: "Finance",     label: "Finance" },
  { id: "Healthcare",  label: "Healthcare" },
  { id: "Insurance",   label: "Insurance" },
  { id: "Legal",       label: "Legal" },
  { id: "Energy",      label: "Energy" },
  { id: "Technology",  label: "Technology" },
  { id: "Publishing",  label: "Publishing" }
];

const PAYOUT_TYPES = [
  { id: "all",        label: "All Payouts" },
  { id: "CPL",        label: "CPL" },
  { id: "CPA",        label: "CPA" },
  { id: "Commission", label: "Commission" },
  { id: "Fixed",      label: "Fixed Rate" }
];

const STATS = [
  { value: "500+",  label: "Active Projects",   icon: "📂" },
  { value: "1,200+",label: "Verified Partners", icon: "🤝" },
  { value: "$2M+",  label: "Payouts Processed", icon: "💰" },
  { value: "48",    label: "Countries",          icon: "🌍" }
];

const PRICING_PLANS = [
  {
    name: "Starter",
    price: 0,
    period: "/month",
    description: "Perfect to get started",
    features: [
      "Browse all listings",
      "Apply to 3 projects/month",
      "Basic profile",
      "Email support",
    ],
    cta: "Get Started Free",
    featured: false
  },
  {
    name: "Professional",
    price: 49,
    period: "/month",
    description: "For growing call centers",
    features: [
      "Everything in Starter",
      "Unlimited applications",
      "Priority listing placement",
      "Analytics dashboard",
      "Direct messaging",
      "Verified badge",
    ],
    cta: "Start 14-Day Trial",
    featured: true,
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    price: 149,
    period: "/month",
    description: "For project providers & agencies",
    features: [
      "Everything in Professional",
      "Post unlimited projects",
      "Featured placement",
      "Dedicated account manager",
      "Custom integrations",
      "White-label options",
    ],
    cta: "Contact Sales",
    featured: false
  }
];

const TESTIMONIALS = [
  {
    quote: "LEEMDO transformed the way we source BPO projects. We went from struggling to find quality campaigns to having a full pipeline within 3 months.",
    name: "Rahul Mehta",
    role: "Operations Director, VoiceConnect India",
    avatar: "RM",
    stars: 5
  },
  {
    quote: "As a project provider, the quality of applicants on LEEMDO is unmatched. Verified call centers, real capabilities, and fast onboarding.",
    name: "Sarah Mitchell",
    role: "Campaign Manager, InsureTech US",
    avatar: "SM",
    stars: 5
  },
  {
    quote: "We posted our solar campaign and had 15 qualified centers contact us within 48 hours. The platform pays for itself in the first deal.",
    name: "James O'Brien",
    role: "CEO, SunPath Solutions UK",
    avatar: "JO",
    stars: 5
  }
];

const FAQ_ITEMS = [
  {
    question: "How does LEEMDO Project Cart work?",
    answer: "LEEMDO connects project providers (clients) with service providers (call centers, BPO firms, freelancers). Providers post campaigns with payout details; call centers browse, filter, and apply. Once matched, both parties connect directly through our secure platform."
  },
  {
    question: "Is LEEMDO a free platform?",
    answer: "We offer a free Starter plan that lets you browse and apply to up to 3 projects per month. For unlimited access, our Professional plan starts at $49/month with a 14-day free trial."
  },
  {
    question: "How are service providers verified?",
    answer: "All service providers undergo a verification process including business registration check, sample call review, compliance certification review, and reference checks. Verified partners receive a badge on their profile."
  },
  {
    question: "What types of projects are available?",
    answer: "We list Voice campaigns (telemarketing, appointment setting, insurance, healthcare) and Non-Voice projects (data processing, chat support, EPUB conversion). Both US and UK markets are covered."
  },
  {
    question: "How are payments and payouts handled?",
    answer: "Payouts are negotiated directly between providers and call centers. LEEMDO facilitates the connection and provides escrow services for Premium members. CPL, CPA, fixed rate, and commission structures are all supported."
  },
  {
    question: "Can I post projects as a client?",
    answer: "Absolutely. Register as a Project Provider, choose a plan, and post your campaign with full requirements, payout details, and compliance info. Your listing will be reviewed and published within 24 hours."
  },
  {
    question: "Do you offer specific IT service projects?",
    answer: "Yes, LEEMDO explicitly lists IT projects such as Software Development, Cloud Infrastructure, AI Integration, and Cybersecurity Audits. We connect IT firms and developers with verified enterprise-level technology projects worldwide."
  }
];

// ══════════════════════════════════════════════════════════════════
//  FRANCHISES DATA
// ══════════════════════════════════════════════════════════════════
const FRANCHISES = [
  {
    id: 'f1',
    name: 'VoiceEdge BPO',
    tagline: 'Plug-and-play call center franchise across South Asia & MENA',
    sector: 'BPO / Call Center', sectorId: 'bpo',
    icon: '📞', badge: 'badge-green',
    featured: true, verified: true,
    country: 'IN', flag: '🇮🇳', region: 'Asia',
    investment: { min: 15000, max: 40000, currency: '$', label: '$15K – $40K' },
    investmentRange: 'under-50k', roi: '18–24 months',
    model: 'Franchise', seats: '10–50 agents',
    rating: 4.8, reviews: 34, established: 2019,
    territories: ['India', 'Pakistan', 'Bangladesh', 'Philippines'],
    highlights: ['Training provided', 'Lead supply guaranteed', 'Dedicated account manager', 'Branded CRM access'],
    about: 'VoiceEdge BPO is a proven call center franchise model operating across South Asia. Franchisees receive full setup support, agent training, a guaranteed pipeline of US/UK campaigns, and access to our proprietary CRM. Turn any office space into a revenue-generating BPO operation within 60 days.',
    requirements: { space: '500+ sq ft office space', team: 'Minimum 10 trained agents', internet: '50 Mbps dedicated fiber', experience: 'BPO management experience preferred', capital: '$15,000 minimum liquid capital' },
    support: ['4-week onboarding program', '24/7 technical support', 'Branded marketing materials', 'Monthly performance reviews'],
    campaigns: ['US Mortgage CPL', 'UK ECO4 Energy', 'Solar Appointments']
  },
  {
    id: 'f2',
    name: 'CallPro Elite',
    tagline: 'Premium US/UK campaign franchise for established call centers',
    sector: 'BPO / Call Center', sectorId: 'bpo',
    icon: '🎯', badge: 'badge-blue',
    featured: true, verified: true,
    country: 'US', flag: '🇺🇸', region: 'North America',
    investment: { min: 30000, max: 75000, currency: '$', label: '$30K – $75K' },
    investmentRange: '50k-100k', roi: '12–18 months',
    model: 'Master Franchise', seats: '25–200 agents',
    rating: 4.9, reviews: 61, established: 2017,
    territories: ['Worldwide'],
    highlights: ['Master franchise rights', 'Exclusive territory protection', 'Sub-franchising rights', 'High-ticket campaigns only'],
    about: 'CallPro Elite offers master franchise rights for high-performing call center operations. Franchisees gain exclusive territory rights, the ability to sub-franchise, and direct access to top-tier US legal, insurance, and healthcare campaigns.',
    requirements: { space: '2,000+ sq ft operations center', team: 'Existing team of 25+ agents', internet: '100 Mbps fiber with redundancy', experience: '3+ years BPO management', capital: '$30,000 minimum + working capital' },
    support: ['Exclusive territory mapping', 'Legal & compliance certified training', 'Priority campaign access', 'Sub-franchise development kit'],
    campaigns: ['MVA Legal CPL', 'ACA Health Insurance', 'Medical Billing AR']
  },
  {
    id: 'f3',
    name: 'DigiSupport Hub',
    tagline: 'Non-voice digital services franchise for global remote teams',
    sector: 'Digital Services', sectorId: 'digital',
    icon: '💻', badge: 'badge-teal',
    featured: false, verified: true,
    country: 'PH', flag: '🇵🇭', region: 'Asia',
    investment: { min: 5000, max: 18000, currency: '$', label: '$5K – $18K' },
    investmentRange: 'under-50k', roi: '8–14 months',
    model: 'Franchise', seats: '3–20 specialists',
    rating: 4.6, reviews: 22, established: 2021,
    territories: ['Philippines', 'India', 'Sri Lanka', 'Pakistan'],
    highlights: ['Low startup cost', 'Work from home model', 'SaaS & data processing niche', 'Growing demand'],
    about: 'DigiSupport Hub enables entrepreneurs to launch professional non-voice BPO operations from anywhere. Specialists handle SaaS chat support, data entry, EPUB conversion, and XML processing for US and UK clients.',
    requirements: { space: 'Home office or co-working (5 workstations min)', team: '3–5 skilled data / chat specialists', internet: '25 Mbps per workstation', experience: 'IT or digital services background a plus', capital: '$5,000 minimum startup' },
    support: ['Remote onboarding (2 weeks)', 'Project management tools', 'Client matching service', 'Quality assurance review'],
    campaigns: ['SaaS Live Chat', 'XML Data Processing', 'EPUB Publishing']
  },
  {
    id: 'f4',
    name: 'SolarConnect Franchise',
    tagline: 'Ride the green energy boom — set appointments for top US solar firms',
    sector: 'Energy / Green', sectorId: 'energy',
    icon: '☀️', badge: 'badge-orange',
    featured: true, verified: true,
    country: 'US', flag: '🇺🇸', region: 'North America',
    investment: { min: 20000, max: 55000, currency: '$', label: '$20K – $55K' },
    investmentRange: 'under-50k', roi: '10–16 months',
    model: 'Franchise', seats: '5–30 agents',
    rating: 4.7, reviews: 48, established: 2020,
    territories: ['US', 'Canada', 'Australia'],
    highlights: ['Booming sector', 'Exclusive zip code territories', 'Fully managed lead flow', 'High per-appointment payout'],
    about: 'SolarConnect is the fastest-growing solar appointment-setting franchise in the US. Franchisees operate dedicated outbound teams to book in-home solar consultations for top installers. Exclusive territories by zip code, $25–$60 per confirmed appointment.',
    requirements: { space: '300+ sq ft call floor or home-based', team: '5 minimum TCPA-certified agents', internet: '50 Mbps fiber', experience: 'Sales or appointment-setting background', capital: '$20,000 startup + reserve' },
    support: ['TCPA compliance certification', 'DNC scrubbing platform', 'Daily lead lists', 'Performance bonus structure'],
    campaigns: ['Residential Solar Appointments', 'Commercial Solar CPL']
  },
  {
    id: 'f5',
    name: 'LegalLeads Pro',
    tagline: 'High-payout legal lead generation franchise — US market',
    sector: 'Legal / BPO', sectorId: 'legal',
    icon: '⚖️', badge: 'badge-purple',
    featured: false, verified: true,
    country: 'US', flag: '🇺🇸', region: 'North America',
    investment: { min: 25000, max: 60000, currency: '$', label: '$25K – $60K' },
    investmentRange: 'under-50k', roi: '12–20 months',
    model: 'Franchise', seats: '5–25 agents',
    rating: 4.5, reviews: 18, established: 2018,
    territories: ['US', 'UK', 'India', 'Pakistan'],
    highlights: ['$55+ per qualified lead', 'MVA & personal injury focus', 'Pre-vetted law firm clients', 'Training + scripts included'],
    about: 'LegalLeads Pro specializes in generating high-quality MVA and personal injury leads for top US law firms. Franchisees receive proven scripts, pre-vetted attorney clients, and a full compliance framework. CPL rates of $22–$55 per verified lead.',
    requirements: { space: '400+ sq ft private call floor', team: '5+ agents with legal awareness training', internet: '50 Mbps dedicated', experience: 'Call center management background', capital: '$25,000 franchise fee + operational capital' },
    support: ['ABA-compliant scripts', 'Legal intake training', 'Dedicated law firm account manager', 'Lead verification platform'],
    campaigns: ['MVA Legal CPL', 'Mass Tort Leads', 'Personal Injury Intake']
  },
  {
    id: 'f6',
    name: 'InsureVoice UK',
    tagline: 'FCA-regulated insurance sales franchise for the UK market',
    sector: 'Insurance / BPO', sectorId: 'insurance',
    icon: '🛡️', badge: 'badge-blue',
    featured: false, verified: true,
    country: 'UK', flag: '🇬🇧', region: 'Europe',
    investment: { min: 18000, max: 45000, currency: '£', label: '£18K – £45K' },
    investmentRange: 'under-50k', roi: '14–22 months',
    model: 'Franchise', seats: '4–20 agents',
    rating: 4.6, reviews: 27, established: 2019,
    territories: ['UK', 'Ireland', 'India (UK campaigns)'],
    highlights: ['FCA-compliant framework', 'Warm leads provided', 'Residual commissions', '£22+ per policy'],
    about: 'InsureVoice UK is a specialist franchise for selling FCA-regulated home, auto, and life insurance products across the UK. Pre-screened warm leads, FCA-compliant sales framework, and ongoing compliance training included.',
    requirements: { space: '400 sq ft or home-office setup', team: '4+ agents with FCA awareness training', internet: '30 Mbps minimum', experience: 'UK insurance or financial services preferred', capital: '£18,000 franchise investment' },
    support: ['FCA compliance certification', 'CRM training', 'UK DPA registration guidance', 'Dedicated compliance officer'],
    campaigns: ['UK Home & Auto Insurance', 'Life Insurance CPL', 'Health Cover Leads']
  },
  {
    id: 'f7',
    name: 'HealthBPO Solutions',
    tagline: 'HIPAA-certified healthcare BPO franchise for US medical clients',
    sector: 'Healthcare / BPO', sectorId: 'healthcare',
    icon: '🏥', badge: 'badge-teal',
    featured: false, verified: true,
    country: 'IN', flag: '🇮🇳', region: 'Asia',
    investment: { min: 22000, max: 58000, currency: '$', label: '$22K – $58K' },
    investmentRange: 'under-50k', roi: '16–24 months',
    model: 'Franchise', seats: '5–30 agents',
    rating: 4.7, reviews: 39, established: 2018,
    territories: ['India', 'Philippines', 'Pakistan'],
    highlights: ['HIPAA certified framework', 'Medical billing & AR', 'ACA enrollment campaigns', 'Recurring revenue model'],
    about: 'HealthBPO Solutions provides a complete HIPAA-certified franchise for healthcare BPO operations — medical billing, AR follow-up, ACA enrollment, and Medicare campaigns for US healthcare providers.',
    requirements: { space: '600 sq ft secure workspace', team: '5+ HIPAA-trained agents', internet: '50 Mbps encrypted connection', experience: 'Healthcare or medical billing background', capital: '$22,000 franchise fee' },
    support: ['HIPAA certification program', 'BAA template library', 'Medical coding training', 'US client matching service'],
    campaigns: ['Medical Billing AR', 'ACA Health Enrollment', 'Medicare Advantage Leads']
  },
  {
    id: 'f8',
    name: 'EcoGrant Callers',
    tagline: 'UK Government ECO4 grant franchise — energy & home improvement',
    sector: 'Energy / Green', sectorId: 'energy',
    icon: '🏡', badge: 'badge-green',
    featured: false, verified: true,
    country: 'UK', flag: '🇬🇧', region: 'Europe',
    investment: { min: 12000, max: 30000, currency: '£', label: '£12K – £30K' },
    investmentRange: 'under-50k', roi: '10–15 months',
    model: 'Franchise', seats: '3–15 agents',
    rating: 4.4, reviews: 15, established: 2022,
    territories: ['UK', 'Ireland', 'India (UK campaigns)'],
    highlights: ['Government-backed scheme', 'Low competition', '£18–£40 per lead', 'GDPR-compliant data'],
    about: 'EcoGrant Callers specialises in generating leads for the UK Government ECO4 scheme, which funds free home insulation for eligible homeowners. A fast-growing, low-competition niche backed by government demand for the next 5 years.',
    requirements: { space: '300 sq ft or home-based team', team: '3+ agents with UK market awareness', internet: '25 Mbps', experience: 'Sales or canvassing background helpful', capital: '£12,000 franchise fee' },
    support: ['Ofgem/FCA compliance guide', 'GDPR-compliant calling data', 'UK eligibility qualification scripts', 'Dedicated campaign coordinator'],
    campaigns: ['ECO4 Home Insulation', 'Solar & Heat Pump Grants', 'Smart Meter Appointments']
  },
  {
    id: 'f9',
    name: 'RemoteDesk Global',
    tagline: 'Build a 100% remote BPO team — zero office cost, global reach',
    sector: 'Digital Services', sectorId: 'digital',
    icon: '🌐', badge: 'badge-grey',
    featured: false, verified: false,
    country: 'PK', flag: '🇵🇰', region: 'Asia',
    investment: { min: 3000, max: 12000, currency: '$', label: '$3K – $12K' },
    investmentRange: 'under-50k', roi: '6–10 months',
    model: 'Franchise', seats: '2–15 freelancers',
    rating: 4.3, reviews: 12, established: 2023,
    territories: ['Worldwide (Remote)'],
    highlights: ['Lowest entry cost', '100% remote model', 'Flexible workforce', 'SaaS & data niche'],
    about: 'RemoteDesk Global is the entry-level digital franchise for aspiring BPO entrepreneurs. Build a fully remote team of chat agents, data specialists, and virtual assistants — all working from home with low startup cost.',
    requirements: { space: 'Home-based / fully remote', team: '2+ vetted remote specialists', internet: 'Reliable broadband per team member', experience: 'Tech-savvy; project management preferred', capital: '$3,000 minimum startup' },
    support: ['Remote team management training', 'Project management tool access', 'Client acquisition support', 'Quality review process'],
    campaigns: ['SaaS Chat Support', 'Data Entry Projects', 'Virtual Assistant Services']
  },
  {
    id: 'f10',
    name: 'FinanceCall Partners',
    tagline: 'Mortgage & loan campaign franchise — US financial sector',
    sector: 'Finance / BPO', sectorId: 'finance',
    icon: '🏦', badge: 'badge-blue',
    featured: true, verified: true,
    country: 'US', flag: '🇺🇸', region: 'North America',
    investment: { min: 35000, max: 90000, currency: '$', label: '$35K – $90K' },
    investmentRange: '50k-100k', roi: '14–20 months',
    model: 'Master Franchise', seats: '10–75 agents',
    rating: 4.8, reviews: 52, established: 2016,
    territories: ['US', 'Canada', 'India', 'Philippines'],
    highlights: ['Master territory rights', 'US mortgage & loan CPL', 'TCPA compliance framework', '$18–$35 per verified lead'],
    about: 'FinanceCall Partners is the leading franchise for mortgage lead generation in the US market. Master franchisees receive exclusive territory rights, a TCPA-compliant calling framework, and direct access to top-tier US lender accounts.',
    requirements: { space: '1,000+ sq ft operations floor', team: '10+ agent team + QA supervisor', internet: '100 Mbps redundant fiber', experience: 'Finance or mortgage industry background', capital: '$35,000 franchise fee + operating capital' },
    support: ['TCPA & NMLS compliance training', 'Dedicated lender relationship manager', 'Automated DNC scrubbing', 'Monthly lead volume SLA'],
    campaigns: ['Mortgage CPL', 'Personal Loan Leads', 'Refinance Campaign']
  },
  {
    id: 'f11',
    name: 'AcademiCall',
    tagline: 'EdTech enrollment franchise — connect students to global courses',
    sector: 'Education / BPO', sectorId: 'education',
    icon: '🎓', badge: 'badge-orange',
    featured: false, verified: true,
    country: 'IN', flag: '🇮🇳', region: 'Asia',
    investment: { min: 10000, max: 28000, currency: '$', label: '$10K – $28K' },
    investmentRange: 'under-50k', roi: '12–18 months',
    model: 'Franchise', seats: '5–20 counselors',
    rating: 4.5, reviews: 19, established: 2020,
    territories: ['India', 'Pakistan', 'Bangladesh', 'Sri Lanka'],
    highlights: ['EdTech is booming', 'In-demand service', '$15–$40 per enrollment', 'Low compliance overhead'],
    about: 'AcademiCall is an education enrollment franchise that helps international students find and enroll in accredited online courses and university programs. Counselors conduct discovery calls, match students to programs, and earn per-enrollment commissions.',
    requirements: { space: '400 sq ft counseling center', team: '5+ counselors with education background', internet: '25 Mbps', experience: 'Education, counseling, or sales experience', capital: '$10,000 franchise investment' },
    support: ['Course database access', 'Enrollment management platform', 'Student CRM training', 'Commission payment portal'],
    campaigns: ['UK University Enrollment', 'Online Certification Sales', 'Bootcamp Lead Generation']
  },
  {
    id: 'f12',
    name: 'OmniChannel BPO',
    tagline: 'Multi-channel customer service franchise — voice, chat & email',
    sector: 'BPO / Call Center', sectorId: 'bpo',
    icon: '📡', badge: 'badge-purple',
    featured: false, verified: true,
    country: 'PH', flag: '🇵🇭', region: 'Asia',
    investment: { min: 40000, max: 100000, currency: '$', label: '$40K – $100K' },
    investmentRange: '50k-100k', roi: '18–30 months',
    model: 'Master Franchise', seats: '30–150 agents',
    rating: 4.7, reviews: 44, established: 2015,
    territories: ['Philippines', 'India', 'Mexico'],
    highlights: ['Omni-channel capability', 'Fortune 500 client access', 'Enterprise-grade infrastructure', 'ISO 27001 certified'],
    about: 'OmniChannel BPO is an enterprise-grade franchise for large-scale customer service operations. Franchisees gain access to Fortune 500 client accounts, multi-channel platform infrastructure (voice, chat, email, social), and a proven quality framework.',
    requirements: { space: '3,000+ sq ft purpose-built BPO center', team: '30+ multi-skilled agents + team leaders', internet: '200 Mbps redundant fiber + backup', experience: '5+ years BPO management / operations', capital: '$40,000 franchise fee + infrastructure' },
    support: ['ISO 27001 certification support', 'Enterprise CRM platform', 'Client transition management', 'HR & training department setup'],
    campaigns: ['Fortune 500 Customer Service', 'E-Commerce Support', 'Technical Helpdesk']
  }
];

const FRANCHISE_SECTORS = [
  { id: 'all',        label: 'All Sectors',          count: 12 },
  { id: 'bpo',        label: '📞 BPO / Call Center',  count: 3  },
  { id: 'digital',    label: '💻 Digital Services',   count: 2  },
  { id: 'energy',     label: '☀️ Energy / Green',     count: 2  },
  { id: 'healthcare', label: '🏥 Healthcare',         count: 1  },
  { id: 'legal',      label: '⚖️ Legal',              count: 1  },
  { id: 'insurance',  label: '🛡️ Insurance',          count: 1  },
  { id: 'finance',    label: '🏦 Finance',            count: 1  },
  { id: 'education',  label: '🎓 Education',          count: 1  }
];

const FRANCHISE_INVESTMENT_RANGES = [
  { id: 'all',       label: 'Any Investment' },
  { id: 'under-50k', label: 'Under $50K'    },
  { id: '50k-100k',  label: '$50K – $100K'  },
  { id: 'over-100k', label: 'Over $100K'    }
];

const FRANCHISE_MODELS = [
  { id: 'all',              label: 'All Models'      },
  { id: 'Franchise',        label: 'Franchise'       },
  { id: 'Master Franchise', label: 'Master Franchise'}
];

// ══════════════════════════════════════════════════════════════════
//  INVESTORS & BUYERS DATA
// ══════════════════════════════════════════════════════════════════
const INVESTMENTS = [
  {
    id: 'i1',
    name: 'VoicePeak BPO Ltd.',
    tagline: 'Profitable 80-seat call center with established US mortgage & insurance campaigns',
    sector: 'BPO / Call Center', sectorId: 'bpo',
    icon: '📞', featured: true, verified: true,
    type: 'acquisition',
    location: 'Hyderabad, India',
    established: 2017,
    teamSize: '80 agents + 12 staff',
    askingPrice: '$320,000', priceVal: 320000, priceRange: '200k-500k',
    revenue: '$480,000/yr', revenueVal: 480000,
    ebitda: '$118,000/yr',
    roiMultiple: '2.7x EBITDA',
    tags: ['US Campaigns', 'Mortgage', 'Insurance', 'Profitable', 'ISO Certified'],
    about: 'VoicePeak BPO Ltd. is a profitable 80-seat call center operating since 2017, specialising in US mortgage lead generation and ACA health insurance enrollment. The business has three long-term US client contracts in place, generating consistent monthly revenue of $40,000+. CSAT scores average 93%. ISO 9001 certified. Full staff in place and ready for handover.',
    highlights: [
      'Three long-term US client contracts',
      'Avg. $40K+ monthly revenue',
      'ISO 9001 certified operation',
      '93% average CSAT score',
      'Full management team retained',
      '80 trained agents, low attrition',
      'TCPA-compliant calling platform',
      'Real estate & mortgage niche expertise'
    ],
    financials: {
      'Annual Revenue':    '$480,000',
      'Net Profit (EBITDA)': '$118,000',
      'Monthly Run Rate':  '$40,000+',
      'Client Contracts':  '3 long-term (12–24 months)',
      'Asking Price':      '$320,000',
      'Revenue Multiple':  '0.67x Annual Revenue',
      'EBITDA Multiple':   '2.7x EBITDA',
      'Payback Period':    '~2.7 years'
    },
    details: {
      'Location':         'Hyderabad, India',
      'Established':      '2017',
      'Team Size':        '80 agents + 12 management staff',
      'Office Space':     '8,000 sq ft (leased)',
      'Technology':       'Five9 + Salesforce + VICIDial',
      'Compliance':       'TCPA, ISO 9001',
      'Reason for Sale':  'Founders relocating abroad',
      'Handover Period':  '90-day transition support'
    },
    reasonForSale: 'The founding partners are relocating internationally and prefer to divest their operational interests. The business is fully staffed with a capable management team and requires no involvement from new owners beyond strategic oversight.'
  },
  {
    id: 'i2',
    name: 'SolarDial UK',
    tagline: 'UK-based solar appointment-setting company with strong ECO4 pipeline',
    sector: 'Energy / Green', sectorId: 'energy',
    icon: '☀️', featured: true, verified: true,
    type: 'acquisition',
    location: 'Manchester, UK',
    established: 2020,
    teamSize: '25 agents + 5 staff',
    askingPrice: '£185,000', priceVal: 185000, priceRange: '100k-200k',
    revenue: '£260,000/yr', revenueVal: 260000,
    ebitda: '£72,000/yr',
    roiMultiple: '2.6x EBITDA',
    tags: ['UK Market', 'Solar', 'ECO4', 'Green Energy', 'FCA Compliant'],
    about: 'SolarDial UK is a Mancunian call center operation specialising in solar appointment setting and UK Government ECO4 scheme lead generation. With 25 agents and 5 support staff, the company generates £260K annual revenue through contracts with 4 UK solar installers and 2 eco-grant providers. Fully FCA-aware and GDPR-compliant.',
    highlights: [
      'Government-backed ECO4 demand for 5+ years',
      '4 active solar installer contracts',
      '£260K annual revenue, growing',
      'FCA-aware & GDPR-compliant',
      'Expanding into heat pump leads',
      'Low churn, loyal client base',
      'Proprietary data qualification script',
      'Established Manchester office infrastructure'
    ],
    financials: {
      'Annual Revenue':    '£260,000',
      'Net Profit (EBITDA)': '£72,000',
      'Monthly Run Rate':  '£21,700',
      'Active Contracts':  '6 (solar + ECO4)',
      'Asking Price':      '£185,000',
      'Revenue Multiple':  '0.71x Annual Revenue',
      'EBITDA Multiple':   '2.6x EBITDA',
      'Payback Period':    '~2.6 years'
    },
    details: {
      'Location':         'Manchester, UK',
      'Established':      '2020',
      'Team Size':        '25 agents + 5 staff',
      'Office Space':     '2,500 sq ft (leased)',
      'Technology':       'Vonage + Zoho CRM',
      'Compliance':       'FCA-aware, GDPR, Ofgem',
      'Reason for Sale':  'Owner transitioning to solar installation',
      'Handover Period':  '60-day transition support'
    },
    reasonForSale: 'The owner is transitioning from lead generation into the solar installation business directly and wishes to sell the calling operation to focus on the new venture. The call center runs independently with a capable team leader in place.'
  },
  {
    id: 'i3',
    name: 'LexiClaim Corp',
    tagline: 'US legal intake BPO — MVA & personal injury lead gen — $55 CPL average',
    sector: 'Legal / BPO', sectorId: 'legal',
    icon: '⚖️', featured: false, verified: true,
    type: 'acquisition',
    location: 'Karachi, Pakistan',
    established: 2019,
    teamSize: '35 agents + 8 staff',
    askingPrice: '$210,000', priceVal: 210000, priceRange: '200k-500k',
    revenue: '$330,000/yr', revenueVal: 330000,
    ebitda: '$95,000/yr',
    roiMultiple: '2.2x EBITDA',
    tags: ['US Legal', 'MVA', 'Personal Injury', 'CPL', 'ABA Compliant'],
    about: 'LexiClaim Corp operates a specialist US legal intake operation from Karachi, Pakistan. The team of 35 trained agents generates MVA and personal injury leads for 6 US plaintiff law firms at $22–$55 per verified lead. All agents are ABA-compliant trained. The business has grown 40% YoY for the past 3 years.',
    highlights: [
      '6 active US law firm contracts',
      '$22–$55 CPL — high payout niche',
      '40% YoY revenue growth',
      'ABA-compliant agent training',
      'Proprietary lead verification scripts',
      'Strong management team in place',
      'Low operational cost base (Pakistan)',
      'Scalable to 100+ agents'
    ],
    financials: {
      'Annual Revenue':    '$330,000',
      'Net Profit (EBITDA)': '$95,000',
      'Monthly Run Rate':  '$27,500',
      'Active Law Firm Clients': '6',
      'Asking Price':      '$210,000',
      'Revenue Multiple':  '0.64x Annual Revenue',
      'EBITDA Multiple':   '2.2x EBITDA',
      'Payback Period':    '~2.2 years'
    },
    details: {
      'Location':         'Karachi, Pakistan',
      'Established':      '2019',
      'Team Size':        '35 agents + 8 management staff',
      'Office Space':     '3,500 sq ft (leased)',
      'Technology':       'GoAutodial + Salesforce',
      'Compliance':       'ABA-compliant, Lead Verification Certified',
      'Reason for Sale':  'Founder pursuing other ventures',
      'Handover Period':  '90-day full handover'
    },
    reasonForSale: 'The founding owner is starting a new technology venture and prefers to sell the BPO operation to a buyer who will scale it. All client relationships are transferable and the management team is willing to stay on long-term.'
  },
  {
    id: 'i4',
    name: 'HealthSync BPO',
    tagline: 'HIPAA-certified US healthcare BPO — medical billing + ACA + Medicare campaigns',
    sector: 'Healthcare / BPO', sectorId: 'healthcare',
    icon: '🏥', featured: false, verified: true,
    type: 'acquisition',
    location: 'Manila, Philippines',
    established: 2016,
    teamSize: '60 agents + 15 staff',
    askingPrice: '$425,000', priceVal: 425000, priceRange: '200k-500k',
    revenue: '$620,000/yr', revenueVal: 620000,
    ebitda: '$155,000/yr',
    roiMultiple: '2.7x EBITDA',
    tags: ['HIPAA', 'Medical Billing', 'ACA', 'Medicare', 'Philippines'],
    about: 'HealthSync BPO is a HIPAA-certified operation in Manila managing medical billing AR, ACA enrollment, and Medicare Advantage campaigns for US healthcare providers. With a 60-agent team and 10 years of healthcare BPO experience, the business holds BAA agreements with 8 US medical practices and generates $620K annual revenue.',
    highlights: [
      'HIPAA certified + BAA agreements in place',
      '8 active US healthcare client contracts',
      '$620K annual revenue, stable',
      '10 years of healthcare BPO expertise',
      'Certified medical billing specialists',
      'Full management team retained',
      'Expandable to 120 seats',
      'ISO 27001 data security certified'
    ],
    financials: {
      'Annual Revenue':    '$620,000',
      'Net Profit (EBITDA)': '$155,000',
      'Monthly Run Rate':  '$51,700',
      'Healthcare Clients': '8 US practices (BAA signed)',
      'Asking Price':      '$425,000',
      'Revenue Multiple':  '0.69x Annual Revenue',
      'EBITDA Multiple':   '2.7x EBITDA',
      'Payback Period':    '~2.7 years'
    },
    details: {
      'Location':         'Manila, Philippines',
      'Established':      '2016',
      'Team Size':        '60 agents + 15 staff',
      'Office Space':     '6,000 sq ft (leased)',
      'Technology':       'Kareo + AdvancedMD + Epic',
      'Compliance':       'HIPAA, ISO 27001, BAA-signed',
      'Reason for Sale':  'Majority shareholder retiring',
      'Handover Period':  '6-month handover'
    },
    reasonForSale: 'The majority shareholder is approaching retirement age and the remaining team does not wish to take on sole ownership. The business has been prepared for sale with full financial documentation and clean audited accounts for the past 5 years.'
  },
  {
    id: 'i5',
    name: 'DigitalDesk Solutions',
    tagline: 'Non-voice digital BPO — SaaS support, data processing & EPUB conversion',
    sector: 'Digital Services', sectorId: 'digital',
    icon: '💻', featured: false, verified: true,
    type: 'acquisition',
    location: 'Colombo, Sri Lanka',
    established: 2021,
    teamSize: '20 specialists',
    askingPrice: '$85,000', priceVal: 85000, priceRange: 'under-100k',
    revenue: '$145,000/yr', revenueVal: 145000,
    ebitda: '$48,000/yr',
    roiMultiple: '1.8x EBITDA',
    tags: ['Non-Voice', 'SaaS Support', 'Data Processing', 'Remote', 'Low Overhead'],
    about: 'DigitalDesk Solutions is a lean non-voice BPO operation in Colombo, Sri Lanka, providing SaaS live chat support, XML data processing, and EPUB conversion services to US and UK clients. 100% remote-capable team. Strong long-term contracts with 3 SaaS firms. Very low overhead, high margins.',
    highlights: [
      '3 long-term SaaS support contracts',
      '100% remote-capable team',
      'High margin non-voice niche',
      'Low overhead, high net profit %',
      'XML + EPUB digital publishing niche',
      'Scalable without office expansion',
      'US & UK client base',
      'Strong CSAT — 95%+ average'
    ],
    financials: {
      'Annual Revenue':    '$145,000',
      'Net Profit (EBITDA)': '$48,000',
      'Monthly Run Rate':  '$12,100',
      'Active Contracts':  '3 SaaS firms + ad-hoc data clients',
      'Asking Price':      '$85,000',
      'Revenue Multiple':  '0.59x Annual Revenue',
      'EBITDA Multiple':   '1.8x EBITDA',
      'Payback Period':    '~1.8 years'
    },
    details: {
      'Location':         'Colombo, Sri Lanka (remote capable)',
      'Established':      '2021',
      'Team Size':        '20 remote specialists',
      'Office Space':     'Co-working / home-based',
      'Technology':       'Intercom + Zendesk + oXygen XML',
      'Compliance':       'SOC2 NDA, GDPR-aware',
      'Reason for Sale':  'Founder moving into SaaS product development',
      'Handover Period':  '45-day handover'
    },
    reasonForSale: 'The founder is pivoting into SaaS product development and prefers to sell the service business. The operation runs with minimal founder involvement — a team lead manages day-to-day and clients are familiar with the team.'
  },
  {
    id: 'i6',
    name: 'FinVoice Capital Partners',
    tagline: 'Seeking equity investor for US mortgage & finance call center expansion',
    sector: 'Finance / BPO', sectorId: 'finance',
    icon: '🏦', featured: true, verified: true,
    type: 'investment',
    location: 'Delhi, India',
    established: 2018,
    teamSize: '45 agents + 10 staff',
    askingPrice: '$150,000 equity', priceVal: 150000, priceRange: '100k-200k',
    revenue: '$390,000/yr', revenueVal: 390000,
    ebitda: '$98,000/yr',
    roiMultiple: '28% equity stake',
    tags: ['Equity Investment', 'US Finance', 'Mortgage', 'Growth Stage', 'India'],
    about: 'FinVoice Capital Partners is a profitable Delhi-based call center seeking a $150,000 equity investment in exchange for 28% equity stake. The investment will fund a 100-seat expansion and technology upgrade (Salesforce CRM + cloud telephony). The business generates $390K annual revenue through 5 US mortgage lead generation contracts.',
    highlights: [
      '28% equity for $150K investment',
      'Expansion to 100 seats planned',
      '$390K revenue, growing 35% YoY',
      '5 active US mortgage contracts',
      'Technology upgrade planned (Salesforce)',
      'Projected $650K revenue post-expansion',
      'Proven management team (7 years combined)',
      'Clear exit strategy in 3–5 years'
    ],
    financials: {
      'Annual Revenue':    '$390,000',
      'Net Profit (EBITDA)': '$98,000',
      'Monthly Run Rate':  '$32,500',
      'Investment Required': '$150,000 (28% equity)',
      'Post-Investment Revenue (Projected)': '$650,000',
      'Post-Investment EBITDA (Projected)':  '$175,000',
      'YoY Revenue Growth': '35%',
      'Target Exit Valuation': '$1.2M+ (3–5 years)'
    },
    details: {
      'Location':         'Delhi, India',
      'Established':      '2018',
      'Team Size':        '45 agents + 10 staff (expanding to 100)',
      'Office Space':     '4,500 sq ft (new 9,000 sq ft lease signed)',
      'Technology':       'VICIDial → Salesforce (upgrade funded by investment)',
      'Compliance':       'TCPA, NMLS-aware',
      'Investment Type':  'Equity (28% stake)',
      'Minimum Investment': '$150,000'
    },
    reasonForSale: 'The founders are seeking a strategic equity investor to fund the next phase of growth. This is not a full sale — founders will remain in operations. The investment will exclusively fund a 100-seat expansion and CRM upgrade with a clear 3–5 year exit path.'
  },
  {
    id: 'i7',
    name: 'InsureCall UK Ltd.',
    tagline: 'Established UK insurance sales BPO — FCA-aware, warm leads, residual commissions',
    sector: 'Insurance / BPO', sectorId: 'insurance',
    icon: '🛡️', featured: false, verified: true,
    type: 'acquisition',
    location: 'Birmingham, UK',
    established: 2018,
    teamSize: '18 agents + 4 staff',
    askingPrice: '£140,000', priceVal: 140000, priceRange: '100k-200k',
    revenue: '£195,000/yr', revenueVal: 195000,
    ebitda: '£58,000/yr',
    roiMultiple: '2.4x EBITDA',
    tags: ['UK Insurance', 'FCA Compliant', 'Residual Commission', 'Warm Leads'],
    about: 'InsureCall UK Ltd. is a Birmingham-based insurance sales BPO selling home, auto, and life insurance products for FCA-regulated brokers. The team of 18 agents work from pre-screened warm leads with a residual commission model that provides ongoing passive income. Annual revenue of £195K with strong client retention.',
    highlights: [
      'FCA-aware agent training completed',
      'Warm leads provided by 3 partners',
      'Residual commission model (recurring income)',
      '18 trained insurance sales agents',
      'Strong client retention — 3+ year contracts',
      'Birmingham city center office (low rent)',
      'Scalable to 40 seats in current premises',
      'Full DPA & GDPR compliance framework'
    ],
    financials: {
      'Annual Revenue':    '£195,000',
      'Net Profit (EBITDA)': '£58,000',
      'Monthly Run Rate':  '£16,250',
      'Active Insurance Partners': '3 FCA-regulated brokers',
      'Asking Price':      '£140,000',
      'Revenue Multiple':  '0.72x Annual Revenue',
      'EBITDA Multiple':   '2.4x EBITDA',
      'Payback Period':    '~2.4 years'
    },
    details: {
      'Location':         'Birmingham, UK',
      'Established':      '2018',
      'Team Size':        '18 agents + 4 supervisors',
      'Office Space':     '1,800 sq ft city center (leased)',
      'Technology':       'Proprietary CRM + Outreach dialer',
      'Compliance':       'FCA-aware, UK DPA, GDPR',
      'Reason for Sale':  'Owner retiring',
      'Handover Period':  '90-day handover with full client intro'
    },
    reasonForSale: 'The owner is retiring after 8 years in the insurance sales business. All client relationships are documented and transferable. The current team leader is willing to step up to management under new ownership.'
  },
  {
    id: 'i8',
    name: 'OmniSupport PH',
    tagline: 'Partnership opportunity — scale our 120-seat omni-channel BPO to Fortune 500 clients',
    sector: 'BPO / Call Center', sectorId: 'bpo',
    icon: '📡', featured: false, verified: true,
    type: 'partnership',
    location: 'Cebu, Philippines',
    established: 2015,
    teamSize: '120 agents + 25 staff',
    askingPrice: '$200,000 partnership', priceVal: 200000, priceRange: '100k-200k',
    revenue: '$860,000/yr', revenueVal: 860000,
    ebitda: '$195,000/yr',
    roiMultiple: '20% profit share',
    tags: ['Partnership', 'Fortune 500', 'Omni-Channel', 'Philippines', 'ISO 27001'],
    about: 'OmniSupport PH is a 120-seat omni-channel BPO in Cebu, Philippines, seeking a strategic partner to co-invest and access Fortune 500 client contracts together. The business already generates $860K annual revenue through mid-market clients. The partner will bring $200K for infrastructure upgrades and US business development to unlock enterprise contracts.',
    highlights: [
      '$860K revenue, profitable and growing',
      '20% recurring profit share for partner',
      'ISO 27001 certified infrastructure',
      'Omni-channel: voice, chat, email, social',
      'Fortune 500 pipeline identified',
      '120 seats, expandable to 250',
      'Operations management team fully staffed',
      'US client development focus for partner'
    ],
    financials: {
      'Annual Revenue':    '$860,000',
      'Net Profit (EBITDA)': '$195,000',
      'Monthly Run Rate':  '$71,700',
      'Partnership Investment': '$200,000',
      'Partner Profit Share':   '20% of net profit (~$39K/yr)',
      'Projected Revenue (Post-Partner)': '$1.4M+',
      'YoY Growth Rate':   '28%',
      'Exit Opportunity':  'Full acquisition offered after 3 years'
    },
    details: {
      'Location':         'Cebu, Philippines',
      'Established':      '2015',
      'Team Size':        '120 agents + 25 management staff',
      'Office Space':     '12,000 sq ft, expanding',
      'Technology':       'Genesys + Salesforce + enterprise stack',
      'Compliance':       'ISO 27001, GDPR-aware, SOC2',
      'Partnership Type': 'Strategic equity partner (20% profit share)',
      'Minimum Investment': '$200,000'
    },
    reasonForSale: 'OmniSupport is seeking a US- or UK-based business development partner who can open Fortune 500 doors. The financial investment funds an infrastructure upgrade to meet enterprise SLA requirements. This is a growth partnership, not a distress sale.'
  },
  {
    id: 'i9',
    name: 'EduConnect Call Center',
    tagline: 'EdTech enrollment BPO — India — $40/enrollment, growing international student market',
    sector: 'Education / BPO', sectorId: 'education',
    icon: '🎓', featured: false, verified: false,
    type: 'acquisition',
    location: 'Pune, India',
    established: 2020,
    teamSize: '22 counselors + 5 staff',
    askingPrice: '$95,000', priceVal: 95000, priceRange: 'under-100k',
    revenue: '$168,000/yr', revenueVal: 168000,
    ebitda: '$52,000/yr',
    roiMultiple: '1.8x EBITDA',
    tags: ['EdTech', 'Enrollment', 'India', 'Growing Market', 'Low Cost Base'],
    about: 'EduConnect Call Center is a Pune-based education enrollment BPO helping international students enroll in UK, Australia, and Canada university programs. 22 counselors generate $40–$80 per enrollment through partnerships with 12 accredited institutions. Revenue growing 55% YoY driven by international student demand.',
    highlights: [
      '12 accredited institution partnerships',
      '$40–$80 per enrollment — scalable revenue',
      '55% YoY revenue growth',
      'Booming international student market',
      'Low overhead, high margin',
      'Proprietary student matching process',
      'Expandable to 60 counselors',
      'CRM & pipeline tools in place'
    ],
    financials: {
      'Annual Revenue':    '$168,000',
      'Net Profit (EBITDA)': '$52,000',
      'Monthly Run Rate':  '$14,000',
      'Active Institution Partners': '12',
      'Asking Price':      '$95,000',
      'Revenue Multiple':  '0.57x Annual Revenue',
      'EBITDA Multiple':   '1.8x EBITDA',
      'Payback Period':    '~1.8 years'
    },
    details: {
      'Location':         'Pune, India',
      'Established':      '2020',
      'Team Size':        '22 counselors + 5 admin staff',
      'Office Space':     '2,200 sq ft (leased)',
      'Technology':       'Zoho CRM + WhatsApp Business + calling suite',
      'Compliance':       'Data protection, institution partner audited',
      'Reason for Sale':  'Owners focusing on B2C edtech product',
      'Handover Period':  '60-day full transition'
    },
    reasonForSale: 'The founders are pivoting to build a consumer-facing EdTech product and prefer to divest the B2B BPO operation. The business is well-documented and growing, making it an excellent acquisition for a BPO operator looking to enter the education vertical.'
  },
  {
    id: 'i10',
    name: 'MortgageMax USA',
    tagline: 'US-facing mortgage lead gen operation — $18–$35 CPL — seeking merger partner',
    sector: 'Finance / BPO', sectorId: 'finance',
    icon: '🏠', featured: true, verified: true,
    type: 'merger',
    location: 'Lahore, Pakistan',
    established: 2017,
    teamSize: '55 agents + 10 staff',
    askingPrice: 'Merger / Equity Swap', priceVal: 0, priceRange: 'merger',
    revenue: '$440,000/yr', revenueVal: 440000,
    ebitda: '$108,000/yr',
    roiMultiple: 'Revenue share',
    tags: ['Merger', 'US Mortgage', 'TCPA Compliant', 'CPL', 'Lahore'],
    about: 'MortgageMax USA is a 55-agent mortgage lead generation operation in Lahore, Pakistan seeking a merger with a complementary US-facing BPO operator. The business generates $440K annually through $18–$35 CPL contracts with 5 US lenders. A merger would unlock volume discounts, shared infrastructure, and access to larger lender accounts.',
    highlights: [
      '5 active US lender contracts',
      '$18–$35 CPL — high payout niche',
      '$440K annual revenue, profitable',
      'TCPA-compliant calling framework',
      'Seeking merger, not cash acquisition',
      'Open to equity swap / revenue share',
      'Strong NMLS-aware training program',
      'Low-cost Lahore operation'
    ],
    financials: {
      'Annual Revenue':    '$440,000',
      'Net Profit (EBITDA)': '$108,000',
      'Monthly Run Rate':  '$36,700',
      'Lender Clients':    '5 (TCPA-certified)',
      'Asking Price':      'Merger / equity arrangement',
      'Revenue Multiple':  'To be negotiated',
      'Deal Structure':    'Revenue share / equity swap',
      'Projected Combined Revenue': '$800K–$1.2M'
    },
    details: {
      'Location':         'Lahore, Pakistan',
      'Established':      '2017',
      'Team Size':        '55 agents + 10 management staff',
      'Office Space':     '5,000 sq ft (leased)',
      'Technology':       'Dialpad + Hubspot + VICIDial',
      'Compliance':       'TCPA, NMLS-aware, DNC-scrubbed',
      'Deal Type':        'Merger / equity swap preferred',
      'Open To':          'Strategic partner with US market presence'
    },
    reasonForSale: 'The founders believe the business would create significantly more value as part of a larger BPO group or alongside a US-based operator with client relationships they can jointly leverage. Open to creative deal structures including equity swaps, revenue sharing, or management buyout with seller financing.'
  }
];

const INVESTOR_SECTORS = [
  { id: 'all',         label: 'All Sectors',         count: 10 },
  { id: 'bpo',         label: '📞 BPO / Call Center', count: 3  },
  { id: 'finance',     label: '🏦 Finance',           count: 2  },
  { id: 'healthcare',  label: '🏥 Healthcare',        count: 1  },
  { id: 'legal',       label: '⚖️ Legal',             count: 1  },
  { id: 'insurance',   label: '🛡️ Insurance',         count: 1  },
  { id: 'energy',      label: '☀️ Energy / Green',    count: 1  },
  { id: 'digital',     label: '💻 Digital Services',  count: 1  },
  { id: 'education',   label: '🎓 Education',         count: 1  }
];

const INVESTOR_PRICE_RANGES = [
  { id: 'all',       label: 'Any Price'       },
  { id: 'under-100k',label: 'Under $100K'     },
  { id: '100k-200k', label: '$100K – $200K'   },
  { id: '200k-500k', label: '$200K – $500K'   },
  { id: 'merger',    label: 'Merger / Swap'   }
];

const INVESTOR_TYPES = [
  { id: 'all',         label: 'All Types'      },
  { id: 'acquisition', label: '🏢 Acquisition'  },
  { id: 'investment',  label: '📈 Investment'   },
  { id: 'partnership', label: '🤝 Partnership'  },
  { id: 'merger',      label: '🔀 Merger'       }
];
