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
  }
];

const CATEGORIES = [
  { id: "all",       label: "All Projects",  count: 11 },
  { id: "voice",     label: "Voice",         count: 8 },
  { id: "non-voice", label: "Non-Voice",     count: 3 }
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
  }
];
