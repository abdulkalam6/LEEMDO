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
