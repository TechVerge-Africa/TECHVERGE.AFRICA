import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Code,
  Cloud,
  Cpu,
  TrendingUp,
  FlaskConical,
  Boxes,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { tone, BrandStripes } from '@/components/Brand';

export const metadata: Metadata = {
  title: { absolute: 'Our Technical Capabilities | Services | Techverge Africa Ltd' },
  description:
    'Fully licensed and structured to deliver end-to-end digital transformation: Software Development, Cloud Computing, AI & Data Solutions, Strategic IT Consultancy, Research & Development, and Software Solutions.',
};

const coreServices = [
  {
    number: '01',
    id: 'software-development',
    title: 'Software Development & Engineering',
    category: 'Application Engineering',
    icon: Code,
    image: '/images/services/software-development.webp',
    imagePosition: '78% center',
    copy: 'We build high-performance web systems, cross-platform mobile apps, and robust backend architectures. From custom enterprise resource planning (ERP) systems to consumer-facing applications, our development engine ensures clean code, seamless APIs, and intuitive user experiences.',
    focusAreas: [
      'Custom Web Apps',
      'Mobile App Development (iOS/Android)',
      'API Integrations',
      'Legacy System Modernization',
    ],
    deliverables: [
      'Full-stack TypeScript / Next.js / Python enterprise architectures',
      'Native & cross-platform React Native / Flutter apps',
      'REST & GraphQL microservice design with 99.9% uptime',
      'Relational & distributed database modeling (PostgreSQL, Redis)',
    ],
  },
  {
    number: '02',
    id: 'cloud-infrastructure',
    title: 'Cloud Computing & Infrastructure Management',
    category: 'Cloud & DevOps',
    icon: Cloud,
    image: '/images/services/cloud-infrastructure.webp',
    imagePosition: 'center 40%',
    copy: 'Transition away from fragile on-premise hardware. We design, deploy, and manage highly secure cloud environments leveraging global infrastructure tailored to maximize uptime, speed, and cost efficiency.',
    focusAreas: [
      'Cloud Migration',
      'DevOps Pipelines',
      'Hybrid Cloud Architecture',
      'Serverless Infrastructure',
    ],
    deliverables: [
      'Automated CI/CD pipelines with zero-downtime deployment strategies',
      'AWS, Google Cloud & Azure multi-cloud cost optimization audits',
      'Kubernetes orchestration & containerized microservices',
      'Disaster recovery, automated daily backups & high-availability failover',
    ],
  },
  {
    number: '03',
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence & Data Solutions',
    category: 'AI & Data Science',
    icon: Cpu,
    image: '/images/services/ai-data.webp',
    imagePosition: '72% center',
    copy: 'Transform your raw operational data into a powerful decision-making engine. We engineer custom AI models, predictive analytics frameworks, and smart automation systems designed to optimize resource allocation and enhance business intelligence.',
    focusAreas: [
      'Machine Learning Models',
      'Process Automation',
      'Conversational AI/Chatbots',
      'Advanced Data Analytics',
    ],
    deliverables: [
      'Custom OCR & intelligent document processing for paper-heavy workflows',
      'Predictive inventory, credit scoring & demand forecasting algorithms',
      'Private, on-premise or cloud-hosted large language model (LLM) agents',
      'Real-time executive BI dashboards and automated telemetry pipelines',
    ],
  },
  {
    number: '04',
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy & Digital Transformation',
    category: 'Strategy & Advisory',
    icon: TrendingUp,
    image: '/images/services/it-consultancy.webp',
    imagePosition: '30% center',
    copy: 'Technology is a liability without strategy. We partner closely with executive teams to audit existing tech stacks, craft technological roadmaps, and oversee digital overhauls that directly accelerate business revenue.',
    focusAreas: [
      'Technology Audits',
      'IT Roadmapping',
      'Systems Architecture Design',
      'Cybersecurity Assessments',
    ],
    deliverables: [
      'End-to-end IT architecture and technical debt assessment',
      'Bank-grade cybersecurity auditing & data compliance reviews',
      'Vendor evaluation, software procurement & team capability roadmaps',
      'Change management support and executive digital advisory',
    ],
  },
  {
    number: '05',
    id: 'research-development',
    title: 'Research & Development',
    category: 'Applied Research',
    icon: FlaskConical,
    image: '/images/services/research-development.webp',
    imagePosition: 'center 35%',
    copy: 'Research sits at the core of everything we build. We study African markets, infrastructure realities and user behaviour, then prototype and test new technologies before they reach production, so the solutions we deliver are proven for the context they will run in.',
    focusAreas: [
      'Applied Technology Research',
      'Prototyping & Proof of Concept',
      'Feasibility Studies',
      'Innovation Partnerships',
    ],
    deliverables: [
      'Market, user and infrastructure research for African operating contexts',
      'Rapid prototypes and proof-of-concept builds to validate ideas early',
      'Technical feasibility reports and emerging-technology evaluations',
      'Joint research programmes with institutions, startups and enterprises',
    ],
  },
  {
    number: '06',
    id: 'software-solutions',
    title: 'Software Solutions',
    category: 'Ready-to-Deploy Products',
    icon: Boxes,
    image: '/images/services/software-solutions.webp',
    imagePosition: 'center center',
    copy: 'Not every challenge needs to be built from scratch. We provide ready-to-deploy software solutions that we configure, customise and support for your organisation, so you get proven systems running quickly with a local team behind them.',
    focusAreas: [
      'Business Management Systems',
      'SaaS Platforms',
      'Solution Customisation',
      'Implementation & Support',
    ],
    deliverables: [
      'Configured business systems for finance, inventory, HR and operations',
      'Cloud-hosted SaaS platforms with secure user and role management',
      'Integration with your existing tools, payments and data sources',
      'Onboarding, staff training and ongoing maintenance support',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-surface-1 text-ink">
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-surface-1 border-b border-line">
        {/* Brand cover motif, faint, behind the page title */}
        <BrandStripes className="absolute -top-10 -right-48 h-[calc(100%+80px)] w-[620px] hidden lg:block" opacity={0.12} />
        <div className="relative container-site">
          <div className="max-w-3xl">
            <span className="accent-line" aria-hidden="true" />
            <h1 className="text-h1 mb-4">
              Our Technical <span className="text-action-primary">Capabilities</span>
            </h1>
            <p className="text-lg sm:text-xl text-ink-muted leading-relaxed font-medium">
              Fully licensed and structured to deliver end-to-end digital transformation. We build innovative solutions through research for Africa and the world.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE CORE SERVICE CARDS ── */}
      <section className="py-16 md:py-24 bg-surface-0 border-b border-line">
        <div className="container-site space-y-20">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                data-reveal
                className="bg-surface-1 border border-line rounded-card overflow-hidden transition-shadow scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  
                  {/* Visual Image Column */}
                  <div
                    className={`relative min-h-[260px] sm:min-h-[320px] lg:min-h-full lg:col-span-5 bg-surface-2 ${ isEven ? 'lg:order-2' : '' }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 480px, 100vw"
                      className="object-cover"
                      style={{ objectPosition: service.imagePosition }}
                    />
                    <div className="tv-photo-fade" aria-hidden="true" />
                  </div>

                  {/* Content Column */}
                  <div
                    className={`p-8 sm:p-10 lg:p-12 lg:col-span-7 flex flex-col justify-between ${ isEven ? 'lg:order-1' : '' }`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-button ${tone(index).tile} flex items-center justify-center shrink-0`}>
                          <Icon strokeWidth={1.75} size={24} />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-[0.08em] text-action-primary block">
                            {service.category}
                          </span>
                          <span className="text-sm text-ink-muted">
                            Core Discipline {service.number} / {String(coreServices.length).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-h2">
                        {service.title}
                      </h2>

                      <p className="text-ink-muted text-base leading-relaxed">
                        {service.copy}
                      </p>

                      {/* Key Focus Areas (From Spec) */}
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-ink mb-3">
                          Key Focus Areas:
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.focusAreas.map((focus) => (
                            <div
                              key={focus}
                              className="p-3 rounded-button bg-surface-0 border border-line text-xs font-semibold text-ink flex items-center gap-2.5"
                            >
                              <CheckCircle2 strokeWidth={1.75} size={15} className="text-brand-green-deep shrink-0" />
                              <span>{focus}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables Bullet List */}
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-ink mb-2.5">
                          What We Deliver:
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-base text-ink-muted">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-action-primary mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-8 mt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-sm text-ink-muted">
                        Production-grade delivery with SLA guarantees
                      </span>
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-button bg-action-primary text-white font-bold text-xs hover:bg-action-hover transition-colors"
                      >
                        <span>Request Architecture Scope</span>
                        <ArrowRight strokeWidth={1.75} size={14} />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FINAL SERVICES CTA ── */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-brand-midnight text-center">
        {/* The network render, under a Deep Navy veil so white text stays at AA contrast */}
        <Image
          src="/images/cloud-network.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/85 via-brand-midnight/80 to-brand-midnight/95" aria-hidden="true" />
        <div data-reveal className="relative container-site max-w-4xl">
          <span className="accent-line mx-auto" aria-hidden="true" />
          <h2 className="text-h2 md:text-fs-h1 text-white mb-4">
            Ready to modernize your infrastructure?
          </h2>
          <p className="text-white/85 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Schedule a technical discovery session with our engineering leads to discuss your roadmap, timeline, and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-button bg-action-primary text-white font-bold text-sm hover:bg-action-hover transition-colors"
            >
              <span>Book a Consultation</span>
              <ArrowRight strokeWidth={1.75} size={16} />
            </Link>
            <a
              href="https://wa.me/233591507448?text=Hello%20Techverge%20Africa!%20I%20would%20like%20to%20consult%20on%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-button bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 transition-colors duration-150"
            >
              <span>WhatsApp Direct Line</span>
              <ArrowUpRight strokeWidth={1.75} size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
